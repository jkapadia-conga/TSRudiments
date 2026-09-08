# TSRudiments

TypeScript + Playwright port of a **scoped subset** of `sfdcessentials` (Java + RestAssured),
covering only the classes/methods actually consumed by the Revenue Admin UI repo (per the
attached usage snapshot). This is NOT a full port of the Java rudiments library - see "Scope"
below.

## Scope

| Java class | TS class | Methods migrated |
|---|---|---|
| `RLPAdminHelper` | `RLPAdminHelper` | ~110 methods: full CRUD for PriceList, Product, Category, StoreFront, OptionGroup, Attribute, DisplaySettings/ConfigUserPreferenceSettings, Flow, VisibilityRule, View, ConstraintRule, LookUpFieldSettings, PriceRule, FeatureSet, FieldExpression, Waterfall, AssetSettings, InstalledProductsSettings, DealGuidanceDimensions (canonical DealGuidance group), IncentiveAdminPricePrograms (canonical IncentiveAdmin group - top-level only) |
| `RLPRestUtils` | `RLPRestUtils` | `generateAccessToken`, `getData`, `postData`, `putData`, `putDataWithoutBody`, `patchData`, `deleteData`, `deleteDataWithPayload` |
| `RLPUserManagementHelper` | `RLPUserManagementHelper` | `getUserSearch`, `getAllUserSearch` |
| `RLPQuoteHelper` | `RLPQuoteHelper` | `createQuote` (+ list overload) |
| `RLPCartHelper` | `RLPCartHelper` | `launchCart`, `priceCart` |
| `RLPConfigHelper` | `RLPConfigHelper` | `publishBulkProducts`, `publishProduct`, `getJobStatusOfPublishProducts` (+ `deletePublishProductsWithException`, an internal dependency of `RLPAdminHelper.deleteProduct*`) |
| `RLPDataManagerHelper` | `RLPDataManagerHelper` | `checkRecordsInOpenSearch` (+ id-based overload) |
| `RLPDataHelper` | `RLPDataHelper` | `searchQuery` |
| `admin.pojo.Product` | `admin/pojo/Product` | `getId`, `getName`, `getEffectiveDate` (+ full field set used by the migrated Product CRUD methods) |
| `ApplicationException` | `ApplicationException` | Ported as a custom `Error` subclass |
| `RLPURLGenerator` | `RLPURLGenerator` | Trimmed to only the URL fields consumed by the classes above |

Out of scope (deliberately not ported): the rest of `RLPAdminHelper`'s ~1,100 additional
overloads/variants (e.g. `*WithException` variants, `PriceListItem`/`PriceListCategory`/
`ProductCategory`/`ProductOptionGroup`/`ProductOptionComponent` sub-resources, the
IncentiveAdmin `Rebates`/`Rules`/`RuleEntries` sub-families), and every other domain in
`sfdcessentials` (catalog, usermanagement beyond the 2 methods above, data/datamanager beyond
the 2 methods above, abo, platformUI, apttus tree, etc.).

## Java overloads -> unique TypeScript method names

TypeScript does not support method overloading, so every Java method that had multiple
overloads (same name, different signature) was split into distinctly-named methods. The
general naming convention used:

- Base single-`Map` overload keeps the original Java name (e.g. `createPriceList`).
- List-of-maps ("bulk") overload -> `...Bulk` (e.g. `createPriceListBulk`).
- Same shape but with a separate header/config map argument -> `...WithHeaders` (e.g.
  `createPriceListWithHeaders`).
- Bulk + separate header map -> `...BulkWithHeaders`.
- Overload taking a typed POJO instead of a map -> `...ByObject`/`...ByObjects` (e.g.
  `updateProductByObject`, `updateCategoryByObjects`).
- Overload taking an identifier/name as a path parameter -> `...ById`/`...ByName` (e.g.
  `deleteConstraintRuleById`, `getFlowByName`).

Renamed methods of note:
- `generateRLCAccessToken` was already renamed to `generateAccessToken` in the current Java
  source (the old name no longer exists there) - ported directly as `generateAccessToken`.

## Payload-building via ported pojo factory methods

The Java original builds request payloads via bespoke per-object `createXPojo(testData)` /
`updateXPojo(testData)` factory methods (Jackson/Gson field mapping + type coercion, e.g.
string `"true"`/`"false"` -> boolean). These factory methods have been fully ported to
TypeScript (all Java fields + all factory methods, see `src/admin/pojo/*.ts`), and
`RLPAdminHelper` calls them directly instead of a flat `JSON.stringify(testData)`.

Since TypeScript does not support method overloading, every pojo factory method that had
multiple Java overloads (same name, different signature) was split into distinctly-named
static methods, following the same `...Bulk`/`...ById` conventions described above, e.g.:
- `Product.createProductPOJO(testData)` (single) vs `Product.createProductPOJOBulk(testDataList)` (list)
- `PriceList.createPricelistPOJO(...)` vs `PriceList.createPricelistPOJOBulk(...)` (list) vs
  `PriceList.updatePriceListPOJO(...)` (single update) vs `PriceList.updatePricelistPOJOBulk(...)`
  (list update - note the Java originals already differed only by the case of "List"/"list",
  which is preserved here since TypeScript is also case-sensitive)
- `Category.createCategoriesPOJO(testData)` (single) vs `Category.createCategoriesPOJOBulk(testDataList)` (list)
- `Attribute.createAttributeTypePicklistPojo`, `createMultipleAttributePojo`,
  `createMultipleAttributeTypePicklistPojo`, `createAllDataTypeAttributePojo`,
  `createSpecificNumberOfAttributePojo` - each a uniquely-named former overload/sibling method
- `View.createViewPOJO(testData)` vs `View.createViewPOJOWithColumns(testData, left, mid, right)`
- `PriceRule.createPriceRulePojo(testData)` vs `PriceRule.createMultiplePriceRulePojo(testDataList)`
- `ConstraintRule.createConstraintRulePojo`, `createSpecifiedNumberOfConstraintRulePojo`,
  `createMultipleConstraintRulePojo`, `updateConstraintRulePojo`

Nested reference types (`IdNameContainer`, `CurrencyValueContainer`, `PickListValue`) were
ported to `src/generic/pojo/` since they're used as field types across nearly every admin pojo.

Simplifications kept for out-of-scope dependencies:
- `Waterfall.PricePoints` and `View.Filter`/`View.Sort` reference Java pojo classes
  (`PricePoints`, `Filter`, `Sort`) that are outside this migration's scope; they're kept as
  loosely-typed passthrough shapes (`unknown[]` / a local `ViewColumn` interface for
  Left/Middle/RightColumns) rather than fully-modeled classes.
- `Category.updateCategoryPOJO` is a simplified stand-in for the Java `UpdateCategory` class
  (a separate pojo not covered by the original attached scope), reusing `Category`'s own field
  mapping for the update payload.


## Structure

```
src/
  customException/ApplicationException.ts
  utils/{RestResponse,RLPRestUtils,RLPURLGenerator}.ts
  admin/RLPAdminHelper.ts
  admin/pojo/*.ts          (POJOs referenced by the migrated admin methods only)
  usermanagement/RLPUserManagementHelper.ts
  quote/RLPQuoteHelper.ts
  cart/RLPCartHelper.ts
  config/RLPConfigHelper.ts
  datamanager/RLPDataManagerHelper.ts
  data/RLPDataHelper.ts
tests/smoke.spec.ts
```

## Usage

```ts
import { request } from '@playwright/test';
import { RLPRestUtils, RLPAdminHelper } from 'tsrudiments';

const apiRequest = await request.newContext();
const restUtils = new RLPRestUtils(apiRequest);
await restUtils.generateAccessToken({ tokenURL, clientId, clientSecret });

const rlpAdminHelper = new RLPAdminHelper(tenantURL, restUtils);
const response = await rlpAdminHelper.createProduct({ Name: 'My Product', ... });
```

## Commands

```
npm install
npx tsc --noEmit   # type-check
npm test           # playwright test

npm run build
npm pack
Install the jar/zip with below command on app service repo.
npm install conga-nextui-essentials-1.0.0.tgz
```

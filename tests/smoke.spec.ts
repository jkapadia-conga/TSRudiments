import { test, expect } from '@playwright/test';
import { request } from '@playwright/test';
import { RLPRestUtils } from '../src/utils/RLPRestUtils';
import { RLPAdminHelper } from '../src/admin/RLPAdminHelper';
import { RLPUserManagementHelper } from '../src/usermanagement/RLPUserManagementHelper';
import { RLPQuoteHelper } from '../src/quote/RLPQuoteHelper';
import { RLPCartHelper } from '../src/cart/RLPCartHelper';
import { RLPConfigHelper } from '../src/config/RLPConfigHelper';
import { RLPDataManagerHelper } from '../src/datamanager/RLPDataManagerHelper';
import { RLPDataHelper } from '../src/data/RLPDataHelper';

/**
 * Smoke test: confirms every migrated helper can be constructed and wired together, without
 * making a live network call (no tenant credentials are configured in this repo).
 */
test('scoped rudiments helpers construct without error', async () => {
  const apiRequest = await request.newContext();
  const restUtils = new RLPRestUtils(apiRequest);

  const tenantURL = 'https://example-tenant.invalid';
  const rlpAdminHelper = new RLPAdminHelper(tenantURL, restUtils);
  const rlpUserManagementHelper = new RLPUserManagementHelper(tenantURL, restUtils);
  const rlpQuoteHelper = new RLPQuoteHelper(tenantURL, restUtils);
  const rlpCartHelper = new RLPCartHelper(tenantURL, restUtils);
  const rlpConfigHelper = new RLPConfigHelper(tenantURL, restUtils);
  const rlpDataManagerHelper = new RLPDataManagerHelper(tenantURL, restUtils);
  const rlpDataHelper = new RLPDataHelper(tenantURL, restUtils);

  expect(rlpAdminHelper).toBeTruthy();
  expect(rlpUserManagementHelper).toBeTruthy();
  expect(rlpQuoteHelper).toBeTruthy();
  expect(rlpCartHelper).toBeTruthy();
  expect(rlpConfigHelper).toBeTruthy();
  expect(rlpDataManagerHelper).toBeTruthy();
  expect(rlpDataHelper).toBeTruthy();

  await apiRequest.dispose();
});

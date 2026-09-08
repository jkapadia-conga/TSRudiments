/**
 * Lightweight base for the admin-domain POJOs migrated here. Java's originals have 20-100+
 * Jackson/Gson-annotated fields per class; this scoped port keeps only the fields the migrated
 * RLPAdminHelper methods actually read (mainly Id / nested-object chains for URL construction)
 * while still allowing any additional API fields to flow through via the index signature so
 * JSON.stringify(...) round-trips whatever a caller sets on the object.
 */
export class AdminPojoBase {
  Id?: string;
  [key: string]: unknown;

  getId(): string | undefined {
    return this.Id;
  }
}

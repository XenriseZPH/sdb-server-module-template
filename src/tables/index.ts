/*
|--------------------------------------------------------------------------
| Tables
|--------------------------------------------------------------------------
|
| This file aggregates all table definitions for the SpacetimeDB module.
| Import individual table files and add them to the tables array to
| register them with the schema.
|
| Define tables in separate files like:
| ├── src/tables/sample.ts
| ├── src/tables/sample2.ts
| ├── src/tables/sample3.ts
|
| Then import and register them here:
|
| import sample from "./sample";
| import sample2 from "./sample2";
| import sample3 from "./sample3";
|
| const tables = [sample, sample2, sample3];
|
*/

import { schema } from "spacetimedb/server";

import person from "./person";

const tables = [person];

export default schema(tables);

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
| ├── src/tables/person.ts
| ├── src/tables/user.ts
| ├── src/tables/message.ts
|
| Then import and register them here:
|
| import person from "./person";
| import user from "./user";
| import message from "./message";
|
| const tables = [person, user, message];
|
*/

import { schema } from "spacetimedb/server";

import person from "./person";

const tables = [person];

export default schema(tables);

/*
|--------------------------------------------------------------------------
| Row Level Security (RLS)
|--------------------------------------------------------------------------
|
| This file exports all row-level security policies for the SpacetimeDB
| module. RLS policies control which rows users can see and modify.
|
| Define RLS policies in separate files like:
| ├── src/rls/person.ts
| ├── src/rls/private_messages.ts
| ├── src/rls/user_data.ts
|
| Then export them here:
|
| export * from "./person";
| export * from "./private_messages";
| export * from "./user_data";
|
*/

export * from "./person";

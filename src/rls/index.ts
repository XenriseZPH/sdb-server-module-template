/*
|--------------------------------------------------------------------------
| Row Level Security (RLS)
|--------------------------------------------------------------------------
|
| This file exports all row-level security policies for the SpacetimeDB
| module. RLS policies control which rows users can see and modify.
|
| Define RLS policies in separate files like:
| ├── src/rls/sample.ts
| ├── src/rls/sample2.ts
| ├── src/rls/sample3.ts
|
| Then export them here:
|
| export * from "./sample";
| export * from "./sample2";
| export * from "./sample3";
|
*/

export * from "./person";

# SpacetimeDB Server Module

A TypeScript boilerplate for SpacetimeDB server modules with organized structure for tables, reducers, and row-level security policies.

## Project Structure

```
src/
├── tables/           # Database table definitions
│   ├── index.ts      # Table aggregation and schema export
│   └── person.ts     # Example person table
├── reducers/         # Business logic and state mutations
│   ├── index.ts      # Reducer exports
│   └── person.ts     # Example person reducers
├── rls/              # Row Level Security policies
│   ├── index.ts      # RLS policy exports
│   └── person.ts     # Example person RLS policies
└── index.ts            # Main module entry point
```

## Getting Started

1. **Install dependencies**

   ```bash
   yarn install
   ```

2. **Build the module**

   ```bash
   yarn build
   ```

3. **Publish to SpacetimeDB**
   ```bash
   spacetime publish --server local --project-path . <database-name>
   ```

## Development

### Code Generation CLI

Use the built-in CLI to quickly scaffold new components:

```bash
# Generate a new table
node sdb make:table user
# Creates src/tables/user.ts with boilerplate table definition

# Generate reducers for a table
node sdb make:reducer user
# Creates src/reducers/user.ts with CRUD reducer functions

# Generate RLS policies for a table
node sdb make:rls user
# Creates src/rls/user.ts with basic RLS policy templates
```

The CLI automatically:

- Creates files with proper naming conventions
- Adds boilerplate code with TypeScript types
- Updates index files to export new components
- Follows project structure conventions

### Manual Development

#### Adding Tables

1. Create a new table file in `src/tables/`
2. Import and add it to the tables array in `src/tables/index.ts`

#### Adding Reducers

1. Create reducer functions in `src/reducers/`
2. Export them in `src/reducers/index.ts`

#### Adding RLS Policies

1. Define policies in `src/rls/`
2. Export them in `src/rls/index.ts`

## Client Code Generation

Generate TypeScript client bindings for your published module:

```bash
yarn generate
```

The generated client code will include:

- Type-safe table interfaces
- Reducer function bindings
- Subscription helpers
- Connection utilities

## Example Usage

The boilerplate includes a `Person` table with basic CRUD operations and RLS policies. Use it as a reference for building your own tables and reducers.

## Scripts

- `yarn build` - Build the TypeScript module
- `yarn dev` - Watch mode for development
- `yarn sdb make:table <name>` - Generate new table
- `yarn sdb make:reducer <name>` - Generate reducers for table
- `yarn sdb make:rls <name>` - Generate RLS policies for table

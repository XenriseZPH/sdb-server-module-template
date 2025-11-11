import schemas from "@spacetimedb";
import { ReducerCtx } from "spacetimedb/server";

type ReducerContext = ReducerCtx<typeof schemas.schemaType>;

export type { ReducerContext };

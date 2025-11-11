import { t, table } from "spacetimedb/server";

export default table(
  {
    name: "person",
  },
  {
    name: t.string(),
  }
);

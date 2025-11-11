import spacetimedb from "@spacetimedb";
import { t } from "spacetimedb/server";

spacetimedb.reducer("add", { name: t.string() }, (ctx, { name }) => {
  ctx.db.person.insert({ name });
});

spacetimedb.reducer("say_hello", (ctx) => {
  for (const person of ctx.db.person.iter()) {
    console.info(`Hello, ${person.name}!`);
  }
  console.info("Hello, World!");
});

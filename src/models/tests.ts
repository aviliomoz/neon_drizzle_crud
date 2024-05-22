import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const tests = pgTable("tests", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 50 }),
  cod: integer("cod")
});

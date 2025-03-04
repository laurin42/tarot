import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  authId: varchar("auth_id", { length: 255 }).notNull().unique(),
  username: varchar("username", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
  name: varchar("name", { length: 255 }),
  picture: varchar("picture", { length: 255 }),
  authProvider: varchar("auth_provider", { length: 20 }).notNull(),
  goals: text("goals"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type User = typeof usersTable.$inferSelect;
export type NewUser = typeof usersTable.$inferInsert;

export const drawnCardsTable = pgTable("drawn_cards", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
});

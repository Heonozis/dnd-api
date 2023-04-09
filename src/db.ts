import knex from "knex";

const db = knex({
  client: 'pg',
  connection: `${process.env.DATABASE_URL}?ssl=true`
})

export default db

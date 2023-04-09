import knex from "knex";
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.PSQL_HOST,
        port: 5432,
        user: process.env.PSQL_USER,
        password: process.env.PSQL_PASSWORD,
        database: process.env.PSQL_DATABASE
    }
});
export default db;
//# sourceMappingURL=db.js.map
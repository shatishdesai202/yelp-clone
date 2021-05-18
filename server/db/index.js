const { Pool } = require("pg");

const pool = new Pool(); // .env file inside all database config are added

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};

 
/*
const pool = new Pool({
    PGUSER=postgres(username)
    PGHOST=localhost(hostname)
    PGPASSWORD=123456(password)
    PGDATABASE=yelp_clone(database name)
    PGPORT=5432(port)
});
*/
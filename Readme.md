# yelp-clone (Postgres, Express, React, Node)

This Yelp-clone is basically a hotel review system.for front-end side used React and backend-side Used Express Server,And for database used Postgresql.

<h3> this Demo Project mainly focused on how to config PostgreSQL with node and Intermediate stuff are added </h3>

<b>Used Package For Front-end Side</b>

  <li>axios (For API Calling)</li>
  <li>formik (For Handling Forms)</li>
  <br/>
  <hr/>
  <br/>
  <b>Used Package For Backend-end Side</b>
  <li>cors (For Cross-Origin request)</li>
  <li>dotenv (For Creating Environment Variable)</li>
  <li>morgan (For HTTP request logger middleware)</li>
  <li>nodemon (For Monitoring Node server)</li>
  <li>pg (For Postgresql configuration)</li>
  <br/>
  <hr/>
  <br/>
  <b>For styling used bootstrap CDN and For Icon used font-awesome CDN</b>
<br>
  <h3>Feel free to copy bootstrap CDN</h3>
  
    `<link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
    />`
    
<h3>Feel free to copy FontAwesome CDN</h3>

    `<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />`

<h3> how To Config PostgreSQL with node  </h3>

    `
    const { Pool } = require("pg");

    const pool = new Pool({
        PGUSER=postgres(username)
        PGHOST=localhost(hostname)
        PGPASSWORD=******(password)
        PGDATABASE=yelp_clone(database name)
        PGPORT=5432(port)
    });

    module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    }};
    `

<h2>For More Information Kindly visit </h2><a href="https://node-postgres.com/">Node with Postgres</a>

<h2>For More Information About Postgres Query </h2> <a href="https://www.postgresqltutorial.com/postgresql-cheat-sheet/">Postgres Cheat Sheet</a>

<h3>yelp_clone Video</h3>

https://user-images.githubusercontent.com/66472172/118698642-4cb70000-b82e-11eb-9c43-e5b91eef5c71.mp4

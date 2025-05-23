#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
message VARCHAR (255),
username VARCHAR(20),
time_stamp timestamp
) ;

INSERT INTO messages (message, username, time_stamp)
VALUES
   ('Amando', 'Hi there!', current_timestamp),
   ('Charles', 'Hello World!', current_timestamp) ;

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

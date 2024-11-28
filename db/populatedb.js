require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author TEXT,
  text TEXT,
  added DATE
);

INSERT INTO messages (author, text, added) 
VALUES
  ('Eamon', 'Hey', '1999-10-15'),
  ('Justin', 'Sup', '2000-06-29'),
  ('Avery', 'Hawk tuah', '2000-01-26');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_PUBLIC_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

/*
    var express = require('express')
    var app = express()
*/

const pg = require('pg');

var client = new pg.Client({
    user: "hwfqfkgmawvess",
    password: "ef75a216e6429794aa6ccd9f7ea654156770917cb4b0b76a1bb46a21acc882c1",
    database: "da9o6t84ekkaj4",
    port: 5432,
    host: "ec2-52-72-99-110.compute-1.amazonaws.com",
    ssl: {
        rejectUnauthorized: false
    }
}); 
client.connect();


// client.query(`
//     SELECT * FROM full_roster
// `).then(res => {
//     console.log(res.rows)
// }).finally(() => client.end());


client.query(`
    SELECT * FROM full_roster ORDER BY unit_id ASC
`).then(res => {
    console.log(res.rows)
}).finally(() => client.end());
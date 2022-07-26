
import pg from 'pg';

const handler = async (event) => {

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


    let res = await client.query(`
        SELECT * FROM full_roster ORDER BY unit_id ASC;
        `);
        
    return {
        statusCode: 200,
        body: JSON.stringify({ rows: res.rows }),
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };
}
    
    export { handler }
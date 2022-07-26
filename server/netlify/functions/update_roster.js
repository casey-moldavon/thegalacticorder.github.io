
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

    console.log(event.body);

    if (!event.body.sc_name || !event.body.field || !event.body.value) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "missing sc_name or protocol_exam" }),
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        };
    }

    let res = await client.query(`
        UPDATE
            full_roster
        SET
            ${event.body.field} = ${event.body.value == true}
        WHERE
            sc_name = ${event.body.sc_name}
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
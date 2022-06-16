
async function runTestEndpoint() {
    const response = await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/test')
    const data = await response.json()

    alert(JSON.stringify(data.rows));
}

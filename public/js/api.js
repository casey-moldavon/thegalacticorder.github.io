
async function runTestEndpoint() {
    const response = await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/test')
    const data = await response.json()

    let element = document.getElementById('people-placeholder');
    let html = data.rows.map(row => `
        <li><b>${row.name}</b>: ${row.number}</li>
    `).join('');

    element.innerHTML = html;
}

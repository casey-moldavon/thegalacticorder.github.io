
async function runTestEndpoint() {
    const response = await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/test')
    const data = await response.json()

    let element = document.getElementById('people-placeholder');
    let html = data.rows.map(row => `
        <li><b>${row.name}</b>: ${row.number}</li>
    `).join('');

    element.innerHTML = html;
}

async function registerUnit() {
    let sc_name = document.getElementById('unit_name');
    let discord_name = document.getElementById('unit_contact');
    let recruiter = document.getElementById('unit_recruiter');
    let battalion = document.getElementById('unit_battalion');
    let start_date = document.getElementById('unit_start');

    let unit_rank = "Novitiate";
    let promotion_date = start_date;
    let unit_recruits = 0;
    let unit_pay = "0/day";

    let events = 0;
    let patrols = 0;
    let hours = 0;

    let alerts = 0;
    let warnings = 0;

    let turret = 0;
    let ground_assault = 0;
    let escort = 0;
    let inquiry = 0;
    let pilot_co_pilot = 0;
    let mining = 0;
    let salvage = 0;
    let cargo = 0;
    let transit = 0;
    let support = 0;
    let search_rescue = 0;
    let manage_data = 0;
    let research = 0;
    let explore = 0;
    let agronomy = 0;
}

async function fileReport() {

    let battalion = document.getElementById('select_battalion');
    let member = document.getElementById('select_member');


    let events = document.getElementById('unit_events');
    let patrols = document.getElementById('unit_patrols');
    let hours = document.getElementById('unit_hours');

    let alerts = document.getElementById('unit_alerts');
    let warnings = document.getElementById('unit_warning');


    // completed missions
    let turret = document.getElementById('mission_turret');
    let ground_assault = document.getElementById('mission_ground_assault');
    let escort = document.getElementById('mission_escort');
    let inquiry = document.getElementById('mission_inquiry');
    let pilot_co_pilot = document.getElementById('mission_pilot_co_pilot');
    let mining = document.getElementById('mission_mining');
    let salvage = document.getElementById('mission_salvage');
    let cargo = document.getElementById('mission_cargo');
    let transit = document.getElementById('mission_transit');
    let support = document.getElementById('mission_support');
    let search_rescue = document.getElementById('mission_search_rescue');
    let manage_data = document.getElementById('mission_manage_data');
    let research = document.getElementById('mission_research');
    let explore = document.getElementById('mission_explore');
    let agronomy = document.getElementById('mission_agronomy');
}
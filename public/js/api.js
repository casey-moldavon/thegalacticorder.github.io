
// what i need to do...
// write function to fetch sc_name & unit_rank from database and generate cards under each Division of roster
// write function (if statements) to sort (by unit_rank) into different Divisions (collapse) of roster

// if statements will have different card types
// function triggers on page load
// or set to on-click when collapse is viewed

// write functions for each button (Register Unit, File Report, Edit Unit, Approve Reports)


async function generateCards() {
    const response = await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/roster');
    const data = await response.json();

    let novitiatePlaceholder = document.getElementById('novitiate_division_dropdown');
    let sciencePlaceholder = document.getElementById('science_division_dropdown');
    let medicalPlaceholder = document.getElementById('medical_division_dropdown');
    let engineerPlaceholder = document.getElementById('engineer_division_dropdown');
    let combatPlaceholder = document.getElementById('combat_division_dropdown');
    let leadershipPlaceholder = document.getElementById('leadership_division_dropdown');

    // data is the array of objects

    var novitiates = data.rows.filter(units => units.unit_role == "Novitiate");

    var ensignTroopers = data.rows.filter(units => units.unit_role == "Ensign Trooper");
    var ensignOperators = data.rows.filter(units => units.unit_role == "Ensign Operator");
    var ensignMedics = data.rows.filter(units => units.unit_role == "Ensign Medic");
    var fieldResearchers = data.rows.filter(units => units.unit_role == "Field Researcher");

    var lieutenantTroopers = data.rows.filter(units => units.unit_role == "Lieutenant Trooper");
    var shockTroopers = data.rows.filter(units => units.unit_role == "Shock Trooper");
    var outriders = data.rows.filter(units => units.unit_role == "Outrider");
    var lieutenantEngineers = data.rows.filter(units => units.unit_role == "Lieutenant Engineer");
    var lieutenantCorpsman = data.rows.filter(units => units.unit_role == "Lieutenant Corpsman");
    var laboratoryTechs = data.rows.filter(units => units.unit_role == "Laboratory Tech");

    var trooperCommanders = data.rows.filter(units => units.unit_role == "Trooper Commander");
    var engineerCommanders = data.rows.filter(units => units.unit_role == "Engineer Commander");
    var medicalCommanders = data.rows.filter(units => units.unit_role == "Medical Commander");
    var scienceOfficers = data.rows.filter(units => units.unit_role == "Science Officer");

    var firstOfficers = data.rows.filter(units => units.unit_role == "1st Officer");
    var eliteGuards = data.rows.filter(units => units.unit_role == "Elite Guard");
    var captains = data.rows.filter(units => units.unit_role == "Captain");
    var admirals = data.rows.filter(units => units.unit_role == "Admiral");


    var novitiateCards = novitiates.map(
        row =>
        `
        <div id="novitiate_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/badges/0-novitiate.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var ensignTrooperCards = ensignTroopers.map(
        row =>
        `
        <div id="combat_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_1_trooper.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var ensignOperatorCards = ensignOperators.map(
        row =>
        `
        <div id="engineer_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_1_engineer.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var ensignMedicCards = ensignMedics.map(
        row =>
        `
        <div id="medical_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_1_medic.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var fieldResearcherCards = fieldResearchers.map(
        row =>
        `
        <div id="science_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_1_science.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var lieutenantTrooperCards = lieutenantTroopers.map(
        row =>
        `
        <div id="combat_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_2_trooper.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var shockTrooperCards = shockTroopers.map(
        row =>
        `
        <div id="combat_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_2_trooper.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var outriderCards = outriders.map(
        row =>
        `
        <div id="combat_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_2_outrider.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var lieutenantEngineerCards = lieutenantEngineers.map(
        row =>
        `
        <div id="engineer_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_2_engineer.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var lieutenantCorpsmanCards = lieutenantCorpsman.map(
        row =>
        `
        <div id="medical_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_2_medic.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var laboratoryTechCards = laboratoryTechs.map(
        row =>
        `
        <div id="science_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_2_science.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var trooperCommanderCards = trooperCommanders.map(
        row =>
        `
        <div id="combat_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_3_trooper.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var engineerCommanderCards = engineerCommanders.map(
        row =>
        `
        <div id="engineer_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_3_engineer.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var medicalCommanderCards = medicalCommanders.map(
        row =>
        `
        <div id="medical_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_3_medic.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var scienceOfficerCards = scienceOfficers.map(
        row =>
        `
        <div id="science_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_3_science.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var firstOfficerCards = firstOfficers.map(
        row =>
        `
        <div id="leadership_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_4_elite.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var eliteGuardCards = eliteGuards.map(
        row =>
        `
        <div id="leadership_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/emblems/emblem_3_1st_officer.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var captainCards = captains.map(
        row =>
        `
        <div id="leadership_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/badges/4-captain.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    var admiralCards = admirals.map(
        row =>
        `
        <div id="leadership_card" class="card text-center" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/badges/5-admiral.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>
    `).join('');

    novitiatePlaceholder.innerHTML = novitiateCards;
    combatPlaceholder.innerHTML = ensignTrooperCards + lieutenantTrooperCards + shockTrooperCards + outriderCards + trooperCommanderCards;
    engineerPlaceholder.innerHTML = ensignOperatorCards + lieutenantEngineerCards + engineerCommanderCards;
    medicalPlaceholder.innerHTML = ensignMedicCards +lieutenantCorpsmanCards + medicalCommanderCards;
    sciencePlaceholder.innerHTML = fieldResearcherCards +laboratoryTechCards + scienceOfficerCards;
    leadershipPlaceholder.innerHTML = firstOfficerCards + eliteGuardCards + captainCards + admiralCards;

};


function registerUnit() {
    let sc_name = document.getElementById('unit_name');
    let discord_name = document.getElementById('unit_contact');
    let recruiter = document.getElementById('unit_recruiter');
    let battalion = document.getElementById('unit_battalion');
    let start_date = document.getElementById('unit_start');
    // generate unit_id array[-1] + 1 (?)

    let unit_role = "Novitiate";
    let unit_rank = "Rank 0";
    let promotion_date = start_date;
    let unit_recruits = 0;
    let pay_bonus = 0;

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

    let protocol_exam = false;
    let medical_exam = false;
    let g_tactical_exam = false;
    let s_tactical_exam = false;
    let officer_exam = false;

    let active_salary = true;
    let leadership_commendation = false;
    let current_ppv = 0;
    let past_ppv = 0;

    let achieved_trooper2 = false;
    let achieved_trooper3 = false;
    let achieved_engineer2 = false;
    let achieved_engineer3 = false;
    let achieved_medical2 = false;
    let achieved_medical3 = false;
    let achieved_science2 = false;
    let achieved_science3 = false;
}

async function fileReport() {

    let battalion = document.getElementById('select_battalion');
    // += battalion # added to current num
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
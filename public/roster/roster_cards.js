async function generateCards() {
    const response = await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/roster');
    const data = await response.json();

    let novitiatePlaceholder = document.getElementById('novitiate_division_dropdown');
    let sciencePlaceholder = document.getElementById('science_division_dropdown');
    let medicalPlaceholder = document.getElementById('medical_division_dropdown');
    let engineerPlaceholder = document.getElementById('engineer_division_dropdown');
    let combatPlaceholder = document.getElementById('combat_division_dropdown');
    let leadershipPlaceholder = document.getElementById('leadership_division_dropdown');

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
    combatPlaceholder.innerHTML = trooperCommanderCards + lieutenantTrooperCards + shockTrooperCards + outriderCards + ensignTrooperCards;
    engineerPlaceholder.innerHTML = engineerCommanderCards + lieutenantEngineerCards + ensignOperatorCards;
    medicalPlaceholder.innerHTML = medicalCommanderCards + lieutenantCorpsmanCards + ensignMedicCards;
    sciencePlaceholder.innerHTML = scienceOfficerCards + laboratoryTechCards + fieldResearcherCards;
    leadershipPlaceholder.innerHTML = admiralCards + captainCards + eliteGuardCards + firstOfficerCards;




    let fullMemberList = document.getElementById('full_member_list_options');

    var allMemberNames = data.rows.map(row =>`<option value="${row.sc_name}"></option>`).join('');

    fullMemberList.innerHTML = allMemberNames;
};


let fullBattalionList = document.getElementById('full_battalion_list_options');

var allBattalions = data.rows.map(row =>`<option value="${row.battalion}"></option>`).join('');

fullBattalionList.innerHTML = allBattalions;


function generateFileReportList(){

    let battalionMemberList = document.getElementById('battalion_member_list_options');
    let selectBattalion = document.getElementById('select_battalion');

    var admiraltyMembers = data.rows.filter(units => units.battalion == "F-01 Hammer A-00")
    var academyMembers = data.rows.filter(units => units.battalion == "F-01 Cr4zy A-01")

    var admiraltyMemberNames = admiraltyMembers.map(row =>`<option value="${row.sc_name}"></option>`).join('');
    var academyMemberNames = academyMembers.map(row =>`<option value="${row.sc_name}"></option>`).join('');


    if (selectBattalion == "F-01 Hammer A-00"){battalionMemberList.innerHTML = admiraltyMemberNames;}
    else if (selectBattalion == "F-01 Cr4zy A-01"){battalionMemberList.innerHTML = academyMemberNames;}
}
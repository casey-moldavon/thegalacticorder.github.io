async function generateCardData() {
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
        <div id="leadership_card" type="button" class="card text-center" data-bs-toggle="collapse" data-bs-target="#unit_id_${row.sc_name}" aria-expanded="false" aria-controls="unit_id_${row.sc_name}" style="width: 9rem;">
        <div>
        <img id="card_image" src="../../ranks/badges/5-admiral.png" class="card-img-top" alt="...">
        </div>
        <p id="card_text">${row.unit_role}</p>
        <p id="card_name">${row.sc_name}</p>
        </div>

        <div class="collapse fixed-top" id="unit_id_${row.sc_name}">
            <div class="container container-fluid" id="unit_id_container">

            <div id="unit_id_close_button" type="button" data-bs-toggle="collapse" data-bs-target="#unit_id_${row.sc_name}" aria-expanded="false" aria-controls="unit_id_${row.sc_name}">
                <i id="unit_id_close_button_icon" class="fa-solid fa-square-xmark"></i>
            </div>

            <div class="container">
                <img id="unit_id_image" class="img-fluid" src="../../ranks/badges/5-admiral.png" alt="Commanded Image">
            </div>

            <div id="leadership_name_container" class="container">
                <p><a id="leadership_division_text_large">${row.sc_name}</a></p>
                <p><a id="leadership_note">${row.discord_name}</a></p>
                <p><a id="leadership_note">Rank ${row.unit_rank} : ${row.unit_role}</a></p>
            </div>


                <div class="row justify-content-center text-center">
                    <div class="col">
                        <div id="stored_events">
                        <p>Events</p>
                        <p class="text-center" id="total_events">${row.events}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_patrols">
                        <p>Patrols</p>
                        <p class="text-center" id="total_patrols">${row.patrols}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_hours">
                        <p>Hours</p>
                        <p class="text-center" id="total_hours">${row.hours}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_alerts">
                        <p>Alerts</p>
                        <p class="text-center" id="total_alerts">${row.alerts}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_warnings">
                        <p>Warnings</p>
                        <p class="text-center" id="total_warnings">${row.warnings}</p>
                        </div>
                    </div>



                    <div class="col">
                        <div type="button" id="stored_turret">
                        <p>Turret</p>
                        <p class="text-center" id="total_turret">${row.turret}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_ground_assault">
                        <p>Ground Assault</p>
                        <p class="text-center" id="total_ground_assault">${row.ground_assault}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_escort">
                        <p>Escort</p>
                        <p class="text-center" id="total_escort">${row.escort}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_inquiry">
                        <p>Inquiry</p>
                        <p class="text-center" id="total_inquiry">${row.inquiry}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_pilot_co_pilot">
                        <p>Pilot / Co-Pilot</p>
                        <p class="text-center" id="total_pilot_co_pilot">${row.pilot_co_pilot}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_mining">
                        <p>Mining</p>
                        <p class="text-center" id="total_mining">${row.mining}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_salvage">
                        <p>Salvage</p>
                        <p class="text-center" id="total_salvage">${row.salvage}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_cargo">
                        <p>Cargo</p>
                        <p class="text-center" id="total_cargo">${row.cargo}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_transit">
                        <p>Transit</p>
                        <p class="text-center" id="total_transit">${row.transit}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_support">
                        <p>Support</p>
                        <p class="text-center" id="total_support">${row.support}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_search_rescue">
                        <p>Search & Rescue</p>
                        <p class="text-center" id="total_search_rescue">${row.search_rescue}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_manage_data">
                        <p>Manage Data</p>
                        <p class="text-center" id="total_manage_data">${row.manage_data}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_research">
                        <p>Research</p>
                        <p class="text-center" id="total_research">${row.research}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_explore">
                        <p>Explore</p>
                        <p class="text-center" id="total_explore">${row.explore}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div type="button" id="stored_agronomy">
                        <p>Agronomy</p>
                        <p class="text-center" id="total_agronomy">${row.agronomy}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `).join('');

    novitiatePlaceholder.innerHTML = novitiateCards;
    combatPlaceholder.innerHTML = trooperCommanderCards + lieutenantTrooperCards + shockTrooperCards + outriderCards + ensignTrooperCards;
    engineerPlaceholder.innerHTML = engineerCommanderCards + lieutenantEngineerCards + ensignOperatorCards;
    medicalPlaceholder.innerHTML = medicalCommanderCards + lieutenantCorpsmanCards + ensignMedicCards;
    sciencePlaceholder.innerHTML = scienceOfficerCards + laboratoryTechCards + fieldResearcherCards;
    leadershipPlaceholder.innerHTML = admiralCards + captainCards + eliteGuardCards + firstOfficerCards;


    // this function continues on roster_buttons.js
    generateButtonData(data);
};

function monthDiff(oldYear, currentYear, oldMonth, currentMonth) {
    var months;
    months = (parseInt(currentYear) - parseInt(oldYear)) * 12;
    months -= parseInt(oldMonth);
    months += parseInt(currentMonth);
    return months <= 0 ? 0 : months;
}

function unitTotalPay(role, veteranBonus) {

    if (role == "Novitiate") {return 0}
    else if (role == "Ensign Trooper") {return 100 + ((100 / 10) * veteranBonus)}
    else if (role == "Ensign Operator") {return 100 + ((100 / 10) * veteranBonus)}
    else if (role == "Ensign Medic") {return 100 + ((100 / 10) * veteranBonus)}
    else if (role == "Field Researcher") {return 100 + ((100 / 10) * veteranBonus)}

    else if (role == "Outrider") {return 175 + ((175 / 10) * veteranBonus)}

    else if (role == "Lieutenant Trooper") {return 250 + ((250 / 10) * veteranBonus)}
    else if (role == "Shock Trooper") {return 250 + ((250 / 10) * veteranBonus)}
    else if (role == "Lieutenant Engineer") {return 250 + ((250 / 10) * veteranBonus)}
    else if (role == "Lieutenant Corpsman") {return 250 + ((250 / 10) * veteranBonus)}
    else if (role == "Laboratory Tech") {return 250 + ((250 / 10) * veteranBonus)}

    else if (role == "Trooper Commander") {return 500 + ((500 / 10) * veteranBonus)}
    else if (role == "Engineer Commander") {return 500 + ((500 / 10) * veteranBonus)}
    else if (role == "Medical Commander") {return 500 + ((500 / 10) * veteranBonus)}
    else if (role == "Science Officer") {return 500 + ((500 / 10) * veteranBonus)}

    else if (role == "1st Officer") {return 750 + ((750 / 10) * veteranBonus)}
    else if (role == "Elite Guard") {return 1500 + ((1500 / 10) * veteranBonus)}
    else return 0
}

function properDateDisplay(unitDate) {
    let day = unitDate.slice(8,10);
    let month = unitDate.slice(5,7);
    let year = unitDate.slice(0,4);

    return month + "-" + day + "-" + year;
}

function examPass(boolean) {
    if (boolean == true) {return `<a id="complete">Pass</a>`}
    else return "No Pass"
}

function leadershipCommendation(boolean) {
    if (boolean == true) {return `<i class="fa-solid fa-medal" id="leadership_commendation_symbol"></i>`}
    else return ``
}

function withheldSalary(boolean) {
    if (boolean == false) {return `<i class="fa-solid fa-hand-holding-dollar" id="withheld_salary_symbol"></i>`}
    else return ``
}

function indicateDischarged(battalion) {
    if (battalion == "None") {return `<i class="fa-solid fa-door-open" id="battalion_discharged_symbol"></i>`}
    else return ``
}



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



    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;



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
            <div class="container container-fluid" id="leadership_unit_id_container">

                <div id="unit_id_close_button" type="button" data-bs-toggle="collapse" data-bs-target="#unit_id_${row.sc_name}" aria-expanded="false" aria-controls="unit_id_${row.sc_name}">
                    <i id="unit_id_close_button_icon" class="fa-solid fa-square-xmark"></i>
                </div>

                <div id="leadership_name_container" class="container text-start">

                <img id="leadership_unit_id_image" class="img-fluid" src="../../ranks/badges/5-admiral.png" alt="Commanded Image">

                    <p><a id="leadership_division_text_large">${row.sc_name}</a></p>
                    <p><a id="novitiate_note">${row.discord_name}</a></p>
                    <p><a id="leadership_note">Rank ${row.unit_rank} : ${row.unit_role}</a></p>
                    <p><a id="novitiate_note">${row.battalion}</a></p>
                </div>


                <div id="leadership_data_container" class="container container-fluid">
                    <div id="unit_data_container" class="container">
                        <div class="row">

                            <div class="col">
                                <div id="stored_start_date">
                                <p>Start Date</p>
                                <p class="text-center" id="data_start_date">${properDateDisplay(row.start_date)}</p>
                                </div>
                            </div>

                            <div class="col">
                                <div id="stored_veteran_bonus">
                                <p>Veteran Bonus</p>
                                <p class="text-center" id="data_veteran_bonus">+${row.veteran_bonus * 10} %</p>
                                </div>
                            </div>

                        </div>
                        <div class="row">

                            <div class="col">
                                <div id="stored_promotion_date">
                                <p>Last Date Promoted</p>
                                <p class="text-center" id="data_promotion_date">${properDateDisplay(row.promotion_date)}</p>
                                </div>
                            </div>

                            <div class="col">
                                <div id="stored_daily_pay">
                                <p>Daily Salary</p>
                                <p class="text-center" id="data_daily_pay">${unitTotalPay(row.unit_role, row.veteran_bonus)}</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>

                <div class="container container-fluid">
                    <div class="row">

                        <button id="unit_id_progression_button" type="button" data-bs-toggle="collapse" data-bs-target="#${row.sc_name}_mission_progression_collapse">
                            Missions
                        </button>

                        <button id="unit_id_progression_button" type="button" data-bs-toggle="collapse" data-bs-target="#${row.sc_name}_history_progression_collapse">
                            History
                        </button>
                        
                        <button id="unit_id_progression_button" class="button" type="button" data-bs-toggle="collapse" data-bs-target="#${row.sc_name}_service_progression_collapse, #${row.sc_name}_warning_progression_collapse">
                            Service
                        </button>
                        
                        <button id="unit_id_progression_button" type="button" data-bs-toggle="collapse" data-bs-target="#${row.sc_name}_exam_progression_collapse">
                            Exams
                        </button>

                    </div>
                </div>
            </div>

            ${leadershipCommendation(row.leadership_commendation)}
            ${withheldSalary(row.active_salary)}
            ${indicateDischarged(row.battalion)}

        </div>









        <div class="collapse fixed-top justify-content-center text-center" id="${row.sc_name}_service_progression_collapse">
            <div class="container container-fluid" id="unit_service_progression_collapse">
                <div class="row">

                    <div class="col">
                        <div id="stored_current_ppv">
                        <p>Current PPVs</p>
                        <p class="text-center" id="data_current_ppv">${row.current_ppv}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_past_ppv">
                        <p>Previous PPVs</p>
                        <p class="text-center" id="data_past_ppv">${row.past_ppv}</p>
                        </div>
                    </div>

                </div>
                <div class="row">

                    <div class="col">
                        <div id="stored_recruits">
                        <p>Recruits</p>
                        <p class="text-center" id="data_recruits">${row.unit_recruits}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_rank_hours">
                        <p>Rank ${row.unit_rank} Hours</p>
                        <p class="text-center" id="data_rank_hours">${row.hours}</p>
                        </div>
                    </div>

                </div>
                <div class="row">

                    <div class="col">
                        <div id="stored_events">
                        <p>Events</p>
                        <p class="text-center" id="data_events">${row.events}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_rank_months">
                        <p>Rank ${row.unit_rank} Months</p>
                        <p class="text-center" id="data_rank_months">${monthDiff(row.promotion_date.slice(0,4), today.slice(0,4), row.promotion_date.slice(5,7), today.slice(5,7))}</p>
                        </div>
                    </div>

                </div>
                <div class="row">

                    <div class="col">
                        <div id="stored_patrols">
                        <p>Patrols</p>
                        <p class="text-center" id="data_patrols">${row.patrols}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_total_months">
                        <p>Total Months</p>
                        <p class="text-center" id="data_total_months">${monthDiff(row.start_date.slice(0,4), today.slice(0,4), row.start_date.slice(5,7), today.slice(5,7))}</p>
                        </div>
                    </div>

                </div>
                <div class="row">

                    <div class="col">
                        <div id="stored_alerts">
                        <p>Alerts</p>
                        <p class="text-center" id="data_alerts">${row.alerts}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_warnings">
                        <p>Warnings</p>
                        <p class="text-center" id="data_warnings">${row.warnings}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div class="collapse fixed-top justify-content-center text-center" id="${row.sc_name}_exam_progression_collapse">
            <div class="container container-fluid" id="unit_exam_progression_collapse">
                <div class="col">

                    <div class="row">
                        <div id="stored_protocol_exam">
                        <p>Protocol Exam</p>
                        <p class="text-center" id="data_protocol_exam">${examPass(row.protocol_exam)}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div id="stored_medical_exam">
                        <p>Medical T-2 Exam</p>
                        <p class="text-center" id="data_medical_exam">${examPass(row.medical_exam)}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div id="stored_g_tactical_exam">
                        <p>G-Tactical Exam</p>
                        <p class="text-center" id="data_g_tactical_exam">${examPass(row.g_tactical_exam)}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div id="stored_s_tactical_exam">
                        <p>S-Tactical Exam</p>
                        <p class="text-center" id="data_s_tactical_exam">${examPass(row.s_tactical_exam)}</p>
                        </div>
                    </div>

                    <div class="row">
                        <div id="stored_officer_exam">
                        <p>Officer Exam</p>
                        <p class="text-center" id="data_officer_exam">${examPass(row.officer_exam)}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div class="collapse fixed-top justify-content-center text-center" id="${row.sc_name}_mission_progression_collapse">
            <div class="container container-fluid" id="unit_mission_progression_collapse">
                <div class="row">

                    <div class="col">
                        <div id="stored_turret">
                        <p>Turret</p>
                        <p class="text-center" id="data_turret">${row.turret}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_ground_assault">
                        <p>Ground Assault</p>
                        <p class="text-center" id="data_ground_assault">${row.ground_assault}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_escort">
                        <p>Escort</p>
                        <p class="text-center" id="data_escort">${row.escort}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_inquiry">
                        <p>Inquiry</p>
                        <p class="text-center" id="data_inquiry">${row.inquiry}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_pilot_co_pilot">
                        <p>Pilot / Co-Pilot</p>
                        <p class="text-center" id="data_pilot_co_pilot">${row.pilot_co_pilot}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_mining">
                        <p>Mining</p>
                        <p class="text-center" id="data_mining">${row.mining}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_salvage">
                        <p>Salvage</p>
                        <p class="text-center" id="data_salvage">${row.salvage}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_cargo">
                        <p>Cargo</p>
                        <p class="text-center" id="data_cargo">${row.cargo}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_transit">
                        <p>Transit</p>
                        <p class="text-center" id="data_transit">${row.transit}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_support">
                        <p>Support</p>
                        <p class="text-center" id="data_support">${row.support}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_search_rescue">
                        <p>Search & Rescue</p>
                        <p class="text-center" id="data_search_rescue">${row.search_rescue}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_manage_data">
                        <p>Manage Data</p>
                        <p class="text-center" id="data_manage_data">${row.manage_data}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_research">
                        <p>Research</p>
                        <p class="text-center" id="data_research">${row.research}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_explore">
                        <p>Explore</p>
                        <p class="text-center" id="data_explore">${row.explore}</p>
                        </div>
                    </div>

                    <div class="col">
                        <div id="stored_agronomy">
                        <p>Agronomy</p>
                        <p class="text-center" id="data_agronomy">${row.agronomy}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="collapse fixed-top justify-content-center text-center" id="${row.sc_name}_history_progression_collapse">
            <div class="container container-fluid" id="unit_history_progression_collapse">
                <p>${row.backstory}</p>
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
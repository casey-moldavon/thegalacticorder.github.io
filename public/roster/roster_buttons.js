const eventsMinusButton = document.getElementById('events_minus');
const eventsPlusButton = document.getElementById('events_plus');
const eventsField = document.getElementById('unit_events');

const patrolsMinusButton = document.getElementById('patrols_minus');
const patrolsPlusButton = document.getElementById('patrols_plus');
const patrolsField = document.getElementById('unit_patrols');

const hoursMinusButton = document.getElementById('hours_minus');
const hoursPlusButton = document.getElementById('hours_plus');
const hoursField = document.getElementById('unit_hours');

const alertsMinusButton = document.getElementById('alerts_minus');
const alertsPlusButton = document.getElementById('alerts_plus');
const alertsField = document.getElementById('unit_alerts');


eventsMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(eventsField.value) || 0;
    eventsField.value = currentValue - 1;
});
eventsPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(eventsField.value) || 0;
    eventsField.value = currentValue + 1;
});

patrolsMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(patrolsField.value) || 0;
    patrolsField.value = currentValue - 1;
});
patrolsPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(patrolsField.value) || 0;
    patrolsField.value = currentValue + 1;
});

hoursMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(hoursField.value) || 0;
    hoursField.value = currentValue - 1;
});
hoursPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(hoursField.value) || 0;
    hoursField.value = currentValue + 1;
});

alertsMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(alertsField.value) || 0;
    alertsField.value = currentValue - 1;
});
alertsPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(alertsField.value) || 0;
    alertsField.value = currentValue + 1;
});


const turretMinusButton = document.getElementById('turret_minus');
const turretPlusButton = document.getElementById('turret_plus');
const turretField = document.getElementById('mission_turret');

const groundAssaultMinusButton = document.getElementById('ground_assault_minus');
const groundAssaultPlusButton = document.getElementById('ground_assault_plus');
const groundAssaultField = document.getElementById('mission_ground_assault');

const escortMinusButton = document.getElementById('escort_minus');
const escortPlusButton = document.getElementById('escort_plus');
const escortField = document.getElementById('mission_escort');

const inquiryMinusButton = document.getElementById('inquiry_minus');
const inquiryPlusButton = document.getElementById('inquiry_plus');
const inquiryField = document.getElementById('mission_inquiry');

const pilotCoPilotMinusButton = document.getElementById('pilot_co_pilot_minus');
const pilotCoPilotPlusButton = document.getElementById('pilot_co_pilot_plus');
const pilotCoPilotField = document.getElementById('mission_pilot_co_pilot');

const miningMinusButton = document.getElementById('mining_minus');
const miningPlusButton = document.getElementById('mining_plus');
const miningField = document.getElementById('mission_mining');

const salvageMinusButton = document.getElementById('salvage_minus');
const salvagePlusButton = document.getElementById('salvage_plus');
const salvageField = document.getElementById('mission_salvage');

const cargoMinusButton = document.getElementById('cargo_minus');
const cargoPlusButton = document.getElementById('cargo_plus');
const cargoField = document.getElementById('mission_cargo');

const transitMinusButton = document.getElementById('transit_minus');
const transitPlusButton = document.getElementById('transit_plus');
const transitField = document.getElementById('mission_transit');

const supportMinusButton = document.getElementById('support_minus');
const supportPlusButton = document.getElementById('support_plus');
const supportField = document.getElementById('mission_support');

const searchRescueMinusButton = document.getElementById('search_rescue_minus');
const searchRescuePlusButton = document.getElementById('search_rescue_plus');
const searchRescueField = document.getElementById('mission_search_rescue');

const manageDataMinusButton = document.getElementById('manage_data_minus');
const manageDataPlusButton = document.getElementById('manage_data_plus');
const manageDataField = document.getElementById('mission_manage_data');

const researchMinusButton = document.getElementById('research_minus');
const researchPlusButton = document.getElementById('research_plus');
const researchField = document.getElementById('mission_research');

const exploreMinusButton = document.getElementById('explore_minus');
const explorePlusButton = document.getElementById('explore_plus');
const exploreField = document.getElementById('mission_explore');

const agronomyMinusButton = document.getElementById('agronomy_minus');
const agronomyPlusButton = document.getElementById('agronomy_plus');
const agronomyField = document.getElementById('mission_agronomy');

turretMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(turretField.value) || 0;
    turretField.value = currentValue - 1;
});
turretPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(turretField.value) || 0;
    turretField.value = currentValue + 1;
});

groundAssaultMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(groundAssaultField.value) || 0;
    groundAssaultField.value = currentValue - 1;
});
groundAssaultPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(groundAssaultField.value) || 0;
    groundAssaultField.value = currentValue + 1;
});

escortMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(escortField.value) || 0;
    escortField.value = currentValue - 1;
});
escortPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(escortField.value) || 0;
    escortField.value = currentValue + 1;
});

inquiryMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inquiryField.value) || 0;
    inquiryField.value = currentValue - 1;
});
inquiryPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inquiryField.value) || 0;
    inquiryField.value = currentValue + 1;
});

pilotCoPilotMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(pilotCoPilotField.value) || 0;
    pilotCoPilotField.value = currentValue - 1;
});
pilotCoPilotPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(pilotCoPilotField.value) || 0;
    pilotCoPilotField.value = currentValue + 1;
});

miningMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(miningField.value) || 0;
    miningField.value = currentValue - 1;
});
miningPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(miningField.value) || 0;
    miningField.value = currentValue + 1;
});

salvageMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(salvageField.value) || 0;
    salvageField.value = currentValue - 1;
});
salvagePlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(salvageField.value) || 0;
    salvageField.value = currentValue + 1;
});

cargoMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(cargoField.value) || 0;
    cargoField.value = currentValue - 1;
});
cargoPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(cargoField.value) || 0;
    cargoField.value = currentValue + 1;
});

transitMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(transitField.value) || 0;
    transitField.value = currentValue - 1;
});
transitPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(transitField.value) || 0;
    transitField.value = currentValue + 1;
});

supportMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(supportField.value) || 0;
    supportField.value = currentValue - 1;
});
supportPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(supportField.value) || 0;
    supportField.value = currentValue + 1;
});

searchRescueMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(searchRescueField.value) || 0;
    searchRescueField.value = currentValue - 1;
});
searchRescuePlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(searchRescueField.value) || 0;
    searchRescueField.value = currentValue + 1;
});

manageDataMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(manageDataField.value) || 0;
    manageDataField.value = currentValue - 1;
});
manageDataPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(manageDataField.value) || 0;
    manageDataField.value = currentValue + 1;
});

researchMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(researchField.value) || 0;
    researchField.value = currentValue - 1;
});
researchPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(researchField.value) || 0;
    researchField.value = currentValue + 1;
});

exploreMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(exploreField.value) || 0;
    exploreField.value = currentValue - 1;
});
explorePlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(exploreField.value) || 0;
    exploreField.value = currentValue + 1;
});

agronomyMinusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(agronomyField.value) || 0;
    agronomyField.value = currentValue - 1;
});
agronomyPlusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(agronomyField.value) || 0;
    agronomyField.value = currentValue + 1;
});



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var userData = [];

async function generateButtonData(data) {
    const response2 = await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/battalions');
    const data2 = await response2.json();


    let fullMemberList = document.getElementById('full_member_list_options');
    let fullBattalionList = document.getElementById('full_battalion_list_options');
    let reportBattalionList = document.getElementById('report_battalion_list_options');

    var allMemberNames = data.rows.map(row =>`<option value="${row.sc_name}"></option>`).join('');
    var allBattalions = data2.rows.map(row =>`<option value="${row.battalion_name}"></option>`).join('');

    fullMemberList.innerHTML = allMemberNames;
    fullBattalionList.innerHTML = allBattalions;
    reportBattalionList.innerHTML = allBattalions;

    userData = data;
    // let last = userData.rows.length - 1;
    // console.log(userData);
    // console.log(userData.rows[0]);
    // console.log(userData.rows[last]);
}


function generateBattalionNames(){

    const data = userData;

    let selectBattalion = document.getElementById('select_battalion').value;
    let battalionMemberList = document.getElementById('battalion_member_list_options');

    var admiraltyMembers = data.rows.filter(units => units.battalion == "F-01 Holland A-00")
    var academyMembers = data.rows.filter(units => units.battalion == "F-01 Cr4zy A-01")

    var admiraltyMemberNames = admiraltyMembers.map(row =>`<option value="${row.sc_name}"></option>`).join('');
    var academyMemberNames = academyMembers.map(row =>`<option value="${row.sc_name}"></option>`).join('');
    
    if (selectBattalion == "F-01 Holland A-00"){battalionMemberList.innerHTML = admiraltyMemberNames;}
    else if (selectBattalion == "F-01 Cr4zy A-01"){battalionMemberList.innerHTML = academyMemberNames;}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function registerUnit() {

    // generate unit_id array[-1] + 1 (?)
    let sc_name = document.getElementById('unit_name').value;
    let discord_name = document.getElementById('unit_contact').value;
    let recruiter = document.getElementById('unit_recruiter').value;
    let battalion = document.getElementById('unit_battalion').value;
    let start_date = document.getElementById('unit_start').value;

    let unit_role = "Novitiate";
    let unit_rank = "Rank 0";
    let promotion_date = start_date;
    let unit_recruits = 0;
    let veteran_bonus = 0;

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

    let recruit_list = [];
    let backstory = "";

    // add function that refreshes page
}


async function fileReport() {
    let selectedMember = document.getElementById('select_member').value;
    let memberData = userData.rows.filter(unit => unit.sc_name == selectedMember);


    let events = document.getElementById('unit_events').value;
    let patrols = document.getElementById('unit_patrols').value;
    let hours = document.getElementById('unit_hours').value;
    let alerts = document.getElementById('unit_alerts').value;

    let eventsNum = parseInt(events);
    let patrolsNum = parseInt(patrols);
    let hoursNum = parseInt(hours);
    let alertsNum = parseInt(alerts);

    if (eventsNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'events',
                value: memberData[0].events + eventsNum,
            })
        });
    }
    
    if (patrolsNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'patrols',
                value: memberData[0].patrols + patrolsNum
            })
        });
    }

    if (hoursNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'hours',
                value: memberData[0].hours + hoursNum
            })
        });
    }

    if (alertsNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'alerts',
                value: memberData[0].alerts + alertsNum
            })
        });
    }

    // let warnings = document.getElementById('unit_warning').value;

    completedMissionData(memberData)
}

// completed missions
async function completedMissionData(memberData) {
    let selectedMember = document.getElementById('select_member').value;
    
    let turret = document.getElementById('mission_turret').value;
    let ground_assault = document.getElementById('mission_ground_assault').value;
    let escort = document.getElementById('mission_escort').value;
    let inquiry = document.getElementById('mission_inquiry').value;
    let pilot_co_pilot = document.getElementById('mission_pilot_co_pilot').value;
    let mining = document.getElementById('mission_mining').value;
    let salvage = document.getElementById('mission_salvage').value;
    let cargo = document.getElementById('mission_cargo').value;
    let transit = document.getElementById('mission_transit').value;
    let support = document.getElementById('mission_support').value;
    let search_rescue = document.getElementById('mission_search_rescue').value;
    let manage_data = document.getElementById('mission_manage_data').value;
    let research = document.getElementById('mission_research').value;
    let explore = document.getElementById('mission_explore').value;
    let agronomy = document.getElementById('mission_agronomy').value;

    let turretNum = parseInt(turret);
    let groundAssaultNum = parseInt(ground_assault);
    let escortNum = parseInt(escort);
    let inquiryNum = parseInt(inquiry);
    let pilotCoPilotNum = parseInt(pilot_co_pilot);
    let miningNum = parseInt(mining);
    let salvageNum = parseInt(salvage);
    let cargoNum = parseInt(cargo);
    let transitNum = parseInt(transit);
    let supportNum = parseInt(support);
    let searchRescueNum = parseInt(search_rescue);
    let manageDataNum = parseInt(manage_data);
    let researchNum = parseInt(research);
    let exploreNum = parseInt(explore);
    let agronomyNum = parseInt(agronomy);


    if (turretNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'turret',
                value: memberData[0].turret + turretNum
            })
        });
    }

    if (groundAssaultNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'ground_assault',
                value: memberData[0].ground_assault + groundAssaultNum
            })
        });
    }

    if (escortNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'escort',
                value: memberData[0].escort + escortNum
            })
        });
    }

    if (inquiryNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'inquiry',
                value: memberData[0].inquiry + inquiryNum
            })
        });
    }

    if (pilotCoPilotNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'pilot_co_pilot',
                value: memberData[0].pilot_co_pilot + pilotCoPilotNum
            })
        });
    }

    if (miningNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'mining',
                value: memberData[0].mining + miningNum
            })
        });
    }

    if (salvageNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'salvage',
                value: memberData[0].salvage + salvageNum
            })
        });
    }

    if (cargoNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'cargo',
                value: memberData[0].cargo + cargoNum
            })
        });
    }

    if (transitNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'transit',
                value: memberData[0].transit + transitNum
            })
        });
    }

    if (supportNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'support',
                value: memberData[0].support + supportNum
            })
        });
    }

    if (searchRescueNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'search_rescue',
                value: memberData[0].search_rescue + searchRescueNum
            })
        });
    }

    if (manageDataNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'manage_data',
                value: memberData[0].manage_data + manageDataNum
            })
        });
    }

    if (researchNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'research',
                value: memberData[0].research + researchNum
            })
        });
    }

    if (exploreNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'explore',
                value: memberData[0].explore + exploreNum
            })
        });
    }

    if (agronomyNum > 0) {
        await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/update_roster', {
            method: 'POST',
            body: JSON.stringify({
                sc_name: selectedMember,
                field: 'agronomy',
                value: memberData[0].agronomy + agronomyNum
            })
        });
    }
    // window.location.reload(true)
}


// needs if statement before sending to Database: if member (select_member) != "Select Member", then add data to database
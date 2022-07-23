
// document.getElementById("medical_exam_start_button").addEventListener("click", function(){
//     document.getElementById('medical_timer').innerHTML =
//     25 + ":" + 01;
//     startTimer();

//     function startTimer() {
//         var presentTime = document.getElementById('medical_timer').innerHTML;
//         var timeArray = presentTime.split(/[:]+/);
//         var m = timeArray[0];
//         var s = checkSecond((timeArray[1] - 1));
//         if(s==59){m=m-1}
//         if(m<0){
//             return
//         }
        
//         document.getElementById('medical_timer').innerHTML =
//             m + ":" + s;
//         console.log(m)
//         setTimeout(startTimer, 1000);    
//     }

//     function checkSecond(sec) {
//     if (sec < 10 && sec >= 0) {sec = "0" + sec};
//     if (sec < 0) {sec = "59"};
//     return sec;
//     }
// });

// document.getElementById("g_tactical_exam_start_button").addEventListener("click", function(){
//     document.getElementById('g_tactical_timer').innerHTML =
//     25 + ":" + 01;
//     startTimer();

//     function startTimer() {
//         var presentTime = document.getElementById('g_tactical_timer').innerHTML;
//         var timeArray = presentTime.split(/[:]+/);
//         var m = timeArray[0];
//         var s = checkSecond((timeArray[1] - 1));
//         if(s==59){m=m-1}
//         if(m<0){
//             return
//         }
        
//         document.getElementById('g_tactical_timer').innerHTML =
//             m + ":" + s;
//         console.log(m)
//         setTimeout(startTimer, 1000);    
//     }

//     function checkSecond(sec) {
//     if (sec < 10 && sec >= 0) {sec = "0" + sec};
//     if (sec < 0) {sec = "59"};
//     return sec;
//     }
// });

// document.getElementById("s_tactical_exam_start_button").addEventListener("click", function(){
//     document.getElementById('s_tactical_timer').innerHTML =
//     00 + ":" + 11;
//     startTimer();

//     function startTimer() {
//         var presentTime = document.getElementById('s_tactical_timer').innerHTML;
//         var timeArray = presentTime.split(/[:]+/);
//         var m = timeArray[0];
//         var s = checkSecond((timeArray[1] - 1));
//         if(s==59){m=m-1}
//         if(m<0){
//             return
//         }
        
//         document.getElementById('s_tactical_timer').innerHTML =
//             m + ":" + s;
//         console.log(m)
//         setTimeout(startTimer, 1000);    
//     }

//     function checkSecond(sec) {
//         if (sec < 10 && sec >= 0) {
//             sec = "0" + sec
//         };
//     if (sec < 0) {sec = "59"};
//     return sec;
//     }
// });


const questionsProtocolExam = [
    {
        questionNum: "Q1.",
        type: "single",
        question: "What year was The Galactic Order Founded?",
        answers: {
            a: "2021",
            b: "2950",
            c: "2951",
            d: "2952"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q2.",
        type: "single",
        question: "What is the primary goal of The Galactic Order?",
        answers: {
            a: "Replace the UEE",
            b: "Defeat the Vanduul",
            c: "Ensure galactic stability",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q3.",
        type: "single",
        question: "True or False: Any unit may wear a previously worn uniform of their same division?",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q4.",
        type: "single",
        question: "True or False: Commanders may wear any previously worn uniform of their same division?",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q5.",
        type: "multi",
        question: "Which Divisions have Tool requirements?",
        answers: {
            a: "Combat",
            b: "Engineering",
            c: "Medical",
            d: "Science"
        },
        correctAnswer: ["b","c","d"]
    },
    {
        questionNum: "Q6.",
        type: "single",
        question: "What are the Combat Division Tool requirements?",
        answers: {
            a: "Pistol",
            b: "Knife",
            c: "Rifle",
            d: "None"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q7.",
        type: "single",
        question: "What are the Engineering Division Tool requirements?",
        answers: {
            a: "MultiTool",
            b: "MultiTool + All attachments",
            c: "Uniform",
            d: "None"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q8.",
        type: "single",
        question: "What are the Medical Division Tool requirements?",
        answers: {
            a: "ParaMed",
            b: "ParaMed + All MedPens",
            c: "All MedPens",
            d: "None"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q9.",
        type: "single",
        question: "What are the Science Division Tool requirements?",
        answers: {
            a: "MultiTool",
            b: "ParaMed",
            c: "Tigerclaw",
            d: "None"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q10.",
        type: "multi",
        question: "What instances may Uniform regulations be excused?",
        answers: {
            a: "When off-duty",
            b: "During criticial operations",
            c: "When looting",
            d: "When stated by Leadership"
        },
        correctAnswer: ["a","b","c","d"]
    },
    {
        questionNum: "Q11.",
        type: "single",
        question: "What weapons are units restricted from using?",
        answers: {
            a: "Grenades & Launchers",
            b: "Trip Mines",
            c: "Railguns",
            d: "None"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q12.",
        type: "single",
        question: "What is the punishment for wearing improper uniform?",
        answers: {
            a: "Insubordination Warning",
            b: "Red A Alert",
            c: "Red D Alert",
            d: "Red U Alert"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q13.",
        type: "multi",
        question: "When does a rank 2, or lower, Salute?",
        answers: {
            a: "When addressed by Officer",
            b: "When addressing an Officer",
            c: "When entering room with Officer",
            d: "When dismissed by Officer"
        },
        correctAnswer: ["a","b","d"]
    },
    {
        questionNum: "Q14.",
        type: "single",
        question: "True of False: Officers are not required to Salute back to lower Ranks.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q15.",
        type: "multi",
        question: "When must an Officer Salute?",
        answers: {
            a: "When subordinate Salutes Officer",
            b: "When addressing another Officer",
            c: "When dismissing another Officer",
            d: "When addressing a Superior"
        },
        correctAnswer: ["b","d"]
    },
    {
        questionNum: "Q16.",
        type: "single",
        question: "For Rank 2 units, or lower, what emote follows after Salute?",
        answers: {
            a: "Attention emote",
            b: "At Ease emote",
            c: "Bow emote",
            d: "Stand emote"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q17.",
        type: "single",
        question: "When is At East emote used?",
        answers: {
            a: "When Officer approaches",
            b: "When Officer says “At Ease”",
            c: "When Officer says “As you were” or “Dismissed”",
            d: "All of the above"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q18.",
        type: "single",
        question: "When may a unit return to their regular duties from Attention emote or At Ease emote?",
        answers: {
            a: "When Officer says “As you were”",
            b: "When Officer says “Dismissed”",
            c: "When Officer says “As you were” or “Dismissed”",
            d: "When Officer says “At Ease”"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q19.",
        type: "single",
        question: "True or False: Units must Salute an Officer when Dismissed.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q20.",
        type: "single",
        question: "When is Attention emote used independently from Salute?",
        answers: {
            a: "When Dismissed",
            b: "When unit says “Officer on Deck”",
            c: "When Officer uses Attention emote",
            d: "Never"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q21.",
        type: "single",
        question: "When must Units request Permission to Board?",
        answers: {
            a: "When Officer is boarding",
            b: "When Officer has boarded",
            c: "Always",
            d: "Never"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q22.",
        type: "single",
        question: "When must Units request Permission to Depart?",
        answers: {
            a: "When Officer departs",
            b: "When Officer has departed",
            c: "Always",
            d: "Never"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q23.",
        type: "single",
        question: "Who may grant Permission for Boarding or Departing?",
        answers: {
            a: "Lieutenant",
            b: "Officer",
            c: "Captain",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q24.",
        type: "single",
        question: "True or False: a Lieutenant may grant an Officer permission to board.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q25.",
        type: "multi",
        question: "What part of a ship is off-limits to Rank 1 units or lower?",
        answers: {
            a: "Armory",
            b: "Engineering",
            c: "Medical",
            d: "Medical",
            e: "The Bridge"
        },
        correctAnswer: "e"
    },
    {
        questionNum: "Q26.",
        type: "multi",
        question: "Combat Division Units are restricted from what parts of a ship?",
        answers: {
            a: "Armory",
            b: "Engineering",
            c: "Medical",
            d: "The Bridge",
            e: "None"
        },
        correctAnswer: ["b","c"]
    },
    {
        questionNum: "Q27.",
        type: "multi",
        question: "Engineer Division Units are restricted from what parts of a ship?",
        answers: {
            a: "Armory",
            b: "Engineering",
            c: "Medical",
            d: "The Bridge",
            e: "None"
        },
        correctAnswer: ["a","c"]
    },
    {
        questionNum: "Q28.",
        type: "multi",
        question: "Medical Division Units are restricted from what parts of a ship?",
        answers: {
            a: "Armory",
            b: "Engineering",
            c: "Medical",
            d: "The Bridge",
            e: "None"
        },
        correctAnswer: "e"
    },
    {
        questionNum: "Q29.",
        type: "single",
        question: "True or False: Rank 3: Officers aren’t restricted from parts of a ship.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q30.",
        type: "multi",
        question: "Which units may freely enter the Captain’s Cabin?",
        answers: {
            a: "Lieutenants",
            b: "Officers",
            c: "1st Officer",
            d: "Captain"
        },
        correctAnswer: ["c","d"]
    },
    {
        questionNum: "Q31.",
        type: "single",
        question: "True or False: Gameplay Rules only apply in-game when associating with Galactic Order members.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q32.",
        type: "multi",
        question: "When/Where are Unit Conduct codes not required?",
        answers: {
            a: "When offline",
            b: "When off-duty",
            c: "When in combat",
            d: "When in Habitation areas"
        },
        correctAnswer: ["a","b","c","d"]
    },
    {
        questionNum: "Q33.",
        type: "multi",
        question: "What are Rank 3: Officers responsible for Recording / Reporting?",
        answers: {
            a: "Alerts & Warnings",
            b: "Hours & Missions",
            c: "Patrols & Months",
            d: "Recruits & Events"
        },
        correctAnswer: ["a","b"]
    },
    {
        questionNum: "Q34.",
        type: "multi",
        question: "What are 1st Officers responsible for Recording / Reporting?",
        answers: {
            a: "Alerts & Warnings",
            b: "Hours & Missions",
            c: "Patrols & Months",
            d: "Recruits & Events"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q35.",
        type: "multi",
        question: "Select all Units Trooper Commanders can oversee.",
        answers: {
            a: "Ensign Troopers",
            b: "Lieutenant & Shock Troopers",
            c: "Outriders & Agents",
            d: "Combat Pilots"
        },
        correctAnswer: ["a","b"]
    },
    {
        questionNum: "Q36.",
        type: "multi",
        question: "Select all Units Engineer Commanders can oversee.",
        answers: {
            a: "Ensign Operators",
            b: "Lieutenant Engineers",
            c: "Combat Pilots",
            d: "Combat Commanders"
        },
        correctAnswer: ["a","b"]
    },
    {
        questionNum: "Q37.",
        type: "multi",
        question: "Select all Units Medical Commanders can oversee.",
        answers: {
            a: "Ensign Medics",
            b: "Lieutenant Corpsman",
            c: "Ensign Troopers",
            d: "Lieutenant & Shock Troopers"
        },
        correctAnswer: ["a","b","c","d"]
    },
    {
        questionNum: "Q38.",
        type: "multi",
        question: "Select all Units Science Officers can oversee.",
        answers: {
            a: "Ensign Operators",
            b: "Ensign Troopers",
            c: "Field Researchers",
            d: "Laboratory Techs"
        },
        correctAnswer: ["c","d"]
    },
    {
        questionNum: "Q39.",
        type: "multi",
        question: "Who do Commanders report to?",
        answers: {
            a: "Officers",
            b: "1st Officers",
            c: "Captains",
            d: "Admirals"
        },
        correctAnswer: ["b","c","d"]
    },
    {
        questionNum: "Q40.",
        type: "single",
        question: "What division is a CP Commander part of?",
        answers: {
            a: "Combat",
            b: "Engineering",
            c: "Medical",
            d: "Science"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q41.",
        type: "single",
        question: "True or False: Patrols are counted when reporting for duty.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q42.",
        type: "single",
        question: "True or False: An individual unit’s Hours & Missions are recorded by an Officer only after they’ve reported for duty.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q43.",
        type: "single",
        question: "How does an Officer Report for Duty?",
        answers: {
            a: "When they report to a Superior",
            b: "When they report to another Officer",
            c: "When a subordinate reports for duty",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q44.",
        type: "single",
        question: "True or False: Roleplay is only required when first reporting for duty.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q45.",
        type: "single",
        question: "True or False: A Patrol is only considered to end when the unit “Requests Relief” or logs off.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q46.",
        type: "single",
        question: "What is a Red A Alert?",
        answers: {
            a: "An Alert for unit to wear the proper uniform",
            b: "An Alert for unit to wear the proper tool(s)",
            c: "An Alert for Weapon violation",
            d: "All of the above"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q47.",
        type: "single",
        question: "What happens with 3 Red A Alerts on Record?",
        answers: {
            a: "Demotion",
            b: "Termination",
            c: "Official Warning",
            d: "Benefits Removed"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q48.",
        type: "single",
        question: "What is an Act of Insubordination?",
        answers: {
            a: "3 Red A Alerts",
            b: "3 Red U Alerts",
            c: "Official Warning",
            d: "Law violation"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q49.",
        type: "single",
        question: "True or False: Alerts and Official Warnings may be removed from record over time, at Leadership’s discretion.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q50.",
        type: "single",
        question: "True or False: Demotion or Termination may occur with 1st Official Warning.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    }
];

const questionsMedicalExam = [
    {
        questionNum: "Q1.",
        type: "single",
        question: "What are the Tool Requirements for Rank 2: Lieutenant Corpsman?",
        answers: {
            a: "ParaMed",
            b: "ParaMed,All MedPens",
            c: "All MedPens",
            d: "None"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q2.",
        type: "multi",
        question: "What Mission Types apply to Medical Division progression?",
        answers: {
            a: "Escort",
            b: "Inquiry",
            c: "Transport",
            d: "Support",
            e: "Search & Rescue",
            f: "Research"
        },
        correctAnswer: ["a","c","d","e"]
    },
    {
        questionNum: "Q3.",
        type: "multi",
        question: "What parts of the body can recieve Tier 3 injuries?",
        answers: {
            a: "Head",
            b: "Chest",
            c: "Back",
            d: "Arms",
            e: "Legs"
        },
        correctAnswer: ["a","b","d","e"]
    },
    {
        questionNum: "Q4.",
        type: "multi",
        question: "What parts of the body can recieve Tier 2 injuries?",
        answers: {
            a: "Head",
            b: "Chest",
            c: "Back",
            d: "Arms",
            e: "Legs"
        },
        correctAnswer: ["a","b","c","d","e"]
    },
    {
        questionNum: "Q5.",
        type: "single",
        question: "True or False: The drug Hemozal should be administered to incapacitated Units.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q6.",
        type: "single",
        question: "True or False: a Minor Injury (tier 3) requires stabilization (with medical bed)?",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q7.",
        type: "multi",
        question: "What are the most common Negative Effects of a Tier 3 injury?",
        answers: {
            a: "Poor Weapon handling",
            b: "Movement problems",
            c: "Sensory problems",
            d: "Reduced stamina"
        },
        correctAnswer: ["a","b","c","d"]
    },
    {
        questionNum: "Q8.",
        type: "single",
        question: "True or False: Limping is typically common with Moderate injuries (Tier 2).",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q9.",
        type: "single",
        question: "What does BDL stand for?",
        answers: {
            a: "Body Dose Level",
            b: "Body Drug Level",
            c: "Blood Drug Level",
            d: "Blood Demexatrine Level"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q10.",
        type: "single",
        question: "What drug reduces concussion symptoms and normalizes weapon handling and movement speed?",
        answers: {
            a: "Demexatrine",
            b: "Sterogen",
            c: "Resurgera",
            d: "Roxaphen",
            e: "Hemozal"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q11.",
        type: "single",
        question: "What drug reduces vision and hearing symptoms and normalizes stamina?",
        answers: {
            a: "Demexatrine",
            b: "Sterogen",
            c: "Resurgera",
            d: "Roxaphen",
            e: "Hemozal"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q12.",
        type: "single",
        question: "What drug reduces pain symptoms and normalizes movement ability?",
        answers: {
            a: "Demexatrine",
            b: "Sterogen",
            c: "Resurgera",
            d: "Roxaphen",
            e: "Hemozal"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q13.",
        type: "single",
        question: "What drug revives overdosed units (if not incapacitated) and doubles decay rate of Blood Drug Levels?",
        answers: {
            a: "Demexatrine",
            b: "Sterogen",
            c: "Resurgera",
            d: "Roxaphen",
            e: "Hemozal"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q14.",
        type: "single",
        question: "What drug restores health, stops bleeding and recovers a Unit from incapacitated state?",
        answers: {
            a: "Demexatrine",
            b: "Sterogen",
            c: "Resurgera",
            d: "Roxaphen",
            e: "Hemozal"
        },
        correctAnswer: "e"
    },
    {
        questionNum: "Q15.",
        type: "single",
        question: "What drugs do not increase BDL?",
        answers: {
            a: "Demexatrine",
            b: "Sterogen",
            c: "Resurgera",
            d: "Roxaphen",
            e: "Hemozal"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q16.",
        type: "single",
        question: "At what BDL percentage (%) does Overdose occur and what does this effect do??",
        answers: {
            a: "75%; blurs vision and staggered / hindered movement",
            b: "85%; blurs vision and staggered / hindered movement",
            c: "100%; causes incapacitation and death",
            d: "100%; gradually decreases health"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q17.",
        type: "multi",
        question: "What can be done to reduce BDL?",
        answers: {
            a: "Medical Bed",
            b: "Waiting",
            c: "Roxaphen",
            d: "Resurgera",
            e: "Drink Water"
        },
        correctAnswer: ["a","b","d"]
    },
    {
        questionNum: "Q18.",
        type: "single",
        question: "What BDL percentage (%) does a Unit experience blurred vision and staggered / hindered movement?",
        answers: {
            a: "65%",
            b: "75%",
            c: "85%",
            d: "90%",
            e: "100%"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q19.",
        type: "multi",
        question: "What are the primary advantages of the ParaMed Medical Device over Medical Pens?",
        answers: {
            a: "Scans Vitals",
            b: "Treat Tier 2 Injuries",
            c: "Multiple Drugs",
            d: "Multiple Use",
            e: "Treat Tier 3 Injuries"
        },
        correctAnswer: ["a","c","d"]
    },
    {
        questionNum: "Q20.",
        type: "multi",
        question: "Which Ships currently have a Medical Bed on board?",
        answers: {
            a: "Cutlass Red",
            b: "890 Jump",
            c: "Endeavor",
            d: "Reclaimer",
            e: "Carrack"
        },
        correctAnswer: ["a","b","e"]
    },
    {
        questionNum: "Q21.",
        type: "multi",
        question: "Which Medical Beds currently allow for respawn?",
        answers: {
            a: "Tier 1",
            b: "Tier 2",
            c: "Tier 3",
            d: "Hospital"
        },
        correctAnswer: ["a","b","d"]
    },
    {
        questionNum: "Q22.",
        type: "single",
        question: "What color is MedPen and what drug does it contain?",
        answers: {
            a: "Purple; Demaxatrine",
            b: "Orange; Sterogen",
            c: "Grey/Black; Resurgera",
            d: "Green; Roxaphen",
            e: "Red; Hemozal",
            f: "Blue; Oxygen"
        },
        correctAnswer: "e"
    },
    {
        questionNum: "Q23.",
        type: "single",
        question: "What color is CorticoPen and what drug does it contain?",
        answers: {
            a: "Purple; Demaxatrine",
            b: "Orange; Sterogen",
            c: "Grey/Black; Resurgera",
            d: "Green; Roxaphen",
            e: "Red; Hemozal",
            f: "Blue; Oxygen"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q24.",
        type: "single",
        question: "What color is AdrenoPen and what drug does it contain?",
        answers: {
            a: "Purple; Demaxatrine",
            b: "Orange; Sterogen",
            c: "Grey/Black; Resurgera",
            d: "Green; Roxaphen",
            e: "Red; Hemozal",
            f: "Blue; Oxygen"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q25.",
        type: "single",
        question: "What color is OpioPen and what drug does it contain?",
        answers: {
            a: "Purple; Demaxatrine",
            b: "Orange; Sterogen",
            c: "Grey/Black; Resurgera",
            d: "Green; Roxaphen",
            e: "Red; Hemozal",
            f: "Blue; Oxygen"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q26.",
        type: "single",
        question: "What color is DetoxPen and what drug does it contain?",
        answers: {
            a: "Purple; Demaxatrine",
            b: "Orange; Sterogen",
            c: "Grey/Black; Resurgera",
            d: "Green; Roxaphen",
            e: "Red; Hemozal",
            f: "Blue; Oxygen"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q27.",
        type: "single",
        question: "What color is OxyPen and what does it contain?",
        answers: {
            a: "Purple; Demaxatrine",
            b: "Orange; Sterogen",
            c: "Grey/Black; Resurgera",
            d: "Green; Roxaphen",
            e: "Red; Hemozal",
            f: "Blue; Oxygen"
        },
        correctAnswer: "e"
    },
    {
        questionNum: "Q28.",
        type: "multi",
        question: "What are the primary responsibilities of Rank 2: Lieutenant Corpsman?",
        answers: {
            a: "Manage Medical Bay",
            b: "Educate",
            c: "Provide Tier 3 Healthcare",
            d: "Provide Tier 2 Healthcare",
            e: "Provide Tier 1 Healthcare"
        },
        correctAnswer: ["b","c","d"]
    },
    {
        questionNum: "Q29.",
        type: "multi",
        question: "What Advantage(s) does a Planetary Hospital typically have over a Station Medical Center?",
        answers: {
            a: "Unlimited Medical Supplies",
            b: "More Rooms",
            c: "Patient Transport Gurney",
            d: "Pharmacy",
            e: "Emergency Elevator"
        },
        correctAnswer: ["b","e"]
    },
    {
        questionNum: "Q30.",
        type: "single",
        question: "What Battalion Type has a Focus on Medical?",
        answers: {
            a: "Admiralty",
            b: "Academy",
            c: "Battle",
            d: "Medevac",
            e: "Medical"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q31.",
        type: "single",
        question: "What is Lieutenant Corpsman limit per standard Battalion?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q32.",
        type: "single",
        question: "What is Lieutenant Corpsman limit per Battle Battalion?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q33.",
        type: "single",
        question: "What is Lieutenant Corpsman limit per Medevac Battalion?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q34.",
        type: "multi",
        question: "What Battalion types are Lieutenant Corpsmen most often found in?",
        answers: {
            a: "Admiralty",
            b: "Academy",
            c: "Battle",
            d: "Medevac",
            e: "Medical"
        },
        correctAnswer: ["b","e"]
    },
    {
        questionNum: "Q35.",
        type: "single",
        question: "True or False: Medical Commanders are only found within Battalions that have a Tier 1 Medical Bay.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q36.",
        type: "single",
        question: "What ship is most Commonly used for Medevac Battalion?",
        answers: {
            a: "Cutlass Red",
            b: "890 Jump",
            c: "Endeavor",
            d: "Reclaimer",
            e: "Carrack"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q37.",
        type: "single",
        question: "True or False: Medical Division Units are responsible for piloting Medical Ships.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q38.",
        type: "single",
        question: "True or False: Medical Beds refill Food and Drink.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q39.",
        type: "single",
        question: "True or False: Medical Division Units are restricted from Engaging in Combat during an encounter or firefight?",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q40.",
        type: "single",
        question: "True or False: Medical Division Units are required to carry Drug Pens.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
];

const questionsGTacticalExam = [
    {
        questionNum: "Q1.",
        type: "multi",
        question: "What are the Primary Ship types typically found in Battle Battalion?",
        answers: {
            a: "Carriers",
            b: "Gun Ships",
            c: "Frigates",
            d: "Corvettes",
            e: "Destroyers"
        },
        correctAnswer: ["a","b","c","d"]
        // note: Destroyers would very likely be found in Special Battalions like Academy or Admiralty
    },
    {
        questionNum: "Q2.",
        type: "multi",
        question: "What are the most common Support Ships found in Battle Battalion?",
        answers: {
            a: "Repair",
            b: "Re-arm",
            c: "Refuel",
            d: "Combat",
            e: "Medical"
        },
        correctAnswer: ["a","b","c","e"]
    },
    {
        questionNum: "Q3.",
        type: "multi",
        question: "Select all Units of the Combat Division.",
        answers: {
            a: "Ensign Trooper",
            b: "Lietenant Trooper & Shock Trooper",
            c: "Outrider",
            d: "Agent",
            e: "Trooper Commander"
        },
        correctAnswer: ["a","b","c","d","e"]
    },
    {
        questionNum: "Q4.",
        type: "single",
        question: "What Sub-Division is part of the Combat Division?",
        answers: {
            a: "Medical",
            b: "Spec-Ops",
            c: "Elite",
            d: "Combat Pilot"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q5.",
        type: "single",
        question: "In a Standard Battalion, what is the Shock Trooper limit?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q6.",
        type: "single",
        question: "In a Battle Battalion, what is the Shock Trooper limit?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q7.",
        type: "single",
        question: "What is the Center Symbol for Combat Division emblem?",
        answers: {
            a: "Shield",
            b: "Sword",
            c: "Target",
            d: "All of the above"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q8.",
        type: "single",
        question: "True or False: Lieutenant Trooper and Shock Trooper share the same rank and authority.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q9.",
        type: "multi",
        question: "Select all Ammunition Types for ground infantry Units?",
        answers: {
            a: "Ballistic",
            b: "Electron",
            c: "Laser",
            d: "Plasma",
            e: "Explosive"
        },
        correctAnswer: ["a","b","c","d"]
    },
    {
        questionNum: "Q10.",
        type: "multi",
        question: "Which Ammunition Type is capable of spreading to nearby enemies?",
        answers: {
            a: "Ballistic",
            b: "Electron",
            c: "Laser",
            d: "Plasma",
            e: "Explosive"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q11.",
        type: "single",
        question: "Which Ammunition Type replaces ammunition with a battery, giving a larger ammo capacity?",
        answers: {
            a: "Ballistic",
            b: "Electron",
            c: "Laser",
            d: "Plasma",
            e: "Explosive"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q12.",
        type: "single",
        question: "Which Ammunition Type does mostly direct damage to a single target?",
        answers: {
            a: "Ballistic",
            b: "Electron",
            c: "Laser",
            d: "Plasma",
            e: "Explosive"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q13.",
        type: "single",
        question: "Which Ammunition Type typically comes with a 'charge' ability?",
        answers: {
            a: "Ballistic",
            b: "Electron",
            c: "Laser",
            d: "Plasma",
            e: "Explosive"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q14.",
        type: "multi",
        question: "Which Ammunition Type will have the option to recharge clips?",
        answers: {
            a: "Ballistic",
            b: "Electron",
            c: "Laser",
            d: "Plasma",
            e: "Explosive"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q15.",
        type: "single",
        question: "How many different Weapon Types are there?",
        answers: {
            a: "6",
            b: "8",
            c: "10",
            d: "12",
            e: "14"
        },
        correctAnswer: "e"
    },
    {
        questionNum: "Q16.",
        type: "multi",
        question: "Which Weapon Types are not currently available in-game?",
        answers: {
            a: "Trip Mines",
            b: "Crossbows",
            c: "Light Machine Guns",
            d: "Anti-Personnel",
            e: "Missile Launchers"
        },
        correctAnswer: ["b","d"]
    },
    {
        questionNum: "Q17.",
        type: "multi",
        question: "Which Weapon Types have Explosive effects?",
        answers: {
            a: "Grenade",
            b: "Grenade Launcher",
            c: "Missile Launcher",
            d: "Railgun",
            e: "Anti-Personnel"
        },
        correctAnswer: ["a","b","c","d","e"]
    },
    {
        questionNum: "Q18.",
        type: "multi",
        question: "For weapon comparison statistics, what are the primary stats listed?",
        answers: {
            a: "Ammo Count",
            b: "Alpha",
            c: "DPS",
            d: "Max DMG",
            e: "Effective Range",
            f: "Maximum Range",
            g: "Accuracy"
        },
        correctAnswer: ["a","b","c","e","f","g"]
    },
    {
        questionNum: "Q19.",
        type: "multi",
        question: "Which Weapon Stats have a focus on Damage Per Second with All successful hits?",
        answers: {
            a: "Ammo Count",
            b: "Alpha",
            c: "DPS",
            d: "Max DMG",
            e: "Effective Range",
            f: "Maximum Range",
            g: "Accuracy"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q20.",
        type: "multi",
        question: "Which Weapon Stats have a focus on damage dealt up to a specific point or distance?",
        answers: {
            a: "Ammo Count",
            b: "Alpha",
            c: "DPS",
            d: "Max DMG",
            e: "Effective Range",
            f: "Maximum Range",
            g: "Accuracy"
        },
        correctAnswer: "e"
    },
    {
        questionNum: "Q21.",
        type: "multi",
        question: "Which Weapon Stats have a focus on full distance of damage?",
        answers: {
            a: "Ammo Count",
            b: "Alpha",
            c: "DPS",
            d: "Max DMG",
            e: "Effective Range",
            f: "Maximum Range",
            g: "Accuracy"
        },
        correctAnswer: "f"
    },
    {
        questionNum: "Q22.",
        type: "single",
        question: "Which Weapon Stat has a focus on Single Instance Damage?",
        answers: {
            a: "Ammo Count",
            b: "Alpha",
            c: "DPS",
            d: "Max DMG",
            e: "Effective Range",
            f: "Maximum Range",
            g: "Accuracy"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q23.",
        type: "single",
        question: "True or False: Laser Trip Mines are mostly used for Bunker/Ship defense against intruders or laying traps.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q24.",
        type: "single",
        question: "True or False: Laser Trip Mines are commonly found within Bunkers and Derelict ships.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q25.",
        type: "single",
        question: "How many Explosive Weapons / Tools are there in total?",
        answers: {
            a: "4",
            b: "5",
            c: "6",
            d: "7"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q26.",
        type: "multi",
        question: "Select all Ground Assault mission types.",
        answers: {
            a: "Cave",
            b: "Bunker",
            c: "ERT",
            d: "Derelict",
            e: "Bounty"
        },
        correctAnswer: ["a","b","d"]
    },
    {
        questionNum: "Q27.",
        type: "single",
        question: "True or False: Cave & Bunker are the most Common Ground Assault missions.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q28.",
        type: "single",
        question: "True or False: For Cave & Bunker missions, mid-range and short-range weapons are recommended.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q29.",
        type: "multi",
        question: "What leg/hip equipped items are recommended for Troopers and Combat Division Units?",
        answers: {
            a: "ParaMed",
            b: "MedPen",
            c: "OxyPen",
            d: "Pistol",
            e: "Knife"
        },
        correctAnswer: ["b","d","e"]
    },
    {
        questionNum: "Q30.",
        type: "single",
        question: "What is the Max number of ammo clips an Ensign Trooper can equip to their chest piece?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q31.",
        type: "single",
        question: "What is the Max number of ammo clips a Shock Trooper can equip to their chest piece?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q32.",
        type: "single",
        question: "What is the Max number of ammo clips a Lieutenant Trooper can equip to their chest piece?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q33.",
        type: "single",
        question: "At what Gear weight range (in lbs.) is Movement Speed reduced to 95%?",
        answers: {
            a: "15-24",
            b: "25-34",
            c: "35-44",
            d: "45 or more"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q34.",
        type: "single",
        question: "At what Gear weight range (in lbs.) is Movement Speed reduced to 90%?",
        answers: {
            a: "15-24",
            b: "25-34",
            c: "35-44",
            d: "45 or more"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q35.",
        type: "single",
        question: "At what Gear weight range (in lbs.) is Movement Speed reduced to 80%?",
        answers: {
            a: "15-24",
            b: "25-34",
            c: "35-44",
            d: "45 or more"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q36.",
        type: "single",
        question: "True or False: Only Combat Division units have access to Heavy or Medium Armor.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q37.",
        type: "single",
        question: "What color armor does Hurston Security wear?",
        answers: {
            a: "Red & White",
            b: "White & Blue",
            c: "White & Black",
            d: "Yellow & Black"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q38.",
        type: "single",
        question: "What color armor does Crusader Security wear?",
        answers: {
            a: "Red & White",
            b: "White & Blue",
            c: "White & Black",
            d: "Yellow & Black"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q39.",
        type: "single",
        question: "What color armor does Microtech Security wear?",
        answers: {
            a: "Red & White",
            b: "White & Blue",
            c: "White & Black",
            d: "Yellow & Black"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q40.",
        type: "single",
        question: "What color armor does Arcorp Security wear?",
        answers: {
            a: "Red & White",
            b: "White & Blue",
            c: "White & Black",
            d: "Yellow & Black"
        },
        correctAnswer: "a"
    }
];

const questionsSTacticalExam = [
    {
        questionNum: "Q1.",
        type: "multi",
        question: "What are the Primary Ship types typically found in Battle Battalion?",
        answers: {
            a: "Carriers",
            b: "Gun Ships",
            c: "Frigates",
            d: "Corvettes",
            e: "Destroyers"
        },
        correctAnswer: ["a","b","c","d","e"]
    },
    {
        questionNum: "Q2.",
        type: "multi",
        question: "What are the most common Support Ships found in Battle Battalion?",
        answers: {
            a: "Repair",
            b: "Re-arm",
            c: "Refuel",
            d: "Combat",
            e: "Medical"
        },
        correctAnswer: ["a","b","c","e"]
    },
    {
        questionNum: "Q3.",
        type: "multi",
        question: "Select all Units of the Combat Division.",
        answers: {
            a: "Ensign Trooper",
            b: "Lietenant Trooper & Shock Trooper",
            c: "Outrider",
            d: "Agent",
            e: "Trooper Commander"
        },
        correctAnswer: ["a","b","c","d","e"]
    },
    {
        questionNum: "Q4.",
        type: "single",
        question: "What Sub-Division is part of the Combat Division?",
        answers: {
            a: "Medical",
            b: "Spec-Ops",
            c: "Elite",
            d: "Combat Pilot"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q5.",
        type: "single",
        question: "In a Standard Battalion, what is the Shock Trooper limit?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q6.",
        type: "single",
        question: "In a Battle Battalion, what is the Shock Trooper limit?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q7.",
        type: "single",
        question: "What is the Center Symbol for Combat Division emblem?",
        answers: {
            a: "Shield",
            b: "Sword",
            c: "Target",
            d: "All of the above"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q8.",
        type: "single",
        question: "True or False: Lieutenant Trooper and Shock Trooper share the same rank and authority.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q9.",
        type: "multi",
        question: "Select all Ammunition Types for ship Guns & Turrets.",
        answers: {
            a: "Ballistic",
            b: "Laser",
            c: "Neutron",
            d: "Distortion",
            e: "Explosive"
        },
        correctAnswer: ["a","b","c","d"]
    },
    {
        questionNum: "Q10.",
        type: "multi",
        question: "Select the different Turret Types.",
        answers: {
            a: "Anti-Personnel",
            b: "Manned",
            c: "Secondary",
            d: "Remote",
            e: "Primary"
        },
        correctAnswer: ["b","d"]
    },
    {
        questionNum: "Q11.",
        type: "single",
        question: "For Turrets, what Keybind is Relative Mode typically linked to?",
        answers: {
            a: "C",
            b: "B",
            c: "X",
            d: "Q",
            e: "V"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q12.",
        type: "single",
        question: "For Turrets, what Keybind is Gyro Mode typically linked to?",
        answers: {
            a: "C",
            b: "B",
            c: "X",
            d: "Q",
            e: "V"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q13.",
        type: "single",
        question: "For Turrets, what Keybind is Stagger Mode typically linked to?",
        answers: {
            a: "C",
            b: "B",
            c: "X",
            d: "Q",
            e: "V"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q14.",
        type: "single",
        question: "True or False: Stagger Mode is more effective with Duel(2) Gun Turrets over Quad(4) Gun Turrets.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q15.",
        type: "single",
        question: "For Turrets, what Keybind is Realignment typically linked to?",
        answers: {
            a: "C",
            b: "B",
            c: "X",
            d: "Q",
            e: "V"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q16.",
        type: "single",
        question: "What Combat Division Unit would typically control a ship or vehicle Primary Gun Turret?",
        answers: {
            a: "Ensign Trooper",
            b: "Lieutenant Trooper",
            c: "Shock Trooper",
            d: "Outrider",
            e: "Trooper Commander"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q17.",
        type: "single",
        question: "What Combat Division Unit would typically control a ship or vehicle Secondary Gun Turret?",
        answers: {
            a: "Ensign Trooper",
            b: "Lieutenant Trooper",
            c: "Shock Trooper",
            d: "Outrider",
            e: "Trooper Commander"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q18.",
        type: "multi",
        question: "What Division Units would typically control a ship or vehicle Remote Gun Turret?",
        answers: {
            a: "Ensign Trooper",
            b: "Lieutenant Trooper",
            c: "Shock Trooper",
            d: "Ensign Operator",
            e: "Lieutenant Engineer"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q19.",
        type: "single",
        question: "How many different Turret Gun Types are there?",
        answers: {
            a: "6",
            b: "8",
            c: "12",
            d: "16"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q20.",
        type: "multi",
        question: "Select All Ballistic Turret Gun Types.",
        answers: {
            a: "Repeater",
            b: "Gatling",
            c: "Scattergun",
            d: "Beam",
            e: "Cannon",
            f: "Tachyon Cannon",
            g: "High Explosive Cannon",
            h: "Mass Driver"
        },
        correctAnswer: ["a","b","c","e","g","h"]
    },
    {
        questionNum: "Q21.",
        type: "multi",
        question: "Select All Laser Turret Gun Types.",
        answers: {
            a: "Repeater",
            b: "Gatling",
            c: "Scattergun",
            d: "Beam",
            e: "Cannon",
            f: "Tachyon Cannon",
            g: "High Explosive Cannon",
            h: "Mass Driver"
        },
        correctAnswer: ["a","c","d","e"]
    },
    {
        questionNum: "Q22.",
        type: "multi",
        question: "Select All Neutron Turret Gun Types.",
        answers: {
            a: "Repeater",
            b: "Gatling",
            c: "Scattergun",
            d: "Beam",
            e: "Cannon",
            f: "Tachyon Cannon",
            g: "High Explosive Cannon",
            h: "Mass Driver"
        },
        correctAnswer: ["a","e","f"]
    },
    {
        questionNum: "Q23.",
        type: "multi",
        question: "Select All Distortion Turret Gun Types.",
        answers: {
            a: "Repeater",
            b: "Gatling",
            c: "Scattergun",
            d: "Beam",
            e: "Cannon",
            f: "Tachyon Cannon",
            g: "High Explosive Cannon",
            h: "Mass Driver"
        },
        correctAnswer: ["a","c","e"]
    },
    {
        questionNum: "Q24.",
        type: "single",
        question: "True or False: Missile launchers may be attached to Turrets.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q25.",
        type: "single",
        question: "True or False: Some Remote Turrets can be replaced with Manned Turrets.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q26.",
        type: "single",
        question: "Which Ammunition Types for ship Guns & Turrets has a focus on direct Hull damage? ",
        answers: {
            a: "Ballistic",
            b: "Laser",
            c: "Neutron",
            d: "Distortion"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q27.",
        type: "multi",
        question: "Which Ammunition Types for ship Guns & Turrets must first destroy a vehicle's shield before damaging the Hull? ",
        answers: {
            a: "Ballistic",
            b: "Laser",
            c: "Neutron",
            d: "Distortion"
        },
        correctAnswer: ["b","c"]
    },
    {
        questionNum: "Q28.",
        type: "single",
        question: "Which Ammunition Types for ship Guns & Turrets has a focus on disabling components? ",
        answers: {
            a: "Ballistic",
            b: "Laser",
            c: "Neutron",
            d: "Distortion"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q29.",
        type: "multi",
        question: "What leg/hip equipped items are recommended for Troopers and Combat Division Units?",
        answers: {
            a: "ParaMed",
            b: "MedPen",
            c: "OxyPen",
            d: "Pistol",
            e: "Knife"
        },
        correctAnswer: ["b","d","e"]
    },
    {
        questionNum: "Q30.",
        type: "single",
        question: "What is the Max number of ammo clips an Ensign Trooper can equip to their chest piece?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q31.",
        type: "single",
        question: "What is the Max number of ammo clips a Shock Trooper can equip to their chest piece?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q32.",
        type: "single",
        question: "What is the Max number of ammo clips a Lieutenant Trooper can equip to their chest piece?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "c"
    },
    {
        questionNum: "Q33.",
        type: "single",
        question: "At what Gear weight range (in lbs.) is Movement Speed reduced to 95%?",
        answers: {
            a: "15-24",
            b: "25-34",
            c: "35-44",
            d: "45 or more"
        },
        correctAnswer: "a"
    },
    {
        questionNum: "Q34.",
        type: "single",
        question: "At what Gear weight range (in lbs.) is Movement Speed reduced to 90%?",
        answers: {
            a: "15-24",
            b: "25-34",
            c: "35-44",
            d: "45 or more"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q35.",
        type: "single",
        question: "At what Gear weight range (in lbs.) is Movement Speed reduced to 80%?",
        answers: {
            a: "15-24",
            b: "25-34",
            c: "35-44",
            d: "45 or more"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q36.",
        type: "single",
        question: "True or False: Only Combat Division units have access to Heavy or Medium Armor.",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q37.",
        type: "single",
        question: "What color armor does Hurston Security wear?",
        answers: {
            a: "Red & White",
            b: "White & Blue",
            c: "White & Black",
            d: "Yellow & Black"
        },
        correctAnswer: "d"
    },
    {
        questionNum: "Q38.",
        type: "single",
        question: "What color armor does Crusader Security wear?",
        answers: {
            a: "Red & White",
            b: "White & Blue",
            c: "White & Black",
            d: "Yellow & Black"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q39.",
        type: "single",
        question: "What color armor does Microtech Security wear?",
        answers: {
            a: "Red & White",
            b: "White & Blue",
            c: "White & Black",
            d: "Yellow & Black"
        },
        correctAnswer: "b"
    },
    {
        questionNum: "Q40.",
        type: "single",
        question: "What color armor does Arcorp Security wear?",
        answers: {
            a: "Red & White",
            b: "White & Blue",
            c: "White & Black",
            d: "Yellow & Black"
        },
        correctAnswer: "a"
    }
];

var examUnitData = [];

async function generateExamData() {
    const examResponse = await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/roster');
    const examData = await examResponse.json();

    generateExamBattalionData(examData);
};


async function generateExamBattalionData(examData) {
    const examResponse2 = await fetch('https://frolicking-frangipane-e2734e.netlify.app/.netlify/functions/battalions');
    const examData2 = await examResponse2.json();


    let examBattalionList = document.getElementById('exam_battalion_list_options');
    var allBattalions = examData2.rows.map(row =>`<option value="${row.battalion_name}"></option>`).join('');

    examBattalionList.innerHTML = allBattalions;
    examUnitData = examData;
}


function generateExamBattalionNames(){

    let data = examUnitData;

    let protocolNoPass = data.rows.filter(score => score.protocol_exam == false);

    let examSelectBattalion = document.getElementById('exam_select_battalion').value;
    let examBattalionMemberList = document.getElementById('exam_battalion_member_list_options');

    var admiraltyMembers = data.rows.filter(units => units.battalion == "F-01 Holland A-00")
    var academyMembers = data.rows.filter(units => units.battalion == "F-01 Cr4zy A-01")

    // Comment both variables above and uncomment both variables below when ready to launch exam (live)
    // var admiraltyMembers = protocolNoPass.filter(units => units.battalion == "F-01 Holland A-00")
    // var academyMembers = protocolNoPass.filter(units => units.battalion == "F-01 Cr4zy A-01")

    var admiraltyMemberNames = admiraltyMembers.map(row =>`<option value="${row.sc_name}"></option>`).join('');
    var academyMemberNames = academyMembers.map(row =>`<option value="${row.sc_name}"></option>`).join('');

    if (examSelectBattalion == "F-01 Holland A-00"){examBattalionMemberList.innerHTML = admiraltyMemberNames;}
    else if (examSelectBattalion == "F-01 Cr4zy A-01"){examBattalionMemberList.innerHTML = academyMemberNames;}
}


function examStartButtonReveal() {
    var protocolExamStartButton = document.getElementById("protocol_exam_start_button");
    protocolExamStartButton.style.visibility = "visible";
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Protocol Exam Modal ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function buildProtocolExam() {
    var protocolExamContainer = document.getElementById('protocol_exam_container');

    const outputProtocolExam = [];

    questionsProtocolExam.forEach(
        (currentQuestion, questionNumber) => {
            let answers = [];

            if (currentQuestion.type == "single") {
                for(letter in currentQuestion.answers) {
    
                    answers.push(
                        `
                        <div id="questions_container">
                        <label class="radio text-center">
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                                <Span id="answer_letter">${letter} </Span>
                                <a id="question_text">${currentQuestion.answers[letter]}</a>
                        </label>
                        </div>
                        `
                    );
                }
    
                outputProtocolExam.push(
                    `
                    <p id="small_space"></p>
                    <div>
                    <a id="protocol_number">${currentQuestion.questionNum}</a>
                    <a id="question_text">${currentQuestion.question}</a>
                    </div>
                    <div class="answers"> ${answers.join('')} </div>
                    `
                );
            }
            else {
                for(letter in currentQuestion.answers) {
    
                    answers.push(
                        `
                        <div id="questions_container">
                        <label class="checkbox text-center">
                            <input type="checkbox" name="question${questionNumber}" value="${letter}">
                                <Span id="answer_letter">${letter} </Span>
                                <a id="question_text">${currentQuestion.answers[letter]}</a>
                        </label>
                        </div>
                        `
                    );
                }
    
                outputProtocolExam.push(
                    `
                    <p id="small_space"></p>
                    <div>
                    <a id="protocol_number">${currentQuestion.questionNum}</a>
                    <a id="question_text">${currentQuestion.question}</a>
                    </div>
                    <div class="answers"> ${answers.join('')} </div>
                    `
                );
            }
        }

    );
    protocolExamContainer.innerHTML = outputProtocolExam.join('');
    timerProtocolExam()
}

function showProtocolExamResults() {
    const protocolExamContainer = document.getElementById('protocol_exam_container').querySelectorAll('.answers');
    const protocolExamResults = document.getElementById('protocol_button_container');
    // const testResults = document.getElementById('test_results'); // for testing

    let numCorrect = 0;
    
    questionsProtocolExam.forEach( (currentQuestion, questionNumber) => {

        var protocolAnswerContainer = protocolExamContainer[questionNumber];
        var protocolSelector = `input[name=question${questionNumber}]:checked`;
        var protocolUserAnswer = (protocolAnswerContainer.querySelector(protocolSelector) || {}).value;
        var protocolCheckboxes = document.querySelectorAll(`input[name=question${questionNumber}]:checked`);

        let tempCorrect = 0;
        let tempArray = [];
        
        if (currentQuestion.type == "single") {
            if (protocolUserAnswer === currentQuestion.correctAnswer) {numCorrect++;}
        }
        
        else if (currentQuestion.type == "multi") {

            for (var i = 0; i < protocolCheckboxes.length; i++) {
                tempArray.push(protocolCheckboxes[i].value)
            }
            for (var num = 0; num < tempArray.length; num ++) {
                if (tempArray[num] == currentQuestion.correctAnswer[num]) {tempCorrect++}
            }
            if (tempCorrect == currentQuestion.correctAnswer.length) {numCorrect++}
        }
        tempCorrect = 0;
        tempArray = [];
    });

    // testResults.innerHTML = `${numCorrect} out of ${questionsProtocolExam.length}`; // for testing
    if (numCorrect >= 35) {
        protocolExamResults.innerHTML = `<div class="text-center" id="protocol_exam_final_results"><a id="complete">Pass</a></div>`;
        updateProtocolPass();
    }
    else {
        protocolExamResults.innerHTML = `<div class="text-center" id="protocol_exam_final_results"><a id="failed_exam">Fail</a></div>`;
        updateProtocolFail();
    }
}



function timerProtocolExam() {
    var protocolExamEnd = document.getElementById('protocol_exam_submit');
    var protocolExamStart = document.getElementById("protocol_exam_start_button");
    document.getElementById('protocol_timer').innerHTML = 30 + ":" + 01;
    startTimer();
    
    function startTimer() {
        var presentTime = document.getElementById('protocol_timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if(s==59){m=m-1}
        if(m<0){
            protocolExamStart.style.visibility = "hidden";
            protocolExamEnd.click();
            return
        }
        
        document.getElementById('protocol_timer').innerHTML =
        m + ":" + s;
        console.log(m)
        setTimeout(startTimer, 1000);
    }
    
    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {sec = "0" + sec};
        if (sec < 0) {
            sec = "59";
        };
        return sec;
    }
}


// function updateProtocolPass() {
//     let examParticipant = document.getElementById('exam_select_member').value;
//     let data = examUnitData;

//     let examParticipantData = data.rows.filter(unit => unit.sc_name == examParticipant);
//     let protocolData = examParticipantData[0].protocol_exam;


// } // not finished

function updateProtocolFail() {
    let examParticipant = document.getElementById('exam_select_member').value;
    let data = examUnitData;

    let examParticipantData = data.rows.filter(unit => unit.sc_name == examParticipant);
    let protocolData = examParticipantData[0].protocol_exam;

    // console.log(data);
    // console.log(examParticipant);
    // console.log(examParticipantData);
    console.log(protocolData);


    protocolData = false

    console.log(protocolData)
    console.log(examParticipantData)
}

// self note: add timer (days: hours: minutes) to replace Start Exam button
// apply exam progression to database
// replace if else statement at end of showProtocolExamResults() to instead display database status
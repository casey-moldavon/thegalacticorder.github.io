// document.getElementById("protocol_exam_start_button").addEventListener("click", function(){
//     document.getElementById('protocol_timer').innerHTML =
//     30 + ":" + 01;
//     startTimer();

//     function startTimer() {
//         var presentTime = document.getElementById('protocol_timer').innerHTML;
//         var timeArray = presentTime.split(/[:]+/);
//         var m = timeArray[0];
//         var s = checkSecond((timeArray[1] - 1));
//         if(s==59){m=m-1}
//         if(m<0){
//             return
//         }
        
//         document.getElementById('protocol_timer').innerHTML =
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
        correctAnswer:  "c"
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
        correctAnswer: "b" + "c" + "d"
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
        correctAnswer: "a" + "b" + "c" + "d"
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
            c: "Red D Alert<",
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
        correctAnswer: "a" + "b" + "d"
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
        correctAnswer: "b" + "d"
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
        type: "single",
        question: "What part of a ship is off-limits to Rank 1 units or lower?",
        answers: {
            a: "Armory",
            b: "Engineering",
            c: "Medical",
            d: "Medical",
            e: "The Bridge"
        },
        correctAnswer: "d"
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
        correctAnswer: "b" + "c"
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
        correctAnswer: "a" + "c"
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
        correctAnswer: "c" + "d"
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
        correctAnswer: "a" + "b" + "c" + "d"
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
        correctAnswer: "a" + "b"
    },
    {
        questionNum: "Q34.",
        type: "single",
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
        correctAnswer: "a" + "b"
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
        correctAnswer: "a" + "b"
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
        correctAnswer: "a" + "b" + "c" + "d"
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
        correctAnswer: "c" + "d"
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
        correctAnswer: "b" + "c" + "d"
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
            d: "All of the abov"
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

]

function buildProtocolExam() {


    const protocolExamContainer = document.getElementById('quiz_1');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');



    const outputProtocolExam = [];

    questionsProtocolExam.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];


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
                    <a id="question_number">${currentQuestion.questionNum}</a>
                    <a id="question_text">${currentQuestion.question}</a>
                    </div>
                    <div> ${answers.join('')} </div>
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
                    <a id="question_number">${currentQuestion.questionNum}</a>
                    <a id="question_text">${currentQuestion.question}</a>
                    </div>
                    <div> ${answers.join('')} </div>
                    `
                );
            }



        }
    );

    protocolExamContainer.innerHTML = outputProtocolExam.join('');
}

// function showResults() {}

// submitButton.addEventListener('click', showResults);
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



// function protocolExamAnswers(){
    // let question1Answer1 = document.getElementsByName('q1_3').value;

    // let question2Answer1 = document.getElementsByName('q2_4').value;

    // let question3Answer1 = document.getElementsByName('q3_2').value;

    // let question4Answer1 = document.getElementsByName('q4_1').value;

    // let question5Answer1 = document.getElementsByName('q5_2').value;
    // let question5Answer2 = document.getElementsByName('q5_3').value;
    // let question5Answer3 = document.getElementsByName('q5_4').value;

    // let question6Answer1 = document.getElementsByName('q6_4').value;

    // let question7Answer1 = document.getElementsByName('q7_2').value;

    // let question8Answer1 = document.getElementsByName('q8_1').value;

    // let question9Answer1 = document.getElementsByName('q9_3').value;

    // let question10Answer1 = document.getElementsByName('q10_1').value;
    // let question10Answer2 = document.getElementsByName('q10_2').value;
    // let question10Answer3 = document.getElementsByName('q10_3').value;
    // let question10Answer4 = document.getElementsByName('q10_4').value;

    // let question11Answer1 = document.getElementsByName('q11_4').value;

    // let question12Answer1 = document.getElementsByName('q12_2').value;

    // let question13Answer1 = document.getElementsByName('q13_1').value;
    // let question13Answer2 = document.getElementsByName('q13_2').value;
    // let question13Answer3 = document.getElementsByName('q13_4').value;

    // let question14Answer1 = document.getElementsByName('q14_1').value;

    // let question15Answer1 = document.getElementsByName('q15_2').value;
    // let question15Answer2 = document.getElementsByName('q15_4').value;

    // let question16Answer1 = document.getElementsByName('q16_1').value;

    // let question17Answer1 = document.getElementsByName('q17_2').value;

    // let question18Answer1 = document.getElementsByName('q18_3').value;

    // let question19Answer1 = document.getElementsByName('q19_1').value;

    // let question20Answer1 = document.getElementsByName('q20_2').value;

    // let question21Answer1 = document.getElementsByName('q21_2').value;

    // let question22Answer1 = document.getElementsByName('q22_3').value;

    // let question23Answer1 = document.getElementsByName('q23_4').value;

    // let question24Answer1 = document.getElementsByName('q24_1').value;

    // let question25Answer1 = document.getElementsByName('q25_4').value;


    // let question26Answer1 = document.getElementsByName('q26_1').value;
    // let question26Answer2 = document.getElementsByName('q26_2').value;

    // let question27Answer1 = document.getElementsByName('q27_1').value;
    // let question27Answer2 = document.getElementsByName('q27_2').value;

    // let question28Answer1 = document.getElementsByName('q28_4').value;
    
    // let question29Answer1 = document.getElementsByName('q29_2').value;

    // let question30Answer1 = document.getElementsByName('q30_3').value;
    // let question30Answer2 = document.getElementsByName('q30_4').value;

    // let question31Answer1 = document.getElementsByName('q31_1').value;

    // let question32Answer1 = document.getElementsByName('q32_1').value;
    // let question32Answer2 = document.getElementsByName('q32_2').value;
    // let question32Answer3 = document.getElementsByName('q32_3').value;
    // let question32Answer4 = document.getElementsByName('q32_4').value;

    // let question33Answer1 = document.getElementsByName('q33_1').value;
    // let question33Answer2 = document.getElementsByName('q33_2').value;

    // let question34Answer1 = document.getElementsByName('q34_4').value;

    // let question35Answer1 = document.getElementsByName('q35_1').value;
    // let question35Answer2 = document.getElementsByName('q35_2').value;

    // let question36Answer1 = document.getElementsByName('q36_1').value;
    // let question36Answer2 = document.getElementsByName('q36_2').value;

    // let question37Answer1 = document.getElementsByName('q37_1').value;
    // let question37Answer2 = document.getElementsByName('q37_2').value;
    // let question37Answer3 = document.getElementsByName('q37_3').value;
    // let question37Answer4 = document.getElementsByName('q37_4').value;

    // let question38Answer1 = document.getElementsByName('q38_3').value;
    // let question38Answer2 = document.getElementsByName('q38_4').value;

    // let question39Answer1 = document.getElementsByName('q39_2').value;
    // let question39Answer2 = document.getElementsByName('q39_3').value;
    // let question39Answer3 = document.getElementsByName('q39_4').value;

    // let question40Answer1 = document.getElementsByName('q40_2').value;

    // let question41Answer1 = document.getElementsByName('q41_1').value;
    
    // let question42Answer1 = document.getElementsByName('q42_1').value;
    
    // let question43Answer1 = document.getElementsByName('q43_4').value;
    
    // let question44Answer1 = document.getElementsByName('q44_2').value;
    
    // let question45Answer1 = document.getElementsByName('q45_1').value;
    
    // let question46Answer1 = document.getElementsByName('q46_1').value;
    
    // let question47Answer1 = document.getElementsByName('q47_3').value;
    
    // let question48Answer1 = document.getElementsByName('q48_3').value;
    
    // let question49Answer1 = document.getElementsByName('q49_2').value;

    // let question50Answer1 = document.getElementsByName('q50_1').value;

// }

const quizContainer = document.getElementById('quiz_1');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


const questionsProtocolExam = [
    {
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
        question: "True or False: Any unit may wear a previously worn uniform of their same division?",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    {
        question: "True or False: Commanders may wear any previously worn uniform of their same division?",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "a"
    }
// ,
    // {
    //     questionMulti: "Which Divisions have Tool requirements?",
    //     answers: {
    //         a: "Combat",
    //         b: "Engineering",
    //         c: "Medical",
    //         d: "Science"
    //     },
    //     correctAnswer: "b" + "c" + "d"
    // },
    // {
    //     question: "What are the Combat Division Tool requirements?",
    //     answers: {
    //         a: "Pistol",
    //         b: "Knife",
    //         c: "Rifle",
    //         d: "None"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     question: "What are the Engineering Division Tool requirements?",
    //     answers: {
    //         a: "MultiTool",
    //         b: "MultiTool + All attachments",
    //         c: "Uniform",
    //         d: "None"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "What are the Medical Division Tool requirements?",
    //     answers: {
    //         a: "ParaMed",
    //         b: "ParaMed + All MedPens",
    //         c: "All MedPens",
    //         d: "None"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: ">What are the Science Division Tool requirements?",
    //     answers: {
    //         a: "MultiTool",
    //         b: "ParaMed",
    //         c: "Tigerclaw",
    //         d: "None"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     questionMulti: "What instances may Uniform regulations be excused?",
    //     answers: {
    //         a: "When off-duty",
    //         b: "During criticial operations",
    //         c: "When looting",
    //         d: "When stated by Leadership"
    //     },
    //     correctAnswer: "a" + "b" + "c" + "d"
    // },
    // {
    //     question: "What weapons are units restricted from using?",
    //     answers: {
    //         a: "Grenades & Launchers",
    //         b: "Trip Mines",
    //         c: "Railguns",
    //         d: "None"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     question: "What is the punishment for wearing improper uniform?",
    //     answers: {
    //         a: "Insubordination Warning",
    //         b: "Red A Alert",
    //         c: "Red D Alert<",
    //         d: "Red U Alert"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     questionMulti: "When does a rank 2, or lower, Salute?",
    //     answers: {
    //         a: "When addressed by Officer",
    //         b: "When addressing an Officer",
    //         c: "When entering room with Officer",
    //         d: "When dismissed by Officer"
    //     },
    //     correctAnswer: "a" + "b" + "d"
    // },
    // {
    //     question: "True of False: Officers are not required to Salute back to lower Ranks.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     questionMulti: "When must an Officer Salute?",
    //     answers: {
    //         a: "When subordinate Salutes Officer",
    //         b: "When addressing another Officer",
    //         c: "When dismissing another Officer",
    //         d: "When addressing a Superior"
    //     },
    //     correctAnswer: "b" + "d"
    // },
    // {
    //     question: "For Rank 2 units, or lower, what emote follows after Salute?",
    //     answers: {
    //         a: "Attention emote",
    //         b: "At Ease emote",
    //         c: "Bow emote",
    //         d: "Stand emote"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "When is At East emote used?",
    //     answers: {
    //         a: "When Officer approaches",
    //         b: "When Officer says “At Ease”",
    //         c: "When Officer says “As you were” or “Dismissed”",
    //         d: "All of the above"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "When may a unit return to their regular duties from Attention emote or At Ease emote?",
    //     answers: {
    //         a: "When Officer says “As you were”",
    //         b: "When Officer says “Dismissed”",
    //         c: "When Officer says “As you were” or “Dismissed”",
    //         d: "When Officer says “At Ease”"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "True or False: Units must Salute an Officer when Dismissed.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "When is Attention emote used independently from Salute?",
    //     answers: {
    //         a: "When Dismissed",
    //         b: "When unit says “Officer on Deck”",
    //         c: "When Officer uses Attention emote",
    //         d: "Never"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "When must Units request Permission to Board?",
    //     answers: {
    //         a: "When Officer is boarding",
    //         b: "When Officer has boarded",
    //         c: "Always",
    //         d: "Never"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "When must Units request Permission to Depart?",
    //     answers: {
    //         a: "When Officer departs",
    //         b: "When Officer has departed",
    //         c: "Always",
    //         d: "Never"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "Who may grant Permission for Boarding or Departing?",
    //     answers: {
    //         a: "Lieutenant",
    //         b: "Officer",
    //         c: "Captain",
    //         d: "All of the above"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     question: "True or False: a Lieutenant may grant an Officer permission to board.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "What part of a ship is off-limits to Rank 1 units or lower?",
    //     answers: {
    //         a: "Armory",
    //         b: "Engineering",
    //         c: "Medical",
    //         d: "Medical",
    //         e: "The Bridge"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     questionMulti: "Combat Division Units are restricted from what parts of a ship?",
    //     answers: {
    //         a: "Armory",
    //         b: "Engineering",
    //         c: "Medical",
    //         d: "The Bridge",
    //         e: "None"
    //     },
    //     correctAnswer: "b" + "c"
    // },
    // {
    //     questionMulti: "Engineer Division Units are restricted from what parts of a ship?",
    //     answers: {
    //         a: "Armory",
    //         b: "Engineering",
    //         c: "Medical",
    //         d: "The Bridge",
    //         e: "None"
    //     },
    //     correctAnswer: "a" + "c"
    // },
    // {
    //     questionMulti: "Medical Division Units are restricted from what parts of a ship?",
    //     answers: {
    //         a: "Armory",
    //         b: "Engineering",
    //         c: "Medical",
    //         d: "The Bridge",
    //         e: "None"
    //     },
    //     correctAnswer: "e"
    // },
    // {
    //     question: "True or False: Rank 3: Officers aren’t restricted from parts of a ship.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     questionMulti: "Which units may freely enter the Captain’s Cabin?",
    //     answers: {
    //         a: "Lieutenants",
    //         b: "Officers",
    //         c: "1st Officer",
    //         d: "Captain"
    //     },
    //     correctAnswer: "c" + "d"
    // },
    // {
    //     question: "True or False: Gameplay Rules only apply in-game when associating with Galactic Order members.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     questionMulti: "When/Where are Unit Conduct codes not required?",
    //     answers: {
    //         a: "When offline",
    //         b: "When off-duty",
    //         c: "When in combat",
    //         d: "When in Habitation areas"
    //     },
    //     correctAnswer: "a" + "b" + "c" + "d"
    // },
    // {
    //     questionMulti: "What are Rank 3: Officers responsible for Recording / Reporting?",
    //     answers: {
    //         a: "Alerts & Warnings",
    //         b: "Hours & Missions",
    //         c: "Patrols & Months",
    //         d: "Recruits & Events"
    //     },
    //     correctAnswer: "a" + "b"
    // },
    // {
    //     question: "What are 1st Officers responsible for Recording / Reporting?",
    //     answers: {
    //         a: "Alerts & Warnings",
    //         b: "Hours & Missions",
    //         c: "Patrols & Months",
    //         d: "Recruits & Events"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     questionMulti: "Select all Units Trooper Commanders can oversee.",
    //     answers: {
    //         a: "Ensign Troopers",
    //         b: "Lieutenant & Shock Troopers",
    //         c: "Outriders & Agents",
    //         d: "Combat Pilots"
    //     },
    //     correctAnswer: "a" + "b"
    // },
    // {
    //     questionMulti: "Select all Units Engineer Commanders can oversee.",
    //     answers: {
    //         a: "Ensign Operators",
    //         b: "Lieutenant Engineers",
    //         c: "Combat Pilots",
    //         d: "Combat Commanders"
    //     },
    //     correctAnswer: "a" + "b"
    // },
    // {
    //     questionMulti: "Select all Units Medical Commanders can oversee.",
    //     answers: {
    //         a: "Ensign Medics",
    //         b: "Lieutenant Corpsman",
    //         c: "Ensign Troopers",
    //         d: "Lieutenant & Shock Troopers"
    //     },
    //     correctAnswer: "a" + "b" + "c" + "d"
    // },
    // {
    //     questionMulti: "Select all Units Science Officers can oversee.",
    //     answers: {
    //         a: "Ensign Operators",
    //         b: "Ensign Troopers",
    //         c: "Field Researchers",
    //         d: "Laboratory Techs"
    //     },
    //     correctAnswer: "c" + "d"
    // },
    // {
    //     questionMulti: "Who do Commanders report to?",
    //     answers: {
    //         a: "Officers",
    //         b: "1st Officers",
    //         c: "Captains",
    //         d: "Admirals"
    //     },
    //     correctAnswer: "b" + "c" + "d"
    // },
    // {
    //     question: "What division is a CP Commander part of?",
    //     answers: {
    //         a: "Combat",
    //         b: "Engineering",
    //         c: "Medical",
    //         d: "Science"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "True or False: Patrols are counted when reporting for duty.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "True or False: An individual unit’s Hours & Missions are recorded by an Officer only after they’ve reported for duty.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "How does an Officer Report for Duty?",
    //     answers: {
    //         a: "When they report to a Superior",
    //         b: "When they report to another Officer",
    //         c: "When a subordinate reports for duty",
    //         d: "All of the above"
    //     },
    //     correctAnswer: "d"
    // },
    // {
    //     question: "True or False: Roleplay is only required when first reporting for duty.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "True or False: A Patrol is only considered to end when the unit “Requests Relief” or logs off.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "What is a Red A Alert?",
    //     answers: {
    //         a: "An Alert for unit to wear the proper uniform",
    //         b: "An Alert for unit to wear the proper tool(s)",
    //         c: "An Alert for Weapon violation",
    //         d: "All of the abov"
    //     },
    //     correctAnswer: "a"
    // },
    // {
    //     question: "What happens with 3 Red A Alerts on Record?",
    //     answers: {
    //         a: "Demotion",
    //         b: "Termination",
    //         c: "Official Warning",
    //         d: "Benefits Removed"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "What is an Act of Insubordination?",
    //     answers: {
    //         a: "3 Red A Alerts",
    //         b: "3 Red U Alerts",
    //         c: "Official Warning",
    //         d: "Law violation"
    //     },
    //     correctAnswer: "c"
    // },
    // {
    //     question: "True or False: Alerts and Official Warnings may be removed from record over time, at Leadership’s discretion.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "b"
    // },
    // {
    //     question: "True or False: Demotion or Termination may occur with 1st Official Warning.",
    //     answers: {
    //         a: "True",
    //         b: "False"
    //     },
    //     correctAnswer: "a"
    // }

]

function buildQuiz() {
    const examProtocolOutput = [];

    questionsProtocolExam.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers) {

                answers.push(
                    `<div>
                        <label class="radio text-center">
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                                <Span id="answer_letter">${letter}</Span>
                                ${currentQuestion.answers[letter]}
                            </label>
                        </div>`
                );
            }

            examProtocolOutput.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>}`
            );
        }
    );

    quizContainer.innerHTML = examProtocolOutput.join('');
}
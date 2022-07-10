document.getElementById("protocol_exam_start_button").addEventListener("click", function(){
    document.getElementById('protocol_timer').innerHTML =
    30 + ":" + 01;
    startTimer();

    function startTimer() {
        var presentTime = document.getElementById('protocol_timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if(s==59){m=m-1}
        if(m<0){
            return
        }
        
        document.getElementById('protocol_timer').innerHTML =
            m + ":" + s;
        console.log(m)
        setTimeout(startTimer, 1000);    
    }

    function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec};
    if (sec < 0) {sec = "59"};
    return sec;
    }
});

document.getElementById("medical_exam_start_button").addEventListener("click", function(){
    document.getElementById('medical_timer').innerHTML =
    25 + ":" + 01;
    startTimer();

    function startTimer() {
        var presentTime = document.getElementById('medical_timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if(s==59){m=m-1}
        if(m<0){
            return
        }
        
        document.getElementById('medical_timer').innerHTML =
            m + ":" + s;
        console.log(m)
        setTimeout(startTimer, 1000);    
    }

    function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec};
    if (sec < 0) {sec = "59"};
    return sec;
    }
});

document.getElementById("g_tactical_exam_start_button").addEventListener("click", function(){
    document.getElementById('g_tactical_timer').innerHTML =
    25 + ":" + 01;
    startTimer();

    function startTimer() {
        var presentTime = document.getElementById('g_tactical_timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if(s==59){m=m-1}
        if(m<0){
            return
        }
        
        document.getElementById('g_tactical_timer').innerHTML =
            m + ":" + s;
        console.log(m)
        setTimeout(startTimer, 1000);    
    }

    function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec};
    if (sec < 0) {sec = "59"};
    return sec;
    }
});

document.getElementById("s_tactical_exam_start_button").addEventListener("click", function(){
    document.getElementById('s_tactical_timer').innerHTML =
    00 + ":" + 11;
    startTimer();

    function startTimer() {
        var presentTime = document.getElementById('s_tactical_timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if(s==59){m=m-1}
        if(m<0){
            return
        }
        
        document.getElementById('s_tactical_timer').innerHTML =
            m + ":" + s;
        console.log(m)
        setTimeout(startTimer, 1000);    
    }

    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec
        };
    if (sec < 0) {sec = "59"};
    return sec;
    }
});
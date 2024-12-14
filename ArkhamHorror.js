window.onload = pageReady;



function pageReady() {
    const buttonbox = document.getElementById("buttonbox");
    const StartButton = document.getElementById("startbutton");
    const phase1 = document.getElementById("phase1");
    const step1 = document.getElementById("step1")
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const step4 = document.getElementById("step4");
    const phase2 = document.getElementById("phase2");
    const phase2q1 = document.getElementById("phase2q1");
    const stepO1A = document.getElementById("stepO1A");
    const stepO1C = document.getElementById("stepO1C");
    const stepA1A = document.getElementById("stepA1A");
    const stepA1B = document.getElementById("stepA1B");
    const stepO1B = document.getElementById("stepO1B");
    const stepA1C = document.getElementById("stepA1C");
    const arkham = document.getElementById("arkham");
    const otherworlds = document.getElementById("otherworlds");
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    const fight = document.getElementById("fight");
    const evade = document.getElementById("evade");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const p1track = document.getElementById("progressdetails1");
    const p2track = document.getElementById("progressdetails2");
    const music1 = document.getElementById("music");
    const end = document.getElementById("end");
    const end1 = document.getElementById("end1");






    phase1.style.display = "none";
    step1.style.display = "none";
    step2.style.display = "none";
    step3.style.display = "none";
    step4.style.display = "none";
    phase2.style.display = "none";
    phase2q1.style.display = "none";
    stepO1A.style.display = "none";
    stepO1B.style.display = "none";
    stepO1C.style.display = "none";
    stepA1A.style.display = "none";
    stepA1B.style.display = "none";
    stepA1C.style.display = "none";
    p1track.style.display = "none";
    p2track.style.display = "none";




    //LISTEN FOR load EVENT
    StartButton.onclick = StartPlaying;
    function StartPlaying() {
        buttonbox.style.display = "none";
        p1track.style.display = "block";
        phase1.style.display = "block";
        music1.play();



    }
    phase1.onclick = phase1click;
    function phase1click() {
        step1.style.display = "block";
        p1track.style.display = "block";



    }
    step1.onclick = step1click;
    function step1click() {
        step1.style.display = "none";
        step2.style.display = "block";
        document.getElementById("begin").click();



    }
    step2.onclick = step2click;
    function step2click() {
        step2.style.display = "none";
        step3.style.display = "block";
        document.getElementById("middle").click();
    }
    step3.onclick = step3click;
    function step3click() {
        step3.style.display = "none";
        step4.style.display = "block";
        document.getElementById("end").click();
    }
    step4.onclick = step4click;
    function step4click() {
        step4.style.display = "none";
        phase2.style.display = "block";
        phase1.style.display = "none";
        p1track.style.display = "none";
        p2track.style.display = "block";
    }
    phase2.onclick = phase2click;
    function phase2click() {
        phase2q1.style.display = "block";
        document.getElementById("begin1").click();
    }
    arkham.onclick = arkhamclick;
    function arkhamclick() {
        phase2q1.style.display = "none";
        stepA1A.style.display = "block";
        document.getElementById("begin1").click();

    }
    yes.onclick = yesclick;
    function yesclick() {
        stepA1A.style.display = "none";
        stepA1B.style.display = "block";
        document.getElementById("middle1").click();
    }
    fight.onclick = fightclick;
    function fightclick() {
        stepA1B.style.display = "none";
        stepA1C.style.display = "block";
        document.getElementById("end1").click();
    }
    evade.onclick = evadeclick;
    function evadeclick() {
        stepA1B.style.display = "none";
        stepA1C.style.display = "block";
        document.getElementById("end1").click();
    }
    no.onclick = noclick;
    function noclick() {
        stepA1A.style.display = "none";
        stepA1C.style.display = "block";
        document.getElementById("end1").click();
    }
    otherworlds.onclick = otherworldsclick;
    function otherworldsclick() {
        phase2q1.style.display = "none";
        stepO1A.style.display = "block";

    }
    right.onclick = rightclick;
    function rightclick() {
        stepO1A.style.display = "none";
        stepO1B.style.display = "block";
        document.getElementById("middle1").click();
    }
    left.onclick = leftclick;
    function leftclick() {
        stepO1A.style.display = "none";
        stepO1C.style.display = "block";
        document.getElementById("middle1").click();
    }
    stepO1C.onclick = stepO1Cclick;
    function stepO1Cclick() {
        stepO1C.style.display = "none";
        stepA1C.style.display = "block";
        document.getElementById("end1").click();
    }
    stepO1B.onclick = stepO1Bclick;
    function stepO1Bclick() {
        stepO1B.style.display = "none";
        stepA1C.style.display = "block";
        document.getElementById("end1").click();

    }

    stepA1C.onclick = stepA1Cclick;
    function stepA1Cclick() {
        stepA1C.style.display = "none";
        buttonbox.style.display = "block";
        phase2.style.display = "none";
        p2track.style.display = "none";
        music1.pause();

        end.checked = false;
        end1.checked = false;
    }


}



console.log("hello");
//
//color things
//
// Version 4.0 coolest thing ive stolen yet

//
//music things
//
var playflag=false;
var pf1=true;
var pf2=true;
var pf3=true;
var pf4=true;
var steptime=0;
var stepoffset=-3;
var globalBpm=120;
var audioElements=document.getElementsByTagName("audio");
console.log(audioElements)

//timed things
function runTimed(){
var interval = 10; // ms
var expected = Date.now() + interval;
setTimeout(step, interval);
function step() {
    var dt = Date.now() - expected; // the drift (positive for overshooting)
    if (dt > interval) {
        // something really bad happened. Maybe the browser (tab) was inactive?
        // possibly special handling to avoid futile "catch up" run
    }
    
    expected += interval;
    if (playflag) {
        setFlags();
        steptime++;
        setTimeout(step, Math.max(0, interval - dt)); // take into account drift
    }
}
}
    //the runtime function executed in timer
function setFlags(){
    const beatToStep=((60/globalBpm)*100);
    if ((beatToStep*16)>steptime) {
        for (let i = 0; i < audioElements.length; i++) {
            const e = audioElements[i];
            if (isFinite(e.duration) && e.dataset.beat==1) {
                            console.log(e.duration);
                e.playbackRate=e.duration/((60/(+globalBpm))*16);
            }
            if (pf1) {
                if (e.dataset.beat==1) {
                    e.pause();
                    e.currentTime=0;
                    e.play();
                }
            }
        }
        pf1=false;
    }
    if ((beatToStep*16)<=steptime-stepoffset) {
        for (let i = 0; i < audioElements.length; i++) {
            const e = audioElements[i];
            if (isFinite(e.duration) &&  (e.dataset.beat==1||e.dataset.beat==2)) {
                e.playbackRate=e.duration/((60/(+globalBpm))*16);
            }
            if (pf2) {
                if (e.dataset.beat==1||e.dataset.beat==2) {
                    e.pause();
                    e.currentTime=0;
                    e.play();
                }
            }
        }
        pf2=false;
    }
    
    if ((beatToStep*32)<=steptime-(stepoffset*2)) {
        for (let i = 0; i < audioElements.length; i++) {
            const e = audioElements[i];
            if (isFinite(e.duration) &&  (e.dataset.beat==1||e.dataset.beat==2||e.dataset.beat==3)) {
                e.playbackRate=e.duration/((60/(+globalBpm))*16);
            }
            if (pf3) {
                if (e.dataset.beat==1||e.dataset.beat==2||e.dataset.beat==3) {
                    e.pause();
                    e.currentTime=0;
                    e.play();
                }
            }
        }
        pf3=false;
    }
    if ((beatToStep*48)<=steptime-(stepoffset*3)) {
        for (let i = 0; i < audioElements.length; i++) {
            const e = audioElements[i];
            if (isFinite(e.duration) &&  ( e.dataset.beat==1||e.dataset.beat==2||e.dataset.beat==3||e.dataset.beat==4)) {
                e.playbackRate=e.duration/((60/(+globalBpm))*16);
            }
            if (pf4) {
                if (e.dataset.beat==1||e.dataset.beat==2||e.dataset.beat==3||e.dataset.beat==4) {
                    e.pause();
                    e.currentTime=0;
                    e.play();
                }
            }
        }
        pf4=false;
    } 
    if ((beatToStep*64)<=steptime-(stepoffset*4)) {
        pf1=true;
        pf2=true;
        pf3=true;
        pf4=true;
        steptime=0;
    }
    console.log(pf1+pf2+pf3+pf4)
}

function play(){
    playflag=true;
    runTimed();
}
function stop(){
    pf1=true;
    pf2=true;
    pf3=true;
    pf4=true;
    playflag=false;
    steptime=-1;
}
function changeBpm(e){
    globalBpm=e.value;
}
function changeSrc(e){
    var nsrc = e.options[e.selectedIndex].getAttribute('data-src');
    console.log(    e.parentElement.getElementsByClassName("sbPartName"));
    var beat = e.parentElement.getElementsByClassName("sbPartBackground")[0].innerHTML;
    e.parentElement.getElementsByTagName("source")[0].src=nsrc;
    var audio =  e.parentElement.getElementsByTagName("audio")[0];
    audio.dataset.beat=beat;
    audio.load();
    buildRow(document.getElementsByClassName("productionSongbuilder")[0]);
    e.parentElement.getElementsByClassName("sbPartName")[0].innerHTML=e.options[e.selectedIndex].innerHTML;
}

//
//page things
//
buildRow(document.getElementsByClassName("productionSongbuilder")[0]);
function buildRow(appendage){
    console.log(appendage);
    let single = document.createElement("div");
    single.className="sbSingleRow";
    for (let i = 1; i <= 4; i++) {
        let sbPart=document.createElement("div",0);
        sbPart.className="sbRowPart"
        let sbPartBackground=document.createElement("div",0);
        sbPartBackground.className="sbPartBackground";
        sbPartBackground.innerHTML=i;
        sbPart.append(sbPartBackground);

        let sbPartName=document.createElement("div",0);
        sbPartName.className="sbPartName";
        sbPart.append(sbPartName);

        let sbPartAddData=document.createElement("div",0);
        sbPartAddData.className="sbPartAddData";
        let sbPartBpm=document.createElement("div",0);
        sbPartBpm.className="sbPartBpm";
        sbPartAddData.append(sbPartBpm);
        let sbPartKey=document.createElement("div",0);
        sbPartKey.className="sbPartKey";
        sbPartAddData.append(sbPartKey);
        sbPart.append(sbPartAddData);

        let aud= document.createElement("audio");
        let sourc = document.createElement("source");
        sourc.type="audio/mp3";
        aud.append(sourc);
        sbPart.append(aud);

        sbPart.append(buildSelection());
        

        single.append(sbPart);
        
    }
    appendage.append(single);
    colorLines();
}
function buildSelection(){
    let selection=document.createElement("select");
    selection.className="sbPartSelector";
    selection.onchange=function(){
        changeSrc(selection);
      };
    var o;

    o=null;
    o=document.createElement("option");
    o.dataset.src="";
    selection.append(o);

    o=null;
    o=document.createElement("option");
    o.dataset.src="prisesk_4onflor.mp3";
    o.innerHTML="Prisesk 4ondafloor percs";
    selection.append(o);

    o=null;
    o=document.createElement("option");
    o.dataset.src="prisesk_gmelody.mp3";
    o.innerHTML="Prisesk backing guitar melody";
    selection.append(o);

    o=null;
    o=document.createElement("option");
    o.dataset.src="sadnessv5_bassline.mp3";
    o.innerHTML="Saddnessv5 bassline";
    selection.append(o);

    o=null;
    o=document.createElement("option");
    o.dataset.src="sadnessv5_backingvox.mp3";
    o.innerHTML="Saddnessv5 Backing Vocals";
    selection.append(o);

    return selection;
}
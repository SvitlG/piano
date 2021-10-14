let piano = document.getElementsByTagName('kbd'),
    pianoStyle = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)',
    pianoShadow = ' 2px -2px black inset, -2px -2px black inset';

console.log(piano);

document.addEventListener("keydown", function(event) {
    let audio = document.createElement('audio');
    audio.type = "audio/mpeg";
    audio.autoplay=true;
    console.log(event.target.attributes);
    if (event.code==='KeyA') {
        console.log(event, "The 'a' key is pressed.", audio);
        audio.src = "white_keys/A.mp3";
        piano[0].style.background = pianoStyle;
        piano[0].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[0].style.background = 'white';
            piano[0].style.boxShadow = ' none';
        }, 250);
    } else
        if (event.code==='KeyS') {
        console.log(event, "The 's' key is pressed.", audio);
        audio.src = "white_keys/S.mp3";
        piano[1].style.background = pianoStyle;
        piano[1].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[1].style.background = 'white';
            piano[1].style.boxShadow = ' none';
            }, 250);
    } else
        if (event.code==='KeyD') {
        console.log(event, "The 'd' key is pressed.", audio);
        audio.src = "white_keys/D.mp3";
        piano[2].style.background = pianoStyle;
        piano[2].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[2].style.background = 'white';
            piano[2].style.boxShadow = ' none';
            }, 250);
    } else
        if (event.code==='KeyF') {
        console.log(event, "The 'f' key is pressed.", audio);
        audio.src = "white_keys/F.mp3";
        piano[3].style.background = pianoStyle;
        piano[3].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[3].style.background = 'white';
            piano[3].style.boxShadow = ' none';
            }, 250);
    } else
        if (event.code==='KeyG') {
        console.log(event, "The 'g' key is pressed.", audio);
        audio.src = "white_keys/G.mp3";
        piano[4].style.background = pianoStyle;
        piano[4].style.boxShadow = pianoShadow;
            setTimeout(() => {
            piano[4].style.background = 'white';
            piano[4].style.boxShadow = ' none';
            }, 250);
    } else
        if (event.code==='KeyH') {
        console.log(event, "The 'h' key is pressed.", audio);
        audio.src = "white_keys/H.mp3";
        piano[5].style.background = pianoStyle;
        piano[5].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[5].style.background = 'white';
            piano[5].style.boxShadow = ' none';
            }, 250);
    } else
        if (event.code==='KeyJ') {
        console.log(event, "The 'j' key is pressed.", audio);
        audio.src = "white_keys/J.mp3";
        piano[6].style.background = pianoStyle;
        piano[6].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[6].style.background = 'white';
            piano[6].style.boxShadow = ' none';
            }, 250);
    }
    if (event.code==='KeyW') {
        console.log(event, "The 'w' key is pressed.", audio);
        audio.src = "black_keys/W.mp3";
        piano[7].style.background = pianoStyle;
        piano[7].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[7].style.background = 'black';
            piano[7].style.boxShadow = ' none';
        }, 250);
    } else
    if (event.code==='KeyE') {
        console.log(event, "The 'e' key is pressed.", audio);
        audio.src = "black_keys/E.mp3";
        piano[8].style.background = pianoStyle;
        piano[8].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[8].style.background = 'black';
            piano[8].style.boxShadow = ' none';
        }, 250);
    } else
    if (event.code==='KeyT') {
        console.log(event, "The 't' key is pressed.", audio);
        audio.src = "black_keys/T.mp3";
        piano[9].style.background = pianoStyle;
        piano[9].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[9].style.background = 'black';
            piano[9].style.boxShadow = ' none';
        }, 250);
    } else
    if (event.code==='KeyY') {
        console.log(event, "The 'y' key is pressed.", audio);
        audio.src = "black_keys/Y.mp3";
        piano[10].style.background = pianoStyle;
        piano[10].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[10].style.background = 'black';
            piano[10].style.boxShadow = ' none';
        }, 250);
    } else
    if (event.code==='KeyU') {
        console.log(event, "The 'u' key is pressed.", audio);
        audio.src = "black_keys/U.mp3";
        piano[11].style.background = pianoStyle;
        piano[11].style.boxShadow = pianoShadow;
        setTimeout(() => {
            piano[11].style.background = 'black';
            piano[11].style.boxShadow = ' none';
        }, 250);
    } else {
        console.log('warning');
    }
});
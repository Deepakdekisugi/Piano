const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];

let audio = new Audio("tunes/a.wav"); // by default, audio src is "a" tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio src based on key pressing
    audio.play();//playing the audio


    const clickedkey = document.querySelector(`[data-key="${key}"]`);//getting clicked key element shadow
    clickedkey.classList.add("active");
    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 150);
};

//passed the range value slider as volume
const handleVolume = (e) => {
    audio.volume = e.target.value;
};

//toggle hide class for each key on check box click
const showHideKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};


//calling playTune function with passing data-key value as an argument
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
};


keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
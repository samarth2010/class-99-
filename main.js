var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {

    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}

recognition.onresult = function run(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    speak();
}


function speak() {
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utter_this = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utter_this);
    Webcam.attach(camera);
}

Webcam.set({
width:400,
hieght:400,
image_format:"png",
png_quality:90
});
camera = document.getElementById("camera");

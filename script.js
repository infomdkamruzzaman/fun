// let memberlist = ["kamruzzaman",'rafid','nahid','hasib']

// function welcome (membername){
//     let utterance = new SpeechSynthesisUtterance(membername);
//     speechSynthesis.speak(utterance);
// }
// for (let i = 0; i < memberlist.length; i++) {
//     welcome (memberlist[i]);

// }
// welcome();

// var msg = new SpeechSynthesisUtterance('Hello World');
// window.speechSynthesis.speak(msg);


// for chorome browser 

// function speakText() {
//     const textInput = document.getElementById('text').value;
//     const utterance = new SpeechSynthesisUtterance(textInput);

//     // Optional: Set voice and other properties
//     utterance.rate = 1;  // Speed (0.1 to 10)
//     utterance.pitch = 0; // Pitch (0 to 2)
//     utterance.volume = 1; // Volume (0 to 1)

//     // Speak the text
//     window.speechSynthesis.speak(utterance);
// }

function speakText() {
    var textInput = document.getElementById('input-dropdown').value;
    const texttInput = document.getElementById('text').value;
    const repetInput = document.getElementById('repets').value;
    let result = document.querySelector("h2");

    let myname = ["Kamrul",'kamrul','Kaamrul','Kammrul ',"Kamrrul",'Kamruul'
        ,"Kamrull",'KAmrul','KAMrul','KAMRul',"KAMRUl",'Camrujjaman',"kamruzzaaman"
    ]
    if (!myname.includes(textInput,texttInput)) {
        for (let i = 0; i < repetInput; i++) { // Repeat 10 times
            const utterance = new SpeechSynthesisUtterance(textInput + texttInput);
    
            // Optional: Set voice and other properties
            utterance.rate = 0.7;  // Speed (0.1 to 10)
            utterance.pitch = 1; // Pitch (0 to 2)
            utterance.volume = 1; // Volume (0 to 1)
    
            // Speak the text
          window.speechSynthesis.speak(utterance);
        }
    }
    else{
        result.innerHTML= "Create by Md Kamruzzaman";
    
    }
    

    // for (let i = 0; i < repetInput; i++) { // Repeat 10 times
    //     const utterance = new SpeechSynthesisUtterance(textInput);

    //     // Optional: Set voice and other properties
    //     utterance.rate = 0.7;  // Speed (0.1 to 10)
    //     utterance.pitch = 1; // Pitch (0 to 2)
    //     utterance.volume = 1; // Volume (0 to 1)

    //     // Speak the text
    //     window.speechSynthesis.speak(utterance);
    // }


}
document.getElementById('options').addEventListener('input', function(event) {
    // Prevents any input other than the select options
    event.preventDefault();
    this.blur(); // Optional: to ensure focus is lost
});

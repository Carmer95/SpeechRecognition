const speech = document.querySelector('.speech');
const button = document.getElementById('start')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
// recognition.continuous = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    speech.appendChild(p);

    if(e.results[0].isFinal) {
        if(text.includes('hello')) {
        p = document.createElement('p');  
        p.classList.add('replay');
        p.innerText= "Hi";
        speech.appendChild(p);
        }
        if(text.includes('what is your name') || text.includes("what's your name")) {
        p = document.createElement('p');  
        p.classList.add('replay');
        p.innerText= "I am BalthBot, nice to meet you!";
        speech.appendChild(p);
        }
        if(text.includes('open my twitch') || text.includes('open Twitch')) {
        p = document.createElement('p');  
        p.classList.add('replay');
        p.innerText= "Opening your Twitch channel :)";
        speech.appendChild(p);
        window.open('https://twitch.tv/BalthierRL')
        }
      p = document.createElement('p');
    }

    console.log(text);
})

recognition.addEventListener('end', () => {
    recognition.start();
})

// button.addEventListener('click', () => {
//     recognition.addEventListener('end', () => {
//         recognition.start();
//     })
// })

recognition.start()
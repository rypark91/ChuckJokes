let joke = document.querySelector("#joke");
let buttons = document.getElementsByClassName("category");
let random = document.querySelector('#random');
let body = document.querySelector('#container');
let pic = document.querySelector("pic");

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		'X-RapidAPI-Key': '08de0fa1b3mshc88eaff21fbf380p15fd7fjsn2fdca5c03488'
	}
};

for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
        joke.innerText = "Loading joke...";
        fetch(`https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=${this.innerText.toLowerCase()}`, options)
        .then(response => response.json())
        .then(response => joke.innerText = response.value)
        .catch(err => console.error(err));
        changeBackground(this.innerText);
        });
        
}

function changeBackground(work){
        let word = work.toLowerCase();
        body.className = '';

        if(word == 'animal'){
                body.classList.add('animal');
        }
        else if(word == 'career'){
                body.classList.add('career');
        }
        else if(word == 'celebrity'){
                body.classList.add('celebrity');
        }
        else if(word == 'dev'){
                body.classList.add('dev');
        }
        else if(word == 'fashion'){
                body.classList.add('fashion');
        }
        else if(word == 'food'){
                body.classList.add('food');
        }
        else if(word == 'history'){
                body.classList.add('history');
        }
        else if(word == 'money'){
                body.classList.add('money');
        }
        else if(word == 'movie'){
                body.classList.add('movie'); 
        }
        else if(word == 'music'){
                body.classList.add('music');
        }
        else if(word == 'political'){
                body.classList.add('political');
        }
        else if(word == 'religion'){
                body.classList.add('religion');
        }
        else if(word == 'science'){
                body.classList.add('science');
        }
        else if(word == 'sport'){
                body.classList.add('sport');
        }
        else if(word == 'travel'){
                body.classList.add('travel');
        }
}
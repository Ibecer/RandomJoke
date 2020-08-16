const API = 'https://sv443.net/jokeapi/v2/joke/Dark,Pun';//nombre de la API
let jokeElement = document.getElementById('data')

 getJoke = () =>
 { 
     fetch(API)
    .then(response => response.json())
    .then(data =>
        {
            
            let joke

            if(data.joke)
            {
                joke=data.joke
            }
            else
            {
                joke=   `<b>${data.setup}</b> ${data.delivery}`
            }

            jokeElement.innerHTML = joke
            // console.log(joke)
        })
    .catch(error => console.log(error))
}

getJoke()

const anotherJoke = () =>
{
    getJoke();
}
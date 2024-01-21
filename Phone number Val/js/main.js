//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = "https://phonevalidation.abstractapi.com/v1/?api_key=8978ad35635c4eb6850f6de7bc7796ea&phone="+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.location
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
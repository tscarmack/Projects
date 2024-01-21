//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let ip = document.querySelector('input').value
  // const choice = document.querySelector('input').value
  const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=84accc62d2f64a39b02f3bacd610c74d&ip_address=${ip}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.city
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
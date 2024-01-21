//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  const inputDate = document.querySelector('input').value

  const dateObject = new Date(inputDate)

  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1
  const year = dateObject.getFullYear()
  const url = `https://holidays.abstractapi.com/v1/?api_key=f89012eba3d74887ab42d39a462bb116&country=US&year=${year}&month=${month}&day=${day}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(day, month, year)
        document.querySelector('h2').innerText = data[0].name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
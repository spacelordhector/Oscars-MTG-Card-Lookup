document.querySelector('button').addEventListener('click', getCard)
function getCard() {
    let name = document.querySelector('#card-name').value.toLowerCase()
    let rawColor = document.querySelector('#card-color').value.toLowerCase()
    let color = rawColor.replace(' ', ',')

    fetch(`https://api.magicthegathering.io/v1/cards?name=${name}&colors=${color}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.cards[0].imageUrl
        })
        .catch(error => console.log(error))
}
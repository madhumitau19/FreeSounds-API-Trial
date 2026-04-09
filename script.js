const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("button");
const result = document.getElementById("result");

searchBtn.addEventListener('click', search);

async function search() {
    const query = searchInput.value
    const apiKey = '7qRv74PMMNRaruCgFKr6hK3YdzJbOIwub0vPMPqv'
    const url = `https://freesound.org/apiv2/search/text/?query=${query}&fields=id,name,previews&token=${apiKey}`


    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    result.innerHTML = ''
    data.results.forEach(sound => { 

        if (!sound.previews) return

        const div = document.createElement('div')
        div.innerHTML = `
            <p>${sound.name}</p>
            <audio controls src="${sound.previews['preview-hq-mp3']}"></audio>
        `
        result.appendChild(div)
    })
}
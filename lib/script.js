

const urlAll = "https://rickandmortyapi.com/api/character/1,2,3,4,5,329,162,47,242,20"
const baseUrl = "https://rickandmortyapi.com/api/character/"
let img = document.querySelector('img')
let origin = document.querySelector('#origin')
let name = document.querySelector('.name')
let status = document.querySelector('#status')
let species = document.querySelector('#species')
let notes = document.querySelector('li > p')
let type = document.querySelector('#type')
//let rick = document.querySelector('li')
const tabs = document.querySelectorAll('.switch')
//console.log(rick.innerText)
console.log(tabs[0].dataset.id)
let updateTab = function (data) {
    img.src = data.image
    name.innerText = data.name
    origin.innerText = data.origin.name
    species.innerText = data.species
    status.innerText = data.status
    type.innerText = data.type
    switch (data.id) {
        case 1:
            notes.innerText = `Richard "Rick" Sanchez, also known as Rick C-137, is the titular main protagonist of Rick and Morty. He is a genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his daughter's family, as well as the safety of their son, Morty.`
            break;
        case 2:
            notes.innerText = `Mortimer "Morty" Smith Sr. is the titular deuteragonist of Rick and Morty. He is the grandson of Rick and is often forced to tag along on his various misadventures. Morty attends Harry Herpson High School along with his sister, Summer.`
            break;
        case 3:
            notes.innerText = `Summer Smith is the tritagonist of Rick and Morty. She is the daughter of Jerry Smith and Beth Smith/Clone Beth, the older sister of Morty Smith, the granddaughter of Leonard Smith, Joyce Smith, Rick`
            break;
        case 4:
            notes.innerText = `Beth Smith (née Sanchez) is one of the main characters of Rick and Morty. She is the daughter of Rick Sanchez and Mrs. Sanchez/Diane Sanchez, the wife of Jerry Smith, and the mother of Summer Smith and of the deceased Morty Smith, she is also the daughter-in-law of Leonard Smith and Joyce Smith, and the granddaughter of Rick's Father and an unnamed woman. She currently acts as the mother and the daughter of the Morty Smith and Rick Sanchez from Dimension C-137, respectively. She currently works as a veterinarian at the St. Equis Hospital.`
            break;
        case 5:
            notes.innerText = `Jerry Smith is one of the main characters of Rick and Morty. Jerry is the husband of Beth Smith, the father of Summer Smith and Morty Smith, and the son-in-law of Rick Sanchez. The first half of season 1 mostly featured Jerry C-137, while the current Jerry was born in and inhabits the Replacement dimension. Jerry's marriage to Beth is often rocky and unstable, as he spent most of season 3 living in a separate apartment after he divorced with Beth until he and Beth reconcile at the Season 3 finale. Jerry has an adversarial relationship with his father-in-law Rick, and he often competes with Rick for the admiration of his family.`
            break;
        case 329:
            notes.innerText = `Snuffles, (who changed his name to Snowball and back again) was Morty's pet dog featured in the episode Lawnmower Dog. Snuffles is a small, fluffy white-haired dog that experiences some trouble with being potty-trained until Rick develops an IQ-enhancing helmet for him at the request of Jerry. He might've become a Cronenberg, but he had moved to The Dog Dimension before the events of Rick Potion #9.`
            break;
        case 242:
            notes.innerText = `Mr. Meeseeks (voiced by Justin Roiland) is the name of all the Meeseeks summoned by activating a Mr. Meeseeks Box. The Meeseeks appear in the fifth episode of the first season, "Meeseeks and Destroy" as the main antagonists. They are known to inhabit planets across the universe.`
            break;
        case 162:
            notes.innerText = `Ice-T (also known as Tracy Lauren Marrow), is a well-known human rapper on Earth, who is actually an ageless wandering alien from the dawn of time known as Water-T.`
            break;
        case 236:
            notes.innerText = `Mr. Beauregard is the Smith family butler and saves the family and Cousin Nicky when they are captured by a Nazi. He helps Jerry Smith dislodge his head when it's stuck between the railings on the stairs, as well as attends Morty Smith's dance as his date. Like many of the other characters in the episode, he is a persona created by the Alien Parasites.

            He is killed by Rick Sanchez after the Smith family discovers how to weed out the parasites.`
            break;
        case 47:
            notes.innerText = `Birdperson, currently known as Phoenixperson, is the overall secondary antagonist of Rick and Morty. He is an old friend of Rick's, and has seemingly known Morty since he was a baby revealed in the episode "Get Schwifty".

            He was first introduced in the episode "Ricksy Business", where he attended Rick's party looking for a new mate after ending his soul-bond with his previous spirit-partner. At the end of the episode, he gets back in the saddle with one of Summer's high school friends, Tammy. He and Tammy later get married, only for Tammy to reveal herself as a Galactic Federation agent out to kill Birdperson, arrest Rick, and all of his associates. Despite being shot multiple times, Birdperson is soon resurrected by the Federation as the cyborg Phoenixperson in order to serve them. In "Star Mort: Rickturn of the Jerri", Phoenixperson - under the control of the Galactic Federation - comes face to face with Rick, and fights him, almost killing him, before being shut down by Space Beth.
            
            Phoenixperson currently resides in Rick's garage lab, until Rick could find a way to fix his friend.`
            break;


    }
}


let getCaracters = function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        characters.push(data[i])
    }

}



// let characters = []
// fetch(urlAll)
//     .then(res => res.json())
//     .then(data => console.log(data))

//     .catch(err => console.log('something went wrong', err))



// for(let i = 2; i<=34; i++){
//     fetch(baseUrl + `?page=${i}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log('something went wrong', err))
// }


//console.log(characters)


//adds event listener to the tabs
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('is-active')
        }
        tabs[i].classList.add('is-active')
        fetch(baseUrl + tabs[i].dataset.id)
            .then(res => res.json())
            .then(data => updateTab(data))

    })

}
console.log(tabs[1].dataset.id)
let type = "sfw"
let category = "waifu"
const categories = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "kiss",
    "hug",
    "awoo",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe"
]
let api;
let waifuImg = document.getElementById("waifuImg")
let imageSection = document.getElementById("imageSection")
let generateWaifuBtn = document.getElementById("generateWaifu")
let loading = document.getElementById("loading")
let downloadLink = document.getElementById("downloadLink")
let select = document.getElementById("select")
let options = ""
for(c of categories){
    options+= `
    <option value="${c}">${c}</option>
    `
}
select.innerHTML = `
<select id="selectInput" style="width: 100%;" class="form-select form-select-sm" aria-label=".form-select-sm example">
<option value="waifu" selected>Choose Category</option>
${options}
</select>
`
let selected = document.getElementById("selectInput")
generateWaifuBtn.addEventListener("click", () => {
    category = selected.value
    api = `https://api.waifu.pics/${type}/${category}`
    generateWaifuBtn.innerHTML = `<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`
    generateWaifu()
})

function generateWaifu() {
    fetch(api).then(response => {
      return response.json()
    }).then(data => {
        waifuImg.src = data.url
        downloadLink.href = data.url
        generateWaifuBtn.innerHTML = "Success! Try Again?"
    }).catch(error=> {
        generateWaifuBtn.innerHTML = `Error!`
    })
}
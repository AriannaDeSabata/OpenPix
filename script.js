
const baseEndPoint = "https://api.pexels.com/v1/search?query="
const apikey = 'LoawgstUXzlKQGHvNqc5oibpfaxFvAoU89h2v1u3GWLvNYdgzoh6NcTA'

let album = document.querySelector("#albumImg div.row")
let valueInput = document.getElementById("inputValue")
let contSearch= document.getElementById("searchPhotos")
let category 



function changeImg(event){
    event.preventDefault()
    category= valueInput.value
    console.log(category)
    if(album != ""){
        fetchChangeImg()
        .then(response => response.json())
        .then(img => getPhotos(img.photos))
        .catch(err => console.log(err))
    }
    album.innerHTML = ""
    valueInput.value =""

}

function fetchChangeImg(){
    return fetch(baseEndPoint + category,{
        headers: {
            Authorization: apikey
        }
    })

}



function fetchImage(){
    return fetch(baseEndPoint + "ocean", {
        headers: {
            Authorization: apikey
        }
    })
    
    .then(response => response.json())
    .then(img => getPhotos(img.photos))
    .catch(err => console.log(err))
  
}

function getPhotos(images){
    console.log(images)
    let array = images.map(el =>`<div class="col-6 col-md-3 col-xl-2">
        <img src="${el.src.medium}" class="img-fluid imgStyle"></img>
        <div class="iconimg"><i class="bi bi-download"></i></div>
        </div>`)

    let newArray = array.join("")
    album.innerHTML = newArray


}


fetchImage()




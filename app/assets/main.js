let images = []
//const apiUrl = "https://gallery-server.herokuapp.com/api/images"
const apiUrl = "http://localhost:3000/api/images"

axios.get(apiUrl)
  .then(response => {
    // console.log(response.data)
    images = response.data
    loadImages(shuffle(images))
  })
  .catch(error => {
    console.error(error);
  })

let gallery = document.getElementById('gallery')

function loadImages(images) {

  images.forEach(image => {
    let imageTemplate = `
    <a class="masonry-brick masonry-brick--h" href="./images/${image.path}" data-src="./images/${image.path}">
      <img src="./images/thumbs/${image.path}" class="masonry-img"/>
    </a>
   `
    gallery.innerHTML + imageTemplate
    $(imageTemplate).appendTo("#gallery")
  })

  lightGallery(document.getElementById('gallery'), {
    mode: 'lg-fade',
    download: false
  })
  loadOtherStuff()
}

function loadOtherStuff() {}

$(document).ready(() => {
  // $('.modal1').modal();
  $('.parallax').parallax();
  // $('.dropify-event').dropify();
  // $('#add-images').modal();
  // console.log("document loaded")
});

$(window).on("load", () => {
  // console.log("window loaded")
});



function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

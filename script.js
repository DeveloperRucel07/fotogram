let album = [
  "animal-7012354_1280.jpg",
  "avenue-815297_1280.jpg",
  "blackbird-7543630_1280.jpg",
  "fall-7577769_1280.jpg",
  "fantasy-2049567_1280.jpg",
  "field-9295186_1280.jpg",
  "flower-meadow-7955256_1280.jpg",
  "forest-8684668_1280.jpg",
  "forsythia-5065900_1280.jpg",
  "frog-5319326_1280.jpg",
  "landscape-7373484_1280.jpg",
  "leaves-8962041_1280.jpg",
  "moss-4418351_1280.jpg",
  "ocean-7461792_1280.jpg",
  "sailboat-9597523_1280.jpg",
  "tree-736882_1280.jpg",
];

let content = document.getElementById("fotoalbum");

function load() {
  for (let i = 0; i < album.length; i++) {
    content.innerHTML += `
      <img src="./img/album/${album[i]}" alt=" img test" onclick="popup(${i})">
    `;
  }
}

function close_popup(event) {
  document.getElementById("foto").classList.toggle("popup_active");
  event.stopPropagation();
}

function prev(i, event) {
  if (i > 0) {
    popup(i - 1);
  } else {
    popup(album.length - 1);
  }
  
  event.stopPropagation();
}

function next(i, event) {
  if (i < album.length - 1) {
    popup(i + 1);
  } else {
    popup(0);
  }
  event.stopPropagation();
}


function popup_template(i){
  return  `
    <div class="title">
    <p>${album[i]}</p>
    <img src="./img/close_tomato.png" alt=" close" onclick="close_popup(event)" >
    </div>
    <div class="cardbox">
    <button onclick="prev(${i}, event)" style="border-radius: 20px 0 0 20px;">&lt;</button>
    <img src="./img/album/${album[i]}" alt="einzel image">
    <button onclick="next(${i}, event)" style="border-radius: 0 20px 20px 0;">&gt;</button>
    </div>
    `;
}

function popup(i) {
  document.getElementById("foto").classList.add("popup_active"); 
  document.getElementById("popup").innerHTML = popup_template(i);
  
}


function stop_event(event) {
  event.stopPropagation();
}

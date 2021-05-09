// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';

fetch(url)
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(data => {
    console.log(data);
    var section = document.getElementById("results");
    for (let character of data){
      var mainDiv = document.createElement ("div");
      var image = document.createElement ("img");
      image.src = character.imageUrl;
      image.alt = "";
      mainDiv.appendChild(image);
      var nameDiv = document.createElement("div");
      nameDiv.innerHTML = character.fullName;
      mainDiv.appendChild(nameDiv);
      var titleDiv = document.createElement("div");
      titleDiv.innerHTML = character.title;
      mainDiv.appendChild(titleDiv);
      section.appendChild(mainDiv);
      section.className ="row";
      mainDiv.className = "col-md-3 col-sm-6 col-xs-6 rahul";
      section.style.display = "flex";
      section.style.fontWeight = "bold"
      section.style.textAlign = "center";
      section.style.flexflow = "row-wrap";
      console.log(character.fullName, character.title, character.image, character.imageUrl);
    }
    })
  .catch(error => console.log(error)); 


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded",function () {
     fetch(imgUrl)
        .then(resp => resp.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
              document.getElementById("dog-image-container").appendChild(imgElement)
            });
           
        })
        .catch(error => {
            console.log(error)
        });
    });

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    document.addEventListener("DOMContentLoaded", function() {
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            const ulElement = document.getElementById("dog-breeds");
            breeds.forEach(breed => {
                const listElement = document.createElement("li");
              listElement.textContent = breed;
                ulElement.appendChild(listElement);  

            const subBreeds = data.message[breed];
                if (subBreeds.length > 0) {
                    const subUlElement = document.createElement("ul");

                        subBreeds.forEach(subBreed => {
                            const subListElement = document.createElement("li");
                            subListElement.textContent = subBreed;
                            subUlElement.appendChild(subListElement);
                        });
                        listElement.appendChild(subUlElement)
                }
            

                });
                ulElement.addEventListener("click", function changeColor(e) {
                   const clickedElement = e.target;
                    clickedElement.style.color = 'green';

                    
                    
            })

        })
        .catch(error => {
            console.log(error)
        });
    });



document.addEventListener("DOMContentLoaded", function () {const breedDropDown = document.getElementById("breed-dropdown")
breedDropDown.addEventListener("change", function() {
    const selectedOption = breedDropDown.value.toLowerCase();   

    const breedListItems = document.querySelectorAll("#dog-breeds li");
        breedListItems.forEach(function(breedListItems) {
            const breedName = breedListItems.textContent.toLowerCase();
            if (breedName.startsWith(selectedOption)) {
                breedListItems.style.display = "block";
            } else {
                breedListItems.style.display = "none";
            }
        })
});})
    
    
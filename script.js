var currentIndex = 0; 

function displaySlideshow() {
    var word = document.getElementById("wordInput").value.toUpperCase().replace(/\s/g, '');
    var slideshowContainer = document.getElementById("slideshowContainer");
    slideshowContainer.innerHTML = ""; // Clear previous content

    // Validate input for alphabetic characters
    if (!/^[A-Z]+$/.test(word)) {
        alert("Please enter valid alphabet.");
        return; // Exit the function if input is invalid
    }

    for (var i = 0; i < word.length; i++) {
        var letter = word.charAt(i);
        if (letter === " ") continue; // Skip spaces

        var imgSrc = "hand_images/" + letter + ".jpg"; 

        
        var container = document.createElement("div");
        container.className = "slideshowItem"; 

        var imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = letter; 
        var letterElement = document.createElement("div");
        letterElement.textContent = letter;
        letterElement.className = "letter"; 

        
        container.appendChild(imgElement);
        container.appendChild(letterElement);

        slideshowContainer.appendChild(container);
    }

    
    startSlideshow();
}

function startSlideshow() {
    var items = document.getElementsByClassName("slideshowItem");
    var interval = 1500; 

    
    for (var i = 1; i < items.length; i++) {
        items[i].style.display = "none";
    }

    
    var slideshowInterval = setInterval(function() {
        
        items[currentIndex].style.display = "none";

        
        do {
            currentIndex = (currentIndex + 1) % items.length;
        } while (items[currentIndex].querySelector('.letter').textContent === " ");

       
        items[currentIndex].style.display = "block";

        
        if (currentIndex === 0) {
            clearInterval(slideshowInterval); 

            
            displayAllImages();
        }
    }, interval);
}

function displayAllImages() {
    var items = document.getElementsByClassName("slideshowItem");
    var container = document.getElementById("slideshowContainer");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.overflow = "auto"; 
    
    

    for (var i = 0; i < items.length; i++) {
        items[i].style.display = "block";
    }
}

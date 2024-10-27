'use strict';

window.onload = function () {
    var searchButton = document.getElementsByClassName("btn")[0];
    var superHeroName = document.getElementById("superHeroName");
    var result = document.getElementById("result");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        
        // Get the value of the superHeroName input
        var searchVal = superHeroName.value.trim();

        fetch("superheroes.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'superName=' + encodeURIComponent(searchVal),
        })
        .then(response => response.text())
        .then(data => {
            // Update the result element with the response
            result.innerHTML = data;
            alert(data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
};
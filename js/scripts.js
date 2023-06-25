window.onload = function() {

    const favIceCreams = ["chocolate", "CHOCOLATE", "vanilla", "strawberry"];
    
    const ul = document.querySelector("ul#favoriteFlavors");
    let total = 0;
   
    for (let index = 0; index < favIceCreams.length; index += 1) {
        const flavor = favIceCreams[index];
        total += favIceCreams.includes(flavor) ? 1 : 0;
        const li = document.createElement("li");
        li.textContent = flavor;
        ul.appendChild(li);

        total =+ 1;
      }
    };



    // favIceCreams.forEach(function(flavor) {
    //     const li = document.createElement("li");
    //     li.append(flavor);
    //     ul.append(li);
    // });
    
    
    
    
    // };
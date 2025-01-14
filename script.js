const myKeys = document.querySelectorAll(".key");

//for loop
// for (let i = 0; i < myKeys.length; i++) {
//     myKeys[i].addEventListener("click", function () {
//         alert("Button" +" "+ myKeys[i].innerHTML  +" "+ "is clicked")
//     })
// }

// forEach method
myKeys.forEach(key => {
    key.addEventListener("click", function () {
        // const audio = new Audio("doremi/do.mp3");
        // audio.play();
        playSound(`${key.innerHTML.toLowerCase()}`);

    })

})

document.addEventListener("keydown", function (btn) {
    playSound(btn.key.toLowerCase());
    
    let pressed_key = btn.key.toLowerCase();

    myKeys.forEach(key => {
        key.classList.remove("activated");
    })

    myKeys.forEach(key => {
        if (pressed_key === key.innerHTML.toLowerCase()) {
            key.classList.add("activated");
       }
   })
    
   
})


function playSound(key) {
    switch (key) {
        case "c":
            const audio = new Audio("doremi/do.mp3");
            audio.play();
        break;
        
        case "d":
            const audio2 = new Audio("doremi/re.mp3");
            audio2.play();
       break;
        
        case "e":
               const audio3 = new Audio("doremi/mi.mp3");
                audio3.play();
         break;
        
        case "f":
               const audio4 = new Audio("doremi/fa.mp3");
                audio4.play();
        break;
        
        case "g":
             const audio5 = new Audio("doremi/sol.mp3");
             audio5.play();
            break;
        
        case "a":
                const audio8 = new Audio("doremi/la.mp3");
                audio8.play();
             break;
        
        case "b":
              const audio6 = new Audio("doremi/ti.mp3");
                audio6.play();
            break;
        
        case "k":
               const audio7 = new Audio("doremi/doh.mp3");
                audio7.play();
        break;
        
       default:
         console.log(key);
    }
}
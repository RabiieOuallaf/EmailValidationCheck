let input = document.getElementById("input");

let text = document.querySelector(".text");

let btn = document.querySelector(".submit");

let Symboles = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

let count = 0;

btn.addEventListener("click", () => {
    count++;
    if(input.value == ""){
        text.innerHTML = "Please Enter your email !";
        text.style.color = "rgb(128, 2, 2)";
    }else if(input.value.match(Symboles)){
        text.innerHTML = "Congrats! You've entered a valid email";
        text.style.color = "white";
    }else{
        text.innerHTML = "Please Enter a valid email";
    }

    if(count > 10){
        alert("Alright , WTF R U DOING ? ")
    }

});
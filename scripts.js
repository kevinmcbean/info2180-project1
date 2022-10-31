/* Add your JavaScript to this file */

function subscribe(){
    document.getElementsByClassName("btn")[1].addEventListener("click", function(){
        email = document.querySelector("input").value;
        msg = document.querySelector(".message")
        event.preventDefault()
        if(email.includes("@") && email.includes(".")){
            msg.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!"
        }
        else{
            msg.textContent = "Please enter a valid email address."
        }
    })
}

window.addEventListener("DOMContentLoaded", function(){
    subscribe();
})

var rating = document.querySelector(".options");
var submit = document.getElementById("submit-button")

rating.addEventListener("click", function(event) {
    var choice = event.target.innerText;
    document.getElementById("number").innerHTML = choice;
    if (choice > 0 && choice < 6){
        submit.addEventListener("click", () => {
            document.getElementsByClassName("initial-page")[0].style.display = "none";
            document.getElementsByClassName("thanks-page")[0].style.display = "flex";
        })
        
    }
});
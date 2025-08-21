document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("message");

  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(name === "" || email === "" || password === ""){
    message.innerText = "All fields are required";
    message.style.color = "#e63946";
  } else if(!email.match(emailPattern)){
    message.innerText = "Invalid email address";
    message.style.color = "#e76f51";
  } else {
    message.innerText = "Registration Successfully 🎉";
    message.style.color = "#2a9d8f";
  }
});

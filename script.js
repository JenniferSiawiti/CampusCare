function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email && password){
    alert("Login successful (demo)");
  } else {
    alert("Please fill all fields");
  }
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(email && password){
    alert("Account created (demo)");
    window.location.href = "login.html";
  } else {
    alert("Please fill all fields");
  }
}

function forgotPassword() {
  const email = prompt("Enter your email for password reset:");
  if(email) alert("Password reset link sent to " + email);
}

// FEEDBACK LOGIC
let anonymousChoice = false;

function chooseAnon(choice){
  anonymousChoice = choice;
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";

  document.getElementById("emailField").style.display = choice ? "none" : "block";
}

function goBack(){
  document.getElementById("step2").style.display = "none";
  document.getElementById("step1").style.display = "block";
}

function confirmSubmit(){
  const feedback = document.getElementById("feedback").value;
  const email = document.getElementById("fbEmail").value;

  if(!feedback){
    alert("Please enter feedback first");
    return;
  }

  if(!anonymousChoice && !email){
    alert("Email is required if not anonymous");
    return;
  }

  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
}

function goBackToInput(){
  document.getElementById("step3").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function submitFeedbackFinal(){
  document.getElementById("step3").style.display = "none";
  document.getElementById("step4").style.display = "block";
}

function resetFeedback(){
  document.getElementById("step4").style.display = "none";
  document.getElementById("step1").style.display = "block";

  document.getElementById("feedback").value = "";
  document.getElementById("fbEmail").value = "";
}

const ALLOWED_DOMAIN = "@my.sampoernauniversity.ac.id";

function isValidSampoernaEmail(email) {
  return email.toLowerCase().endsWith(ALLOWED_DOMAIN);
}

function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  const img = btn.querySelector("img");
  if (input.type === "password") {
    input.type = "text";
    img.src = typeof EYE_CLOSED !== "undefined" ? EYE_CLOSED : "images/Closed Eye Icon.svg";
    img.alt = "Hide password";
  } else {
    input.type = "password";
    img.src = typeof EYE_OPEN !== "undefined" ? EYE_OPEN : "images/Open Eye Icon.svg";
    img.alt = "Show password";
  }
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (!isValidSampoernaEmail(email)) {
    alert("Please use your Sampoerna University email (@my.sampoernauniversity.ac.id)");
    return;
  }

  alert("Login successful (demo)");
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (!isValidSampoernaEmail(email)) {
    alert("Please use your Sampoerna University email (@my.sampoernauniversity.ac.id)");
    return;
  }

  alert("Account created (demo)");
  window.location.href = "login.html";
}

function forgotPassword() {
  const email = prompt("Enter your Sampoerna University email for password reset:");
  if (email) {
    if (!isValidSampoernaEmail(email)) {
      alert("Please use your Sampoerna University email (@my.sampoernauniversity.ac.id)");
      return;
    }
    alert("Password reset link sent to " + email);
  }
}

// ── FEEDBACK LOGIC ──────────────────────────────────────────────
let anonymousChoice = false;

function chooseAnon(choice) {
  anonymousChoice = choice;
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "flex";

  const emailField = document.getElementById("emailField");
  const feedbackBgImg = document.getElementById("feedbackBgImg");

  if (choice) {
    // Anonymous: hide email field, use anonymous textarea bg
    emailField.style.display = "none";
    if (feedbackBgImg) feedbackBgImg.src = typeof FB_TA_ANON !== "undefined" ? FB_TA_ANON : "images/Sampoerna_Email.svg";
  } else {
    // With identity: show email field, use identity textarea bg
    emailField.style.display = "flex";
    if (feedbackBgImg) feedbackBgImg.src = typeof FB_TA_IDENT !== "undefined" ? FB_TA_IDENT : "images/Sampoerna_Email__2_.svg";
  }
}

function goBack() {
  document.getElementById("step2").style.display = "none";
  document.getElementById("step1").style.display = "flex";
}

function confirmSubmit() {
  const feedback = document.getElementById("feedback").value;
  const email = document.getElementById("fbEmail").value;

  if (!feedback) {
    alert("Please enter feedback first");
    return;
  }

  if (!anonymousChoice && !email) {
    alert("Email is required if not anonymous");
    return;
  }

  if (!anonymousChoice && email && !isValidSampoernaEmail(email)) {
    alert("Please use your Sampoerna University email (@my.sampoernauniversity.ac.id)");
    return;
  }

  document.getElementById("step3-overlay").style.display = "flex";
}

function goBackToInput() {
  document.getElementById("step3-overlay").style.display = "none";
}

function submitFeedbackFinal() {
  document.getElementById("step3-overlay").style.display = "none";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step4").style.display = "flex";
}

function resetFeedback() {
  document.getElementById("step4").style.display = "none";
  document.getElementById("step1").style.display = "flex";
  document.getElementById("feedback").value = "";
  document.getElementById("fbEmail").value = "";
}


const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

preLoader();

function preLoader(){
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block"
    setTimeout(() => (main.style.opacity) = 1, 50);
  }, 4100)
};


  var name = document.querySelector("#inputName").value;
  var nameValid = document.querySelector("#inputName");
  var email = document.querySelector("#inputEmail");
  var message = document.querySelector("#inputMsg");
  var success = document.querySelector(".success-msg")
  var dissapear = document.querySelector(".form-group");
  var button = document.querySelector(".button");

function verfication(){
  if(nameValid.checkValidity() == true, email.checkValidity() == true, message.checkValidity() == true){
      dissapear.style.display = "none";
      button.style.display = "block";
      success.innerHTML = name + " Your message was sent successfully."
  }; 

};

function back(){
  button.style.display = "none";
  success.style.display = "none";
  dissapear.style.display = "block";
}










  



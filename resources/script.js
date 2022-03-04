const button = document.getElementById("submit");

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

let genderFemale = document.getElementById("female");
let genderMale = document.getElementById("male");

let genderWarning = document.getElementById("genderWarning");


const validateGender = ()=>{

  if(genderFemale.checked == false && genderMale.checked == false)
  {
    return "Please select your gender";
  }

  return "";

}

button.addEventListener("click",()=>{


  genderWarning.textContent = validateGender();

  

  




});
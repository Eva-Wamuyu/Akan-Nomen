const button = document.getElementById("submit");

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

let genderFemale = document.getElementById("female");
let genderMale = document.getElementById("male");

let genderWarning = document.getElementById("genderWarning");
let dateWarning = document.getElementById("dateWarning");


const displayName = document.getElementById("outName");







button.addEventListener("click",()=>{
  event.preventDefault();

  let birthDate = document.getElementById("birthDate").value;

 
  if(birthDate == ""){

    // dateWarning.style.display = "block";
    alert("please select birthdate");
    
  }
  else if(genderFemale.checked == false && genderMale.checked== false){

    // genderWarning.style.display = "block";
    alert("Please select gender");
    

  }
  else{
    
    var specday = new Date(birthDate);
     var day = specday.getDay();
    if(genderMale.checked == true){

      theAkanName = maleNames[day];
      displayName.textContent = theAkanName;
      document.getElementById("output").style.display = "block";

       
       
    }
    else{
      theAkanName = femaleNames[day];
      displayName.textContent = theAkanName;
      document.getElementById("output").style.display = "block";

    }
  
  }
 
  
});


//output close button
document.getElementById("closeButton").addEventListener("click",()=>{
  document.getElementById("output").style.display = "none";
  document.getElementById("theform").reset();
  dateWarning.style.display = "none";
  genderWarning.style.display = "none";
});
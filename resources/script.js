const button = document.getElementById("submit");

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

let genderFemale = document.getElementById("female");
let genderMale = document.getElementById("male");

let genderWarning = document.getElementById("genderWarning");
let dateWarning = document.getElementById("dateWarning");




// console.log(birthDate.length);


button.addEventListener("click",()=>{
  event.preventDefault()

  let birthDate = document.getElementById("birthDate").value;
  console.log(birthDate);
  
  



   

  //validate gender
  if(birthDate == ""){

    dateWarning.style.display = "block";
    
  }
  else if(genderFemale.checked == false && genderMale.checked== false){

    genderWarning.style.display = "block";
    

  }
  else{

    
    var specday = new Date(birthDate);
     var day = specday.getDay();
    if(genderMale.checked == true){

      theAkanName = maleNames[day];
      console.log(theAkanName);
       
       
    }
    else{
      theAkanName = femaleNames[day];
      console.log(theAkanName);

    }
      
      




  }
  
  



});
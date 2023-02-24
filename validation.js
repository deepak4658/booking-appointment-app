function onsignup(){
    var inputName= document.getElementById("name");
    var inputEmail= document.getElementById("email");
    var inputPhone= document.getElementById("phone");
    var inputTime= document.getElementById("time");
    var inputDate= document.getElementById("date");
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("email", inputEmail.value);
    localStorage.setItem("phone", inputPhone.value);
    localStorage.setItem("time", inputTime.value);
    localStorage.setItem("date", inputDate.value);


    localStorage.setItem('name', JSON.stringify(onsignup ));
   }
function onsignup(){

    let name, email, phone, time, date;
    name= document.getElementById("name").value;
email= document.getElementById("email").value;
phone=  document.getElementById("phone").value;
time= document.getElementById("time").value;
date= document.getElementById("date").value;

let user= new Array();
user= JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
if(user.some((v)=>{return v.email==email}))
{
    alert("Already registerd");

}
else
{
    user.push({
        "name":name,
        "email":email,
        "phone": phone,
        "time": time,
        "date": date
    })
    localStorage.setItem("user", JSON.stringify(user));
}


   }

  


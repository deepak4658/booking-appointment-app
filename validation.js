document.getElementById("submit-call").addEventListener('click', (e)=>{
    e.preventDefault(); 
    let name, email, phone, time, date;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    time = document.getElementById("time").value;
    date = document.getElementById("date").value;

    let user = new Array();
    user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : []

    user.push({
        "name": name,
        "email": email,
        "phone": phone,
        "time": time,
        "date": date
    })
    localStorage.setItem(name, JSON.stringify(user));

     document.getElementById("id_name").innerText="Name: " + name;
     document.getElementById("id_email").innerText="Email: " + email;
     document.getElementById("id_phone").innerText="Phone: " + phone;
     document.getElementById("id_time").innerText="Time: " + time;
     document.getElementById("id_date").innerText="Date: " + date;
    
}
);
document.getElementById("delt-btn").addEventListener('click', (e)=>{
    e.preventDefault(); 
    let name = document.getElementById("name").value;
    localStorage.removeItem(name);

     document.getElementById("id_name").innerText="Name: ";
     document.getElementById("id_email").innerText="Email: ";
     document.getElementById("id_phone").innerText="Phone: ";
     document.getElementById("id_time").innerText="Time: ";
     document.getElementById("id_date").innerText="Date: ";
}
);







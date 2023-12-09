let Username = document.getElementById("Username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let SingUP = document.getElementById("SingUP")



SingUP.addEventListener("click" , (d)=>{
    d.preventDefault()
    if(Username.value === "" || email.value === "" || password.value === "" ){
        alert("please fill data")
    }else{
        localStorage.setItem("Username" , Username.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);

        setTimeout(()=>{
            window.location = "login.html"
        } , 1000)
    }
})


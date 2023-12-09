let Username = document.getElementById("Username")
let password = document.getElementById("password")
let SingIn = document.getElementById("SingIn")


let getUsername = localStorage.getItem("Username")
let getpassword = localStorage.getItem("password")


SingIn.addEventListener("click" ,  (d) => { 
    d.preventDefault()
    if(Username.value === "" || password.value === "" ){
        alert("please fill data")
    }else{
        if( getUsername  &&  getUsername.trim()  ===  Username.value.trim()  &&  getpassword  ===  password.value){
            setTimeout(() => {
                window.location = "index.html"
            } , 1000)
        }else{
            alert("Username or password is wrong")
        }
    }
})

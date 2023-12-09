let links = document.getElementById("links")
let Userinfo = document.getElementById("User-info")
let User = document.getElementById("User")

let getUsername = localStorage.getItem("Username")

if(getUsername){
    links.remove()
    Userinfo.style.display = "flex"
    User.innerHTML = "Welcom,"+ getUsername + " I promise You will be happy here"
}
/////////////////////////////////////////////////////
let logout = () => {
    localStorage.clear();
    setTimeout(()=>{
        window.location = "login.html"
    }, 1000)
}

if(localStorage.getItem("Username")){
    document.getElementById("logout").style.display ="block";
    document.getElementById("mmm").style.display ="block !important";
}else{
    document.getElementById("mm").style.display ="none";
    document.getElementById("mmm").style.display ="none !important";
}

////*_*////*_*////*_*////*_*////*_*////*_*////*_*////*_*////*_*////*_*////*_*////*_*////*_*////
let Allproducts = document.querySelector(".parent")
let products = [
    {
        id : 1 ,
        name : "Playstation 5" ,
        price :  "650" ,
        category : "Gaming" ,
        imageUrl : "imges/Playstation 5.jpeg"
    },
    {
        id : 2 ,
        name : "iPhone 15" ,
        price :  "800" ,
        category : "Smart phone" ,
        imageUrl : "imges/Apple iPhone 15 5G.jpeg"
    },
    {
        id : 3 ,
        name : "Apple Watch" ,
        price :  "300" ,
        category : "Smart watch" ,
        imageUrl : "imges/Apple Watch .jpeg"
    },
    {
        id : 4 ,
        name : "Playstation 4" ,
        price :  "400" ,
        category : "Gaming" ,
        imageUrl : "imges/PS4.jpeg"
    },
    {
        id : 5 ,
        name : "iPhone 14" ,
        price :  "700" ,
        category : "Smart phone" ,
        imageUrl : "imges/Apple iPhone 14.jpeg"
    },
    {
        id : 6 ,
        name : "HUAWEI Watch" ,
        price :  "200" ,
        category : "Smart watch" ,
        imageUrl : "imges/SmartWatch HUAWEI.jpeg"
    },
    {
        id : 7 ,
        name : "X box" ,
        price :  "350" ,
        category : "Gaming" ,
        imageUrl : "imges/Xbox.jpeg"
    },
    {
        id : 8 ,
        name : "Samsung Galaxy S23 Ultra" ,
        price :  "500" ,
        category : "Smart phone" ,
        imageUrl : "imges/Samsung Galaxy S23 Ultra.jpeg"
    },
    {
        id : 9 ,
        name : "T900 Ultra" ,
        price :  "20" ,
        category : "Smart watch" ,
        imageUrl : "imges/T900 Ultra SmartWatch.jpeg"
    },
]
let drowproducts = () => {
    let x = products.map((item)=>{  
       return `
        <div class=" col-lg-3 col-5  item p-2  rounded box-shadow  mt-5">
          <img src="${item.imageUrl}" alt="" class="w-100  rounded" height="300">
          <p class="h5">${item.name}</p>
          <p class="h6">price : ${item.price}</p>
          <p class="h6">category : ${item.category}</p>
          <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-primary" onclick="addcart(${item.id})">Add to cart</button>
          
          </div>
          </div>
        `
    })
    Allproducts.innerHTML = x ;
}
drowproducts ()

let ViewAllProducts  = () =>{
    if(localStorage.getItem("Username")){
        window.location = "cartsproducts.html"
    }else{
        window.location = "login.html"
    }
}

let shoppingcartNumber = document.querySelector(".shopping-cartNumber")
let cartsproductsdiv = document.querySelector(".carts-products div")

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [] ;
    
if(addedItem){
    addedItem.map(item=>{
      cartsproductsdiv.innerHTML += `<p class="text-center h6 text-dark ">${item.name}</p>`;
    })
    shoppingcartNumber.style.display="none";
    shoppingcartNumber.innerHTML = addedItem.length;
}

var Totalprice = localStorage.getItem("Totalprice") || 0 ;

let addcart = (id) => {    
    let choosenitem = products.find((item) => item.id === id);
    let price =+localStorage.getItem("Totalprice")+ +choosenitem.price
    localStorage.setItem("Totalprice" , price)
    cartsproductsdiv.innerHTML += `<p class="text-center h6 text-light ">${choosenitem.name}</p>`;


      addedItem = [...addedItem , choosenitem]
    localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem))


    let cartsproductsdivP = document.querySelectorAll(".carts-products div p")
    shoppingcartNumber.style.display="block";
    shoppingcartNumber.innerHTML = cartsproductsdivP.length;
}
////////////////////////////////////////////////////////
let cartsproducts = document.querySelector(".carts-products")

let opencart = () =>{
    if(cartsproductsdiv.innerHTML !=""){
        if(cartsproducts.style.display=="block"){
            cartsproducts.style.display="none"
        }else{
            cartsproducts.style.display="block"
        }
    }
}




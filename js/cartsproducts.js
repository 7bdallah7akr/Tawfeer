let logout = () => {
    localStorage.clear();
    setTimeout(()=>{
        window.location = "login.html"
    }, 1000)
}
let ProductsInCart = localStorage.getItem("ProductsInCart")
let Allproducts = document.querySelector(".parent")


let drawcartproducts = (products) => {
    let x = products.map((item)=>{  
        return `
        <div class="col-3   bg-light mt-5 box-shadow">
        <img src="${item.imageUrl}" alt="" class="w-100 rounded" height="100">
        <p class="h6">${item.name}</p>
        <p class="h6">price :${item.price}</p>
        <p class="h6">category : ${item.category}</p>
        <button  type="button" class="btn btn-danger" onclick="delet(${item.id})">Remove from cart</button>
        </div>
        `
     })
     Allproducts.innerHTML = x ;
}

 if(ProductsInCart){
    let item = JSON.parse(ProductsInCart);
    drawcartproducts(item)
}
// ////////////////////////////
    let delet = (id) =>{
    var index = JSON.parse(localStorage.getItem("ProductsInCart")).findIndex((x) =>
        x.id == id)

    var product = JSON.parse(localStorage.getItem("ProductsInCart"))

    let choosenitem = JSON.parse(localStorage.getItem("ProductsInCart")).find((item) => item.id === id);

    if(index !== -1){
        product.splice(index , 1)
        localStorage.setItem("ProductsInCart" , JSON.stringify(product))
        drawcartproducts(product)
    }
    
    let price =+localStorage.getItem("Totalprice")- +choosenitem.price
    localStorage.setItem("Totalprice" , price)

    var Totalprice = localStorage.getItem("Totalprice")
   var TotalpriceId = document.getElementById("TotalpriceId")
     
   TotalpriceId.innerHTML =  "Totalprice =" + price
   }
   //////////////////////////////////////////////////////////////////////
  
   var Totalprice = localStorage.getItem("Totalprice")

   var TotalpriceId = document.getElementById("TotalpriceId")
     
   TotalpriceId.innerHTML =  "Totalprice =" + Totalprice

   



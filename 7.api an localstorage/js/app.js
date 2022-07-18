let products;
function getItems() {
  fetch("https://fakestoreapi.com/products")
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      
     
      for (let i = 0; i < data.length; i++) {
        generateProduct(data[i]);
      }
      products=data
      
    });

}
getItems();
function generateProduct(product) {
  let html = "";
    html += `
        <div class="col-lg-4">
            <div class="card" id="${product.id}" style="width: 22rem; height:100%; ">
                <img class="card-img-top" src="${product.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.price}</h5>
                    <p class="card-text">${product.title}</p>
                    <a href="#" data-id="${product.id}" class="adbasket btn btn-primary">ADD TO BASKET</a>
                </div>
                </div>
            </div>
    `
    document.querySelector('#card').innerHTML += html;
    
}

if (localStorage.getItem('basket')=== undefined) {
    localStorage.setItem('basket', JSON.stringify([]));
}

    let basketItems = []

     $(document).on("click",".btn",(e)=>{
      e.preventDefault()
     let id=e.target.getAttribute('data-id')
     addBasket(id)
     })



  function addBasket(id){
    
    let items = products;

    let item = items.find(x=>x.id==id)
    basketItems.push(item)
    updateLocalStorage("basket",basketItems)
    CountProduct();
  }
  function updateLocalStorage(key,value){
    localStorage.setItem(`${key}`,JSON.stringify(value))
  }

  
    function CountProduct() {
      let basket = JSON.parse(localStorage.getItem('basket'));
      document.getElementById('count').innerHTML =basket.length
      console.log(basket.length);
  }
  CountProduct();
  
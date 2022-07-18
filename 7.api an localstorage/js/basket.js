function GetProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'))

    let div = '';

    basket.forEach(item =>{

        div += `
            <div class="box d-flex align-items-center my-4 justify-content-around">
            <div class="col-lg-2">
            <img class = "w-50" src=${item.Image} alt="">
            </div>
            <div class="col-lg-3">
            <h5>mehsuluna adi: ${item.Name}</h5>
            </div>
            <div class="col-lg-1">
            <h6>Qiymet: ${parseInt(item.Price)*parseInt(item.Count)}</h6>                   
            </div>
            <input type="number" min = 1 value="${parseInt(item.Count)}">
            <i onclick="Delete()" class="fa-solid fa-trash-can i-all"></i>
            </div>
        `
        console.log(item.Count);
        console.log(item.Price);
    })

    document.getElementById('Products').innerHTML = div;
    CountProduct();
    let dltall = document.querySelectorAll('.i-all')

for(let dlt of dltall ) {
    dlt.addEventListener('click',function(e){
        e.preventDefault();
        let basket = JSON.parse(localStorage.getItem('basket'))
        let pro_id = e.target.parentElement.parentElement.id;
        let check = basket.filter(x => x.id !== pro_id)
        localStorage.setItem('basket',JSON.stringify(check));
        
    })
}

}

GetProduct();

function CountProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerHTML =basket.length
}
CountProduct();



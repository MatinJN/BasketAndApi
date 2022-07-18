if (localStorage.getItem('basket')=== null) {
    localStorage.setItem('basket', JSON.stringify([]));
}

let buttons = document.querySelectorAll('.btn-add');

for (let btn of buttons) {
    btn.addEventListener('click', function(e){
        e.preventDefault();
        let basket = JSON.parse(localStorage.getItem('basket'));
        let pro_id = e.target.parentElement.parentElement.id;
        let pro_img = e.target.parentElement.previousElementSibling.src;
        let pro_name = e.target.previousElementSibling.previousElementSibling.innerHTML;
        let pro_price = e.target.previousElementSibling.innerHTML;

        let existPro = basket.find(x => x.id == pro_id)

        if(existPro === undefined){
            basket.push({
                id: pro_id,
                Image: pro_img,
                Name: pro_name,
                Price:pro_price,
                Count:1
            })
        }
        else{
            existPro.Count += 1;
        }
        
        localStorage.setItem('basket',JSON.stringify(basket))
        CountProduct();
    })
    
    function CountProduct() {
        let basket = JSON.parse(localStorage.getItem('basket'));
        document.getElementById('count').innerHTML =basket.length
    }
    CountProduct();
}
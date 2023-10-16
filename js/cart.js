function getProducts() {

    let items = JSON.parse(localStorage.getItem('products'))
    console.log(items);
    if(items.length > 0) {
        document.querySelector('.Fastkart').classList.remove('d-none')
        document.querySelector('.alert').classList.add('d-none')
        let t_body = document.querySelector('table tbody')
        for(let item of items) {
            t_body.innerHTML += `
            <tr id=${item.Id}>
                <td style="width:10%">
                    <img src=${item.Image} alt="">
                </td>
                <td>${item.Title}</td>
                <td>${item.Price} TL</td>
                <td>
                <input type="number" value=${item.Count}  onclick="updateCount(event,${item.Id})">
                </td>
                <td>${((item.Price) * (item.Count)).toFixed(2)} TL</td>
                <td>
                    <button class="btn btn-danger">Sil</button>
                </td>
            </tr>
            `
        }
    }
    else{
        document.querySelector('.Fastkart').classList.add('d-none')
        document.querySelector('.alert').classList.remove('d-none')
    }
    
   
}
getProducts()


function getReviews() {
    let items = JSON.parse(localStorage.getItem('products'))
    let count = document.querySelector('.pr_count')
    let total_price = document.querySelector('.total_price')
    let sum=0
    for(let item of items) {
        sum += (item.Count) * (item.Price)
    }

    count.innerHTML = items.length
    total_price.innerHTML = `${sum} TL`

}
getReviews()

let deleteBtns = document.querySelectorAll('table button')

for(let btn of deleteBtns) {
    btn.onclick = function() {
        let id = this.parentElement.parentElement.id;
        let items = JSON.parse(localStorage.getItem('products'))
        
        let filtered = items.filter(x => x.Id !== id)
        localStorage.setItem('products', JSON.stringify(filtered))
        location.reload()
    }
}

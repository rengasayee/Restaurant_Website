// let items = document.getElementsByClassName('addItem');
// let itemsList = document.getElementById('itemsList');
// let total = 0;

// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener('click', () => {
//         // Get the parent element of the clicked button
//         let selectedItem = items[i].parentNode;

//         // Extract item details
//         let itemName = selectedItem.querySelector('h2').innerText;
//         let itemCost = selectedItem.querySelector('.cost').innerText;

//         // Create a new list item for the cart
//         let cartItem = document.createElement('li');
//         cartItem.innerHTML = `<span>${itemName}</span> - <span>${itemCost}</span>`;
        
//         // Append the item to the cart
//         itemsList.appendChild(cartItem);

//         // Update total price
//         total += parseFloat(itemCost.replace('$', ''));
//         console.log(total);
//     });
// }

let items = document.getElementsByClassName('addItem');
let list = document.getElementById('itemsList');
total = 0;

for(let i=0; i<items.length;i++){
    items[i].addEventListener('click', () =>{
        alert('added to cart');
        // let sec = document.getElementsByClassName('itemSelc');
        // list.innerHTML += sec[i];
        let price = document.getElementsByClassName('cost');
        total += parseInt(price[i].innerText);
        console.log(total);
    })
}
console.log(total);

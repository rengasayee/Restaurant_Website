// document.getElementsByClassName('pizza').addEventListener('click', val => {
//    const pizzaElements = document.getElementsByClassName('pizzaContent')[0];
//    pizzaElements.innerHTML += '<h2>MARGHERITA</h2> <span>$12.50</span> <p>Fresh tomatoes, fresh mozzarella, fresh basil</p>'
// }) 

const pizzaclick = document.getElementById('pizza');

pizzaclick.addEventListener('click',() => {
    const pizzaElements = document.getElementsByClassName('Content')[0];
    let pizzaitems = ` <div class="itemSelc">
                            <h2 class="margherita">MARGHERITA</h2> 
                            <span class="cost" id="cost1">$12.50</span> 
                            <p>Fresh tomatoes, fresh mozzarella, fresh basil</p> 
                            <button class="addItem">Add to Cart</button>
                            <hr> 
                        </div>

                    <div class="itemSelc">
                        <h2>FORMAGGIO</h2> 
                        <span class="cost" id="cost2">$15.50</span> 
                        <p>Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)</p>
                        <button class="addItem">Add to Cart</button>
                        <hr>
                    </div>

                    <div class="itemSelc">
                        <h2>Chicken</h2> 
                        <span class="cost" id="cost3">$17.00</span> 
                        <p>Fresh tomatoes, mozzarella, chicken, onions</p>
                        <button class="addItem">Add to Cart</button>
                        <hr>
                    </div>

                    <div class="itemSelc">
                        <h2>Pineapple'o'clock</h2> 
                        <span class="cost" id="cost4">$16.50</span> 
                        <p>Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil</p>
                        <button class="addItem">Add to Cart</button>
                        <hr>
                    </div>

                    <div class="itemSelc">
                        <h2>Meat Town<span class="hot">HOT!</span></h2> 
                        <span class="cost" id="cost5">$20.0</span> 
                        <p>Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken</p>
                        <button class="addItem">Add to Cart</button>
                        <hr>
                    </div>

                    <div class="itemSelc">
                        <h2>Parma<span class="new">NEW!</span></h2> 
                        <span class="cost" id="cost6">$21.50</span> 
                        <p>Fresh tomatoes, mozzarella, parma, bacon, fresh arugula</p>
                        <button class="addItem">Add to Cart</button>
                        <hr>
                    </div>
                    `
    pizzaElements.innerHTML = pizzaitems;
})

const saladclick = document.getElementById('salads');

saladclick.addEventListener('click',() => {
    const saladElements = document.getElementsByClassName('Content')[0];
    let saladitems = `<h2>Lasagna <span class="popular">Popular</span> </h2> 
                    <span class="cost">$12.50</span> 
                    <p>Special sauce, mozzarella, parmesan, ground beef</p> 
                    <button class="addItem">Add to Cart</button>
                    <hr> 

                    <h2>Ravioli</h2> 
                    <span class="cost">$13.50</span> 
                    <p>Ravioli filled with cheese</p>
                    <button class="addItem">Add to Cart</button>
                    <hr>

                    <h2>Spaghetti Classica</h2> 
                    <span class="cost">$17.00</span> 
                    <p>Fresh tomatoes, mozzarella, chicken, onions</p>
                    <button class="addItem">Add to Cart</button>
                    <hr>

                    <h2>Pineapple'o'clock</h2> 
                    <span class="cost">$11.00</span> 
                    <p>Fresh tomatoes, onions, ground beef</p>
                    <button class="addItem">Add to Cart</button>
                    <hr>

                    <h2>Seafood pasta</h2> 
                    <span class="cost">$25.50</span> 
                    <p>Salmon, shrimp, lobster, garlic</p>
                    <button class="addItem">Add to Cart</button>
                    <hr>

                    `
    saladElements.innerHTML = saladitems;
})

const starterclick = document.getElementById('starter');

starterclick.addEventListener('click',() => {
    const starterElements = document.getElementsByClassName('Content')[0];
    let starteritems = `<h2>Today's Soup <span class="seasonal">Seasonal</span></h2> 
                    <span class="cost">$15.50</span> 
                    <p>Ask the waiter</p> 
                    <button class="addItem">Add to Cart</button>
                    <hr> 

                    <h2>Bruschetta</h2> 
                    <span class="cost">$8.50</span> 
                    <p>Bread with pesto, tomatoes, onion, garlic</p>
                    <button class="addItem">Add to Cart</button>
                    <hr>

                    <h2>Garlic bread</h2> 
                    <span class="cost">$9.50</span> 
                    <p>Grilled ciabatta, garlic butter, onions</p>
                    <button class="addItem">Add to Cart</button>
                    <hr>

                    <h2>Pineapple'o'clock</h2> 
                    <span class="cost">$16.50</span> 
                    <p>Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil</p>
                    <button class="addItem">Add to Cart</button>
                    <hr>

                    <h2>Tomozzarella</h2> 
                    <span class="cost">$10.50</span> 
                    <p>Tomatoes and mozzarella</p>
                    <button class="addItem">Add to Cart</button>
                    <hr>

                    `
    starterElements.innerHTML = starteritems;
})

// const time = document.querySelectorAll('.timing p');

// for(let i=3;i<time.length;i++){
//     const weekend = document.getElementsByClassName('weekend')[0];
//     weekend.innerHTML += time[i];
//     console.log(weekend.innerText);
// }

let mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// mybutton.addEventListener('click', () => {
//     let top = document.getElementById('topbutton');
//     top.innerHTML += `<a href="#home"></a>`;
// })

// mybutton.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// })




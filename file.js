// document.getElementsByClassName('pizza').addEventListener('click', val => {
//    const pizzaElements = document.getElementsByClassName('pizzaContent')[0];
//    pizzaElements.innerHTML += '<h2>MARGHERITA</h2> <span>$12.50</span> <p>Fresh tomatoes, fresh mozzarella, fresh basil</p>'
// }) 

const pizzaclick = document.getElementById('pizza');

pizzaclick.addEventListener('click',() => {
    const pizzaElements = document.getElementsByClassName('Content')[0];
    let pizzaitems = `<h2 class="margherita">MARGHERITA</h2> 
                    <span class="cost">$12.50</span> 
                    <p>Fresh tomatoes, fresh mozzarella, fresh basil</p> 
                    <hr> 

                    <h2>FORMAGGIO</h2> 
                    <span class="cost">$15.50</span> 
                    <p>Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)</p>
                    <hr>

                    <h2>Chicken</h2> 
                    <span class="cost">$17.00</span> 
                    <p>Fresh tomatoes, mozzarella, chicken, onions</p>
                    <hr>

                    <h2>Pineapple'o'clock</h2> 
                    <span class="cost">$16.50</span> 
                    <p>Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil</p>
                    <hr>

                    <h2>Meat Town<span class="hot">HOT!</span></h2> 
                    <span class="cost">$20.0</span> 
                    <p>Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken</p>
                    <hr>

                    <h2>Parma<span class="new">NEW!</span></h2> 
                    <span class="cost">$21.50</span> 
                    <p>Fresh tomatoes, mozzarella, parma, bacon, fresh arugula</p>
                    <hr>

                    `
    pizzaElements.innerHTML = pizzaitems;
})

const saladclick = document.getElementById('salads');

saladclick.addEventListener('click',() => {
    const saladElements = document.getElementsByClassName('Content')[0];
    let saladitems = `<h2>Lasagna <span class="popular">Popular</span> </h2> 
                    <span class="cost">$12.50</span> 
                    <p>Special sauce, mozzarella, parmesan, ground beef</p> 
                    <hr> 

                    <h2>Ravioli</h2> 
                    <span class="cost">$13.50</span> 
                    <p>Ravioli filled with cheese</p>
                    <hr>

                    <h2>Spaghetti Classica</h2> 
                    <span class="cost">$17.00</span> 
                    <p>Fresh tomatoes, mozzarella, chicken, onions</p>
                    <hr>

                    <h2>Pineapple'o'clock</h2> 
                    <span class="cost">$11.00</span> 
                    <p>Fresh tomatoes, onions, ground beef</p>
                    <hr>

                    <h2>Seafood pasta</h2> 
                    <span class="cost">$25.50</span> 
                    <p>Salmon, shrimp, lobster, garlic</p>
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
                    <hr> 

                    <h2>Bruschetta</h2> 
                    <span class="cost">$8.50</span> 
                    <p>Bread with pesto, tomatoes, onion, garlic</p>
                    <hr>

                    <h2>Garlic bread</h2> 
                    <span class="cost">$9.50</span> 
                    <p>Grilled ciabatta, garlic butter, onions</p>
                    <hr>

                    <h2>Pineapple'o'clock</h2> 
                    <span class="cost">$16.50</span> 
                    <p>Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil</p>
                    <hr>

                    <h2>Tomozzarella</h2> 
                    <span class="cost">$10.50</span> 
                    <p>Tomatoes and mozzarella</p>
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



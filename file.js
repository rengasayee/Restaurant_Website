// document.getElementsByClassName('pizza').addEventListener('click', val => {
//    const pizzaElements = document.getElementsByClassName('pizzaContent')[0];
//    pizzaElements.innerHTML += '<h2>MARGHERITA</h2> <span>$12.50</span> <p>Fresh tomatoes, fresh mozzarella, fresh basil</p>'
// }) 

const pizzaclick = document.getElementById('pizza');

pizzaclick.addEventListener('click',() => {
    const pizzaElements = document.getElementsByClassName('pizzaContent')[0];
    let pizzaitems = `<h2>MARGHERITA</h2> 
                    <span class="cost">$12.50</span> 
                    <p>Fresh tomatoes, fresh mozzarella, fresh basil</p> 
                    <hr> 

                    <h2>FORMAGGIO</h2> 
                    <span class="cost">$15.50</span> 
                    <p>Four cheeses (mozzarella, parmesan, pecorino, jarlsberg) 
                    <hr>

                    <h2>Chicken</h2> 
                    <span class="cost">$17.00</span> 
                    <p>Fresh tomatoes, mozzarella, chicken, onions 
                    <hr>

                    <h2>Pineapple'o'clock</h2> 
                    <span class="cost">$16.50</span> 
                    <p>Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil
                    <hr>

                    <h2>Meat Town<span class="hot">HOT!</span></h2> 
                    <span class="cost">$20.0</span> 
                    <p>Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken
                    <hr>

                    <h2>Parma<span class="new">NEW!</span></h2> 
                    <span class="cost">$21.50</span> 
                    <p>Fresh tomatoes, mozzarella, parma, bacon, fresh arugula
                    <hr>

                    `
    pizzaElements.innerHTML += pizzaitems;
})

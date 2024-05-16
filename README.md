**This website consists of:**

--> Home page
--> Menu section
--> About, and 
--> Contact section

These sections are contained in the Navbar tag used in HTML.

**Home page** consists of the main theme of the restaurant, which in this case is, pizza.

**Menu section** contains different food items.
It has the headings Pizza, Salads and Starter. When the buttons are clicked, the respective items are listed.

JavaScript is used here. When the button is clicked, using **AddEventListener** , the content is added to an empty div tag. 
According to the heading title, the content is then replaced using **TagName.innerHTML=Content**.

Forms were used to collect some user information, though no backend processing is done with the data.

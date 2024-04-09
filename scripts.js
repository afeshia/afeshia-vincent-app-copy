/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const SHEET_MASK_URL = "https://img.freepik.com/free-photo/front-view-woman-applying-facial-mask_23-2148641482.jpg?t=st=1712688176~exp=1712691776~hmac=bdf3493171015c773b5468d0b44dc3dd2226674ebc7ef0e56252455e9e1f320b&w=900";
const PEEL_OFF_URL = "https://img.freepik.com/free-photo/handsome-men-who-apply-black-cosmetics-their-faces-showing-various-postures-with-pink_1150-18433.jpg?t=st=1712688224~exp=1712691824~hmac=e79504c43b7659297657654211d70bb05a42b1bf90c5299ff5f9aa7ec86e3d50&w=1380";
const CLAY_URL = "https://img.freepik.com/free-photo/two-happy-friendly-young-woman-stand-closely-each-other-appy-clay-facial-masks-smile-toothily-concentrated-away-enjoy-facial-treatments-take-care-skin-being-good-mood-beauty-concept_273609-60757.jpg?t=st=1712688079~exp=1712691679~hmac=63f71cd4f59fff3d623442dd78da44235684334551fbd75343ecbbd144c38af9&w=1380";
const CREAM_URL = "https://img.freepik.com/free-photo/skincare_186202-295.jpg?t=st=1712688289~exp=1712691889~hmac=b5af098658adf5ee849c24e5aa1a664e1a0c991f603c63edc3672fc89da0f6a2&w=740";
const BUBBLY_URL = "https://img.freepik.com/free-photo/portrait-young-woman-with-afro-haircut-washing-her-skin_273609-22093.jpg?t=st=1712696195~exp=1712699795~hmac=a5f1b2d0bad2b0895139a1ebf157a3fab6079f3dd4703285ad58412d3e8a638d&w=1380";
const GOLD_URL = "https://img.freepik.com/premium-photo/young-asian-woman-relaxing-bed-with-hair-rollers-golden-sheet-mask-her-face-view-from_274689-22804.jpg?w=1380";


// This is an array of strings (TV show titles)
let masks = [
    "Sheet Mask",
    "Peel Off Mask",
    "Clay Mask",
    "Cream Mask",
    "Bubbly",
    "Gold"

];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < masks.length; i++) {
        let mask = masks[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = SHEET_MASK_URL;
        } else if (i == 1) {
            imageURL = PEEL_OFF_URL;
        } else if (i == 2) {
            imageURL =  CLAY_URL ;
        } else if (i == 3) {
            imageURL = CREAM_URL;
        } else if (i == 4) {
            imageURL = BUBBLY_URL;
        } else if (i == 5) {
            imageURL = GOLD_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, mask, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Mask";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("Oopsie! Looks like we have an error. My apologies! I hope you are a forgiving person!");
}

function removeLastCard() {
    masks.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appsettings = {
    projectId: "ishop-b5083",
    databaseURL: "https://ishop-b5083-default-rtdb.firebaseio.com/"
};

const app = initializeApp(appsettings);
const database = getDatabase(app);
const itemsdb = ref(database, "items");

const inputvalue = document.getElementById("item");

function displayItem() {
    const enteredItem = inputvalue.value;
    console.log(enteredItem);

    push(itemsdb, enteredItem);

    console.log(`${enteredItem} added to database!`);
}

const addButton = document.getElementById("cart");
addButton.addEventListener("click", displayItem);
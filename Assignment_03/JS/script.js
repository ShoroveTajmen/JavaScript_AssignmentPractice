// Ensure the data.js file is loaded first before executing this script

// STEP 1: Add new students (one should be my name)
students.push("Annayesha", "Islam", "Nargis"); // Change "Michael" to your first name

// STEP 2: Display total student count
document.getElementById("studentCount").textContent = students.length;

// STEP 3: Display the target name
document.getElementById("targetName").textContent = targetName;

// STEP 4: Convert targetName to lowercase for case-insensitive comparison
const targetLower = targetName.toLowerCase();

// STEP 5: Iterate through students and display names in a list
const studentList = document.getElementById("studentList");
let found = false;

students.forEach(student => {
    let listItem = document.createElement("li");

    // Compare names (case-insensitive)
    if (student.toLowerCase() === targetLower) {
        found = true;
        listItem.classList.add("target-item"); // Apply special CSS
        listItem.innerHTML = `👍 ${student} <b>← target name found!</b>`;
    } else {
        listItem.textContent = student;
    }

    studentList.appendChild(listItem);
});

// STEP 6: Display final search result message
const resultMessage = document.getElementById("searchResult");
if (found) {
    resultMessage.innerHTML = "<span class='found'>👍YES! Target name was found in the list</span>";
} else {
    resultMessage.innerHTML = "<span class='not-found'>👎NO, Target name was NOT found in the list</span>";
}



// ---------------- Part B Implementation ---------------- //

// Function to determine warehouse location
function getWarehouse(productName) {
    if (warehouseA.includes(productName)) return "A";
    if (warehouseB.includes(productName)) return "B";
    return "Unknown";
}

// Sorting products alphabetically
products.sort((a, b) => a[0].localeCompare(b[0]));

// Generating table rows
const productTableBody = document.querySelector("#productTable tbody");

products.forEach((product, index) => {
    let row = document.createElement("tr");

    if (index % 2 !== 1) {
        row.style.backgroundColor = "rgb(246, 238, 202)"; // Apply yellow background for even rows (0-based index)
    }

    let nameCell = document.createElement("td");
    nameCell.textContent = product[0];

    let idCell = document.createElement("td");
    idCell.textContent = product[1];

    let costCell = document.createElement("td");
    costCell.textContent = `$${product[2].toFixed(2)}`;
    costCell.style.textAlign = "right";

    let quantityCell = document.createElement("td");
    quantityCell.textContent = product[3];
    quantityCell.style.textAlign = "right";

    let warehouseCell = document.createElement("td");
    warehouseCell.textContent = getWarehouse(product[0]);

    row.appendChild(nameCell);
    row.appendChild(idCell);
    row.appendChild(costCell);
    row.appendChild(quantityCell);
    row.appendChild(warehouseCell);

    productTableBody.appendChild(row);
});



// ---------------- Part C Implementation ---------------- //
const numberList = document.getElementById("numberList");
const sumResult = document.getElementById("sumResult");
const evenCount = document.getElementById("evenCount");
const oddCount = document.getElementById("oddCount");

let sum = 0, even = 0, odd = 0;


arrayOfNumbers.forEach(num => {
    let listItem = document.createElement("li");
    listItem.textContent = num;
    numberList.appendChild(listItem);
    
    sum += num;
    if (num !== 0) {
        num % 2 === 0 ? even++ : odd++;
    }
});

sumResult.textContent = sum;
evenCount.textContent = even;
oddCount.textContent = odd;


// ---------------- Part D Implementation ---------------- //
// Ensure the data.js file is loaded first before executing this script

// Function to handle countdown or count up
function countUpDown(num) {
    let result = "";

    if (num === 0) {
        result += `<span class="bold-number">Number: 0</span><br><br>count up/down: <br><ul><li>0</li></ul><hr>`;  // Single line for zero
    } else if (num > 0) {
        // Counting down from num to 0
        result += `<span class="bold-number">Number: ${num}</span><br><br>count down: <br><ul>`;
        for (let i = num; i >= 0; i--) {
            result += `<li>${i}</li>`;
        }
        result += `</ul><hr>`;  // Plain line after countdown
    } else if (num < 0) {
        // Counting up from num to 0
        result += `<span class="bold-number">Number: ${num}</span><br><br>count up: <br><ul>`;
        for (let i = num; i <= 0; i++) {
            result += `<li>${i}</li>`;
        }
        result += `</ul><hr>`;  // Plain line after count up
    }

    return result;
}

// Displaying the results
const countdownResults = document.getElementById("countdownResults");
arrayOfNumbers.forEach(num => {
    let p = document.createElement("p");
    p.innerHTML = countUpDown(num);
    countdownResults.appendChild(p);
});


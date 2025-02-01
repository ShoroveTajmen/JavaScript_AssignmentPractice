// Part A: Display User Info
document.addEventListener("DOMContentLoaded", () => {
    const userInfoSection = document.querySelector("#user-info");
  
    // Apply user name to an h2 element
    const userNameHeading = document.createElement("h2");
    userNameHeading.textContent = userName;
    userInfoSection.appendChild(userNameHeading);
  
    // Apply user name with quotes to a p element
    const userNameParagraph = document.createElement("p");
    userNameParagraph.innerHTML = `${userName} says: "Let's buy some tickets to the big virtual concert!"`;
    userInfoSection.appendChild(userNameParagraph);
  
    // Part B: Display User Details
    const userDetailsList = document.querySelector("#user-details ul");
    userDetailsList.innerHTML = `

      <li>User name: <strong> ${userName} </strong></li>
      <li>User age: <strong> ${age} </strong></li>
      <li>Ticket Qty: <strong> ${quantityOfTickets} </strong></li>
      <li>Cash: <strong> $${parseFloat(cashOnHandDollarsCDN).toFixed(2)} </strong></li>
      <li>Employee: <strong> ${employee ? "Yes" : "No"} </strong></li>
    `;
  
    // Part C: Display Concert Data
    const concertDataList = document.querySelector("#concert-data ul");
    concertDataList.innerHTML = `
      <li>Minimum age to attend: <strong> ${minimumAgeToAttend} </strong></li>
      <li>Cost Per Ticket: <strong> $${ticketCostDollarsCDN.toFixed(2)} </strong></li>
      <li>Tax Rate: <strong> ${(taxRate * 100).toFixed(0)}% </strong></li>
    `;
  
    // Part D: Calculate Purchase Details
    const beforeTaxCost = ticketCostDollarsCDN * quantityOfTickets;
    const taxAmount = beforeTaxCost * taxRate;
    const afterTaxCost = beforeTaxCost + taxAmount;
    const discount = employee ? afterTaxCost * employeeDiscountRate : 0;
    const afterDiscountCost = employee ? beforeTaxCost - discount : 0;
    const finalCost = afterTaxCost - discount;
  
    const summaryBody = document.querySelector("#summary-body");
    summaryBody.innerHTML = `
      <tr>
        <td>Purchasing 5 tickets at <strong>$30.00</strong></td>
        <td class="increase-cost">+$${beforeTaxCost.toFixed(2)}</td>
      </tr>
       ${employee ? `
      <tr>
        <td>Employee discount</td>
        <td class="decrease-cost">-$${discount.toFixed(2)}</td>
      </tr>` : ""}
       ${employee ? `
      <tr>
        <td>After discount total cost</td>
        <td class="afterDiscountCost">$${afterDiscountCost.toFixed(2)}</td>
      </tr>` : ""}
      <tr>
        <td>Tax</td>
        <td class="increase-cost">+$${taxAmount.toFixed(2)}</td>
      </tr>
    
      <tr>
        <td>After tax total cost</td>
        <td class="afterTaxTotalCost">$${finalCost.toFixed(2)}</td>
      </tr>
    `;
  
    // Part E: Display End Results
        // Part E: Display End Results
        const resultMessage = document.querySelector("#result-message");
        const successImage = document.querySelector("#success-image");
    
        if (age < minimumAgeToAttend && cashOnHandDollarsCDN < finalCost) {
            resultMessage.innerHTML = `<strong>👎Age:</strong>You are ${age} and that's not old enough to attend this show. You would need to be ${minimumAgeToAttend - age} years older than you actually are. Too bad, kiddo! <br>
            <br><strong>👎Cost:</strong>You cannot afford this purchase. To buy 5 tickets you will need $${(finalCost - cashOnHandDollarsCDN).toFixed(2)} more.<br>
            <br>Sorry, you will not be able to attend the show<br>`;
        } else if (age < minimumAgeToAttend) {
            resultMessage.innerHTML = `<strong>👎Age:</strong>You are ${age} and that's not old enough to attend this show. You would need to be ${minimumAgeToAttend - age} years older than you actually are. Too bad, kiddo! <br>`;
        } else if (cashOnHandDollarsCDN < finalCost) {
            resultMessage.innerHTML = `<strong>👎Lost:</strong>You cannot afford this purchase. To buy 5 tickets you will need $${(finalCost - cashOnHandDollarsCDN).toFixed(2)} more.<br>
            <br>Sorry, you will not be able to attend the show<br>`;
        } else {
            resultMessage.innerHTML = `
            <strong>👍Age:</strong>You are old enough to enjoy this concert!.<br>
            <br><strong>👍Cost:</strong>You can afford this purchase.<br>
            <br>There are no error messages to report.<br>
            <br>Enjoy the show!<br>`;
            successImage.src = "./images/party.jpg"; // Replace with an actual image path
            successImage.style.display = "block";
        }
  });
  
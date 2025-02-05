document.addEventListener("DOMContentLoaded", function () {
    // Greeting based on time
    const now = new Date();
    let greetingText = "";
    let imgSrc = "";

    if (now.getHours() < 12) {
        greetingText = "Good morning, the sun is rising";
        imgSrc = "images/sun-morning.png";
    } else if (now.getHours() < 18) {
        greetingText = "Good afternoon, the sun is shining";
        imgSrc = "images/sun-afternoon.png";
    } else {
        greetingText = "Good evening, the moon is up";
        imgSrc = "images/moon.png";
    }


    // will set a sun image
    document.getElementById("greeting").innerHTML = `<img src="${imgSrc}" alt="${greetingText}">`;

    // Set up the date picker
    document.getElementById("datePicker").value = "2024-11-18";

    // Display images list
    document.getElementById("images-list").innerHTML = listImages(arrayOfImages);
    document.getElementById("some-images-list").innerHTML = listImages(arrayOfSomeImages);

    // Display names list
    document.getElementById("names-list").innerHTML = listNames(arrayOfNames, "ul");
    document.getElementById("names-list").innerHTML += listNames(arrayOfNames, "ol");
});

// Function to set the date picker to today's date
function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("datePicker").value = today;
}


// Display hyperlinks list
document.getElementById("links-list").innerHTML = listLinks(arrayOfLinks);
document.getElementById("moreLink-list").innerHTML = listLinks(anotherArrayOfLinks);


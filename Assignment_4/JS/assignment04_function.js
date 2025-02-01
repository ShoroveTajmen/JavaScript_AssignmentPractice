// Function to display an HTML list of images
function listImages(imageArray) {
    if (!Array.isArray(imageArray)) {
        return "Error: Expected an array.";
    }

    let listHtml = "<ul>";
    for (let item of imageArray) {
        if (typeof item === "string") {
            listHtml += `<li><img src="images/${item}" alt="${item}"></li>`;
        } else {
            console.error(`Invalid item in array: ${item}`);
        }
    }
    listHtml += "</ul>";
    return listHtml;
}

// Function to display an HTML list of names
function listNames(nameArray, listType = "ul") {
    if (!Array.isArray(nameArray) || nameArray.length < 2 || (listType !== "ul" && listType !== "ol")) {
        return "Error: Invalid input parameters.";
    }

    let listHtml = `<${listType}>`;
    for (let name of nameArray) {
        listHtml += `<li>${name}</li>`;
    }
    listHtml += `</${listType}>`;
    return listHtml;
}

$(document).ready(function() {
    let baseImage = "black";
    let currentView = "no-model";
    let unitPrice = 20;
    let selectedSize = false;

    // Change main image when clicking on thumbnails
    $(".thumb").click(function() {
        $(".thumb").removeClass("active");
        $(this).addClass("active");
        currentView = $(this).data("view");
        $("#main-image").attr("src", `product-images/t-shirt-${baseImage}-${currentView}.jpg`);
    });

    // Update total price when quantity changes
    $("#quantity").change(function() {
        let quantity = $(this).val();
        let total = unitPrice * quantity;
        $("#total-price").text(total.toFixed(2));
    });

    // Change color and update images
    $("input[name='color']").change(function() {
        baseImage = $(this).val();
        $("#color-text").text(baseImage);
        $(".thumb").each(function() {
            let view = $(this).data("view");
            $(this).attr("src", `product-images/t-shirt-${baseImage}-${view}.jpg`);
        });
        $("#main-image").attr("src", `product-images/t-shirt-${baseImage}-${currentView}.jpg`);
    });

    // Update size text and enable button
    $("input[name='size']").change(function() {
        $("#size-text").text($(this).val());
        selectedSize = true;
        $("#add-to-cart").text("Add To Cart").addClass("active").prop("disabled", false);
    });

    // Redirect on button click
    $("#add-to-cart").click(function() {
        if (selectedSize) {
            window.location.href = "thank-you.html";
        }
    });
});

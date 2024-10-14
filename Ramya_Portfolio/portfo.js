$(document).ready(function () {
    // Fade-in effect for animated elements
    $(".animated").each(function (index) {
        $(this).delay(300 * index).fadeTo(500, 1);
    });
});


// Function to set the welcome text with typing effect and shake animation

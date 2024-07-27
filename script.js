document.addEventListener('DOMContentLoaded', function() {
    // Show the popup after 3 seconds
    setTimeout(function() {
        document.getElementById('offer-popup').classList.add('show');
    }, 3000);
});

function closePopup() {
    document.getElementById('offer-popup').classList.remove('show');
}

function claimOffer() {
    // Show the confirmation message
    var confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.classList.add('show');

    // Hide the confirmation message after 3 seconds
    setTimeout(function() {
        confirmationMessage.classList.remove('show');
    }, 3000);

    // Redirect to another page (e.g., offer page)
    setTimeout(function() {
        window.location.href = 'http://wa.me/9981158552'; // Replace with your URL
    }, 3000);

    closePopup();
}




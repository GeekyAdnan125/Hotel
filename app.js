function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}
function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle the 'show' class to display or hide nav links
    navLinks.classList.toggle('show');
    
    // Toggle the 'active' class on the hamburger for animation
    hamburger.classList.toggle('active');
}


// Contact form submit action
document.getElementById("contactForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevent default form submission

  const submitButton = this.querySelector("button[type=submit]");
  submitButton.disabled = true; // Disable button to prevent multiple submissions

   // Show success message immediately
   document.getElementById("successMessage").style.display = "block";
   document.getElementById("successMessage").innerText = "Sending..."; // Show loading message

  const formData = new FormData(this);

  try {
    const response = await fetch("https://formsubmit.co/ajax/641521ac5b291b641408e2b1ff249558", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      document.getElementById("successMessage").innerText = "Message sent successfully!";
      this.reset(); // Clear form fields
    } else {
      document.getElementById("successMessage").innerText = "Error sending message. Please try again.";
    }
    } catch (error) {
      document.getElementById("successMessage").innerText = "Network error. Please check your connection.";
    }

  setTimeout(() => {
  document.getElementById("successMessage").style.display = "none"; // Hide after 5 seconds
  }, 5000);

  submitButton.disabled = false; // Re-enable button after submission
});

// Investor Deck Download
function downloadInvestorDeck() {
    const password = prompt("Enter password to download the file:");
    
    if (password === "16118") { // Change this password as needed
      window.open("files/250903- Investor Deck- Par 4.pdf"); // Open file path in new tab
    } else {
        alert("Incorrect password. Access denied!");
    }
}






// Show the expanded img modal and insert the clicked img.
function myFunction(imgs) {
        var expandImg = document.getElementById("expandedImg");
        var modal = document.getElementById("img-bg-modal");

        expandImg.src = imgs.src;
        modal.style.display = "flex"; // Using flex to center in viewport

        // imgText.innerHTML = imgs.alt;
        document.getElementById("img-bg-modal").style.display = "block";
    }

// Close Button IMG Modal
document.querySelector('.imgModal-close').addEventListener("click", function() {
	document.querySelector('.img-bg-modal').style.display = "none";
});

// Close IMG modal on escape button 
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.img-bg-modal').style.display = "none";
  }
})

// Close IMG modal when clicking outside the image
document.getElementById("img-bg-modal").addEventListener("click", function(event) {
  var expandImg = document.getElementById("expandedImg");
  if (!expandImg.contains(event.target)) {
      document.getElementById("img-bg-modal").style.display = "none";
  }
});








// Page Tabs changing function
function openPage(evt, pgName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("pageContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("pageLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pgName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




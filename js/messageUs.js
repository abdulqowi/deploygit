document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("title").value || "Not provided";
    var date = document.getElementById("date").value || "Not provided";
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById("body").value || "Not provided";
  
    // Display form values in the card
    document.getElementById("nameOutput").textContent = "Nama: " + name;
    document.getElementById("dateOutput").textContent = "Tanggal Lahir: " + date;
    document.getElementById("genderOutput").textContent = "Jenis Kelamin: " + (gender ? gender.value : "Not provided");
    document.getElementById("messageOutput").textContent = "Message: " + message;
  });
  
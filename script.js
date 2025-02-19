   function getFormvalue(event) {
      // Prevent form submission to avoid page reload
      event.preventDefault();

      // Retrieve the values from the form fields
      const firstName = document.querySelector('input[name="fname"]').value.trim();
      const lastName = document.querySelector('input[name="lname"]').value.trim();

      // Create the full name
      const fullName = `${firstName} ${lastName}`;

      // Display the full name using alert
      alert(fullName);
    }

    // Add event listener for form submission
    document.getElementById("nameForm").addEventListener("submit", getFormvalue)
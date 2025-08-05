
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("success-msg");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // stop default form submission

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset(); // Clear the form
        successMsg.style.display = "block"; // Show message
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });


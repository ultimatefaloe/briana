 fetch("nav.html")
        .then((res) => res.text())
        .then((data) => {
          // Insert the text content into the placeholder div
          document.getElementById("navigation").innerHTML = data;
        })
        .catch((error) => console.error("Error loading HTML:", error));


const button = document.getElementById("login");

button.addEventListener("click", () => {
  window.location.href = "login.html";
})
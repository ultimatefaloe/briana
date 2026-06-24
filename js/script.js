// const navArray = [
//   { name: "Home", link: "/index.html" },
//   { name: "About", link: "/about.html" },
//   { name: "Services", link: "/services.html" },
//   { name: "Contact", link: "/contact.html" },
// ];

const array = [1, 2, 3, 4, 5];

const user = {
  name: "Braina",
  age: 30,
  profession: "Developer",
}

console.log(user.profession)

const root = document.getElementById("root");

root.innerHTML = `
  <nav class="navbar">
    <h2 class="logo">My Website</h2>
    <ul class="nav-links">
      <li><a href="/index.html">Home</a></li>
      <li><a href="/about.html">About</a></li>
      <li><a href="/services.html">Services</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  </nav>

  <main>
    <h1>Welcome to My Website</h1>
    <p>This is a simple webpage created using JavaScript.</p>
    <button id="clickMe">Click Me!</button>
  </main>
`;
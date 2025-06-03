// Toggle mobile nav menu (if applicable)
const menuIcon = document.querySelector(".bi-three-dots");
const navMenu = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Handle Explore Now button
const exploreBtn = document.querySelector(
  'input[type="button"][value="Explore Now"]'
);

exploreBtn.addEventListener("click", () => {
  const location = document.querySelector(
    'input[placeholder="Enter your destination"]'
  ).value;
  const date = document.querySelector('input[type="date"]').value;
  const people = document.querySelector(
    'input[placeholder="How many people?"]'
  ).value;

  if (location && date && people) {
    alert(
      `Searching trips for:\nLocation: ${location}\nDate: ${date}\nPeople: ${people}`
    );
  } else {
    alert("Please fill out all fields before exploring.");
  }
});

// Handle Subscribe button
const subscribeBtn = document.querySelector("footer button");
const emailInput = document.querySelector('footer input[type="text"]');

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (email === "") {
    alert("Please enter your email address.");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert(`Subscribed successfully with ${email}!`);
    emailInput.value = ""; // Clear the field
  }
});

// Email validation helper
function validateEmail(email) {
  const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
// Get modal elements
const modal = document.getElementById('readNowModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModalBtn = document.getElementById('closeModal');

// Sample details for each city - extend as needed
const cityDetails = {
  CHENNAI: {
    title: "Chennai, India",
    image: "img/chennai image.jpg",
    description: "Chennai is known for its cultural heritage, beautiful temples, and beaches. Enjoy delicious South Indian cuisine and vibrant festivals."
  },
  NEWYORK: {
    title: "New York, USA",
    image: "img/newyork image.jpg",
    description: "The city that never sleeps offers iconic landmarks like Times Square, Central Park, and a diverse culinary scene."
  },
  SANPETERSBURG: {
    title: "Saint Petersburg, Russia",
    image: "img/russia city image.avif",
    description: "Known for its baroque architecture, museums, and the beautiful Neva River."
  },
  BARCELONA: {
    title: "Barcelona, Spain",
    image: "img/barcelona spain image.jpg",
    description: "Famous for its art, architecture, beaches, and vibrant street life."
  }
};

// Open modal function
function openModal(cityKey) {
  const details = cityDetails[cityKey];
  if(details) {
    modalTitle.textContent = details.title;
    modalImage.src = details.image;
    modalImage.alt = details.title;
    modalDescription.textContent = details.description;
    modal.style.display = "block";
  }
}

// Close modal
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Close modal if clicking outside content
window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}

// Add event listeners to all "Read Now" links
document.querySelectorAll(".read-now").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const modal = document.getElementById("readNowModal");
    document.getElementById("modalTitle").textContent = this.dataset.title;
    document.getElementById("modalImage").src = this.dataset.img;
    document.getElementById("modalDescription").textContent =
      this.dataset.description;
    modal.style.display = "block";
  });
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("readNowModal").style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === document.getElementById("readNowModal")) {
    document.getElementById("readNowModal").style.display = "none";
  }
});

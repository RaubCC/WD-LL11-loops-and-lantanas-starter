const wishlist = [
  "Butterfly Garden",
  "Shaded Benches",
  "Solar-Powered Lights",
  "Dog-Friendly Water Station"
];

document.getElementById("wishlist").innerHTML = wishlist
  .map(item => `<li class="wishlist-item">${item}</li>`)
  .join('');

function generateStationDescription(station) {
  if (!station.isOpen) {
    return `This ${station.type.toLowerCase()} is currently closed.`;
  }
  return `This ${station.type.toLowerCase()} is open from ${station.hours} in ${station.location}.`;
}

function addStationElement(station) {
  const list = document.getElementById("station-list");
  const div = document.createElement("div");
  div.className = "station";
  div.innerHTML = `
    <h3>${station.name}</h3>
    <p class="station-desc">${generateStationDescription(station)}</p>
    <p><strong>Location:</strong> ${station.location}</p>
    <p><strong>Type:</strong> ${station.type}</p>
  `;
  list.appendChild(div);
}

// Display wishlist using a loop
const wishlistSection = document.getElementById("wishlist");
const ul = document.createElement("ul");
for (let i = 0; i < wishlist.length; i++) {
  const li = document.createElement("li");
  li.className = "wishlist-item";
  li.textContent = wishlist[i];
  ul.appendChild(li);
}
wishlistSection.appendChild(ul);

function renderStations(filterCity = "all") {
  const list = document.getElementById("station-list");
  list.innerHTML = "";

  const filtered = filterCity === "all"
    ? stations
    : stations.filter(station => station.city === filterCity);

  if (filtered.length === 0) {
    const msg = document.createElement("div");
    msg.className = "no-results";
    msg.textContent = "No stations found. Try another city!";
    list.appendChild(msg);
    return;
  }

  filtered.forEach(addStationElement);
}

function renderFeaturedStation(station) {
  const container = document.getElementById("featured-station");
  if (!station) {
    container.innerHTML = "<p>No open stations to feature right now!</p>";
    return;
  }
  container.innerHTML = `
    <div class="featured-station">
      <h2>🌟 Featured Station 🌟</h2>
      <h3>${station.name}</h3>
      <p><strong>Location:</strong> ${station.location}</p>
      <p><strong>Type:</strong> ${station.type}</p>
    </div>
  `;
}

function pickAndRenderFeaturedStation() {
  const openStations = stations.filter(station => station.isOpen);
  if (openStations.length === 0) {
    renderFeaturedStation(null);
    return;
  }
  const randomIndex = Math.floor(Math.random() * openStations.length);
  const featuredStation = openStations[randomIndex];
  renderFeaturedStation(featuredStation);
}

pickAndRenderFeaturedStation();

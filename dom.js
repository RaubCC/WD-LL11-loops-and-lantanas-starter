const wishlist = [
  "Butterfly Garden",
  "Shaded Benches",
  "Solar-Powered Lights",
  "Dog-Friendly Water Station"
];

function addWishlistItemElement(item) {
  const list = document.getElementById("wishlist");
  const li = document.createElement("li");
  li.className = "wishlist-item";
  li.textContent = item;
  list.appendChild(li);
}

function addStationElement(station) {
    const list = document.getElementById("station-list");
    const div = document.createElement("div");
    div.className = "station";
    div.innerHTML = `
      <h3>${station.name}</h3>
      <p><strong>Location:</strong> ${station.location}</p>
      <p><strong>Type:</strong> ${station.type}</p>
    `;
    list.appendChild(div);
  }

document.getElementById("wishlist").innerHTML =
  wishlist.map(item => `<li class="wishlist-item">${item}</li>`).join('');

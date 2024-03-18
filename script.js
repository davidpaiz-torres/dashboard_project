// Select the filters
const boroughFilter = document.getElementById('borough');
const restaurantFilter = document.getElementById('restaurant');

// Select the item elements
const items = document.querySelectorAll('.item');

// Filter by borough
function filterByBorough() {
  // Get the selected borough
  const selectedBorough = boroughFilter.value;

  // Show only the selected borough
  items.forEach(item => {
    if (item.getAttribute('borough') === selectedBorough || selectedBorough === 'Default') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Filter by restaurant
function filterByRestaurant() {
  // Get the selected restaurant
  const selectedRestaurant = restaurantFilter.value;

  // Show only the selected restaurant
  items.forEach(item => {
    const itemRestaurant = item.getAttribute('restaurant');
    if (itemRestaurant === selectedRestaurant || selectedRestaurant === 'Default') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


// Add event listeners for each filter
boroughFilter.addEventListener('change', filterByBorough);
restaurantFilter.addEventListener('change', filterByRestaurant);

// Call the filter functions initially to apply the initial filtering
filterByBorough();
filterByRestaurant();

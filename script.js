document.getElementById('foodButton').addEventListener('click', getFoodImage);

function getFoodImage() {
    fetch('https://foodish-api.com/api/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayFoodImage(data.image);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

function displayFoodImage(imageUrl) {
    const foodContainer = document.getElementById('foodContainer');
    foodContainer.innerHTML = '';
    const foodImage = document.createElement('img');
    foodImage.classList.add('food-image');
    foodImage.src = imageUrl;
    foodContainer.appendChild(foodImage);
}

// // client.js
// document.getElementById('preferencesForm').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const location = document.getElementById('location').value;
//     const interests = document.getElementById('interests').value;
//     const budget = document.getElementById('budget').value;
//     const travel_date = document.getElementById('travel_date').value;

//     try {
//         const response = await fetch('/api/preferences', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ location, interests, budget, travel_date })
//         });

//         const result = await response.json();
//         if (result.success) {
//             alert('Preferences saved successfully');
//         } else {
//             alert('Failed to save preferences');
//         }
//     } catch (error) {
//         console.error('Error saving preferences:', error);
//         alert('Error saving preferences');
//     }
// });

// document.getElementById('itineraryForm').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const location = document.getElementById('location').value;
//     const interests = document.getElementById('interests').value;
//     const budget = document.getElementById('budget').value;
//     const travel_date = document.getElementById('travel_date').value;

//     try {
//         const response = await fetch('/api/plan-itinerary', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ location, interests, budget, travel_date })
//         });

//         const result = await response.json();
//         const itineraryResults = document.getElementById('itineraryResults');
//         itineraryResults.innerHTML = `
//             <p><strong>Itinerary:</strong> ${result.itinerary}</p>
//         `;
//     } catch (error) {
//         console.error('Error generating itinerary:', error);
//         alert('Error generating itinerary');
//     }

// });

// let map, directionsService, directionsRenderer;

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8
//     });

//     directionsService = new google.maps.DirectionsService();
//     directionsRenderer = new google.maps.DirectionsRenderer();
//     directionsRenderer.setMap(map);
// }

// function calculateRoute(from, to) {
//     const request = {
//         origin: from,
//         destination: to,
//         travelMode: 'DRIVING'
//     };

//     directionsService.route(request, (result, status) => {
//         if (status === 'OK') {
//             directionsRenderer.setDirections(result);
//         } else {
//             console.error('Error fetching directions:', status);
//         }
//     });
// }

// // Handle preferences form submission
// document.getElementById('preferencesForm').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const location = document.getElementById('location').value;
//     const interests = document.getElementById('interests').value;
//     const budget = document.getElementById('budget').value;
//     const travel_date = document.getElementById('travel_date').value;

//     try {
//         const response = await fetch('/api/preferences', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ location, interests, budget, travel_date })
//         });

//         const result = await response.json();
//         if (result.success) {
//             alert('Preferences saved successfully');
//         } else {
//             alert('Failed to save preferences');
//         }
//     } catch (error) {
//         console.error('Error saving preferences:', error);
//         alert('Error saving preferences');
//     }
// });

// // Handle itinerary form submission and display transport options
// document.getElementById('itineraryForm').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const location = document.getElementById('location').value;
//     const interests = document.getElementById('interests').value;
//     const budget = document.getElementById('budget').value;
//     const travel_date = document.getElementById('travel_date').value;

//     try {
//         const response = await fetch('/api/plan-itinerary', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ location, interests, budget, travel_date })
//         });

//         const result = await response.json();
//         const itineraryResults = document.getElementById('itineraryResults');
//         itineraryResults.innerHTML = `
//             <p><strong>Itinerary:</strong> ${result.itinerary}</p>
//         `;

//         // Example of using a recommended destination to calculate the route
//         const to = 'Times Square, New York'; // Replace with actual recommendation
//         calculateRoute(location, to);
//     } catch (error) {
//         console.error('Error generating itinerary:', error);
//         alert('Error generating itinerary');
//     }
// });

// client.js
document.getElementById('preferencesForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const interests = document.getElementById('interests').value;
    const budget = document.getElementById('budget').value;
    const travel_date = document.getElementById('travel_date').value;

    try {
        const response = await fetch('/api/preferences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ location, interests, budget, travel_date })
        });

        const result = await response.json();
        if (result.success) {
            alert('Preferences saved successfully');
        } else {
            alert('Failed to save preferences');
        }
    } catch (error) {
        console.error('Error saving preferences:', error);
        alert('Error saving preferences');
    }
});

document.getElementById('itineraryForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const interests = document.getElementById('interests').value;
    const budget = document.getElementById('budget').value;
    const travel_date = document.getElementById('travel_date').value;

    try {
        const response = await fetch('/api/plan-itinerary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ location, interests, budget, travel_date })
        });

        const result = await response.json();
        const itineraryResults = document.getElementById('itineraryResults');
        itineraryResults.innerHTML = `
            <p><strong>Itinerary:</strong> ${result.itinerary}</p>
        `;

        // Example of using a recommended destination to calculate the route
        const to = 'Times Square, New York'; // Replace with actual recommendation
        calculateRoute(location, to);
    } catch (error) {
        console.error('Error generating itinerary:', error);
        alert('Error generating itinerary');
    }
});

let map, directionsService, directionsRenderer;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
}

function calculateRoute(from, to) {
    const request = {
        origin: from,
        destination: to,
        travelMode: 'DRIVING'
    };

    directionsService.route(request, (result, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
        } else {
            console.error('Error fetching directions:', status);
        }
    });
}





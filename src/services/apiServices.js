const API_URL = process.env.REACT_APP_API_URL;

export function addPlant(plantDetails, userToken) {
  return fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      plantDetails,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error.message));
}

export function getPlantsByUserId(userToken) {
  return fetch(`${API_URL}/getplants`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error.message));
}

export function apiTest(userToken) {
  return fetch(`${API_URL}/test`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${userToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error.message));
}

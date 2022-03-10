const API_URL = process.env.REACT_APP_API_URL;

export function postReaction(plantDetails, userId) {
    return fetch(`${API_URL}/swipecards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": localStorage.getItem("doggytoken"),
      },
      body: JSON.stringify({
        to_user_id: userId,
        likes: boolean,
      }),
    });
  }
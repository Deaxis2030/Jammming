let url = "https://api.spotify.com/v1/";

export default async function getUserId(token) {
    try {
      const response = await fetch (url+"me", {
          method: "GET",
          headers: {
              "Authorization": "Bearer " + token
          }
      });
      
      if (response.ok) {
          const data = await response.json();
          return data.id;
      }
    }
    catch (err) {
      console.log(`Error: ${err}`);
    }
  }
  
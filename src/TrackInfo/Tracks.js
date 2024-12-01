let url = "https://api.spotify.com/v1/";

export default async function getTracks(searchInput, token) {
    const response = await fetch(url + "search?q=" + searchInput + "&type=track", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    const data = await response.json();
    return data.tracks.items;
    
}


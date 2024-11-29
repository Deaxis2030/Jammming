
let url = "https://api.spotify.com/v1/";

export async function getTracks(searchInput, token) {
    const response = await fetch(url + "search?q=" + searchInput + "&type=track", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    const data = await response.json();
    return data.tracks.items;
    
}

export async function getUserId(token) {
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



export async function postPlaylist(token, userId, name) {
    try {
        const response  = await fetch(`${url}users/${userId}/playlists`, {
      
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
            name: name,
            public: false
        })

    });
    if (response.ok) {
        const data = await response.json();
        return data.id;
    }
    }
    catch (err) {
        console.log (`Error: ${err}`);
    }
}


export async function addSongToPlaylist(token, playlistId, uriList) {

    const response  = await fetch(`${url}playlists/${playlistId}/tracks`, {
      
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
            uris: uriList,
        })

    })
    if (response.ok) {
        alert("Playlist saved!");
        const data = await response.json();
        return data;
    }
}




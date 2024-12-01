let url = "https://api.spotify.com/v1/";

export default async function postPlaylist(token, userId, name) {
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
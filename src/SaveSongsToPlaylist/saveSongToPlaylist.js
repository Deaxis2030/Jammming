let url = "https://api.spotify.com/v1/";

export default async function saveSongsToPlaylist(token, playlistId, uriList) {

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
        const data = await response.json();
        return data;
    }
}



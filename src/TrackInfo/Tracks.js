const Tracks= [
    {   
        songName: "Song 1",
        artist: "Guy 1",
        album: "first",
        id: "001"
    },
    {
        songName: "Song 2",
        artist: "Guy 2",
        album: "Second",
        id: "002"
    },
    {
        songName: "Song 3",
        artist: "Guy 3",
        album: "Third",
        id: "003"
    },
    {
        songName: "Song 4",
        artist: "Guy 4",
        album: "Fourth",
        id: "004"
    },
    {
        songName: "Song 5",
        artist: "Guy 5",
        album: "Fifth",
        id: "005"
    },

];

const getTracks = (text) => {
    return Tracks.filter ((track) => {
      return  (track.songName.includes(text)) || (track.artist.includes(text)) || (track.album.includes(text))
    });
};

export {getTracks};

//const TrackData = JSON.stringify(Tracks);

//export default TrackData;
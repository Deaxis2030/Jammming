

export default function GetAccessToken () {
    const client_id = '88a024cbfe354afdbb9ccaf5dbe1ddc8';
    const redirect_uri = 'http://localhost:3000/callback';

    const generateRandomString = (length) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = crypto.getRandomValues(new Uint8Array(length));
        return values.reduce((acc, x) => acc + possible[x % possible.length], "");
      }
    const state = generateRandomString(16);

    localStorage.setItem("stateKey", state);
    const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';
    
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    document.location.assign(url);

};
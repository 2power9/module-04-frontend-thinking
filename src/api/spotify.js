export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectURI = "http://localhost:3000/";
const clientID  = "8040c6582b4747d48a36cc99fb428d53";

const AUTH_SCOPE = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state"
];

export const getTokenFromURL = () => {
	return window.location.hash.substring(1).split('&')
		.reduce((initial, item) => {
			// accessToken=${key}&name=${userName}
			let parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
}

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${AUTH_SCOPE.join(
	"%20")}&response_type=token&show_dialog=true`;
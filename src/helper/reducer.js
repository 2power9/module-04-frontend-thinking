import { API_OPTIONS } from "./constant";

export const initialState = {
	user: null,
	playlists: [],
	token: null,
	staticPlaylist: null,
	staticTrack: null
}

const reducer = (state, action) => {
	switch (action.type) {
		case API_OPTIONS.SET_TOKEN:
			return {
				...state,
				token: action.token
			};

		case API_OPTIONS.SET_USER:
			return  {
				...state,
				user: action.user
			};

		case API_OPTIONS.SET_PLAYLISTS:
			return {
				...state,
				playlists: action.playlists
			};

		case API_OPTIONS.SET_STATIC_PLAYLIST:
			return {
				...state,
				staticPlaylist: action.staticPlaylist
			}
		
		case API_OPTIONS.SET_STATIC_TRACK:
			return {
				...state,
				staticTrack: action.staticTrack
			}

		default:
			return state;
	}
	return null;
}

export default reducer;

export const initialState = {
	user: null,
	playlists: [],
	token: null,
	staticPlaylist: null,
	staticTrack: null
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			};

		case 'SET_USER':
			return  {
				...state,
				user: action.user
			};

		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			};

		case 'SET_STATIC_PLAYLIST':
			return {
				...state,
				staticPlaylist: action.staticPlaylist
			}
		
		case 'SET_STATIC_TRACK':
			return {
				...state,
				staticTrack: action.staticTrack
			}

		default:
			return state;
	}
}

export default reducer;

import { LOGIN, GET_PROFILE_BY_TOKEN } from '../types/types';

export function login(data) {
	return (dispatch, getState) =>
		new Promise((resolve, reject) => {
			dispatch({
				type: LOGIN,
				payload: {
					request: {
						url: '/api/access/login',
						method: 'POST',
						headers: { Authorization: `Bearer ${getState().auth.token}` },
						data
					}
				}
			}).finally(() => {
				resolve();
			});
		});
}

export function getProfileByToken(token) {
	console.log('executing get profile by token');
	return (dispatch) =>
		new Promise((resolve) => {
			dispatch({
				type: GET_PROFILE_BY_TOKEN,
				payload: {
					request: {
						url: '/api/store_owner/access/get_profile',
						headers: { Authorization: `Bearer ${token}` },
						method: 'GET'
					}
				}
			}).finally(() => {
				resolve();
			});
		});
}

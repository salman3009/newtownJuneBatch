import Communication from './Communication';
import config from '../config';
const UserService = {

    loadUsers(dispatch) {
        dispatch({
            type: 'LOAD_USERS',
            payload: null
        })
        Communication.getMethod(config.endPoints.users).then(users => {
                dispatch({
                    type: 'GET_USERS',
                    payload: users
                })
            })
            .catch(() => {
                dispatch({
                    type: 'ERROR_USERS',
                    payload: null
                })
            })
            .finally(() => {

            })
    }

}
export default UserService;
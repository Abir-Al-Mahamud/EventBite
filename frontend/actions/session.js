import { postUser, deleteSession, postSession } from "../utils/session";

export const LOGIN_CURRENT_USER = "LOGIN_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const loginUser = user => ({
    type: LOGIN_CURRENT_USER,
    user: user 
})

const signoutUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const createNewUser = userForm => dispatch => createUser(userForm) 
    .then(newUser => dispatch(loginUser(newUser)))

export const signIn = userForm => dispatch => postSession(userForm) 
    .then(newUser => dispatch(loginUser(newUser)))

export const signOut = () => dispatch => deleteSession() 
    .then(current_user => dispatch(signoutUser(current_user)))
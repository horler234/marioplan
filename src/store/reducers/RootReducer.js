import ProjectReducer from './ProjectReducer';
import AuthReducer from './AuthReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
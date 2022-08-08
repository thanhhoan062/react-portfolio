import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
  projects: projectsReducer,
  // blog: blogPostsReducer,
  contact: contactReducer,
});

export default rootReducer;

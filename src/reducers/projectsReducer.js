const initialState = {
  allProjects: [],
  stacks: [],
  selectedStackIds: [],
  filteredProjects: [],
  loading: false,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_STACKS':
      return {
        ...state,
        stack: [...state.stacks],
        loading: true,
      };
    default:
      return state;
  }
};
export default projectsReducer;

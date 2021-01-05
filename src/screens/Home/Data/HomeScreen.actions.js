
export const addPastLaunches = (launchesList) => dispatch => {
  if (!launchesList) return;
  
  dispatch({type: 'ADD_PAST_LAUNCHES', payload: launchesList})
}
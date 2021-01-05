export default homeScreen = (state = [], action) => {
  //state === [{ mission_id: String, mission_name: String ,details: String, links: String }]
  //action === { type: '', payload: ''} 
  switch (action.type) {
    case 'ADD_PAST_LAUNCHES':
      return [...state, ...action.payload];
  
    default:
      return state;
  } 
}

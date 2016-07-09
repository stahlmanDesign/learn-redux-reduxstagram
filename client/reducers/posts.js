// a reducer for each key value in default state
// eventually they are all reduced into one

// a reducer takes 2 things

// 1. the action (what happened)
// 2. copy of current event

// state = [] is default
function posts(state = [], action){
  // must be a pure function. make a copy and modify that and return
  // could use test here or deep-freeze to prevent mutation of object
  //console.log("The post will change")
  //console.log(state, action);
  switch(action.type){
    case 'INCRMENET_LIKES':
    // return updated state
    console.log("incrementing likes!")
    const i = action.index;
    return [
      // return new array copied with part that changed
      // could use array.concat but in ES6 can use ... spread operator
      // similar to Object.assign
      ...state.slice(0,i), // everything up to the one we are updating
      {...state[i], likes: state[i].likes + 1}, // copy state[i], update num likes
      ...state.slice(i+1), // everything after the one we are updating
    ]
    default:
      return state;
  }

}

export default posts;

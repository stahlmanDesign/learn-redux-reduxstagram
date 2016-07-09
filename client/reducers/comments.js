// a reducer for each key value in default state
// eventually they are all reduced into one

// a reducer takes 2 things

// 1. the action (what happened)
// 2. copy of current event


// state = [] is default
function comments(state = [], action){
  // reducer does editing of state
  console.log("The comment will change")
  //console.log(state, action);

  if (typeof action.postId !== "undefined"){
    return {
      // copy the current state
      ...state,
      // overwrite this post by looking up keyname
      [action.postId]: postComments(state[action.postId], action) // pass to reducer composition

    }
  }
  return state;
}

function postComments(state = [], action){
  switch(action.type){
    case 'ADD_COMMENT':
      // return existing state + new comment

      // ...state // copy state
      // , {} add other object
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
    console.log("removing a comment")

      // return the new state without deleted comment
      return [
        // from the start of array to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
        // NOTE notice how not deleting anything.
        // Redux does not mutate existing variables, it returns a new state with the modifs
        // this allows for undo, time travel, seeing everything that ever happened in sequence
      ]

    default:
      return state;
  }
  return state;
}


export default comments;

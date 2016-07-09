// NOTE in complex app these action creators could be in separate files

// increment

// export so they are accessible in other files
export function increment(index) {   // this is the action creator
  // just an object about what happened
  return {
    type: 'INCRMENET_LIKES', // this is the action

    index // NOTE in ES6, this is same as index:index
  }
}
// remove comment

export function addComment(postId, author, comment){
  //console.log("dispatching add comment")
  return {
    type: 'ADD_COMMENT',
    postId, // NOTE in ES6, this is same as postId:postId
    author,
    comment
  }
}
// remove comment
export function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    i,  // NOTE in ES6, this is same as i:i etc.
    postId
  }
}

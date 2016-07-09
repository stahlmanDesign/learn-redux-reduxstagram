import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

// import comments


class Single extends React.Component {
  render(){
    const { postId } = this.props.params; // wrapping in {} is destrcuting object is ES6 syntax
    // index of the post using findIndex, which is new to browser. older must use polyfill
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i]; // console.log(post)
    const postComments = this.props.comments[postId] || []; // || [] in case no array

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        {/* ... pass along all the props instead of cherry picking what you need */}
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
}

export default Single;

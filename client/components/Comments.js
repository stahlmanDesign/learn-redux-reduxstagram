import React from 'react';

class Comments extends React.Component {
  _renderComment(comment, i){
    //console.log(comment);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
          {/*button will show up on hover*/}
        </p>
      </div>
    )
  }
  _handleSubmit(e){
    e.preventDefault();
    console.log("submitting form")
    // normally don't access DOM directly in React, but for form submit, get refs

    // destructing example follows:
    // const postId = this.props.params.postId; // this is ES5

    // NOTE to get this, .bind(this) when calling _handleSubmit()
    const { postId } = this.props.params; // this is ES6 grabbing same keyname as new const and assigning it
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset(); // remove text cause submitted
    //console.log(postId, author, comment)
  }
  render(){
    return (
      <div className="comments">
        {/* could make separate Comment component, or in this cae a redner function*/}
        {this.props.postComments.map(this._renderComment.bind(this))}
        <form ref="commentForm" className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden="true"/>
        </form>
      </div>
    )
  }
}

export default Comments;

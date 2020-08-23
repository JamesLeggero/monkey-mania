const React = require('react')
const Comment = require('../models/comments.js')

// Comment.find({
//     'name': { $in: {name}}
// })

class CommentForm extends React.Component {
    constructor(){
        super()

        this.state={
            showComments: false,
            comments: [{id: 1, author: "landiggity", body: "This is my first comment on this forum so don't be a dick"},
            {id: 2, author: "scarlett-jo", body: "That's a mighty fine comment you've got there my good looking fellow..."},
            {id: 3, author: "rosco", body: "What is the meaning of all of this 'React' mumbo-jumbo?"}]
        }
    }

    render(){
        const comments = this._getComments
        let commentNodes
        let buttonText='Show Comments'

        if (this.state.showComments) {
            buttonText='Hide Comments'
            commentNodes = <div className='comment-list'>{comments}</div>
        }
        return(
            <div className="comment-box">
              <h2>Join the Discussion!</h2>
              <CommentForm addComment={this._addComment.bind(this)}/>
              <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
                {buttonText}
              </button>
              <h3>Comments</h3>
              <h4 className="comment-count">
                {this._getCommentsTitle(comments.length)}
              </h4>
              {commentNodes}
            </div>  
          );
        }

        //stop for now
}


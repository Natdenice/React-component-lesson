/* eslint-disable no-unused-vars */
import React from 'react';
import faker from 'faker';

// props are always in first position as argument !!!
const CommentDetail = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatarPhoto} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
// make the entire file available for the rest of the project

// THIS COMPONENT IS A FUNCTIONAL COMPONENT > IT IS GOOD FOR SIMPLE CONTENT WITH NO OR FEW LOGIC, BUT
// CLASS COMPONENTS IS GOOD FOR EVERYTHING ELSE !!!
// 2 TYPES OF COMPONENTS : FUNCTIONAL COMPONENTS AND CLASS COMPONENTS

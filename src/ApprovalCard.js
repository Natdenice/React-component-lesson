import React from 'react';

// we create our approval card component
const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      {/* we want to display the commentdetail component 
      inside our approval card, commentdetail is the children of approvalcard component, so we can
      use props.children inside curly braces to display nicely the comment inside our approval card  
      Like this, the component CommentDetail is becoming the props object , and his children
      is now ApprovalCard ( since we enclosed <ApprovalCard> </ApprovalCard in our App component */}
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

// THIS COMPONENT IS A FUNCTIONAL COMPONENT > IT IS GOOD FOR SIMPLE CONTENT WITH NO OR FEW LOGIC, BUT
// CLASS COMPONENTS IS GOOD FOR EVERYTHING ELSE !!!
// 2 TYPES OF COMPONENTS : FUNCTIONAL COMPONENTS AND CLASS COMPONENTS
// CLASS COMPONENTS CAN USE STATE , FUNCTIONNAL COMPONENTS NO
// CLASS COMPONENTS PROVIDES EASIER CODE ORGANIZATION AND IT IS EASIER TO DO THINGS
// WHEN THE APP FIRST STARTS ( LIFECYCLE EVENTS)

export default ApprovalCard;

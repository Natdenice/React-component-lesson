/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      {/* We can reuse this ApprovalCard component and modify it easily like this!!!!*/}
      <ApprovalCard>
        <div>
          <h4 style={{ color: 'red' }}>Warning!</h4>
          <span style={{ color: 'red', fontFamily: 'bold' }}>
            Are you sure you want to do that ?
          </span>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        {/* CommentDetail become the children component of ApprovalCard with this specific syntax*/}
        <CommentDetail
          author="Nat"
          comment="Your website is amazing"
          timeAgo="Today at 6:00 PM"
          avatarPhoto={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          comment="I Love your blog !"
          timeAgo="Today at 4:00 PM"
          avatarPhoto={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Julio"
          comment="Oh my god, i love your style !"
          timeAgo="Today at 2:00 PM"
          avatarPhoto={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// THIS COMPONENT IS A FUNCTIONAL COMPONENT > IT IS GOOD FOR SIMPLE CONTENT WITH NO OR FEW LOGIC, BUT
// CLASS COMPONENTS IS GOOD FOR EVERYTHING ELSE !!!
// 2 TYPES OF COMPONENTS : FUNCTIONAL COMPONENTS AND CLASS COMPONENTS
// CLASS COMPONENTS CAN USE STATE , FUNCTIONNAL COMPONENTS NO
// CLASS COMPONENTS PROVIDES EASIER CODE ORGANIZATION AND IT IS EASIER TO DO THINGS
// WHEN THE APP FIRST STARTS ( LIFECYCLE EVENTS)

// Props = 2 steps process : 1) Provide some details or informations to a child 2°) We consume the information

// Props system is all about having a parent customize how the child looks or behaves !!!
// The goal of a Prop is to customize or configure a child component
//CommentDetail is considered as a CHILD COMPONENT of APP Component !!!!

// to nest our new component inside our first component , we dont use curly braces
// like always , cause when you
// include a component
// inside jsx , we dont have to put curly braces , but just a closing tag and inside
// the name of our component

// How to reuse or duplicate a component ?
// Steps : Identify the JSX that appears to be duplicated
// Whats the purpose of that block of JSX ? in our case , the purpose is to display a single comment/ comment details
// Create a new file to house this new component , it should have the same name that the component
// => so we create a CommentDetail.js in SRC , Aand we import react from react and also faker

// create a new component in the new file , paste the JSX into it => we create a CommentDetail function
// and paste all the code from our index.js corresponding to the element that we want to duplicate

// Make the new component configurable by using reacts 'props' system

ReactDOM.render(<App />, document.getElementById('root'));

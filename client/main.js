import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import App from './../imports/ui/App';

// // setTimeout(function(){
//   console.log('Players List: ',Players.find().fetch());
// },2000);

// const players = [{
//   _id: '1',
//   name: 'Lauren',
//   score: '99'
// },{
//   _id: '2',
//   name: 'Cory',
//   score: '-1'
// },{
//   _id: '3',
//   name: 'Andrew',
//   score: '-12'
// }];




Meteor.startup(function(){

  Tracker.autorun(function(){
      let players = Players.find().fetch();
      let title = 'Score keep';
      ReactDOM.render(<App title={title} players={players}/>,document.getElementById('app'));
  });

//Insert new doc into players collection


});

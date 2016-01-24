import 'collections/users';

Meteor.onConnection(function(){
  console.log("A user has connected");
});


Meteor.users.allow({
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return true;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return true;
  }
  // fetch: ['owner']
});


// Accounts.onCreateUser(function(options, user) {
//     //pass the surname in the options
//     user.profile.peerId = "";
//
//     return user;
// });

/// <reference path="../../../typings/angular2-meteor.d.ts" />

import {Component} from 'angular2/core';

// import {Users} from 'collections/users';

import {NgFor} from 'angular2/common';

import {AccountsUI} from 'meteor-accounts-ui'

// declare var Peer: any;

@Component({
  selector: 'videoshare',
  templateUrl: '/client/components/videoshare/videoshare.component.html',
  directives: [AccountsUI]
})
export class VideoShare {

  users: Mongo.Cursor<Object>;
  // myId: string;
  // peerId: string;

  constructor () {

  // this.myId = Meteor.userId();

  peer = new Peer({ key: 'lwjd5qra8257b9'});

    peer.on('open', function(id){

      // this.peerId = id;
      console.log("PEER ID: " + id);
      Meteor.users.update({_id: Meteor.userId()}, {$set: {peerId: id}});

      // Meteor.users.insert({id: "test", name: "Alex"});

        // Users.update({_id: ObjectId("56a4390a36da64b1fc5d4040")}, {$set: {peerId: id}});

    	// myPeerId = id;
    	// setPeerIdToDatabase(myPeerId);
    	// console.log("My ID: " + myPeerId);
    });


  }
  //
  // public getId(){
  //   return this.myId;
  // }

  // public getPeerId(){
  //   return this.peerId;
  // }

}

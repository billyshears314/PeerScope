/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View, NgZone, provide} from 'angular2/core';

//import {bootstrap} from 'angular2/bootstrap';

import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';

import {NgFor} from 'angular2/common';

import {bootstrap} from 'angular2-meteor';

import {VideoShare} from 'client/components/videoshare/videoshare.component';

@Component({
    selector: 'app'
})

@View({
    templateUrl: 'client/components/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', name: 'VideoShare', component: VideoShare, useAsDefault: true},

])

class App {

}


  // var vs = new VideoShare();
  //
  // console.log(vs);
  //
  // console.log(vs.getId());


bootstrap(App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);

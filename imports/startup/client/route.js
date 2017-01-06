import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';

import '/imports/ui/landing/landing.js';
import '/imports/ui/page1/page1.js';
import '/imports/ui/page2/page2.js';
import '/imports/ui/page3/page3.js';
import '/imports/ui/page4/page4.js';
import '/imports/ui/page5/page5.js';
import '/imports/ui/page6/page6.js';
import '/imports/ui/page7/page7.js';
import '/imports/ui/page8/page8.js';

FlowRouter.route('/', {
    name: 'landing',
    action() {
        BlazeLayout.render('Landing');
    },
});

FlowRouter.route('/page1', {
    name: 'page1',
    action() {
        BlazeLayout.render('Page1');
    },
});

FlowRouter.route('/page2', {
    name: 'page2',
    action() {
        BlazeLayout.render('Page2');
    },
});

FlowRouter.route('/page3', {
    name: 'page3',
    action() {
        BlazeLayout.render('Page3');
    },
});

FlowRouter.route('/page4', {
    name: 'page4',
    action() {
        BlazeLayout.render('Page4');
    },
});

FlowRouter.route('/page5', {
    name: 'page5',
    action() {
        BlazeLayout.render('Page5');
    },
});

FlowRouter.route('/page6', {
    name: 'page6',
    action() {
        BlazeLayout.render('Page6');
    },
});

FlowRouter.route('/page7', {
    name: 'page7',
    action() {
        BlazeLayout.render('Page7');
    },
});

FlowRouter.route('/page8', {
    name: 'page8',
    action() {
        BlazeLayout.render('Page8');
    },
});

import './landing.html';
import './landing.less';

Template.Landing.events({
    'click .js-goToPage1': function (event, template) {
        FlowRouter.go('/page1');
    },
    'click .js-goToPage2': function (event, template) {
        FlowRouter.go('/page2');
    },
    'click .js-goToPage3': function (event, template) {
        FlowRouter.go('/page3');
    },
    'click .js-goToPage4': function (event, template) {
        FlowRouter.go('/page4');
    },
    'click .js-goToPage5': function (event, template) {
        FlowRouter.go('/page5');
    },
    'click .js-goToPage6': function (event, template) {
        FlowRouter.go('/page6');
    },
    'click .js-goToPage7': function (event, template) {
        FlowRouter.go('/page7');
    },
    'click .js-goToPage8': function (event, template) {
        FlowRouter.go('/page8');
    }
});


Template.Landing.helpers({});


Template.Landing.onRendered(function () {
});


Template.Landing.onCreated(function () {
});


Template.Landing.onDestroyed(function () {
});
import './page4.html';

Template.Page4.events({
    'click .js-back': function (event, template) {
        FlowRouter.go('/');
    },
});


Template.Page4.helpers({
    helper: function () {
        Session.set('isReadyHelper', false);
        sleep(2000); // This represents a long calculation
        Session.set('isReadyHelper', true);
        console.log('ReadyHelper');
        return "helper";
    },
    ready: function () {
        return Session.get('isReadyOnRendered') && Session.get('isReadyOnCreated') && Session.get('isReadyHelper');
    },
});


Template.Page4.onRendered(function () {
    // Initialize the isReady session
    Session.set('isReadyOnRendered', false);
    Meteor.setTimeout(function () {
        sleep(2000); // This represents a long calculation
        Session.set('isReadyOnRendered', true);
        console.log('ReadyOnRendered');
    }, 0);
});


Template.Page4.onCreated(function () {
    // Initialize the isReady session
    Session.set('isReadyOnCreated', false);
    Meteor.setTimeout(function () {
        sleep(2000); // This represents a long calculation
        Session.set('isReadyOnCreated', true);
        console.log('ReadyOnCreated');
    }, 0);
});


Template.Page4.onDestroyed(function () {

});
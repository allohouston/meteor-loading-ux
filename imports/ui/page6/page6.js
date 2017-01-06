import './page6.html';

Template.Page6.events({
    'click .js-back': function (event, template) {
        FlowRouter.go('/');
    },
});


Template.Page6.helpers({
    helper: function () {
        Session.set('isReadyHelper', false);
        sleep(2); // This represents a long calculation
        Session.set('isReadyHelper', true);
        console.log('ReadyHelper');
        return "helper";
    },
    ready: function () {
        return Session.get('isReadyOnRendered') && Session.get('isReadyOnCreated') && Session.get('isReadyHelper');
    },
});


Template.Page6.onRendered(function () {
    // Initialize the isReady session
    Session.set('isReadyOnRendered', false);
    Meteor.setTimeout(function () {
        sleep(2); // This represents a long calculation
        Session.set('isReadyOnRendered', true);
        console.log('ReadyOnRendered');
    }, 0);
});


Template.Page6.onCreated(function () {
    // Initialize the isReady session
    Session.set('isReadyOnCreated', false);
    Meteor.setTimeout(function () {
        sleep(2); // This represents a long calculation
        Session.set('isReadyOnCreated', true);
        console.log('ReadyOnCreated');
    }, 0);
});


Template.Page6.onDestroyed(function () {
    sleep(2000); // This represents a long calculation
    console.log("onDestroyed");
});
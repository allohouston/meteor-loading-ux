import './page5.html';

Template.Page5.events({
    'click .js-back': function (event, template) {
        FlowRouter.go('/');
    },
});


Template.Page5.helpers({
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


Template.Page5.onRendered(function () {
    // Initialize the isReady session
    Session.set('isReadyOnRendered', false);
    sleep(2000); // This represents a long calculation
    Session.set('isReadyOnRendered', true);
    console.log('ReadyOnRendered');
});


Template.Page5.onCreated(function () {
    // Initialize the isReady session
    Session.set('isReadyOnCreated', false);
    Meteor.setTimeout(function () {
        sleep(2000); // This represents a long calculation
        Session.set('isReadyOnCreated', true);
        console.log('ReadyOnCreated');
    }, 0);
});


Template.Page5.onDestroyed(function () {

});
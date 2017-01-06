import './page3.html';

Template.Page3.events({
    'click .js-back': function (event, template) {
        FlowRouter.go('/');
    },
});


Template.Page3.helpers({
    helper: function () {
        Session.set('isReadyHelper', false);
        sleep(2);
        Session.set('isReadyHelper', true);
        console.log('ReadyHelper');
        return "helper";
    },
    ready: function () {
        return Session.get('isReadyOnRendered') && Session.get('isReadyOnCreated') && Session.get('isReadyHelper');
    },
});


Template.Page3.onRendered(function () {
    // Initialize the isReady session
    Session.set('isReadyOnRendered', false);
    Meteor.setTimeout(function () {
        sleep(2000); // This represents a long calculation
        Session.set('isReadyOnRendered', true);
        console.log('ReadyOnRendered');
    }, 0);
});


Template.Page3.onCreated(function () {
    // Initialize the isReady session
    Session.set('isReadyOnCreated', false);
    sleep(2000); // This represents a long calculation
    Session.set('isReadyOnCreated', true);
    console.log('ReadyOnCreated');
});


Template.Page3.onDestroyed(function () {

});
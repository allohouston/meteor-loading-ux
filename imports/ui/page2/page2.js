import './page2.html';

Template.Page2.events({
    'click .js-back': function (event, template) {
        FlowRouter.go('/');
    },
});


Template.Page2.helpers({
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


Template.Page2.onRendered(function () {
    // Initialize the isReady session
    Session.set('isReadyOnRendered', false);
    sleep(2000); // This represents a long calculation
    Session.set('isReadyOnRendered', true);
    console.log('ReadyOnRendered');
});


Template.Page2.onCreated(function () {
    // Initialize the isReady session
    Session.set('isReadyOnCreated', false);
    sleep(2000); // This represents a long calculation
    Session.set('isReadyOnCreated', true);
    console.log('ReadyOnCreated');
});


Template.Page2.onDestroyed(function () {

});
import './page8.html';

Template.Page8.events({
    'click .js-back': function (event, template) {
        FlowRouter.go('/');
    },
});


Template.Page8.helpers({
    ready: function () {
        return Session.get('readySampleSubs');
    },
    text: function () {
        var sample = SampleData.findOne();
        if (sample && sample.text != "") {
            return sample.text;
        }
    },
});


Template.Page8.onRendered(function () {
    // Initialize the isReady session
    Session.set('isReadyOnRendered', false);
    Meteor.setTimeout(function () {
        sleep(2000); // This represents a long calculation
        Session.set('isReadyOnRendered', true);
        console.log('ReadyOnRendered');
    }, 0);
});


Template.Page8.onCreated(function () {
    // Initialize the isReady session
    Session.set('isReadyOnCreated', false);
    Meteor.setTimeout(function () {
        sleep(2000); // This represents a long calculation
        Session.set('isReadyOnCreated', true);
        console.log('ReadyOnCreated');
    }, 0);

    // Subscribe
    var self = this;
    Session.set('readySampleSubs', false);
    var subscriptions = new SubsManager();
    var readySampleSubs = subscriptions.subscribe("getAllSampleData");
    self.autorun(function () {
        if (readySampleSubs.ready()) {
            Session.set('readySampleSubs', true);
            console.log('ReadySubs');
        }
    });
});


Template.Page8.onDestroyed(function () {

});
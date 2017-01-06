import './page1.html';

Template.Page1.events({
    'click .js-back': function (event, template) {
        FlowRouter.go('/');
    },
});


Template.Page1.helpers({
    ready: function () {
        return Session.get('readySampleSubs') && Session.get('isReadyOnRendered') && Session.get('isReadyOnCreated') && Session.get('isReadyHelper');
    },
    text: function () {
        var sample = SampleData.findOne();
        if (sample && sample.text != "") {
            return sample.text;
        }
    },
    helper: function () {
        Session.set('isReadyHelper', false);
        sleep(2); // This represents a long calculation
        Session.set('isReadyHelper', true);
        console.log('ReadyHelper');
        return "helper";
    },
});


Template.Page1.onRendered(function () {
    // Initialize the isReady session
    Session.set('isReadyOnRendered', false);
    Meteor.setTimeout(function () {
        sleep(2000); // This represents a long calculation
        Session.set('isReadyOnRendered', true);
        console.log('ReadyOnRendered');
    }, 0);
});


Template.Page1.onCreated(function () {
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


Template.Page1.onDestroyed(function () {
    Meteor.setTimeout(function () {
        sleep(2000); // This represents a long calculation
    }, 0);
});


//***************************************
// Nested
//***************************************
Template.Page1Nested.helpers({
    ready: function () {
        return Session.get('isReadyOnCreatedNested');
    },
});

Template.Page1Nested.onCreated(function () {
    Session.set('isReadyOnCreatedNested', false);
    Meteor.setTimeout(function () {
        sleep(2000); // This represents a long calculation
        Session.set('isReadyOnCreatedNested', true);
        console.log('ReadyOnCreatedNested');
    }, 0);
});
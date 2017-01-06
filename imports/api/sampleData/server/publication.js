import {Meteor} from "meteor/meteor";

Meteor.publish("getAllSampleData", function () {
    sleep(5000);
    return SampleData.find();
});
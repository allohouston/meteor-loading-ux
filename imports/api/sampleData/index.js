import {Mongo} from "meteor/mongo";

SampleData = new Mongo.Collection('SampleData');

SampleData.allow({
    insert(userId, doc) {
        return true;
    },
    update(userId, doc, fields, modifier) {
        return true;
    },
    remove(userId, doc) {
        return true;
    },
});

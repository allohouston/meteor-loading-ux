import {Meteor} from "meteor/meteor";

// Import collection methods and publication files
import '/imports/api/sampleData/index.js';
import "/imports/api/sampleData/server/methods.js";
import "/imports/api/sampleData/server/publication.js";

Meteor.startup(function () {
    try {
        var sample = SampleData.find().fetch();
        if (sample.length === 0) {
            SampleData.insert({text: "Hello World"});
        }
    }
    catch (err) {
        console.log(err);
    }
});



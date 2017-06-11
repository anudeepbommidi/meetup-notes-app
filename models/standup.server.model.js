var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var standupSchema = new Schema({
    
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: {type: Date, default: Date.now}   
});

module.exports = mongoose.model('Standup', standupSchema);


/*  ---------------------------------------------------------------------------------------
            // disabled _id

            var noIdSchema = new Schema({
                name: String
            },
            {_id: false}});


            // Example of using Schema.add method to create a schema and it's fields

            var exampleSchema = new Schema;

            var includeMiddleName = true;

            if(includeMiddleName) {

                  exampleSchema.add({
                        memberName: {
                          first: String,
                          middle: String,
                          last: String
                        }   
                  });
            } else {

                exampleSchema.add({
                        memberName: {
                          first: String,
                          last: String
                        }   
                  });
            }

            exampleSchema.add({

                memberName: String,
                project: String,
                workYesterday: String,
                workToday: String,
                impediment: String,
                createdOn: {type: Date, default: Date.now} 
            });

-------------------------------------------------------------------------------------------   */
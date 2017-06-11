var Standup = require('../models/standup.server.model');

exports.list = function(req, res) {
    
    var query = Standup.find();
    
    query.sort({createdOn: 'desc'})
         .limit(12)
         .exec(function(err, results) {
                res.render('index', {title: 'Standup - List', notes: results}); 
          });
       
};


exports.filterByMember = function(req, res) {
   
        /* ---------------
    // another way of doing this 
    
    var query = Standup.find();
    var filter = req.body.memberName;
    
    query.sort({createdOn: 'desc'});
    
    if(filter.length > 0) {
        query.where({memberName: filter});
    }
    
    query.exec(function(err, results) {
       res.render('index', {title: 'Standup - List', notes: results}); 
    });
    
    ----------------*/
    
    var query; 
    var filter = req.body.memberName;
    
    if(filter.length > 0) {
        query = Standup.find({ memberName: filter}).sort({createdOn: 'desc'});
    } else {
        query = Standup.find({}).sort({createdOn: 'desc'});
    }
    
    query.exec(function(err, results) {
            res.render('index', {title: 'Standup - List', notes: results}); 
    });
        

};




exports.create = function (req, res) {

    var entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediments: req.body.impediments
    });

    entry.save();

    // redirect to home page
    res.redirect(301, '/');

};

exports.getNote = function (req, res) {
    res.render('newnote', { title: 'Standup - New Note' });
};
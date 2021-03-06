const mongoose = require('mongoose');
const User = mongoose.model('users');
//const fakeNews = mongoose.model('fakenews');

let mainPage = function(req, res) {
    res.send("Main page");
};

// Push 4 users and save to database.
let createAdmin = function(req, res) {
    let user = new User(
        {
            "username": req.body.username,
            "password": req.body.password,
            "preference": req.body.preference
        }
    );

    user.save(function(err, newUser) {
        if (!err) {
            res.json(newUser);
        } else {
            res.sendStatus(400);
        }
    });
};


let allUsers = function(req, res) {
    User.find(function(err, allUsers) {
        if (!err) {
            res.send(allUsers);
        } else {
            res.sendStatus(400);
        }
    });
};

let checkUser = function(req, res){
    var userName = req.body.username;
    var passWord = req.body.password;

    User.findOne({username: userName, password: passWord}, function(err, user){
        if(user){
            res.send("Successfully LogIn");
        }else{
            res.send("Fail to LogIn");
        }
    });

}

//get info by username
let getinfoByUsername = function(req,res){
    var userName = req.params.username;
    User.find({username: userName}, function(err, user){
        if (user){
            res.json(user);
        }else{
            res.send("No user found");
        }
    });

}

// first create news
let createNews = function(req, res) {
    let fakeNews = new fakeNews(
        {
            "category": req.body.category,
            "title": req.body.title,
            "length": req.body.length,
            "dates": req.body.dates
        }
    );

    news.save(function(err, newfakeNews) {
        if (!err) {
            res.json(newfakeNews);
        } else {
            res.sendStatus(400);
        }
    });
};
//check all the news
let allNews = function(req, res) {
    fakeNews.find(function(err, allfakeNews) {
        if (!err) {
            res.send(allfakeNews);
        } else {
            res.sendStatus(400);
        }
    });
};


//find news by category
var findOneNews = function(req, res) {
    var newscategory = req.params.category;
    fakeNews.find({category:newscategory}, function(err, fakenews) {
        if (err) {
            res.send("No matching Found!");
        }else{
            res.send(fakenews);
        }
    });
};

//get newest news
var getNewestNews = function(req, res) {
    var newstime = req.params.dates;
    fakeNews.find({dates:newstime}, function(err, fakenews){
        if (newstime>=2018-01-01 || !err){
            res.send(fakenews);
        }else{
            res.sendStatus(500);
        }

    });
    
}





//user
module.exports.mainPage = mainPage;
module.exports.createAdmin = createAdmin;
module.exports.allUsers = allUsers;
module.exports.checkUser = checkUser;
module.exports.getinfoByUsername = getinfoByUsername;
//News
module.exports.allNews = allNews;
module.exports.createNews = createNews;
module.exports.findOneNews = findOneNews;
module.exports.getNewestNews = getNewestNews;
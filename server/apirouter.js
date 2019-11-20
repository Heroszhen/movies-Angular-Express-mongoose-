require("./conn");
const express = require("express");
const app = express();
const router = express.Router();
const bodyparser = require("body-parser");
const moviemodel = require("./moviemodel").model;
const commentmodel = require("./commentmodel").model;

router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/',function(req,res,next){
    res.send("home");
});

router.route('/movies')
    .get(function(req,res){
        moviemodel.find({},function(err,docs){
            res.json(docs);
        });
    });

router.route("/movie/id/:id")
    .get(function(req,res){
        var params = req.params;
        var id = params.id;
        moviemodel.findById(id,function(err,doc){
            res.send(doc);
        });
    });

router.route("/comment")
    .post(function(req,res){
        var comment = req.body;
        commentmodel.create({
            thename:comment.thename,
            message:comment.message,
            idmovie:comment.idmovie
        },function(err){
            if(err)console.log(err);
            else{
                commentmodel.find({"idmovie":comment.idmovie},function(err,docs){
                    res.send(docs);
                });
            }
        });
    });

router.route("/comments/idmovie/:id")
    .get(function(req,res){
        var params = req.params;
        var id = params.id;
        commentmodel.find({"idmovie":id},function(err,docs){
            res.send(docs);
        });
    });

exports.router = router;
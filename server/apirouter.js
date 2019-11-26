require("./conn");
const express = require("express");
const app = express();
const router = express.Router();
const bodyparser = require("body-parser");
const multer  = require('multer');
const upload = multer({ dest: 'images' });/*
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
});*/
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

router.route("/searchmovies")
    .post(function(req,res){
        var keywords = req.body.keywords;
        moviemodel.find({$or:[{"title":{$regex:'.*'+keywords+'.*'}},{"starring":{$regex:'.*'+keywords+'.*'}}]},function(err,docs){
            res.send(docs);
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

router.route("/addmovie")
    .post(function(req,res){
        var movie = req.body;
        moviemodel.create({
            title:movie.filmtitle,
            last:movie.filmlast,
            plot:movie.filmplot,
            starring:movie.filmstarring,
            image:movie.filmimage
        },function(err){
            if(err)console.log(err);
            else{
                moviemodel.find({},function(err,docs){
                    res.send(docs);
                });
            }
        });
    });    

router.route("/deletemovie/:id")
    .delete(function(req, res){
        var id = req.params.id;
        moviemodel.deleteOne({ _id: id }, function (err) {
            if(err)console.log(err);
            else{
                moviemodel.find({},function(err,docs){
                    res.send(docs);
                });
            }
        });
    });

router.post("/myimage",upload.single('recfile'),function(req,res,next){
        console.log(req.file);
        res.send({"response":"ok"});
    });

exports.router = router;
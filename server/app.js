//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/Student');
const College = require('./models/College');
const app = express();
//db connections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://oneshot:oneshot@cluster0.faxan.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
// mongoose.connect('mongodb://localhost:27017/collegedb', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on('connected', () =>{
    console.log('Database Connected');
})
mongoose.connection.on('error', ()=>{
    console.log('error occurred');
})
//middlewares
app.use(cors());
app.use(express.json());



//routes
app.get('/',(req,res)=>{
    College.find()
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(500).send(err);
    })
})

app.get('/colleges/:id',(req,res)=>{
    College.findById(req.params.id)
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(500).send(err);
    })
})

app.post('/colleges',(req,res)=>{
    var name = req.body.name;
    var yearoffounded  = req.body.yearoffounded ;
    var city= req.body.city;
    var state= req.body.state;
    var country= req.body.country;
    var noofstudents= req.body.noofstudents;
    var courses= req.body.courses;

    var newCollege = {
        name: name,
        yearoffounded :yearoffounded,
        city:city,
        state:state,
        country:country,
        noofstudents:noofstudents, 
        courses:courses};

    College.create(newCollege, function(err, newlyCollege){
        if(err){
            console.log("error==== "+err);
        }else{
            console.log("added successfully");
            console.log(newlyCollege);
            res.send("OK");
            // res.redirect("/colleges");
        }
    });
})


app.post("/colleges/:id/students", function(req, res){

    College.findById(req.params.id, function(err, college){
        if(err){
            console.log(err);
            res.redirect("/colleges");
        }else{
                var name= req.body.name;
                var yearofbatch= req.body.yearofbatch;
                var college_id=req.body.college_id;
                var skills=req.body.skills;
                
                var newStudent = {
                    name:name,
                    yearofbatch:yearofbatch,
                    college_id:college_id,
                    skills:skills
                }

            Student.create(newStudent,function(err, newlystudent){
                if(err){
                    console.log(err);
                }else{
                    
                    college.students.push(newlystudent);
                    college.save();
                    res.send("OK Student");
                    console.log(newlystudent);
                    //res.redirect("/colleges/"+college._id);
                }
            });
        }
    });
});


// //server
// app.listen(5000,()=>{
//     console.log('server is connected on port 5000');
// })

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
var express = require('express');
var app = express();
var PORT = 3000;
const mongoose = require("mongoose");
app.use(express.json()); 
app.use(express.urlencoded({extended:false}));

// app.use(express.static("/public"));
app.use(express.static("."));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/movie');
const SeatsSchema = {
    no:Number
}
const Seat = mongoose.model("Seat",SeatsSchema);
const item1 = new Seat({
    no:23
});
// item1.save();
const MovieSeatsSchema = {
    MovieName: String,
    name:String,
    mobile:Number,
    seats:[SeatsSchema]
};
const MovieList = mongoose.model("MovieList",MovieSeatsSchema);
// const item = new MovieList({
//     MovieName:"C",
//     name:"ABC",
//     mobile:1234567890,
//     seats:item1
// })
// item.save();

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});
// for movie name up
app.get('/Up',function(req,res){
    MovieList.find({MovieName:"Up"},function(err,foundList){
        var n = 48;
        var arr = new Array(n).fill(false);
        foundList.map(function(item){
            for(var i=0;i<item.seats.length;i++){
                arr[item.seats[i].no] = 1;
            }
        });
        // console.log(arr);
        console.log("/up open");
        res.render("layout",{MovieTitle:"Up",MovieSeatList:arr})
    })
})

app.post('/Up',function(req,res){
    const fullname = req.body.name;
    const mob = req.body.mobile;
    const seatno = req.body.seatNo;
    var arr = [];
        var temp = "";
        for(var i=0;i<=seatno.length;i++){
            if(seatno[i]==="-" || i===seatno.length){
                arr.push(parseInt(temp));
                temp = "";
            }
            else{
                temp += seatno[i];
            }
        }
        console.log(seatno)
        console.log(arr);
    MovieList.findOne({MovieName:"Up",name:fullname,mobile:mob},function(err,found){
        if(!err && found!=null){ 
            for(var i=0;i<arr.length;i++){
                const seat = new Seat({
                    no:arr[i]
                });
                found.seats.push(seat);
                found.save();
            }
        }
        else if(!err){
            const seat = new Seat({
                no:arr[0]
            });
            const item = new MovieList({
                MovieName:"Up",
                name:fullname,
                mobile:mob,
                seats:seat
            })
            for(var i=1;i<arr.length;i++){
                const seat = new Seat({
                    no:arr[i]
                });
                item.seats.push(seat);
            }
            item.save(function(err){
                if(!err) console.log("added successfully");
                else console.log(err);
            });
        }
        else console.log(err);
        res.redirect("/");
        //res.sendFile(__dirname + "/index.html");
    })
})

app.get('/Batman',function(req,res){
    MovieList.find({MovieName:"Batman"},function(err,foundList){
        var n = 48;
        var arr = new Array(n).fill(false);
        foundList.map(function(item){
            for(var i=0;i<item.seats.length;i++){
                arr[item.seats[i].no] = 1;
            }
        });
        // console.log(arr);
        console.log("/Batman open");
        res.render("layout",{MovieTitle:"Batman",MovieSeatList:arr})
    })
})

app.post('/Batman',function(req,res){
    const fullname = req.body.name;
    const mob = req.body.mobile;
    const seatno = req.body.seatNo;
    var arr = [];
        var temp = "";
        for(var i=0;i<=seatno.length;i++){
            if(seatno[i]==="-" || i===seatno.length){
                arr.push(parseInt(temp));
                temp = "";
            }
            else{
                temp += seatno[i];
            }
        }
        console.log(seatno)
        console.log(arr);
    MovieList.findOne({MovieName:"Batman",name:fullname,mobile:mob},function(err,found){
        if(!err && found!=null){ 
            for(var i=0;i<arr.length;i++){
                const seat = new Seat({
                    no:arr[i]
                });
                found.seats.push(seat);
                found.save();
            }
        }
        else if(!err){
            const seat = new Seat({
                no:arr[0]
            });
            const item = new MovieList({
                MovieName:"Batman",
                name:fullname,
                mobile:mob,
                seats:seat
            })
            for(var i=1;i<arr.length;i++){
                const seat = new Seat({
                    no:arr[i]
                });
                item.seats.push(seat);
            }
            item.save(function(err){
                if(!err) console.log("added successfully");
                else console.log(err);
            });
        }
        else console.log(err);
        res.redirect("/");
        //res.sendFile(__dirname + "/index.html");
    })
})

app.get('/Logan',function(req,res){
    // res.sendFile(__dirname + "/seats.html");
    MovieList.find({MovieName:"Logan"},function(err,foundList){
        var n = 48;
        var arr = new Array(n).fill(false);
        foundList.map(function(item){
            for(var i=0;i<item.seats.length;i++){
                arr[item.seats[i].no] = 1;
            }
        });
        // console.log(arr);
        console.log("/Logan open");
        res.render("layout",{MovieTitle:"Logan",MovieSeatList:arr})
    })
})

app.post("/Logan",function(req,res){
    const fullname = req.body.name;
    const mob = req.body.mobile;
    const seatno = req.body.seatNo;
    var arr = [];
        var temp = "";
        for(var i=0;i<=seatno.length;i++){
            if(seatno[i]==="-" || i===seatno.length){
                arr.push(parseInt(temp));
                temp = "";
            }
            else{
                temp += seatno[i];
            }
        }
        console.log(seatno)
        console.log(arr);
    MovieList.findOne({MovieName:"Logan",name:fullname,mobile:mob},function(err,found){
        if(!err && found!=null){ 
            for(var i=0;i<arr.length;i++){
                const seat = new Seat({
                    no:arr[i]
                });
                found.seats.push(seat);
                found.save();
            }
        }
        else if(!err){
            const seat = new Seat({
                no:arr[0]
            });
            const item = new MovieList({
                MovieName:"Logan",
                name:fullname,
                mobile:mob,
                seats:seat
            })
            for(var i=1;i<arr.length;i++){
                const seat = new Seat({
                    no:arr[i]
                });
                item.seats.push(seat);
            }
            item.save(function(err){
                if(!err) console.log("added successfully");
                else console.log(err);
            });
        }
        else console.log(err);
        res.redirect("/");
        //res.sendFile(__dirname + "/index.html");
    })

    // MovieList.find({MovieName:"C"},function(err,foundList){
    //     var n = 48;
    //     var arr = new Array(n).fill(false);
    //     foundList.map(function(item){
    //         for(var i=0;i<item.seats.length;i++){
    //             arr[item.seats[i].no] = 1;
    //         }
    //     });
    //     console.log(arr);
    //     // res.render("layout",{MovieTitle:"C",MovieSeatList:arr})
    // })
})

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

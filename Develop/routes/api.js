const router = require("express").Router();
const Workout = require("../models/workout");
const db = require("../models");


//GET Get last workout
    // app.get("/api/workouts/:id", (req, res) => {
    //     Workout.find({})
    //     .sort({date: -1})
    //     .then(dbWorkout => {
    //         res.json(dbWorkout)
    //     }).catch(err => {
    //         res.status(400).json(err)
    //     })
    // });

router.get("/api/workouts", (req, res) => {
        Workout.find({}, (err, workouts) => {
            res.json(workouts)
        })
    });

//PUT Add Exercise

router.put("/api/workouts/:id", ({ body }, res) => {
    console.log(body);
    db.Workout.insert(body).then((dbWorkout => {
        res.json(dbWorkout)
    })).catch(err => {
        res.statusCode(400).json(err)
    })
});

// //POST Create Workout
// // router.post("/api/workouts", ({ body }, res) => {
// //     console.log(body);
// //     db.Workout.create(body)
// //     .then(dbWorkout => {
// //         res.json(dbWorkout);
// //     })
// //     .catch(err => {
// //         res.status(400).json(err)
// //     })
// //     });

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout)
    })).catch(err => {
        res.statusCode(400).json(err)
    })
});



//     router.post("/api/workouts", ({ body }, res) => {
//         // console.log("WORKOUT TO BE ADDED");
//         // console.log(body);

//         db.Workout.create(body).then((dbWorkout => {
//             res.json(dbWorkout);
//         })).catch(err => {
//             res.json(err);
//         });
//     });
    


    
//     // //GET workout range
//     // app.get("/api/workouts/range", (req, res) => {
//     //     Workout.find({})
//     //     .sort({date: -1})
//     //     .then(dbWorkout => {
//     //         res.json(dbWorkout)
//     //     }).catch(err => {
//     //         res.status(400).json(err)
//     //     })
//     // });

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => {
        res.json(err)
    })
});


module.exports = router; 


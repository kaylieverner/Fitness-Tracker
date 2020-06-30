const db = require("../models");

module.exports = function (app) {
    //get workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, lastworkout) => {
            res.json(lastworkout)
        })
    });

    // add exercise
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                $push: { exercises: req.body }
            },
            {
                new: true
            }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.statusCode(400).json(err)
            });
    });

    //create workout
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.statusCode(400).json(err)
        });
    });

    // get workouts in range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.statusCode(400).json(err)
        });
    });

}
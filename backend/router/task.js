//import router 
const router = require('express').Router();

const { task } = require("../config/db")



//requeste e.g. CRUD

router.get("/getAll", (req, res, next) => {
    task.find((err, task) => {
        if (err) { next(err) } else { res.send(task) }
    })
});
router.get("/get/:id", (req, res, next) => {
    task.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(200).send(result);
    })
})


router.post("/create", (req, res, next) => {
    const Objective = new task(req.body);
    Objective.save().then((err, task) => {
        if (err) {
             next(err)  
    }
            res.send(task)

        
    })

});

router.delete("/delete/:id", (res, req, next) => {
    task.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        } res.statusCode(204).send('succesfully deleted')


    })
});

router.patch("/update/:id", (req, res, next) => {
    task.findByIdAndUpdate(req, params.id,
        req.body,
        { new: true },
        (err, result) => {
            if (err) { next(err); }
            res.status(202).send('Succesfully Created')


        })
});
//update whole document
//  REPLACE
router.put("/replace/:id", (req, res, next) => {
    const { name,
        summary,
        priority,
        deadline,
        completed } = req.body;
    task.findByIdAndUpdate(req.params.id, {
        name,
        summary,
        priority,
        deadline,
        completed
    }, { new: true }, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});

module.exports = router;
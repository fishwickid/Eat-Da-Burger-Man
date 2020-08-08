const express = require("express");

// Import the model (burger.js) to use its database functions
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those rotes where required
router.get("/", (req, res) => {

    burger.selectAll((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Add new burger
router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ],
        [
            req.body.burger_name, req.body.devoured
        ],
        (result) => {
            res.json({ id: result.insertId });
        });
});

// Set burger devoured status to true
router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not ExtensionScriptApis, so 404
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

// Delete burger from db
router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.deleteOne(condition, (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use
module.exports = router;
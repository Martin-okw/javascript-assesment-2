var express = require("express");
var router = express.Router();

var carsController = require("../controllers/cars");
/* GET home page. */
router.get("/", carsController.getAllPosts);

router.post("/", carsController.createAPost);

router.get("/:id/delete", carsController.deleteAPost);

// get record details
router.get("/:id/edit", carsController.editAPost);

// update record
router.post("/:id/edit", carsController.updateAPost);

// http://localhost:3000/blog/1/delete

// get post delete
// delete
// update

module.exports = router;

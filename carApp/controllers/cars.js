const pool = require("../models/index");
const carsController = {};

carsController.getAllPosts = function (req, res, next) {
  // get all posts from database
  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query("SELECT * FROM BlackforceprojectMartinokwuegbe", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("cars", { carsPosts: results.rows });
  });
};

carsController.createAPost = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;
  

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    `INSERT INTO BlackforceprojectMartinokwuegbe (MANUFACTURER, MODEL, COLOR, YEAR) VALUES ($1 , $2, $3, $4)`,
    [manufacturer, model, color, year],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
      return res.render("cars", { carsPosts: [] });
    }
  );
};


carsController.deleteAPost = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    "DELETE FROM BlackforceprojectMartinokwuegbe WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/cars");
    }
  );
};

carsController.editAPost = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM BlackforceprojectMartinokwuegbe WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("carsEdit", { carsPosts: results.rows[0] });
    }
  );
};

carsController.updateAPost = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    "UPDATE BlackforceprojectMartinokwuegbe SET manufacturer = $1, model = $2, color = $3, year = $4 WHERE id = $5",
    [manufacturer, model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/cars");
    }
  );
};

module.exports = carsController;

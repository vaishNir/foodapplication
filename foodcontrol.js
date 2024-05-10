const foodmodel = require("./foodschema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");
const addfood = (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const newFood = new foodmodel({
    foodname: req.body.foodname,
    image: req.file,
    price: req.body.price,
    descripition: req.body.descripition,
  });
  newFood
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Food added Successfully",
        result: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Server Error",
        error: err,
      });
    });
};

const viewfood = (req, res) => {
  foodmodel
    .find()
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Viewed Successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Not Viewed",
        error: err,
      });
    });
};

const viewone = (req,res) => {
  foodmodel
    .findById({ _id: req.params.foodid })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "error",
        data: err,
      });
    });
}

const editfood = async (req, res) => {
  try {
    console.log(req.params.foodid);
    console.log(req.body);

    const updatedFood = await foodmodel.findByIdAndUpdate(
      req.params.foodid,
      {
        foodname: req.body.foodname,
        price: req.body.price,
        descripition: req.body.descripition,
      },
      { new: true } // Return the modified document
    );
console.log(updatedFood);
    if (!updatedFood) {
      return res.status(404).json({ status: 404, message: "Food not found" });
    }

    console.log(updatedFood);
    res.status(200).json({ status: 200, data: updatedFood });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
};

const deletefood = (req, res) => {
  foodmodel
    .findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Data Deleted",
        result: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Server error",
        error: err,
      });
    });
};

module.exports = { addfood, viewfood, upload, deletefood, viewone, editfood};

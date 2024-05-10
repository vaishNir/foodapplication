const staffcartmodel = require("./staffcartschema");

const staffaddcart = async(req, res) => {
  console.log(req.body,"mm");
  console.log(req.params,"kk");
  const newStaffcart = new staffcartmodel({
    foodid: req.params.foodid,
    staffid: req.body.staffid,
    count: req.body.count,
    date:req.body.date,
  });
  await newStaffcart
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Added Successfully",
        result: data,
      });
    })
    .catch((err) => {
    console.log("data not saved ",err);
    });
};

const staffviewcart = (req, res) => {
  console.log(req.params.staffid,"jj");
  staffcartmodel
    .find({staffid: req.params.staffid})
    .then(a => {
      console.log(a);
      res.json({
        status: 200,
        msg: "Viewed Successfully",
        result: a,
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

const staffdeletecartitem = (req, res) => {
  staffcartmodel
    .findByIdAndDelete({ _id: req.params.cartid })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "data deleted",
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



module.exports = { staffaddcart, staffviewcart,staffdeletecartitem};

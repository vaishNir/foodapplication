const staffordermodel = require("./stafforderschema");

const staffaddorder = (req, res) => {
  req.body.state.map((x) => {
    const newStafforder = new staffordermodel({
      foodid: x.foodid._id,
      staffid: x.staffid,
      amount: x.foodid.price,
      count: x.count,
      customername:req.params.customername,
      date: x.date,
      customerId:x.customerId,
    });
    newStafforder
      .save()
      .then((data) => {
       if(data){
        console.log(data);
       }
      })
      .catch((err) => {
        console.log("err on saving order",err);
      });
    })
    res.json({
      status: 200,
      msg: "Ordered Successfully",
    }); 
};

const stafforderdetails = (req,res) => {
  staffordermodel.find({staffid: req.params.staffid}).populate("foodid")
  .exec()
  .then((data) => {
    res.json({
      status: 200,
      msg: "Viewed Successfully",
      result: data,
    });
  })
  .catch((err) => {
    res.json({
      status: 500,
      msg: "Not Viewed",
      error: err,
    });
  });
}

const viewallstafforder = (req,res) => {
  staffordermodel.find().populate("staffid").populate("foodid")
  .exec()
  .then((data) => {
    res.json({
      status: 200,
      msg: "Viewed Successfully",
      result: data,
    });
  })
  .catch((err) => {
    res.json({
      status: 500,
      msg: "Not Viewed",
      error: err,
    });
  });
}

module.exports = {staffaddorder, stafforderdetails, viewallstafforder}
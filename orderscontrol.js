const ordermodel = require("./orderschema");
const cartmodel = require("./cartschema");

const addorder = (req, res) => {
  console.log(req.body, "hhhhh");
  req.body.map((x) => {
   console.log(x.foodid._id,"id")
  
  const neworders = new ordermodel({
    foodid: x.foodid._id,
    userid: x.CustomerId._id,
    amount: x.foodid.price,
    paymentstatus: false,
    count: x.count,
  })
  neworders
    .save()
    .then((data) => {
      if (data) {
        res.json({
          status: 200,
          msg: "Ordered Successfully",
          result: data,
        });
      }
    })
    .catch((err) => {
      console.log("err on saving order", err);
    })
  })
}
const vieworder = (req, res) => {
  console.log(req.params,"ooo");
  ordermodel
    .find({ userid: req.params.userid, paymentstatus: "false" })
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
};

const cancelorder = (req, res) => {
  req.body.state.map((x) => {
    ordermodel
      .findOneAndDelete({ _id: x._id, paymentstatus: "false" })
      .exec()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Not Viewed",
          error: err,
        });
      });
    res.json({
      status: 200,
      msg: "Payment Cancelled",
    });
  });
};

const paymentstatusupdate = (req, res) => {
  console.log(req.body,"yyyyy");
  req.body.state.map((x) => {
    ordermodel
      .findOneAndUpdate(
        { _id: x._id, userid: x.userid, paymentstatus: false },
        { paymentstatus: true }
      )
      .exec()
      .then((data) => {
        console.log("Payment Status Success");
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Payment not Done",
          error: err,
        });
      });
    res.json({
      status: 200,
      msg: "Payment Success",
      result:data
    });
  });
};



const viewOrderDetails = (req, res) => {
  console.log(req.params, "ooo");
  const userid = req.params.userid;

  ordermodel
    .find({ userid: userid })
    .populate("foodid")
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
};

const viewcustomerorder = (req, res) => {
  ordermodel
    .find({ paymentstatus: "true" })
    .populate("userid")
    .populate("foodid")
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
};


const viewAllOrders = (req,res) => {
  // const a= req.params.staffid
  ordermodel.find().populate("userid").populate("foodid")
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



module.exports = {
  addorder,
  vieworder,
  cancelorder,
  paymentstatusupdate,viewAllOrders,
  viewOrderDetails,
  viewcustomerorder,
};

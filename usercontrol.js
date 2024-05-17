const Usermodel = require("./userscheme");

const userregistration = (req, res) => {
  console.log(req.body);
  const newUser = new Usermodel({
    fname: req.body.fname,
    lname: req.body.lname,
    dob: req.body.dob,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password,
    contactno: req.body.contactno,
  });
  newUser
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Register successfully",
        result: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Register Unsuccessfully",
        error: err,
      });
    });
};

const resetpassword = (req, res) => {
  Usermodel.findOne({ email: req.body.email })
    .exec()
    .then((data) => {
      if (data) {
  Usermodel.updateOne({ email: req.body.email}, {password: req.body.password })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Customer Password Update Successfully",
        result: data,
      });
    })}
    else{
      res.json({
        status: 500,
        msg: "Customer Id invalid",
      });
    }})
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Server error",
        error: err,
      });
    });
};


const userlogin = (req, res) => {
  Usermodel.findOne({ email: req.body.email })
    .exec()
    .then((data) => {
      if (data) {
        if (req.body.password === data.password) {
          res.json({
            status: 200,
            msg: "Login Successfully",
            result: data,
          });
        } else {
          res.json({
            status: 500,
            msg: "Invalid Password",
          });
        }
      } else {
        res.json({
          status: 500,
          msg: "Invalid User Id",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Server error",
        error: err,
      });
    });
};

module.exports = { userregistration, userlogin, resetpassword };
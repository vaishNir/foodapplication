const Staffmodel = require("./staffschema");
const staffregistration = (req, res) => {
  const newStaff = new Staffmodel({
    fname: req.body.fname,
    lname: req.body.lname,
    dob: req.body.dob,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password,
    salary: req.body.salary,
    contactno: req.body.contactno,
    designation: req.body.designation,
  });
  newStaff
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Staff Register Successfully",
        result: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Staff Register Unsuccessfully",
        result: err,
      });
    });
};

const stafflogin = (req, res) => {
  Staffmodel.findOne({ email: req.body.email })
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
            msg: "Password Invalid",
          });
        }
      } else {
        res.json({
          status: 500,
          msg: "Staff Id Invalid",
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

const staffresetpassword = (req, res) => {
  Staffmodel.findOne({ email: req.body.email })
    .exec()
    .then((data) => {
      if (data) {
        Staffmodel.updateOne(
          { email: req.body.email },
          { password: req.body.password }
        )
          .exec()
          .then((data) => {
            res.json({
              status: 200,
              msg: "Staff Password Update Successfully",
              result: data,
            });
          })
      }
      else{
        res.json({
            status: 500,
            msg: "Staff Id invalid",
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

module.exports = { staffregistration, stafflogin, staffresetpassword };

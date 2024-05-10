const cartmodel = require("./cartschema");

const 

addcart = async(req, res) => {
  console.log(req.body);
  console.log(req.params);
  let flag=0, count=0
//testing whether food already added to cart
await cartmodel.find({
  foodid: req.params.foodid,
  CustomerId: req.body.CustomerId,
  productimg: req.body.productimg,
  price:req.body.productprice
}).exec().then(datas=>{
if(datas.length>0){
  flag=1}
count=datas[0].count
console.log("count",count);
}) .catch((err) => {
      console.log("err",err);
    });

if(flag==0){
  const newCart = new cartmodel({
    foodid: req.params.foodid,
    CustomerId: req.body.CustomerId,
    count: req.body.count,
  
  });
  await newCart
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
  }else{
    console.log("count",count+parseInt(req.body.count));

await cartmodel.findOneAndUpdate({ foodid: req.params.foodid,
  userid: req.body.userid},{count:count+parseInt(req.body.count)}).exec().then(datas=>{
    console.log("updated");
  }) .catch((err) => {
    console.log("not updated");
  });

    res.json({
      status: 500,
      msg: "Already added to cart!! Count of Food updated to "+ (count+parseInt(req.body.count)),
    });
  }
};

const viewcart = (req, res) => {
  const customerId = req.params.CustomerId; // Assuming CustomerId is passed in the request parameters
  cartmodel
    .find({ CustomerId: customerId }).populate("newfoods") // Filtering based on customerId
    .exec()
    .then((data) => {
      if (data && data.length > 0) {
        res.json({
          status: 200,
          msg: "Viewed Successfully",
          result: data,
        });
      } else {
        res.json({
          status: 404,
          msg: "Customer Cart not found",
          result: [],
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Error occurred while fetching cart",
        error: err.message, // Changed to err.message to get the error message
      });
    });
};
const deletecartitem = (req, res) => {
  cartmodel
    .findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Order Confirmed",
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

const deletecart= (req, res) => {
  cartmodel
    .deleteMany({ userid: req.params.userid })
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

module.exports = { addcart,viewcart,deletecartitem,deletecart };

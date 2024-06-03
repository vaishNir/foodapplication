const express=require("express")

const usercontrol=require("./usercontrol")

const staffcontrol=require("./staffcontrol")
const foodcontrol=require('./foodcontrol')
const cartcontrol = require("./cartscontrol")
const ordercontrol = require("./orderscontrol")
const staffcartcontrol = require("./staffcartscontrol")
const staffordercontrol = require("./staffordercontrol")
const router=express.Router()

//Usercontrol
router.post('/userregistration',usercontrol.userregistration)
router.post('/resetpassword',usercontrol.resetpassword)
router.post('/userlogin',usercontrol.userlogin)


//Staffcontrol
router.post('/staffregistration',staffcontrol.staffregistration)
router.get('/staffprofile/:staffid',staffcontrol.staffprofile)
router.post('/stafflogin',staffcontrol.stafflogin)
router.post('/staffresetpassword',staffcontrol.staffresetpassword)
router.post('/staffaddcart/:foodid',staffcartcontrol.staffaddcart)
router.post('/staffviewcart/:staffid',staffcartcontrol.staffviewcart)
router.post('/staffdelete/:cartid',staffcartcontrol.staffdeletecartitem)
router.post('/staffaddorder/:staffid',staffordercontrol.staffaddorder)
router.get('/viewstafforders',staffordercontrol.viewallstafforder)
router.get('/viewstafforderdetails/:staffid',staffordercontrol.stafforderdetails)


//Food control
router.post('/addfood',foodcontrol.upload,foodcontrol.addfood)
router.get('/viewfood',foodcontrol.viewfood)
router.get('/viewone/:foodid',foodcontrol.viewone)
router.post('/editfooddetails/:foodid',foodcontrol.editfood)
router.post('/deletefood/:id',foodcontrol.deletefood)
//Cartcontrol

router.post('/addcart/:foodid',cartcontrol.addcart)
router.get('/viewcart/:CustomerId',cartcontrol.viewcart)
router.post('/deletecartitem/:id',cartcontrol.deletecartitem)
router.post('/cartitems/:userid',cartcontrol.deletecart)
//Ordercontrol
router.post('/addorder',ordercontrol.addorder)
router.get('/vieworder/:userid',ordercontrol.vieworder)
router.post('/cancelorder',ordercontrol.cancelorder)
router.post('/paymentstatus',ordercontrol.paymentstatusupdate)
router.get('/vieworderdetails/:userid',ordercontrol.viewOrderDetails)
router.get('/viewcustomerorder',ordercontrol.viewcustomerorder)
router.get('/view-all-orders', ordercontrol.viewAllOrders)


// router.get('/staffaddorder/:customerId',staffordercontrol.staffaddorder)

// done


module.exports=router
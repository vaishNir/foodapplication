const express=require("express")

const usercontrol=require("./usercontrol")

const staffcontrol=require("./staffcontrol")
const foodcontrol=require('./foodcontrol')
const cartcontrol = require("./cartscontrol")
const ordercontrol = require("./orderscontrol")
const staffcartcontrol = require("./staffcartscontrol")
const staffordercontrol = require("./staffordercontrol")
const router=express.Router()


router.post('/userregistration',usercontrol.userregistration)
router.post('/resetpassword',usercontrol.resetpassword)
router.post('/userlogin',usercontrol.userlogin)
//done

router.post('/staffregistration',staffcontrol.staffregistration)
router.post('/stafflogin',staffcontrol.stafflogin)
router.post('/staffresetpassword',staffcontrol.staffresetpassword)
//done

router.post('/staffaddcart/:foodid',staffcartcontrol.staffaddcart)
router.post('/staffviewcart/:staffid',staffcartcontrol.staffviewcart)
//done
router.post('/staffdelete/:cartid',staffcartcontrol.staffdeletecartitem)
//not done

router.post('/addfood',foodcontrol.upload,foodcontrol.addfood)
router.get('/viewfood',foodcontrol.viewfood)
router.get('/viewone/:foodid',foodcontrol.viewone)
router.post('/editfooddetails/:foodid',foodcontrol.editfood)
router.post('/deletefood/:id',foodcontrol.deletefood)
//notdone

router.post('/addcart/:foodid',cartcontrol.addcart)
router.get('/viewcart/:CustomerId',cartcontrol.viewcart)
router.post('/deletecartitem/:id',cartcontrol.deletecartitem)
router.post('/cartitems/:userid',cartcontrol.deletecart)

router.post('/addorder',ordercontrol.addorder)
router.get('/vieworder/:userid',ordercontrol.vieworder)
router.post('/cancelorder',ordercontrol.cancelorder)
router.post('/paymentstatus',ordercontrol.paymentstatus)
router.get('/vieworderdetails/:userid',ordercontrol.vieworderdetails)
router.get('/viewcustomerorder',ordercontrol.viewcustomerorder)
router.post('/staffaddorder/:staffid',staffordercontrol.staffaddorder)
router.get('/viewstafforders',staffordercontrol.viewallstafforder)
router.get('/staffaddorder/:customerId',staffordercontrol.staffaddorder)



// done
router.get('/viewstafforderdetails/:staffid',staffordercontrol.stafforderdetails)


module.exports=router
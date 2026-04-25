const router=require("express").Router();
const Invoice=require("../models/Invoice");

router.post("/",async(req,res)=>{
 const inv=new Invoice(req.body);
 await inv.save();
 res.json(inv);
});

router.get("/",async(req,res)=>{
 res.json(await Invoice.find());
});

module.exports=router;

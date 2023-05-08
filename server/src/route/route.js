const express = require('express')
const router = express.Router()
// const link = require('../controllers/aws')
const {createRecord, getRecord, UpdateRecord, DeleteRecord, ImageUrls, getRecordbyId} = require('../controllers/recordController')


router.get("/test-me",function(req,res){
    res.send("This is the test Api!!!!!!!!!!!!!!")
})

//-------------------- Records ------------------//
router.post('/record', createRecord);
router.post('/record/images', ImageUrls);
router.get('/record', getRecord);
router.get('/record/:id', getRecordbyId);
router.put('/record/:id', UpdateRecord);
router.delete('/record/:id', DeleteRecord);


//------------------------ error ----------------//
router.all('/*',(req,res)=>{return res.status(400).send({status:false, message:"pls provide valid path"})})


module.exports = router
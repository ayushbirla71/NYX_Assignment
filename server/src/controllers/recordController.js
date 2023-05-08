const { getImage } = require("../database/awsDB");
const recordModel = require("../models/recordModel");

//================================// create Record //====================================

const createRecord = async function (req, res) {
  try {
    let { title, tage, discription, totalPrice, quantity, address, status, files } = req.body;
    
    let Obj = {
      title,
      totalPrice,
      tage,
      discription,
      quantity,
      address,
      status,
      imageUrls: files
    };
    let OutputRecord = await recordModel.create(Obj);
    return res.status(201).send({
      status: true,
      message: "Record Created Successfully",
      data: OutputRecord,
    });
  } catch (err) {
    
    return res.status(500).send({ status: false, message: err.message });
  }
};

const ImageUrls = async (req, res) => {
  try {
    let files = req.files;
    console.log(files);
    if (files && files?.length == 0)
      return res
        .status(400)
        .send({ status: false, message: "Please provide Profile Image" });
      let imageUrls = await getImage(files);
      return res.status(200).send({status : true, data : imageUrls})

  } catch (error) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

//==========================// get Record //========================================

const getRecord = async function (req, res) {
  try {
    let getOutput = await recordModel.find({ isDeleted: false });
    return res.status(200).send({ status: true, data: getOutput });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};


//==========================// get by id Record //========================================

const getRecordbyId = async function (req, res) {
  try {
    let {id} = req.params
    let getOutput = await recordModel.findById(id);
    if(getOutput.isDeleted==false){
      return res.status(200).send({ status: true, data: getOutput });
    }
    else {
      return res.status(404).send({ status: false, message :'record not found' });
    }
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

//==========================// update Record //==============================================

const UpdateRecord = async function (req, res) {
  try {
    let _id = req.params.id;
    let { title, tage, discription, totalPrice, quantity, address, status, files } = req.body;
    let Obj = {};
    if (status) {
      Obj.status = status;
    }
    if (title) {
      Obj.title = title;
    }
    if (tage) {
      Obj.tage = tage;
    }
    if (discription) {
      Obj.discription = discription;
    }
    if (totalPrice) {
      Obj.totalPrice = totalPrice;
    }
    if (quantity) {
      Obj.quantity = quantity;
    }
    if (address) {
      Obj.address = address;
    }
    if(files){
      Obj.imageUrls = files;
    }
    let UpdatedRecordOutput = await recordModel.findByIdAndUpdate(_id, Obj, {
      new: true,
    });
    return res.status(200).send({
      status: true,
      message: "Record Update Successfully",
      data: UpdatedRecordOutput,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

//==========================// delete Record //==============================================

const DeleteRecord = async function (req, res) {
  try {
    let _id = req.params.id;
    await recordModel.findByIdAndUpdate(_id, {
      isDeleted: true,
      deletedAt: Date.now(),
    });
    return res
      .status(200)
      .send({ status: true, message: "Record Deleted Successfully" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { createRecord, getRecord, UpdateRecord, DeleteRecord , ImageUrls, getRecordbyId};

import React from "react";
import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";
import ImageInput from "../components/ImageInput";
import { useSelector, useDispatch } from "react-redux";
import { ButtonControllers, InputRecords } from "./../redux/actions/index";
import { AllFetchApis } from "../api/AllFetchApis";
import { useNavigate } from "react-router-dom";

const options = [
  { key: "d", text: "Delivered", value: "Delivered" },
  { key: "p", text: "Pending", value: "Pending" },
  { key: "c", text: "Cenceled", value: "Canceled" },
];
const Create = () => {
  const navigate = useNavigate()
  const {OnChangeRecordDetails, buttonControllers} = useSelector((state) => state);
  const Dispatch = useDispatch();

  const handleChange = (e, { value, name }) => {
    console.log(name, value);
    Dispatch(InputRecords({ value, name }));
  };

  const OnSubmit =  async () =>{
    try {
      if(OnChangeRecordDetails?._id){
        await AllFetchApis({type:"put", body : OnChangeRecordDetails , id : OnChangeRecordDetails._id})
        alert("updated successfully")
        Dispatch(InputRecords({ name:"reset" }));
        Dispatch(ButtonControllers({type:"reset"}));
        navigate('/');
      }
      else{
        await AllFetchApis({type:"post", body : OnChangeRecordDetails})
        alert("Created successfully");
        Dispatch(InputRecords({ name:"reset" }));
        Dispatch(ButtonControllers({type:"reset"}));
        navigate('/');
      }
      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field
        required ={true}
          name="title"
          value={OnChangeRecordDetails.title}
          onChange={handleChange}
          control={Input}
          label="Title"
          placeholder="title"
        />
        <Form.Field
        required={true}
          name="tage"
          value={OnChangeRecordDetails.tage}
          onChange={handleChange}
          control={Input}
          label="Tage"
          placeholder="tage"
        />
        <Form.Field
        required={true}
          name="status"
          value={OnChangeRecordDetails.status}
          onChange={handleChange}
          control={Select}
          label="Status"
          options={options}
          placeholder="status"
        />
      </Form.Group>
      <Form.Group
       inline>
    
        <label>Quantity</label>
        <Form.Field
          control={Radio}
          label="One"
          value="1"
          name="qunt"
          checked={OnChangeRecordDetails.quantity == "1"}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          label="Two"
          name="qunt"
          value="2"
          checked={OnChangeRecordDetails.quantity == "2"}
          onChange={handleChange}
        />
        <Form.Field
          control={Radio}
          label="Three"
          name="qunt"
          value="3"
          checked={OnChangeRecordDetails.quantity == "3"}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Field
      required={true}
          name="totalPrice"
          value={OnChangeRecordDetails.totalPrice}
          onChange={handleChange}
          control={Input}
          label="Total Price"
          placeholder="total price"
          type="number"
        />

<Form.Field
      required={true}
          name="address"
          value={OnChangeRecordDetails.address}
          onChange={handleChange}
          control={Input}
          label="Address"
          placeholder="city location"
        />

      <ImageInput />
      <Form.Field
      required={true}
        name="discription"
        value={OnChangeRecordDetails.discription}
        onChange={handleChange}
        control={TextArea}
        label="Discription"
        placeholder="Write a Discription..."
      />
      <Form.Field  primary disabled={buttonControllers?.submitButton} control={Button} onClick={()=> OnSubmit()}> { OnChangeRecordDetails?._id ? "Update" : "Submit"} </Form.Field>
    </Form>
  );
};

export default Create;
import React, { useState } from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ButtonControllers, InputRecords } from "../redux/actions";


const ImageInput = () => {
  const Dispatch = useDispatch();
  const {OnChangeRecordDetails, buttonControllers} = useSelector((state) => state);
  const [file, setfiles] = useState(null);

  const fileSelectedHandler = ({ target: { files } }) => {
    setfiles(files);
  };

  const OnUploud = async () => {
    try {
      if(file){

        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
          formData.append("image", file[i]);
        }
  
        let {data} = await axios({
          method: "post",
          url: `http://localhost:3001/record/images`,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        console.log(data);
        Dispatch(InputRecords({value:data.data, name:"files" }));
        Dispatch(ButtonControllers({type:"upload"}))
        alert("Add successfully")
      }
      else {
        alert(" add some images")
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="images" />
        upload some photos releted this record.
      </Header>
      <label>
        <input
          type="file"
          name="files"
          multiple
          onChange={fileSelectedHandler}
        ></input>
        <Button disabled={buttonControllers?.uploadButton} primary onClick={() => OnUploud()}>
          {OnChangeRecordDetails?._id ? "Add" : "Uplode"}
        </Button>
      </label>
    </Segment>
  );
};

export default ImageInput;

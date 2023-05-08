import React from "react";
import { Button, Grid, Popup } from "semantic-ui-react";
import { AllFetchApis } from "../api/AllFetchApis";
import { useDispatch } from "react-redux";
import { HomePageData } from "../redux/actions";

const PopupDiv = ({ id , ind}) => {
   let Dispatch= useDispatch();

  const deleteRecord = async () => {
    try {
      console.log(ind);
      
        await AllFetchApis({ type: "delete", id: id });

      Dispatch(HomePageData({type : 'deleteHome', value : id}))

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popup
      wide
      trigger={<Button basic color="red" content="Delete" />}
      on="click"
    >
      <Grid divided columns="equal">
        <Grid.Column>
          <Popup
            trigger={<Button color="blue" content="Cancle" fluid />}
            content="The story ends. You wake up in your bed and believe whatever you want to believe."
            position="top center"
            size="tiny"
            inverted
          />
        </Grid.Column>
        <Grid.Column>
          <Popup
            trigger={
              <Button
                onClick={() => deleteRecord()}
                color="red"
                content="Conform"
                fluid
              />
            }
            content="Stay in Wonderland, and I show you how deep the rabbit hole goes."
            position="top center"
            size="tiny"
            inverted
          />
        </Grid.Column>
      </Grid>
    </Popup>
  );
};

export default PopupDiv;

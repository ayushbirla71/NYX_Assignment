import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  Segment,
  Image,
  Container,
  Grid,
  Button,
} from "semantic-ui-react";
import { DetailPageData } from "../redux/actions";
import { AllFetchApis } from "../api/AllFetchApis";
import { InputRecords } from "../redux/actions";

const Details = () => {
  const Dispatch = useDispatch();
  let { detailsRecordData } = useSelector((state) => state);
  let { id } = useParams();
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let { data } = await AllFetchApis({ type: "getbyId", id: id });
    console.log(data);
    Dispatch(DetailPageData({ type: "details", value: data }));
  };

  const Edit = () => {
    Dispatch(InputRecords({ name: "edit", value: detailsRecordData }));
  };

  return (
    <Segment>
      <div>
        <NavLink to={"/Create"}>
          <Button onClick={() => Edit()}>Edit</Button>
        </NavLink>
      </div>
      <Image
        src={
          detailsRecordData?.imageUrls?.length > 0
            ? detailsRecordData?.imageUrls[0]
            : ""
        }
        size="medium"
        centered
      />
      <br />
      <Container>
        <Segment>
          <h2>
            Title : <a>{detailsRecordData?.title}</a>
          </h2>
          <h2>
            Tages : <a>{detailsRecordData?.tage}</a>
          </h2>
          <h2>
            Qunt : <a>{detailsRecordData?.quantity}</a>
          </h2>
          <h2>
            Statue: <a>{detailsRecordData?.status}</a>
          </h2>
          <h2>
            Address: <a>{detailsRecordData?.address}</a>
          </h2>
          <h2>
            Total Price : <a>{detailsRecordData?.totalPrice}</a>
          </h2>
          <Segment>
            <h1>Discription :</h1>
            <p>{detailsRecordData?.discription}</p>
          </Segment>
        </Segment>
      </Container>
      <br />
      <Segment>
        <Grid relaxed columns={4}>
          {detailsRecordData
            ? detailsRecordData?.imageUrls?.map((items, index) => {
                return (
                  <Grid.Column key={index}>
                    <Image size="medium" src={items} />
                  </Grid.Column>
                );
              })
            : ""}
        </Grid>
      </Segment>
    </Segment>
  );
};

export default Details;

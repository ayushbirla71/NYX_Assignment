import React, { useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { AllFetchApis } from "../api/AllFetchApis";
import { useDispatch, useSelector } from "react-redux";
import { HomePageData } from "../redux/actions";
import { NavLink } from "react-router-dom";
import PopupDiv from "../components/PopupComp";

const Home = () => {
  let myState = useSelector((state) => state.homeRecordData);
  const Dispatch = useDispatch();

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let { data } = await AllFetchApis({ type: "get" });
    console.log(data);
    Dispatch(HomePageData({ type: "home", value: data }));
  };

  return (
    <Card.Group>
      {myState
        ? myState?.map((items, index) => {
            return (
              <Card key={index}>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src={items?.imageUrls[0]}
                  />
                  <Card.Header>{items?.title}</Card.Header>
                  <Card.Meta>{items?.tage[0]}</Card.Meta>
                  <Card.Description>
                    {items?.discription}{" "}
                    <strong> Status : {items?.status}</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <NavLink to={`/Details/${items._id}`}>
                      <Button basic color="green">
                        Show More
                      </Button>
                    </NavLink>
                    <PopupDiv id = {items?._id} ind={index}/>
                  </div>
                </Card.Content>
              </Card>
            );
          })
        : ""}
    </Card.Group>
  );
};

export default Home;

import axios from "axios";

let endPoint = "http://localhost:3001/record";

export const AllFetchApis = async ({ type, body, id }) => {
  try {
    if (type == "postImage") {
      let { data } = await axios({
        method: "post",
        url: `${endPoint}/images`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: body,
      });
      console.log(data);
      return data;
    } 



    else if (type == "getbyId") {
      let { data } = await axios(`${endPoint}/${id}`);
      console.log(data);
      return data;
    }
    
    
    else if (type == "get") {
      let { data } = await axios(`${endPoint}`);
      console.log(data);
      return data;
    } 
    
    else if (type == "post") {
      let { data } = await axios({
        method: "post",
        url: endPoint,
        data: body,
      });
      console.log(data);
      return data;
    } 
    
    else if (type == "put") {

    let {title, tage, discription, totalPrice, quantity, address, status, files} = body 
      let { data } = await axios.put(`${endPoint}/${id}`, { title, tage, discription, totalPrice, quantity, address, status, files});
      return data;
    } else if (type == "delete") {
      await axios.delete(`${endPoint}/${id}`);
      return "Deleted";
    }
  } catch (error) {
    console.log(error);
  }
};

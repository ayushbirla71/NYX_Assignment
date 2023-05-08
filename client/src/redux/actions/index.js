export const InputRecords = ({name, value}) =>{
    return {
      type : name,
      paylod : value
    }
  }
  
export const HomePageData = ({type ,value})=>{
  if(type == "deleteHome"){
    console.log("hello");
    return {
      type : "deleteHome",
      paylod : value
    }
  }
  else {

    return {
      type: "home",
      paylod : value
  
    }
  }
}

export const DetailPageData = ({value})=>{
  return {
    type: "details",
    paylod : value

  }
}

export const ButtonControllers = ({type})=>{
  return {
    type: type,
  }
}
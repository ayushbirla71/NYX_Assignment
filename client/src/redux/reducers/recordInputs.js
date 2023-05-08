let initialState  = {
    title: "",
    tage: [],
    discription: "",
    totalPrice: 0,
    quantity: 1,
    address: "",
    status: "",
    files: [],
}

const OnChangeRecordDetails = (state=initialState, action)=>{
    switch (action.type) {
      case "address" : return {...state, address :action.paylod};
       case "title" : return {...state, title :action.paylod};
       case "tage"  : return {...state, tage :action.paylod};
       case "totalPrice" : return {...state, totalPrice :action.paylod};
       case "qunt"  : return {...state, quantity :action.paylod};
       case "status" : return {...state, status :action.paylod};
       case "discription"  : return {...state, discription :action.paylod};
       case "files" : return {...state, files : [...action.paylod]}
       case "edit" : return action.paylod;
       case "reset" : return initialState;
       default: return state;
    }

}

export default OnChangeRecordDetails;
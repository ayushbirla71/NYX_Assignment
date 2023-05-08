let initialState  = []

const homeRecordData = (state=initialState, action)=>{

    switch (action.type) {
       case "home" : return [...action.paylod];
       case "deleteHome" : return [...state.filter((e)=> e._id != action.paylod)];
       default: return state;
    }

}

export default homeRecordData;
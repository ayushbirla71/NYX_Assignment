let initialState  = {}

const detailsRecordData = (state=initialState, action)=>{
    switch (action.type) {
       case "details" : return {...action.paylod};
       default: return state;
    }

}

export default detailsRecordData;
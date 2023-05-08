let initialState  = {
    uploadButton: false,
    submitButton: true
}

const buttonControllers = (state=initialState, action)=>{
    switch (action.type) {
       case "upload" : return {...state, uploadButton: true, submitButton: false};
       case 'reset' : return initialState;
       default: return state;
    }

}

export default buttonControllers;
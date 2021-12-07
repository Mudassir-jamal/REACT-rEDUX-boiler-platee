const INITIAL_STATE = {
    data : "sign up reducer here"
}



const reducer = (state = INITIAL_STATE,action) => {
      console.log(action)
    // switch (action.type) {
    //     case "SIGNUPDATA" :
    //         action.uid = state.SignUpreducer.uid
    //         return state.SignUpreducer


    //         default :
    //         return state;

    // }

    return state
    
    
}

export default reducer
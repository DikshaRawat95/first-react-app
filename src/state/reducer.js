const initialState = {
    lawyerData: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UpdateLawyerData": {
            return {
                ...state,
                lawyerData: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export default rootReducer
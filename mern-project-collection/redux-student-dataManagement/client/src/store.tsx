import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    studentData: {
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        zip: "",
    }
}

// This code defines a reducer for the student data, handling actions to update specific fields.
const studentDataReducer = (state = initialState.studentData, action) => {

    switch(action.type){

        case "UPDATE_EMAIL":
            return {...state, email: action.payload};

        case "UPDATE_PASSWORD":
            return {...state, password: action.payload};

        case "UPDATE_ADDRESS":
            return {...state, address: action.payload};

        case "UPDATE_ADDRESS2":
            return {...state, address2: action.payload};

        case "UPDATE_CITY":
            return {...state, city: action.payload};

        case "UPDATE_ZIP":
            return {...state, zip: action.payload};

        default:
            return state;
    }
};

// It also creates a store using configureStore with the reducers.
const store = configureStore({
    reducer: {
        studentData: studentDataReducer
    }
});

export default store;
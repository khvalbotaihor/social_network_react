import React from 'react'
import store from "./redux/react-redux";
import {BrowserRouter} from "react-router-dom";

const StoreContext = React.createContext(null);

const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
    }

export default StoreContext;
import React from "react";

export const withSuspense = (Component) => {
    return () => {
       return <Component {...props} />

    }
}
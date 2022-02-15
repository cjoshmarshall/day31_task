import React, { useState } from "react";

let userContext = React.createContext();

export default userContext;

export const UserProvider = ({children}) => {
    let [userData,setUserData] = useState([
        {
            firstName:'Tiger Nixon',
            position:'System Architect',
            office:'Edinburgh',
            age:'61',
            date:'2011-04-25',
            salary:320800
        },
        {
            firstName:'Garrett Winters',
            position:'Accountant',
            office:'Tokyo',
            age:'63',
            date:'2011-07-25',
            salary:170750
        },

    ]);
    let [productData,setProductData] = useState([
        {
            Name:"Desktop",
            Category:"IT",
            Price:200
        },
        {
            Name:"Laptop",
            Category:"IT",
            Price:3000
        }
    ]);
    return <userContext.Provider value={{userData,setUserData,productData,setProductData}}>
        {children}
    </userContext.Provider>
}
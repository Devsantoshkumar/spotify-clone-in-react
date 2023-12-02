import { useState } from "react";
import headerContext from "./headerContext";

const HeaderContextProvider = ({children}) => {

    const [searchMenu, setSearchMenu] = useState(false)

     return (
        <headerContext.Provider value={{searchMenu, setSearchMenu}}>
        {children}
        </headerContext.Provider>
     )
}

export default HeaderContextProvider;
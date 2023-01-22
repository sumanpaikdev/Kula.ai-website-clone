import React, {useEffect, useState} from "react";
const Context = React.createContext()

function ContextProvider(props){
  const [content, setContent] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
          .then((res) => res.json())
          .then((data) => setContent(data.texts));
      }, []);
      console.log(content)

    return(
        <Context.Provider value={{content}}>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}


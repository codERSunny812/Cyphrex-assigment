/* eslint-disable react/prop-types */
import { useEffect , createContext, useState } from "react";
// import { URL } from "../../constant";


// eslint-disable-next-line react-refresh/only-export-components
export const apiContext = createContext(null);

const ContextProvider = (props) => {
// state to store the api response
const [apiData,setApiData] = useState(null);

useEffect(()=>{
    // Function to fetch data
    const getApiData = async () => {
        try {
            const response = await fetch("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers");
            const data = await response?.json();
            setApiData(data);
            // console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Call the fetch function
    getApiData();
},[])
  

    return(
    <apiContext.Provider value={apiData} >
        {props.children}
    </apiContext.Provider>
    )
}

export default ContextProvider;
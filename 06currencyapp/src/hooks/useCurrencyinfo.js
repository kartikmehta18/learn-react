import { useEffect,useState } from "react";



function useCurrencyInfo(currency){
    const [data,setData] =useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);

    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;


// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         const fetchCurrencyData = async () => {
//             try {
//                 const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
//                 const result = await response.json();
//                 setData(result[currency]);
//             } catch (error) {
//                 console.error("Error fetching currency data:", error);
//             }
//         };

//         if (currency) {
//             fetchCurrencyData();
//         }
//     }, [currency]);

//     useEffect(() => {
//         console.log(data);
//     }, [data]);

//     return data;
// }

// export default useCurrencyInfo;

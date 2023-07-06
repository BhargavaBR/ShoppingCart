import { useEffect, useState } from "react";

function useApi(url){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        let ignore = false;
        setLoading(true);
        fetch(url)
        .then((res)=> res.json())
        .then((json)=>{
            if(!ignore){
                setData(json)
                setLoading(false);
            }
        })
        .catch((err)=>{
            setError(err);
            setLoading(false);
        })
        return () =>{
            ignore = true;
        }
    },[url]);

    return {data,loading,error};
}

export default useApi;
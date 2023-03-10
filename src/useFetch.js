import { useEffect, useState } from "react"

const useFetch = (url,page) => {
    const [data,setData] = useState([]);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
            setIsPending(true)
            fetch(url + page,{signal: abortCont.signal})
            .then(response => {
                if(!response.ok){
                    throw Error('Could not fetch the data for that resource')
                } 
                return response.json()
            })
            .then(data => {
                setData(prev => {
                    return [...prev,...data.results];
                });
                setIsPending(false);
            })
            .catch(err => {
                if(err.name == 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setError(err.message);
                    setIsPending(false);    
                }
            })    
        return () => abortCont.abort();
     },[url,page])
     return {data,error,isPending};
}
 
export default useFetch;
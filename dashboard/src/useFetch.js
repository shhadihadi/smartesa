//inside this file we just need to place all of the functionality to fetch the data exactly as we did over her inside the home component
import { useState, useEffect  } from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() =>{
        const abortCont = new AbortController();
       
            fetch(url, { signal: abortCont.signal})
                .then(res => {
                   // console.log(res);
                   if(!res.ok){
                     throw Error('could not fetch the data for that ressource')
                   }
                 return res.json();
                })
                .then(data => {
                   console.log(data);
                   setData(data);
                   setIsPending(false);
                   setError(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                       console.log('fetch aborted');
                    }else{
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        
        return () => abortCont.abort();
       }, [url]);

       //return in object
       return{ data, isPending, error}
}


//we need to export this function so we can say export
export default useFetch;
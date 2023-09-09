import {useState, useEffect} from 'react'

const useFetch = (url) => {        //Custom hook needs to start with the word use or it wont work
                                // We also have to hardcode the endpoint here as we know we wont be able to use it in different components

    const [data, setData] = useState(null); // We will put null value for now and once we have successfully fetch the data we will update the state using setBlog
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)  //. So we might store the error in some state so we can output it through browser
    
    useEffect(() => {  
        setTimeout(() => {
                            
        fetch(url)            // making the fetch request 
          .then(res => {            // We will use a promise (then method) , we dont have to use async and if we want to externalize we use promise instead
            if(!res.ok) {
                throw Error("Could not fetch the data for the resource")      //So if the “res” is not ok and getting received then we need to fire a type of code
                                                                            // which will throw an error if only there is an error coming back from server
            }
           return res.json();      // we use fetch api here, this will pass the json into the js object for us  
          })    
          .then(data => {        // So when we return res.json it then returns another promise
            setData(data);         // It then fires a func which asks a parameter the actual data
            setIsPending(false);
            setError(null);                // Setting the error to be null coz inside here if we try to fetch the data and wanna get rid of the error message 
            })         
            .catch(err => {         // We would use catch , the catch block catches any kind of network error and it will fire a function 
              setError(err.message)    //So when we throw an error there it will catches it down in catch. 
              setIsPending(false);             //. So instead of logging we can use state function to output the error through setError
            }) 
                // Now we have to update the state with setBlog function with the current value            
            }, 500)                   // We are taking array of objects and updating the blogs state with that array 
                             
    }, [url]);      // Passing a 2nd argument in useEffect to run the function only on some particular renders

    return { data, isPending, error }      // We have to return the data 


}

export default useFetch;
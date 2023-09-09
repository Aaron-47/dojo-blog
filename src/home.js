import { useState, useEffect } from "react"  // it grab the function from react library so that it can be used in our component
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
    const {  data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs') 
        //So we will import the state and set it equal fetch and then we need to pass the endpoint through parameter , grab the data but call it blogs 


    // const handleDelete = (id ) => {    // We can define the function for the onclick over here and after that can pass it through props
    //     var newBlogs = blogs.filter(blog => blog.id !== id )
    //     setBlogs(newBlogs)    // Using this function to say look the new value of blogs data should be new blogs
    // }                          

   
                // This hook only runs the function after the 1st initial render , as if the state changes it wont run, there might be an error
                // Its because we have assigned null value to 'blogs' which is getting mapped and to combat we need to do some js in the nesting props 

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }  
            {isPending && <div> loading.. </div>}
            { blogs && <BlogList blogs={blogs}  title="All Blogs"/>}     
        {/* This conditional templating in react, logical and (&) evaluates the left 1st and if this is false
            it never even bothers with the rights so this to begin with is gonna be null and since null evaluates 
            the false it doesnot bother to the right hand side of the logical (&) and therefore it doesnot output
            the rest of nesting element part and if its true it moves to the right and evalutes, when it evallluates 
            this it outputs it to the screen so the things on the right is to be output if the thing on the left is true 
            so this is how we output parts of template.*/}




            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "Jared" )} title="Jared's data" />*/}
            {/* <button onClick={() => setName("Sajjad") }> Change  </button>
            <p> {name} </p> */}
        </div>
     );
}

export default Home;

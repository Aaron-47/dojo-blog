import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')      // As we input the value in useState it wont change or edit the value of input 
    const [body, setBody] =  useState('')
    const [author, setAuthor] = useState('Affan')

    const [isPending, setIsPending] = useState(false)       // This is to add a loading button while adding the content
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()         // Stops a page from refreshing
        const blog = {title, body, author};         // we create blog and set it equal to object

        setIsPending(true);

        fetch ('http://localhost:8000/blogs', {         // Endpoint we need to add a new blog by sending a post request , json server will also add the id property 
            method: 'POST',
            headers: {"Content-Type": "application/json"},     // This is basically telling the server the type of content we are sending with the request with json data 
            body: JSON.stringify(blog)         // So this is the main body and we will pass the blog body after converting the object into string by this method
        }).then(() => {
            console.log(" New blog added ");        // // Since this asynchronous it will return a promise we can tack on a then method which fires a function when this is complete 
            setIsPending(false); 
            history.push('/')          // So push method will be used to take us to the home page as we gave the path.
        })              
    }
 

    return (
        <div className="create">
            <h2> Add a new blog </h2>
            <form onSubmit={handleSubmit}>      
                <label> Blog Title: </label>
                <input 
                type="text"
                required 
                value={title}        // that by onClick which invokes set title so we change the title when we try to change the input 
                onChange={(e) => setTitle(e.target.value) }         // we can get it from the event object saying ‘e.target’ and the target is the input element in which we are working in
                />

                <label> Blog Body: </label>
                <textarea 
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label> Blog Author </label>
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Affan">Affan</option>
                    <option value="Aaron">Aaron</option>
                </select>
                { !isPending && <button> Add blog </button> }       
                { isPending && <button disabled> Adding blog... </button> }
            </form>          
        </div>                                   
                                        // Adding a conditional js statement at the end to send and updating message for adding a blog
    );
}   
export default Create;

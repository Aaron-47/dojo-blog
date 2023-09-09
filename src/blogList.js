import { Link } from "react-router-dom";

const BlogList = ({blogs , title }) => {  // Receiving the props in this component passing an argument inside this function
    // const blogs = props.blogs;  // So we could access the blogs from it        
    // const title = props.title;   // Any props that we send through into a component are attached to the above object which we get automatically as an argument in the component and can access them

    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((blog)=> (  // Each time we cycle through the this array we will get all get access to all the property
                <div className="blog-preview" key={blog.id}>    {/* Every root element in the template must have a key property and by this react (if we add or delete any item) it keeps track of each item in the dom as it outputs can call it an id property */}
                    <Link to={`blogs/${blog.id}`}> 
                        <h2> {blog.title} </h2>
                        <p> Written by {blog.author} </p>
                    </Link>
                </div>   
            ))}
        </div>
    );
}
export default BlogList;
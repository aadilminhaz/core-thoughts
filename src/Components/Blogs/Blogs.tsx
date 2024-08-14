
import './Blogs.css';
import Blogs_Data from '../../assets/data/blogs_data';

interface BlogsItem {
    blog_id: number,
    title: string,
    blog_image: string,
    overlay: string
}


const Blogs:React.FC = ()=> {
    return (
        <div className="blogs">
            <div className="blogp-title">
                <h1>Latest on Core Thought tech blogs</h1>
                <p></p>
            </div>
            <div className="blogsp-container">
                {Blogs_Data.map((blogs: BlogsItem, index: number) => (
                    <a href="/blogs/kafka-blog">
                            <div key={index} className="blogs-format">
                                <h1>{blogs.title}</h1>
                            <div className='blogs-image'>
                                <img src={blogs.blog_image} alt="Blog-Image"/>
                            </div>
                            <div className='blog-overlay'>
                                <p>{blogs.overlay}</p>
                            </div>
                        </div>       
                    </a>
                    
                    
                ))}
                
            </div>
        </div>
    );
};

export default Blogs;
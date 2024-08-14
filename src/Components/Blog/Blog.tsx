import './Blog.css';

import Blog_Data from '../../assets/data/blog/blog1_data';

interface BlogDataInterface {
    title: string,
    info: string,
    blog_image: string,

    blog_content : BlogContent[]
}

interface BlogContent {
    
        paraTitle: string,
        paraContent: string[],
        paraImage?: string
    
}

const Blog:React.FC = ()=> {
  const {title, info, blog_image, blog_content }: BlogDataInterface = Blog_Data;
    return (
        <div className='blog'>
          <div className='blog-title'>
            <h1>{title}</h1>
            <p>{info}</p>
            <img src={blog_image} alt={title} />
          </div>
          <div className='blog-container'>
            {blog_content.map((content, index) => (
              <div key={index} className='blog-format'>
                <h2>{content.paraTitle}</h2>
                {content.paraImage && <img src={content.paraImage} alt={content.paraTitle} />}
                {content.paraContent.map((line, lineIndex) => {
                  return <p key={lineIndex}>{line}</p>
                })}
              </div>
            ))}    
          </div>
      </div>    
    );
};

export default Blog;


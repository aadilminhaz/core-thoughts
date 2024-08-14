
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
import WriterEntry from "../Writer_Entry/WriterEntry";



const Homepage = ()=> {
    return (
        <>
            <Navbar/>
            <Welcome/>
            <Blogs/>
            <WriterEntry/>

            <Footer/>
        </>
    );  
}

export default Homepage;
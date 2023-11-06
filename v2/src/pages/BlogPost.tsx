import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";
import post from "../config/post.ts";
import Md from "../components/Md";

const BlogPost = () => {
  return (
    <div className="">
      <Navbar />
      <Terminal type={"blog"} content={<Md markdown={post} />} />
      <Footer />
    </div>
  );
};

export default BlogPost;

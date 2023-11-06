import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";
import posts from "../config/posts.ts";

const Blog = () => {
  return (
    <div className="">
      <Navbar />
      <Terminal type={"manpage"} content={posts} />
      <Footer />
    </div>
  );
};

export default Blog;

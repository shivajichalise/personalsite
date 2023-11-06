import Navbar from "../components/Navbar";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";
import posts from "../config/posts.ts";

const Blog = () => {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Terminal content={posts} />
      <Footer />
    </div>
  );
};

export default Blog;

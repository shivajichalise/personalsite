import Markdown from "markdown-to-jsx";

const Md = ({ markdown }) => {
  return (
    <div className="prose prose-invert min-w-full my-5">
      <Markdown className="">{markdown}</Markdown>
    </div>
  );
};

export default Md;

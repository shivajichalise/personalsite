import Markdown from "markdown-to-jsx";
import Code from "../components/Code";

const Md = ({ markdown }) => {
  return (
    <div className="prose prose-invert min-w-full my-5">
      <Markdown
        options={{
          overrides: {
            code: {
              component: Code,
            },
          },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
};

export default Md;

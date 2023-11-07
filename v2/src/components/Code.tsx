import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  tomorrow,
  twilight,
  dark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ children, language }) => {
  return (
    <div className="my-5">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        className="border-0"
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;

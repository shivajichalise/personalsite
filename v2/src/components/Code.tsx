import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeProps from "../types/CodeProps";

const Code = ({ children, language }: CodeProps) => {
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

import Content from "../components/Content";
import introduction from "../config/introduction.ts";

const Terminal = () => {
  return (
    <div className="flex flex-col my-5 border-solid border-2 rounded-lg bg-primary border-black h-min p-3 text-gray-200">
      <div className="flex space-x-2 my-2">
        <div className="bg-red-500 rounded-full w-3 h-3"></div>
        <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
        <div className="bg-green-500 rounded-full w-3 h-3"></div>
      </div>

      <div className="flex justify-between my-2">
        <h3 className="text-sm font-thin">VIM(1)</h3>
        <h3 className="text-sm font-thin">General Commands Manual</h3>
        <p className="text-sm font-thin">VIM(1)</p>
      </div>

      {introduction.map(({ title, description, points }) => (
        <Content title={title} description={description} points={points} />
      ))}
    </div>
  );
};

export default Terminal;

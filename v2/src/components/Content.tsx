type ContentProps = {
  title: string;
  description: string;
  points: string[];
};

const Content = ({ title, description, points }: ContentProps) => {
  return (
    <>
      <div className="mt-7">
        <h1 className="font-bold uppercase">{title}</h1>
        <p className="ml-12">{description}</p>
      </div>
    </>
  );
};

export default Content;

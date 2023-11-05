type ContentProps = {
  title: string;
  description: string;
  points: string[];
};

const Content = ({ title, description, points }: ContentProps) => {
  return (
    <div className="mt-7">
      <h1 className="text-lg font-bold uppercase">{title}</h1>
      <p className="ml-12">{description}</p>
      {points.length > 0 ? (
        <ul className="mt-5 ml-16 list-disc">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Content;

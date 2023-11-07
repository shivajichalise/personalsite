type ContentProps = {
  title: string;
  description: string;
  points: string[];
};

const Content = ({ title, description, points }) => {
  return (
    <div className="mt-7">
      <h1 className="text-lg font-bold uppercase">{title}</h1>

      {description ? <p className="mt-2 ml-12">{description}</p> : null}

      {Object.keys(points).length > 0 && points.data.length > 0 ? (
        <ul
          className={`mt-5 ml-16 ${
            points.type == "decimal"
              ? "list-decimal"
              : points.type == "disc"
              ? "list-disc"
              : "list-none"
          }`}
        >
          {points.data.map(
            ({ type, link, openInNewTab = false, title, suffix }, index) => (
              <li key={index}>
                <div className="flex flex-col my-2">
                  {type === "link" ? (
                    <a
                      href={link}
                      target={openInNewTab ? `_blank` : `_self`}
                      className="hover:underline"
                    >
                      {title}
                    </a>
                  ) : (
                    <p>{title}</p>
                  )}
                  <span className="opacity-50 text-sm">{suffix}</span>
                </div>
              </li>
            ),
          )}
        </ul>
      ) : null}
    </div>
  );
};

export default Content;

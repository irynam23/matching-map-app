export const Path = ({ pathData: { d, id, name }, onClick }) => {
  return (
    <>
      <path
        d={d}
        id={id}
        name={name}
        onClick={(e) => {
          onClick({
            x: e.clientX - 5,
            y: e.clientY - 5,
          });
        }}
      ></path>
    </>
  );
};

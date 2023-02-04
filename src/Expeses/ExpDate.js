const ExpDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();

  return (
    <div className="card bg-warning w-25  text-light m-2 ">
      <div className="btn btn-light m-1 shadow-lg ">{year}</div>
      <div className="btn">{month}</div>
      <div className="btn">{day}</div>
    </div>
  );
};

export default ExpDate;

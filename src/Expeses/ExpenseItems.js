import { useState } from "react";
import ExpDate from "./ExpDate";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    return setTitle("i am changing you");
  };
  console.log(title);
  return (
    <div>
      <div className="d-flex flex-row h3 shadow  ">
        <ExpDate date={props.date} />
        <div className="bg-info p-2 m-2 rounded  w-50">{title}</div>
        <div className="   bg-danger p-2 m-2 rounded  text-light w-25">
          {props.amount}
        </div>
        <button className="btn btn-success m-2" onClick={clickHandler}>
          change Title
        </button>
      </div>
    </div>
  );
};

export default ExpenseItems;

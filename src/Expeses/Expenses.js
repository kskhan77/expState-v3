import ExpenseItems from "./ExpenseItems";

const Expenses = (props) => {
  return (
    <div>
      <ExpenseItems
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItems
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItems
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
    </div>
  );
};

export default Expenses;

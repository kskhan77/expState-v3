import "bootstrap/dist/css/bootstrap.css";
import Expenses from "./Expeses/Expenses";
const App = () => {
  const expenses = [
    {
      title: "insurance expenses ",
      amount: 435,
      date: new Date(2021, 4, 23),
    },
    {
      title: "Heat and Electric Bills  ",
      amount: 53,
      date: new Date(2021, 4, 23),
    },
    {
      title: "rent for apartment",
      amount: 780,
      date: new Date(2021, 4, 23),
    },
  ];

  return (
    <div>
      <div className="card h1 bg-dark text-light m-2 p-2">
        Let Get Started !
      </div>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

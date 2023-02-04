import "bootstrap/dist/css/bootstrap.css";
import Expenses from "./Expeses/Expenses";
const App = () => {
  return (
    <div>
      <div className="card h1 bg-dark text-light m-2 p-2">
        Let Get Started !
      </div>
      <Expenses />
    </div>
  );
};

export default App;

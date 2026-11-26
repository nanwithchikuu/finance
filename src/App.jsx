import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseHeader from "./components/Header.jsx";
import FinanceStatus from "./components/FinanceStatus.jsx";
import Transaction from "./components/Transaction.jsx";
import Analayis from "./components/Analys_Spending.jsx";
import Add_Transaction from "./components/Add_Transaction.jsx";
const formTransaction = (event) => {
  <Add_Transaction/>
}


const App = () => {
  return (
    <>
      <ExpenseHeader formTransaction = {formTransaction}/>
      <FinanceStatus />
      <div className="main-content">
        <Analayis />
        <Transaction />
      </div>
    </>
  );
};
export default App;

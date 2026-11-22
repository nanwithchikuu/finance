import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseHeader from "./components/Header.jsx";
import FinanceStatus from "./components/FinanceStatus.jsx";
import Transaction from "./components/Transaction.jsx";
import Analayis from "./components/Analys_Spending.jsx";
const App = () => {
  return (
    <>
      <ExpenseHeader />
      <FinanceStatus />
      <div className="main-content">
        <Analayis />
        <Transaction />
      </div>
    </>
  );
};
export default App;

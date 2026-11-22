import { MdCurrencyRupee } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { IoTrendingDownSharp } from "react-icons/io5";
import { MdOutlineSavings } from "react-icons/md";

const FinanceStatus = () => {
  return (
    <>
      <div className="StatusContainer">
        <div className="status">
          <div className="content">
            <div className="firstline">
              <div className="name">Total Balance</div>
              <div className="symbol">
                <MdCurrencyRupee />
              </div>
            </div>
            <div className="income">
              <MdCurrencyRupee />
              30000
            </div>
            <div className="history">15000 from last month</div>
          </div>
        </div>
        <div className="status">
          <div className="content">
            <div className="firstline">
              <div className="name">Total Balance</div>
              <div className="symbol">
                <IoIosTrendingUp />
              </div>
            </div>
            <div className="income">
              <MdCurrencyRupee />
              30000
            </div>
            <div className="history">15000 from last month</div>
          </div>
        </div>
        <div className="status">
          <div className="content">
            <div className="firstline">
              <div className="name">Total Balance</div>
              <div className="symbol">
               <IoTrendingDownSharp color="red"/>
              </div>
            </div>
            <div className="income">
              <MdCurrencyRupee />
              30000
            </div>
            <div className="history">15000 from last month</div>
          </div>
        </div>
        <div className="status">
          <div className="content">
            <div className="firstline">
              <div className="name">Total Balance</div>
              <div className="symbol">
              <MdOutlineSavings />
              </div>
            </div>
            <div className="income">
              <MdCurrencyRupee />
              30000
            </div>
            <div className="history">15000 from last month</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinanceStatus;

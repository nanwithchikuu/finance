import { RiDeleteBin6Line } from "react-icons/ri";

const Transaction = () => {
  return (
    <>
      <div className="container-2 text-style">
        <p>Recent Transaction</p>
        <div class="trans-container ">
          <div className="right-side">
            <div className="discription">Description</div>
            <div className="data-and-food">
              <div className="catogories">food</div>
              <div className="date">NAV/19/2026</div>
            </div>
          </div>
          <div className="left-side">
            <div className="deletebutton">
              <RiDeleteBin6Line />
            </div>
            <div className="spending">-1000</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Transaction;

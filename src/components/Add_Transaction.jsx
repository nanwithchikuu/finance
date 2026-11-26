import { MdMargin } from "react-icons/md";
const Add_Transaction = () => {
  return (
    <>
      <htmlForm>
        <center>


          <div className="row g-3 ">
            <h1 className="form-title">Add Transaction</h1>
            <div className="first-container">
              <div className="">
                <label htmlFor="type" className="htmlForm-label size1 form-label ">Type</label>
                <select className="dropdown-effect size1" id="type">
                  <option value="Expense">Expense</option>
                  <option value="Income"> Income</option>
                </select>
              </div>

              <div className="">
                <label htmlFor="lastName" className="htmlForm-label size1 form-label">Amount</label>
                <input type="text" className="htmlhtmlForm-control" id="lastName" placeholder="0.00₹" />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="htmlForm-label form-label size">Description <span>
              </span></label>
              <input type="text" className="htmlForm-control size" id="text" placeholder="Enter Description " />
              <div className="invalid-feedback ">
                Enter Description
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="htmlForm-label size  form-label">Category</label>
              <select className="htmlForm-control size" id="address">
                <option value="Housing">Housing</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Utilites">Utlities</option>
                <option value="Healthcare">Healthcare</option>
                <option value="shopping">Shopping</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="htmlForm-label form-label size">Date <span>
              </span></label>
              <input type="date" className="htmlForm-control size" id="address2" placeholder="" />
            </div>
            <div className="both-button">

              <button type="button" className="btn btn-outline-secondary size1">
                 Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary transection size1"
                onClick={() => navigate("/transaction")}
              >
                 Add Transaction
              </button>
            </div>


          </div>
        </center>
      </htmlForm>
    </>
  )
};

export default Add_Transaction;
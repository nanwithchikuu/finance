import { CgProfile } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { PiSignOutBold } from "react-icons/pi";
const ExpenseHeader = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4 logo-text">Finance Tracker</span>
          </a>
          <div className="buttonContainer">
            <ul>
              <li>
                <button type="button" className="btn btn-outline-secondary">
                  <CgProfile /> Profile
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-primary transection">
                  <FiPlus /> Add Transaction
                </button>
              </li>
              <li>
                <button type="button" className="btn btn-outline-secondary">
                  <PiSignOutBold /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};
export default ExpenseHeader;

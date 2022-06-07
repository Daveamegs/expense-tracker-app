import "./App.css";
import BigExpenses from "./component/BigExpenses";
import Categories from "./component/Categories";
import CategoriesText from "./component/CategoriesText";
import Navbar from "./component/Navbar";
import ProfileBar from "./component/ProfileBar";
import Wallet from "./component/Wallet";

function App() {
  return (
    <div className="main--container">
      <div className="main--section">
        <Navbar />
        <Wallet />
        <div className="overview">
          <h2 className="overview--recent-transactions">Recent Transactions</h2>
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </div>

        <BigExpenses />
      </div>
      <div className="sidebar">
        <ProfileBar />
        <CategoriesText />
        <div className="categories-area">
          <Categories />
          <Categories />
          <Categories />
        </div>
      </div>
    </div>
  );
}

export default App;

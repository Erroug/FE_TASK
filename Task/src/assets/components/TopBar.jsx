import Searchbar from "./Searchbar";
import Profile from "./Profile";

const TopBar = () => {
  return (
    <div
      className="flex items-center justify-between px-6 py-4 w-full transition-all duration-300"
      style={{ backgroundColor: "#A6D6AE" }}
    >
      <h1 className="text-3xl font-poppins font-semibold text-black">Dashboard</h1>
      <div className="flex items-center gap-6">
        <Searchbar />
        <Profile />
      </div>
    </div>
  );
};

export default TopBar;
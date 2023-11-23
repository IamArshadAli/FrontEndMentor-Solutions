/* eslint-disable react/prop-types */
import { logo } from "../assets/images";

const Header = ({ balance }) => {
  return (
    <header className="bg-SoftRed text-VeryPaleOrange flex w-[22rem] justify-between rounded-xl p-6 md:w-96 md:rounded-2xl">
      <div>
        <p className="text-Cream mb-1 text-sm font-light">My balance</p>
        <h1 className="text-2xl font-bold">${balance}</h1>
      </div>
      <img src={logo} alt="Logo" className="w-16" />
    </header>
  );
};

export default Header;

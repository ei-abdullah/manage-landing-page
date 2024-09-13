

import Button from "./Button";

function NavBar({ toggleMenu, onToggleMenu }) {
  return (
    <div className="relative overflow-x-clip">
      <img
        src="./images/bg-tablet-pattern.svg"
        alt="illustration"
        className="absolute -right-40 -top-60 -z-10"
      />
      <nav className="flex justify-between items-center w-full xl:w-4/5 px-4 m-auto">
        <img src="./images/logo.svg" alt="manage-logo" />
        <ul className="hidden lg:flex justify-evenly items-center gap-8 text-blue font-normal ">
          <li className=" transition-all cursor-pointer hover:text-darkGrayishBlue">
            Pricing
          </li>
          <li className=" transition-all cursor-pointer hover:text-darkGrayishBlue">
            Product
          </li>
          <li className=" transition-all cursor-pointer hover:text-darkGrayishBlue">
            About Us
          </li>
          <li className=" transition-all cursor-pointer hover:text-darkGrayishBlue">
            Careers
          </li>
          <li className=" transition-all cursor-pointer hover:text-darkGrayishBlue">
            Community
          </li>
        </ul>
        <Button className="hidden lg:block ">Get Started</Button>

        <img
          src={toggleMenu ? "./images/icon-close.svg" : "./images/bars-solid.svg"}
          alt={toggleMenu ? "close-icon" : "hamburger-icon"}
          className="size-8 lg:hidden cursor-pointer navbar-toggle"
          onClick={onToggleMenu}
        />

      </nav>
    </div>
  );
}

export default NavBar;

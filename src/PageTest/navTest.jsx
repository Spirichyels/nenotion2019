import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const NavTest = () => {
  return (
    <div>
      <NavLink to="/page1">Page 1</NavLink>
      <NavLink to="/page2">Page 2</NavLink>
    </div>
  );
};

export default NavTest;

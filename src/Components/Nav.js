//imported hooks
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Nav = () => {
  const checkboxRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 9) {
        checkboxRef.current.checked = true;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" ref={checkboxRef} />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <Link to={`/`}>
            <li className="menu__item">Home</li>
          </Link>
          <Link to={`/classes`}>
            <li className="menu__item">Classes</li>
          </Link>
          <Link to={`/tierlist`}>
            <li className="menu__item">Buffer Tier List</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

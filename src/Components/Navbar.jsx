import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelection = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setDropdownOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const LinkClass = ({ isActive }) =>
    isActive
      ? "font-medium text-base text-Orange"
      : "hover:text-Orange ease-in-out duration-300 font-medium text-base text-white";

  return (
    <section
      className={`container mx-auto p-5 pt-8 bg-Black lg:bg-transparent`}
    >
      <div className={` flex flex-row justify-between items-center`}>
        <div className="">
          <p className="text-white font-bold text-3xl">Крылья Эфиопии</p>
          <span className="block text-Orange text-base font-semibold">
          Агентство путешествий
          </span>
        </div>
        <div className="hidden lg:flex lg:flex-row justify-between gap-12">
          <NavLink className={LinkClass} to="/">
            Главная страница
          </NavLink>
          {/* <NavLink className={LinkClass} to="/About">
            О нас
          </NavLink> */}

          <div className="flex items-center justify-between gap-2">
            <NavLink className={LinkClass} to="/Destination">
              Наши туры
            </NavLink>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
            >
              {dropdownOpen ? (
                <IoIosArrowUp
                  className="text-white font-bold cursor-pointer"
                  size={16}
                />
              ) : (
                <IoIosArrowDown
                  className="text-white font-bold cursor-pointer"
                  size={16}
                />
              )}
            </button>

            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="fixed top-24 transform -translate-x-[20%] w-52 bg-white text-black shadow-lg rounded-lg overflow-hidden z-50"
              >
                <NavLink
                  onClick={handleSelection}
                  to="/AddisIT"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Маршрут по Аддис
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/Addis1"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Энтото
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/Addis"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Однодневный маршрут по Аддис
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/Axum"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Древний Аксум
                </NavLink>
                <NavLink
                  onClick={handleSelection}
                  to="/ArbaMinch"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Арба Минч
                </NavLink>
              </motion.div>
            )}
          </div>

          <NavLink className={LinkClass} to="/Contact">
            Контакты
          </NavLink>
        </div>

        {/* Mobile Navigation */}

        <div className="lg:hidden">
          <button
            className="text-Orange text-2xl "
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>

          <div
            className={`${
              toggle ? "block" : "hidden"
            } z-40 fixed top-28 w-full left-0 bg-Black`}
          >
            <div className="flex flex-col mx-5 py-6 space-y-4 text-base text-white">
              <NavLink className={LinkClass} to="/">
                Главная страница
              </NavLink>
              {/* <NavLink className={LinkClass} to="/About">
                О нас
              </NavLink> */}

              <div className="flex items-center gap-2">
                <NavLink className={LinkClass} to="/Destination">
                  Наши туры
                </NavLink>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                >
                  {dropdownOpen ? (
                    <IoIosArrowUp
                      className="text-white font-bold cursor-pointer"
                      size={16}
                    />
                  ) : (
                    <IoIosArrowDown
                      className="text-white font-bold cursor-pointer"
                      size={16}
                    />
                  )}
                </button>

                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-24 transform -translate-x-[20%] w-52 bg-white text-black shadow-lg rounded-lg overflow-hidden z-50"
                  >
                    <NavLink
                      onClick={handleSelection}
                      to="/AddisIT"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Маршрут по Аддис
                    </NavLink>
                    <NavLink
                      onClick={handleSelection}
                      to="/Addis1"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Энтото
                    </NavLink>
                    <NavLink
                      onClick={handleSelection}
                      to="/Addis"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Однодневный маршрут по Аддис
                    </NavLink>
                    <NavLink
                      onClick={handleSelection}
                      to="/Axum"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Древний Аксум
                    </NavLink>
                    <NavLink
                      onClick={handleSelection}
                      to="/ArbaMinch"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Арба Минч
                    </NavLink>
                  </motion.div>
                )}
              </div>

              <NavLink className={LinkClass} to="/Contact">
                Контакты
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

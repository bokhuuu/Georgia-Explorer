import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import styled from "styled-components";

const AppNavigation = () => {
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(true);

  const handleNavigationCollapse = () =>
    setIsNavigationCollapsed(!isNavigationCollapsed);
  const closeNavigation = () => setIsNavigationCollapsed(true);

  const AppNavigationLinkList = [
    { to: "/", label: "Home" },
    { to: "discovery", label: "Discovery" },
    { to: "explore", label: "Explore" },
    { to: "taste", label: "Taste" },
    { to: "leisure", label: "Leisure" },
    { to: "wellness", label: "Wellness" },
  ];

  return (
    <motion.nav className="navbar navbar-expand-md mb-1 mt-md-2 mb-md-3 ms-2 ms-md-5">
      <motion.div
        className="container navbar-container"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <button
          className="navbar-toggler mt-2 mb-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded={!isNavigationCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavigationCollapse}
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div
          className={`row ms-1 ms-md-5 collapse navbar-collapse ${
            isNavigationCollapsed ? "" : "show"
          }`}
        >
          <motion.ul
            className={`col-md navbar-nav ${
              isNavigationCollapsed
                ? "gap-4"
                : "pt-3 pt-md-1 pb-0 flex-row flex-wrap gap-3 "
            }`}
            onClick={closeNavigation}
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
          >
            {AppNavigationLinkList.map((AppNavigationLink) => (
              <motion.li
                className="nav-item "
                key={AppNavigationLink.to}
                variants={navItemVariants}
                whileHover="hover"
              >
                <StyledNavLink className="nav-link" to={AppNavigationLink.to}>
                  {AppNavigationLink.label}
                </StyledNavLink>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

const navbarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scaleY: [1, 1.5, 1],
    transition: { duration: 2.5 },
  },
};
const navItemVariants: Variants = {
  hover: {
    scale: 1.2,
    x: 7,
    y: -7,
    textShadow: "0px 0px 20px rgb(255,255,255)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: 1,
      repeatType: "mirror",
    },
  },
};

const StyledNavLink = styled(NavLink)`
  color: rgb(12, 33, 151);
  margin-top: -10px;
  border-bottom: solid white 2px;
  font-size: 17px;
`;

export default AppNavigation;

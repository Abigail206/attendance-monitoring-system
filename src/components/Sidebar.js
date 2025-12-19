import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { IconContext } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as tbicons from "react-icons/tb";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import logo from "../assets/logo.jpeg";
import Logout from "../pages/Logout";

const lightTheme = {
  navbarBackground: "linear-gradient(to bottom, #FBC390, #D279EE)",
  sidebarBackground: "linear-gradient(to bottom,#D279EE, #FBC390, #FBC390, #D279EE)",
  textColor: "black",
};

const darkTheme = {
  navbarBackground: "black",
  sidebarBackground: "black",
  textColor: "white",
  headingColor: "white",
  iconColor:"white",
};

const Nav = styled.div`
  background: ${({ theme }) => theme.navbarBackground};
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(NavLink)`
  margin-left: 1rem;
  font-size: 1rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LogoutIcon = styled(Link)`
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 1rem; 
  color:${({ theme }) => theme.textColor};
  text-decoration: none;
`;

const ThemeToggleIcon = styled.div`
  font-size: 25px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 35rem;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  margin-top:5px;

   svg {
    color: ${({ theme }) => theme.iconColor};
  }
`;



const SidebarNav = styled.nav`
  background: ${({ theme }) => theme.sidebarBackground};
  width: ${({ sidebar }) => (sidebar ? "250px" : "80px")};
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20;
  left: 0;
  transition: width 0.3s ease;
  z-index: 10;
  overflow-y: auto;
  z-index: ${(props) => (props.isModalOpen ? 1000 : 1)};
  opacity: ${(props) => (props.isModalOpen ? 0.5 : 1)};
`;

const SidebarWrap = styled.div`
  width: 100%;
  z-index: ${(props) => (props.isModalOpen ? 1000 : 1)};
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  color: ${({ theme }) => theme.textColor};
  justify-content: ${({ sidebar }) => (sidebar ? "space-between" : "center")};
  align-items: center;
  padding: ${({ sidebar }) => (sidebar ? "20px" : "20px 0")};
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  background: ${({ active }) => (active ? "#F5DFFB" : "transparent")};
  border-left: ${({ active }) => (active ? "4px solid white" : "none")};

  &:hover,
  &.active {
    color: white;
    text-decoration: underline;
    border-left: 4px;
    cursor: pointer;
  }

  span {
    display: ${({ sidebar }) => (sidebar ? "inline" : "none")};
    margin-left: ${({ sidebar }) => (sidebar ? "16px" : "0")};
  }
`;

const DropdownLink = styled(NavLink)`
  height: 60px;
  padding-left: ${({ sidebar }) => (sidebar ? "3rem" : "0")};
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  font-size: 18px;

  &:hover,
  &.active {
    color: white;
    text-decoration: underline;
    border-left: 4px solid white;
    cursor: pointer;
  }

  span {
    display: ${({ sidebar }) => (sidebar ? "inline" : "none")};
    margin-left: ${({ sidebar }) => (sidebar ? "16px" : "0")};
  }
`;

const AccordionItem = styled.div`
  border: none;
`;

const AccordionButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: ${({ sidebar }) => (sidebar ? "20px" : "20px 0")};
  text-align: left;
  font-size: 20px;
  display: flex;
  justify-content: ${({ sidebar }) => (sidebar ? "space-between" : "center")};
  align-items: center;
  color: ${({ theme }) => theme.textColor};

  &:hover {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }

  span {
    display: ${({ sidebar }) => (sidebar ? "inline" : "none")};
    margin-left: ${({ sidebar }) => (sidebar ? "16px" : "0")};
  }
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false); // Add state for controlling the modal
  const [theme, setTheme] = useState(lightTheme); // State for theme
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();

  const showSidebar = () => setSidebar(!sidebar);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const logoutHandler = () => {
    // Your logout logic here
    console.log("User logged out");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <IconContext.Provider value={{ color: theme.iconColor }}>
          <Nav>
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} style={{ color: theme.textColor }} />
            </NavIcon>
            <div className="logo">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "45px",
                  height: "45px",
                  marginLeft: "20px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <h1
              style={{
                textAlign: "center",
                marginLeft: "10px",
                color: theme.headingColor,
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: "60px",
              }}
            >
              MOTHERSON
            </h1>
            {/* <search className="search">
            <FaIcons.FaSearch  /> 
            </search> */}
            <ThemeToggleIcon onClick={toggleTheme}>
              {theme === lightTheme ? <AiIcons.AiFillMoon /> : <AiIcons.AiFillSun />}
            </ThemeToggleIcon>
            <twitter className="tweet">
            <FaIcons.FaTwitter  />
            </twitter>
            <linkedin className="linked">
            <FaIcons.FaLinkedin  /></linkedin>
            <LogoutIcon to="/#" onClick={() => setShowModal(true)} sidebar={sidebar}>
              <tbicons.TbLogout2 /> Logout
            </LogoutIcon>
          
          </Nav>

          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              {SidebarData.map((item, index) => (
                <AccordionItem key={index}>
                  {item.subNav ? (
                    <>
                      <AccordionButton
                        sidebar={sidebar}
                        onClick={() => toggleAccordion(index)}
                      >
                        <div>
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                        <span>
                          {activeIndex === index
                            ? item.iconOpened
                            : item.iconClosed}
                        </span>
                      </AccordionButton>
                      {activeIndex === index && sidebar && (
                        <div className="accordion-body">
                          {item.subNav.map((subItem, subIndex) => (
                            <DropdownLink
                              to={subItem.path}
                              key={subIndex}
                              activeClassName="active"
                              sidebar={sidebar}
                            >
                              {subItem.icon}
                              <span>{subItem.title}</span>
                            </DropdownLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <SidebarLink
                      to={item.path}
                      activeClassName="active"
                      sidebar={sidebar}
                    >
                      <div>
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                    </SidebarLink>
                  )}
                </AccordionItem>
              ))}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
        <Logout showModal={showModal} setShowModal={setShowModal} logoutHandler={logoutHandler} />
      </>
    </ThemeProvider>
  );
};

export default Sidebar;

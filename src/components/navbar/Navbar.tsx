import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import iconArrowLeft from "../../assets/svg/icon-arrow-left.svg";
import iconArrowRight from "../../assets/svg/icon-arrow-right.svg";
import { Container, Flex } from "../common";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Container fullHeight>
        <Flex justify="between" align="center">
          <>
            <div className="navbar__logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <button className="navbar__btn" onClick={() => {}}>
              <img src={iconArrowLeft} alt="" />
              <img src={iconArrowRight} alt="" />
            </button>
          </>
        </Flex>
      </Container>
    </nav>
  );
};

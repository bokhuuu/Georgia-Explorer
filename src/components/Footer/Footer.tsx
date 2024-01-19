import styled from "styled-components";
import IconButtonsBox from "../IconButtonsBox/IconButtonsBox";
import LanguageSelector from "../../i18next/LanguageSelector";

const Footer = () => {
  return (
    <StyledFooter className="container-fluid d-md-none fixed-bottom d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col d-flex">
          <IconButtonsBox />
          <LanguageSelector />
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: fixed;
  height: 50px;
  bottom: 1px;
  z-index: 1000;
  background-color: #9b9bcc;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export default Footer;

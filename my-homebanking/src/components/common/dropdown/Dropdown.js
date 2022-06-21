import { useState } from "react";
import styled from "styled-components";
import { primaryColor } from "../../../theme/colors/colors";
import { AccountTypeLogo, LogoOnAccountTypeButton } from "../accountCard/styleAccountCard";
import logo from "../../../assets/logo.svg";
import { ParagraphMedium3, ParagraphSemibold2 } from "../../../theme/paragraph/paragraph";
const WrapperDropdown = styled.div`
  display: flex;
  min-height: 78px;
  flex-wrap: wrap;
  position: relative;
`;

const HeaderDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  background: ${primaryColor.primary50};
  border: 1px solid ${primaryColor.primary500};
  border-radius: 8px;
  padding: 0 20px;
`;

const HeaderContent = styled.div`
display: flex;
align-items: center;
gap: 14px;
`
const AccountInfoCantainer = styled.div`
display: flex;
flex-direction: column;
`

const DropdownList = styled.ul`
  position: absolute;
  top: 70px;
  background: #fff;
  z-index: 100;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  padding: 0;
  margin: 0;
  width: 100%;
  margin-top: 20px;
`;

const Dropdown = ({ accountNumber, currency }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <WrapperDropdown className="dd-wrapper">
      <HeaderDropdown
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeypress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <HeaderContent>
        <AccountTypeLogo>
          <LogoOnAccountTypeButton src={logo} />
        </AccountTypeLogo>
        <AccountInfoCantainer>
        <ParagraphSemibold2>{currency.currencyText}</ParagraphSemibold2>
        <ParagraphMedium3>{accountNumber}</ParagraphMedium3>
        </AccountInfoCantainer>

        </HeaderContent>
        <div className="dd-header__action">
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </HeaderDropdown>
      {/*  */}

      {open && (
        <DropdownList>
          <li>{accountNumber}</li>
        </DropdownList>
      )}
    </WrapperDropdown>
  );
};

export default Dropdown;

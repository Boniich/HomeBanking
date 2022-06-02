import React, { useState } from "react";
import styled from "styled-components";
import { neutralColor } from "../../../../theme/colors/colors";
import { ParagraphMedium3 } from "../../../../theme/paragraph/paragraph";
import { shadownMD, shadownXS } from "../../../../theme/shadown/shadown";
import { SecondaryNav } from "../../../common/navs/secondaryNav/SecondaryNav";

const TransactionSection = styled.section`
  display: flex;
  justify-content: center;
`;

const TransactionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const AmountBox = styled.div`
  width: 312px;
  height: 211px;
  box-shadow: ${shadownXS};
  border-radius: 16px;
  background: #fff;
  margin: 40px 0 32px 0;

  @media screen and (min-width: 744px) {
    width: 404px;
    height: 271px;
    box-shadow: ${shadownMD};
    border-radius: 20px;
  }
`;

const AmountContent = styled.div`
  height: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${ParagraphMedium3} {
    color: ${neutralColor.neutral500};
  }
`;

const AmountInput = styled.input`
  padding: 0;
  border: none;
  outline: none;
  width: 100%;
  height: 43px;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.02px;
  color: ${neutralColor.neutral800};
  ::placeholder {
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.02px;
    color: ${neutralColor.neutral400};
  }

  @media screen and (min-width: 744px) {
    height: 58px;
    font-size: 48px;

    ::placeholder {
      font-size: 48px;
    }
  }
`;

export const TransactionToMyAccount = () => {
  const shortNavText = "A cuenta propia";
  const largeNavText = "Transferencia a cuenta propia";
  const [amount, setAmount] = useState(0);

  console.log(amount);

  return (
    <>
      <SecondaryNav shortNavText={shortNavText} largeNavText={largeNavText} />
      <TransactionSection>
        <TransactionContent>
          <AmountBox>
            <AmountContent>
              <AmountInput
                type="number"
                name="amount"
                placeholder="00.00"
                onChange={(e) =>
                  setAmount({ ...amount, amount: e.target.value })
                }
              />

              <ParagraphMedium3>Monto a enviar</ParagraphMedium3>
            </AmountContent>
          </AmountBox>
        </TransactionContent>
      </TransactionSection>
    </>
  );
};

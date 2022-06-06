import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../../theme/buttons/buttons";
import { neutralColor } from "../../../../theme/colors/colors";
import {
  ParagraphMedium3,
  ParagraphSemibold2,
} from "../../../../theme/paragraph/paragraph";
import { shadownMD, shadownXS } from "../../../../theme/shadown/shadown";
import { AccountCard } from "../../../common/accountCard/AccountCard";
import { SecondaryNav } from "../../../common/navs/secondaryNav/SecondaryNav";

const TransactionForm = styled.form`
  display: flex;
  justify-content: center;
`;

const TransactionContent = styled.div`
  display: flex;
  flex-direction: column;

  ${Button} {
    margin-bottom: 20px;
  }

  .disable {
    background-color: ${neutralColor.neutral200};
    color: ${neutralColor.neutral400};
    cursor: no-drop;
  }
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

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (min-width: 744px) {
    height: 58px;
    font-size: 48px;

    ::placeholder {
      font-size: 48px;
    }
  }
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 96px;
  ${ParagraphSemibold2} {
    color: ${neutralColor.neutral600};
    margin-bottom: 16px;
  }
`;

export const TransactionToMyAccount = () => {
  const shortNavText = "A cuenta propia";
  const largeNavText = "Transferencia a cuenta propia";
  const [amount, setAmount] = useState({ amount: 0 });
  const [buttonIsDisable, setButtonIsDisable] = useState(true);
  console.log(amount);

  const handleKeyUp = () => {
    // button turn off if the user enter a point.
    // it has a easy solution but first i have to test another thing
    amount.amount.length !== 0
      ? setButtonIsDisable(false)
      : setButtonIsDisable(true);
  };

  return (
    <>
      <SecondaryNav shortNavText={shortNavText} largeNavText={largeNavText} />
      <TransactionForm>
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
                onKeyUp={handleKeyUp}
              />

              <ParagraphMedium3>Monto a enviar</ParagraphMedium3>
            </AmountContent>
          </AmountBox>
          <AccountContainer>
            <div>
              <ParagraphSemibold2>Cuenta de cargo</ParagraphSemibold2>
              <AccountCard />
            </div>
            <div>
              <ParagraphSemibold2>Cuenta de destino</ParagraphSemibold2>
              <AccountCard />
            </div>
          </AccountContainer>
          <Button
            className={`${buttonIsDisable === true ? "disable" : ""}`}
            disabled={buttonIsDisable}
          >
            Confirmar transferencia
          </Button>
        </TransactionContent>
      </TransactionForm>
    </>
  );
};

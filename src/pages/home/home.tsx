import React, { useState, ChangeEvent } from "react";
import Input from "components/input";
import Button from "components/button";
import { IStateFromProps } from "./index";
import { InputWrapper, Wrapper } from "./styles";

const Home = ({ addItem, items }: IStateFromProps) => {
  const [value, setValue] = useState<string>("");

  const update = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    addItem(value);
    return setValue("");
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input value={value} onChange={update} />
        <Button style={{ marginLeft: "-50px" } as React.CSSProperties} onClick={onClick}>Add Item</Button>
      </InputWrapper>
    </Wrapper >
  );
};

export default Home;
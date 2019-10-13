import React from "react";
import Button from "../src/components/atoms/Button";
import Input from "../src/components/atoms/Input";

interface Props {}

function index(): Props {
  return (
    <div>
      <Button>결제</Button>
      <Input />
    </div>
  );
}

export default index;

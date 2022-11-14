import React from "react";
import InsertStyle from "./Partials/Style.module.scss";
import InsertForm from "./Partials/InsertForm";

const InsertTest = () => {
  return (
    <div className={InsertStyle.formContainer}>
      <div>
        <InsertForm />
      </div>
    </div>
  );
};

export default InsertTest;

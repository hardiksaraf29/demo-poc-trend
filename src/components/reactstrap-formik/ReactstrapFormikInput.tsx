import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ReactstrapFormikInput = ({
  field: { ...fields },
  form: { touched, errors, setFieldTouched },
  ...props
}: any) => {
  const [isFocused, setFocus] = useState(false);
  const { id, className, is, ...rest } = props;
  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
    setFieldTouched(fields.name, true);
  };

  let groupClassName = "";
  if (isFocused || fields.value) {
    groupClassName = "value-exists";
  }
  if (className) {
    groupClassName = groupClassName + " " + className;
  }

  return (
    <Form.Group controlId={id} className={groupClassName}>
      {props.label && (
        <Form.Label className={"float-label"} htmlFor={fields.id}>
          {props.label}
        </Form.Label>
      )}
      <Form.Control
        as={is}
        {...rest}
        {...fields}
        isInvalid={Boolean(touched[fields.name] && errors[fields.name])}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={
          Boolean(touched[fields.name] && errors[fields.name]) && "error"
        }
      />
      {touched[fields.name] &&
        errors[fields.name] &&
        errors[fields.name] !== "required" && (
          <Form.Control.Feedback
            className="pb-0 error invalid-feedback d-block"
            type="invalid"
          >
            {errors[fields.name]}
          </Form.Control.Feedback>
        )}
        
    </Form.Group>
  );
};
export default ReactstrapFormikInput;

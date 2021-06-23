import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { ReactstrapInput } from "../../components/reactstrap-formik";
import { Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { contactUsAction } from "../../store/actions/support.actions";
import { ContactUsValidationSchema } from "../../validations/contact-us-form/contactUs.validations";
const ContactModal = (props: any) => {
  const dispatchAction = useDispatch();
  const { show, onClose } = props;
  const handleCloseShareModalPopup = () => onClose();
  const handleSubmit = (values: any, { resetForm }) => {
    const { name, email, message, phoneNumber, companyName } = values;
    const dataPayload = {
      name,
      email,
      message,
      phoneNumber,
      companyName,
    };
    dispatchAction(
      contactUsAction(dataPayload, () => {
        // reset form after successfully submitting form
        resetForm();
        onClose();
      })
    );
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={handleCloseShareModalPopup}
        centered
        size="xl"
        className="contact-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            LET'S CONNECT
            <p>
              We love to help brands that want to help consumers shop easier!
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            enableReinitialize
            initialValues={{
              name: "",
              email: "",
              message: "",
              phoneNumber: "",
              companyName: "",
            }}
            validationSchema={ContactUsValidationSchema()}
            onSubmit={handleSubmit}
          >
            {(formProps) => {
              const { handleSubmit } = formProps;
              return (
                <Form
                  className="form-primary-info row"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <div className="col-md-6">
                    <Field
                      className="rounded-form-control"
                      name="name"
                      id="name"
                      placeholder="Name"
                      maxLength={50}
                      component={ReactstrapInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <Field
                      className="rounded-form-control"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      maxLength={100}
                      component={ReactstrapInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <Field
                      className="rounded-form-control"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Telephone"
                      maxLength={20}
                      component={ReactstrapInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <Field
                      className="rounded-form-control"
                      name="companyName"
                      id="companyName"
                      placeholder="Company name"
                      maxLength={50}
                      component={ReactstrapInput}
                    />
                  </div>
                  <div className="col-12">
                    <Field
                      className="rounded-form-control"
                      name="message"
                      id="message"
                      placeholder="Message here"
                      is="textarea" // `as` is reserved in typescript lol
                      rows={5}
                      component={ReactstrapInput}
                      maxLength={500}
                    />
                  </div>
                  <div className="col-12 text-center">
                    <Button
                      className="btn btn-skyblue btn-large rounded"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactModal;

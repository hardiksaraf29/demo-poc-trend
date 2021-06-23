import * as Yup from "yup";
const EmailRegularExpression = new RegExp(/^(?=.{1,64}@)(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(?=.{1,255}$)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export type IContactUsFormField = {
    name: string;
    email: string;
    message: string;
    phoneNumber: string;
    companyName: string;
}
export const ContactUsValidationSchema = () => {
    return Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string()
            .matches(EmailRegularExpression, "Invalid Email")
            .required("Required")
            .max(100),
        // phoneNumber: Yup.string().required("Required"),
        phoneNumber: Yup.string()
            .required("Required")
            .matches(phoneRegExp, 'Phone number is not valid'),
        companyName: Yup.string().required("Required"),
        message: Yup.string().required("Required"),
    });
};
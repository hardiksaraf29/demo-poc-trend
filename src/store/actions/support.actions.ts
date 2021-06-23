import { contactUs } from "../../services/support.service"
import { RequestContactUs } from "../../types/requests";

export const contactUsAction = (payload: RequestContactUs, onSuccessCallback?: Function) => (dispatchAction: any) => {
    contactUs(payload)
        .then((response: any) => {
            if (onSuccessCallback && typeof onSuccessCallback === "function") {
                onSuccessCallback();
            }
   
        })
        .catch((error: any) => {
            console.log(error);
        })
}
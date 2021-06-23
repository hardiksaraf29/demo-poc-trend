
import { registerEmail } from "../../services/retailer-subscription.service";
import RetailerSubscriptionActions from "../../types/actions/RetailerSubscription.Actions";
import { RequestRegisterEmail } from "../../types/requests"
export const show400ErrorAlert = (error) => {
    if (error.response.data.status === 400) {
    } else console.log(error);
};
export const showThankYouMessageAction = () => (dispatchAction: any) => {
    dispatchAction({
        type: RetailerSubscriptionActions.SHOW_THANK_YOU_MESSAGE,
    });
};
export const hideThankYouMessageAction = () => (dispatchAction: any) => {
    dispatchAction({
        type: RetailerSubscriptionActions.HIDE_THANK_YOU_MESSAGE,
    });
};
export const registerEmailAction = (payload: RequestRegisterEmail, onSuccessCallback?: Function) =>
    (dispatchAction: any) => {
        registerEmail(payload)
            .then((response: any) => {
                dispatchAction({
                    type: RetailerSubscriptionActions.SUCCESS_REGISTER_EMAIL,
                });
                dispatchAction(showThankYouMessageAction())
                if (onSuccessCallback && typeof onSuccessCallback === "function") {
                    onSuccessCallback();
                }
            })
            .catch((error: any) => {
                show400ErrorAlert(error);
            })
    }
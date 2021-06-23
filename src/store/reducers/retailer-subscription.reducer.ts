import RetailerSubscriptionActions from "../../types/actions/RetailerSubscription.Actions";

const initialState: any = {
    // register email state
    isRegisteringEmail: false,
    // thank you pop up state
    showThankYouMessage: false,
};

export const RetailerSubscriptionReducer = (
    state = initialState,
    action: any
): typeof initialState => {
    switch (action.type) {
        case RetailerSubscriptionActions.REQUEST_REGISTER_EMAIL:
            return {
                ...state,
                isRegisteringEmail: true,
            };
        case RetailerSubscriptionActions.SUCCESS_REGISTER_EMAIL:
        case RetailerSubscriptionActions.FAILURE_REGISTER_EMAIL:
            return {
                ...state,
                isRegisteringEmail: false,
            };
        // thank you message states
        case RetailerSubscriptionActions.SHOW_THANK_YOU_MESSAGE:
            return {
                ...state,
                showThankYouMessage: true,
            };
        case RetailerSubscriptionActions.HIDE_THANK_YOU_MESSAGE:
            return {
                ...state,
                showThankYouMessage: false,
            };
        default:
            return state;
    }
};

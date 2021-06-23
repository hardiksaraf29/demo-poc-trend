import NewsActions from "../../types/actions/News.Actions";

export const initialState = {
  isLoadingNews: true,
  tendingNews: [],
};

export const NewsReducer = (
  state = initialState,
  action: any
): any => {
  switch (action.type) {
    case NewsActions.GET_TRENDING_NEWS_REQUEST:
      return {
        ...state,
        isLoadingNews: true,
      };
    case NewsActions.GET_TRENDING_NEWS: {
      return {
        ...state,
        isLoadingNews: false,
        tendingNews:action.payload,
      };
    }
    case NewsActions.GET_TRENDING_NEWS_FAILURE:
      return {
        ...state,
        isLoadingInspirations: false,
      };
    default:
      return state;
  }
};

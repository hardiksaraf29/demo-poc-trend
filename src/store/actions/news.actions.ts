import { getNews } from "../../services/news.service";
import NewsActions from "../../types/actions/News.Actions";
    export const getTrendingNews = () => (
        dispatchAction: any
      ) => {
        dispatchAction({
          type: NewsActions.GET_TRENDING_NEWS_REQUEST,
        });
        // setTimeout(() => {
        getNews().then((response: any) => {

            dispatchAction({
              type: NewsActions.GET_TRENDING_NEWS,
              payload: response.data.data,
            });
          })
          .catch((error) => {
            dispatchAction({
              type: NewsActions.GET_TRENDING_NEWS_FAILURE,
            });
          });
        // }, 3000);
      };
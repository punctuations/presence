export interface TweetResponse {
  data: {
    id: string;
    public_metrics: {
      retweet_count: number;
      reply_count: number;
      like_count: number;
      quote_count: number;
    };
    text: string;
  } | null;
  errors:
    | [
        {
          parameters: {
            id: [string];
          };
          message: string;
        }
      ]
    | null;
  title: string | null;
  detail: string | null;
  type: string | null;
}

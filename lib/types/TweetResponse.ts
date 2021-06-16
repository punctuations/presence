export interface TweetResponse {
  data: {
    id: string;
    text: string;
    author_id: string;
    public_metrics: {
      retweet_count: number;
      reply_count: number;
      like_count: number;
      quote_count: number;
    };
  } | null;
  includes: {
    users: [
      {
        profile_image_url: string;
        username: string;
        name: string;
        id: string;
      }
    ];
  };
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

export interface TwitterResponse {
  data: {
    id: string;
    verified: string;
    protected: string;
    profile_image_url: string;
    created_at: string;
    pinned_tweet_id: string;
    location: string | null;
    username: string;
    url: string | null;
    name: string;
    description: string;
    public_metrics: {
      followers_count: string;
      following_count: string;
      tweet_count: string;
      listed_count: string;
    };
  };
  includes: {
    tweets: [
      {
        created_at: string;
        id: string;
        text: string;
        public_metrics: {
          retweet_count: number;
          reply_count: number;
          like_count: number;
          quote_count: number;
        };
      }
    ];
  } | null;
  errors:
    | [
        {
          resource_id: string;
          parameter: string;
          resource_type: string;
          section: string;
          title: string;
          value: string;
          detail: string;
          type: string;
        }
      ]
    | null;
}

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

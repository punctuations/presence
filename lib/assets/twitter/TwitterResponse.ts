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
      follower_count: string;
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

export interface YoutubeChannelResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items:
    | [
        {
          kind: string;
          etag: string;
          id: string;
          snippet: {
            title: string;
            description: string;
            customUrl: string;
            publishedAt: string;
            thumbnails: {
              default: {
                url: string;
                width: number;
                height: number;
              };
              medium: {
                url: string;
                width: number;
                height: number;
              };
              high: {
                url: string;
                width: number;
                height: number;
              };
            };
            localized: {
              title: string;
              description: string;
            };
            country: string;
          };
          statistics: {
            viewCount: string;
            subscriberCount: string;
            hiddenSubscriberCount: boolean;
            videoCount: string;
          };
        }
      ]
    | undefined;
}

export interface YoutubeVideoResponse {
  kind: string;
  etag: string;
  items: [
    {
      kind: string;
      etag: string;
      id: string;
      snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
          default: {
            url: string;
            width: number;
            height: number;
          };
          medium: {
            url: string;
            width: number;
            height: number;
          };
          high: {
            url: string;
            width: number;
            height: number;
          };
          standard: {
            url: string;
            width: number;
            height: number;
          };
          maxres:
            | {
                url: string;
                width: number;
                height: number;
              }
            | undefined;
        };
        channelTitle: string;
        tags: [string] | undefined;
        categoryId: string;
        liveBroadcastContent: string;
        localized: {
          title: string;
          description: string;
        };
      };
      statistics: {
        viewCount: string;
        likeCount: string;
        dislikeCount: string;
        favoriteCount: string;
        commentCount: string;
      };
    }
  ];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

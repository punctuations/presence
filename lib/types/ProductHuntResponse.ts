export interface ProductHuntAllResponse {
  posts: Post[];
}

export interface ProductHuntUserResponse {
  user: User;
}

export interface Post {
  comments_count: number;
  id: number;
  name: string;
  product_state: string;
  tagline: string;
  slug: string;
  votes_count: number;
  day: string;
  category_id: any;
  created_at: string;
  current_user: CurrentUser;
  discussion_url: string;
  exclusive: any;
  featured: boolean;
  ios_featured_at: boolean;
  maker_inside: boolean;
  makers: Maker[];
  platforms: any[];
  redirect_url: string;
  screenshot_url: ScreenshotUrl;
  thumbnail: Thumbnail;
  topics: Topic[];
  user: User;
}

export interface User {
  id: number;
  created_at: string;
  name: string;
  username: string;
  headline?: string;
  twitter_username?: string;
  website_url?: string;
  profile_url: string;
  image_url: ImageUrl;
  collections_count: number;
  followed_topics_count: number;
  followers: Follower[];
  followers_count: number;
  followings: Following[];
  followings_count: number;
  header_image_url: string;
  maker_of: MakerOf[];
  maker_of_count: number;
  posts: any[];
  posts_count: number;
  votes: Vote[];
  votes_count: number;
}

export interface Follower {
  id: number;
  created_at: string;
  name: string;
  username: string;
  headline?: string;
  twitter_username: string;
  website_url?: string;
  profile_url: string;
  image_url: ImageUrl;
}

export interface Following {
  id: number;
  created_at: string;
  name: string;
  username: string;
  headline?: string;
  twitter_username: string;
  website_url?: string;
  profile_url: string;
  image_url: ImageUrl;
}
export interface MakerOf {
  comments_count: number;
  id: number;
  name: string;
  product_state: string;
  tagline: string;
  slug: string;
  votes_count: number;
  day: any;
  category_id: any;
  created_at: string;
  current_user: CurrentUser;
  discussion_url: string;
  exclusive: any;
  featured: boolean;
  ios_featured_at: boolean;
  maker_inside: boolean;
  makers: Maker[];
  platforms: any[];
  redirect_url: string;
  screenshot_url: ScreenshotUrl;
  thumbnail: Thumbnail;
  topics: Topic[];
  user: User2;
}

export interface User2 {
  id: number;
  created_at: string;
  name: string;
  username: string;
  headline: string;
  twitter_username: string;
  website_url: string;
  profile_url: string;
  image_url: ImageUrl;
}

export interface Vote {
  id: number;
  created_at: string;
  user_id: number;
  post_id: number;
  post: Post;
}

export interface CurrentUser {}

export interface Maker {
  id: number;
  created_at: string;
  name: string;
  username: string;
  headline?: string;
  twitter_username?: string;
  website_url?: string;
  profile_url: string;
  image_url: ImageUrl;
}

export interface ImageUrl {
  "30px"?: string;
  "32px"?: string;
  "40px"?: string;
  "44px"?: string;
  "48px"?: string;
  "50px"?: string;
  "60px"?: string;
  "64px"?: string;
  "73px"?: string;
  "80px"?: string;
  "88px"?: string;
  "96px"?: string;
  "100px"?: string;
  "110px"?: string;
  "120px"?: string;
  "132px"?: string;
  "146px"?: string;
  "160px"?: string;
  "176px"?: string;
  "220px"?: string;
  "264px"?: string;
  "32px@2X"?: string;
  "40px@2X"?: string;
  "44px@2X"?: string;
  "88px@2X"?: string;
  "32px@3X"?: string;
  "40px@3X"?: string;
  "44px@3X"?: string;
  "88px@3X"?: string;
  original?: string;
}

export interface ScreenshotUrl {
  "300px": string;
  "850px": string;
}

export interface Thumbnail {
  id: number;
  media_type: string;
  image_url: string;
  metadata: Metadata;
}

export interface Metadata {
  video_id: any;
  url: any;
  kindle_asin: any;
  platform: any;
}

export interface Topic {
  id: number;
  name: string;
  slug: string;
}

export interface User {
  id: number;
  created_at: string;
  name: string;
  username: string;
  headline?: string;
  twitter_username?: string;
  website_url?: string;
  profile_url: string;
  image_url: ImageUrl;
}

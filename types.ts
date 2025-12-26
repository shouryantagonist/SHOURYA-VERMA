export interface User {
  id: string;
  name: string;
  avatar: string;
  isVerified: boolean;
  role: 'artist' | 'host';
  bio?: string;
  socials?: {
    twitter?: string;
    instagram?: string;
    artstation?: string;
  };
}

export interface Tag {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  imageUrl: string;
  creator: User;
  tags: string[];
  software: string[];
  likes: number;
  type: 'inspiration' | 'tutorial' | 'campaign';
  isVideo?: boolean;
}

export interface Bounty {
  id: string;
  title: string;
  host: User;
  prizePool: number;
  deadline: string;
  submissionCount: number;
  brief: string;
  tags: string[];
  status: 'open' | 'reviewing' | 'closed';
  strictness: 'Flexible' | 'Moderate' | 'Strict';
}

export interface Collection {
  id: string;
  name: string;
  coverImage: string;
  postCount: number;
  isPrivate: boolean;
}

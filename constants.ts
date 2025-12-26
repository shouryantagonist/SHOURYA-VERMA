import { Post, Bounty, User, Collection } from './types';

export const COLORS = {
  bgDark: '#0b0514', // Deep black-purple
  bgCard: '#1a0b2e', // Darker purple for cards
  primary: '#9b72cf',
  textLight: '#f4effa',
  textMuted: '#c8b1e4',
  accent: '#ffd700', // Gold for fireflies
};

// Mock Users
export const USER_ARTIST: User = {
  id: 'u1',
  name: 'Alex Render',
  avatar: 'https://picsum.photos/seed/u1/100/100',
  isVerified: false,
  role: 'artist',
  bio: '3D Generalist focused on sci-fi environments and hard-surface modeling.',
};

const USER_HOST_COMPANY: User = {
  id: 'u2',
  name: 'Neon Studios',
  avatar: 'https://picsum.photos/seed/u2/100/100',
  isVerified: true,
  role: 'host',
};

// Mock Posts (Inspiration)
export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    title: 'Cyberpunk Alleyway',
    imageUrl: 'https://picsum.photos/seed/cyber/600/800',
    creator: USER_ARTIST,
    tags: ['#cyberpunk', '#blender', '#night'],
    software: ['Blender', 'Photoshop'],
    likes: 1240,
    type: 'inspiration',
  },
  {
    id: 'p2',
    title: 'Low Poly Forest',
    imageUrl: 'https://picsum.photos/seed/forest/600/600',
    creator: { ...USER_ARTIST, name: 'PolyMaster' },
    tags: ['#beginner', '#lowpoly', '#nature'],
    software: ['Maya'],
    likes: 850,
    type: 'inspiration',
  },
  {
    id: 'p3',
    title: 'Abstract Fluid Sim',
    imageUrl: 'https://picsum.photos/seed/fluid/600/700',
    creator: { ...USER_ARTIST, name: 'SimGod' },
    tags: ['#simulation', '#houdini', '#abstract'],
    software: ['Houdini', 'Redshift'],
    likes: 2100,
    type: 'inspiration',
  },
  {
    id: 'p4',
    title: 'Mech Warrior Concept',
    imageUrl: 'https://picsum.photos/seed/mech/600/500',
    creator: USER_ARTIST,
    tags: ['#scifi', '#mech', '#concept'],
    software: ['ZBrush', 'Keyshot'],
    likes: 1540,
    type: 'inspiration',
  },
  {
    id: 'p5',
    title: 'Cozy Isometric Room',
    imageUrl: 'https://picsum.photos/seed/iso/600/600',
    creator: { ...USER_ARTIST, name: 'CozyMaker' },
    tags: ['#isometric', '#beginner', '#cozy'],
    software: ['Blender'],
    likes: 3200,
    type: 'inspiration',
  },
];

// Mock Campaigns (Ads)
export const MOCK_CAMPAIGNS: Post[] = [
  {
    id: 'c1',
    title: 'Air Max Dn: Impossible Air',
    imageUrl: 'https://picsum.photos/seed/nike_air_dn/800/600',
    creator: { ...USER_HOST_COMPANY, name: 'Nike' },
    tags: ['#sneakers', '#3d-commercial', '#houdini'],
    software: ['Houdini', 'Nuke'],
    likes: 15600,
    type: 'campaign',
    isVideo: true,
  },
  {
    id: 'c2',
    title: 'Apple Vision Pro: Eras',
    imageUrl: 'https://picsum.photos/seed/apple_vision_pro/800/600',
    creator: { ...USER_HOST_COMPANY, name: 'Apple' },
    tags: ['#spatial', '#product-viz', '#cinema4d'],
    software: ['Cinema 4D', 'Octane'],
    likes: 24500,
    type: 'campaign',
    isVideo: true,
  },
  {
    id: 'c3',
    title: 'Red Bull: Rampage VR Experience',
    imageUrl: 'https://picsum.photos/seed/redbull_rampage/800/600',
    creator: { ...USER_HOST_COMPANY, name: 'Red Bull' },
    tags: ['#extreme-sports', '#vr', '#unreal5'],
    software: ['Unreal Engine 5'],
    likes: 11200,
    type: 'campaign',
    isVideo: true,
  },
  {
    id: 'c4',
    title: 'NVIDIA GeForce RTX 50 Series Reveal',
    imageUrl: 'https://picsum.photos/seed/nvidia_rtx50/800/600',
    creator: { ...USER_HOST_COMPANY, name: 'NVIDIA' },
    tags: ['#raytracing', '#tech-demo', '#omniverse'],
    software: ['Omniverse', 'PhysX'],
    likes: 32000,
    type: 'campaign',
    isVideo: true,
  },
  {
    id: 'c5',
    title: 'Spider-Verse: Animation Pipeline Breakdown',
    imageUrl: 'https://picsum.photos/seed/spiderverse/800/600',
    creator: { ...USER_HOST_COMPANY, name: 'Sony Imageworks' },
    tags: ['#breakdown', '#stylized', '#maya'],
    software: ['Maya', 'Katana'],
    likes: 18900,
    type: 'campaign',
    isVideo: true,
  },
];

// Mock Tutorials
export const MOCK_TUTORIALS: Post[] = [
  {
    id: 't1',
    title: 'Mastering Hard Surface in ZBrush',
    imageUrl: 'https://picsum.photos/seed/t1/800/600',
    creator: USER_ARTIST,
    tags: ['#tutorial', '#zbrush', '#hardsurface'],
    software: ['ZBrush'],
    likes: 4200,
    type: 'tutorial',
    isVideo: true,
  },
  {
    id: 't2',
    title: 'Blender Geometry Nodes for Beginners',
    imageUrl: 'https://picsum.photos/seed/t2/800/600',
    creator: { ...USER_ARTIST, name: 'NodeWizard' },
    tags: ['#tutorial', '#blender', '#nodes'],
    software: ['Blender'],
    likes: 8900,
    type: 'tutorial',
    isVideo: true,
  },
  {
    id: 't3',
    title: 'Lighting Cinematics in Unreal 5',
    imageUrl: 'https://picsum.photos/seed/t3/800/600',
    creator: USER_HOST_COMPANY,
    tags: ['#tutorial', '#lighting', '#unreal'],
    software: ['Unreal Engine 5'],
    likes: 3400,
    type: 'tutorial',
    isVideo: true,
  },
];

// Mock Bounties
export const MOCK_BOUNTIES: Bounty[] = [
  {
    id: 'b1',
    title: 'Futuristic Helmet Design',
    host: USER_HOST_COMPANY,
    prizePool: 500,
    deadline: '2023-12-01',
    submissionCount: 14,
    brief: 'Create a high-poly helmet for a sci-fi protagonist. Must be functional design.',
    tags: ['#hard-surface', '#scifi'],
    status: 'open',
    strictness: 'Moderate',
  },
  {
    id: 'b2',
    title: 'Stylized Character Pack',
    host: { ...USER_HOST_COMPANY, name: 'IndieGameDev' },
    prizePool: 1200,
    deadline: '2023-11-20',
    submissionCount: 42,
    brief: 'We need 3 stylized fantasy characters (low poly) for a mobile RPG.',
    tags: ['#character', '#stylized'],
    status: 'reviewing',
    strictness: 'Flexible',
  },
  {
    id: 'b3',
    title: 'Realistic Food Assets',
    host: { ...USER_HOST_COMPANY, name: 'ArchVizPro' },
    prizePool: 300,
    deadline: '2023-12-15',
    submissionCount: 5,
    brief: 'Scan or model realistic bread and pastries for an architectural visualization scene.',
    tags: ['#photorealism', '#food'],
    status: 'open',
    strictness: 'Strict',
  },
];

// Mock Collections
export const MOCK_COLLECTIONS: Collection[] = [
  {
    id: 'col1',
    name: 'Cyberpunk References',
    coverImage: 'https://picsum.photos/seed/cyber/300/300',
    postCount: 42,
    isPrivate: true,
  },
  {
    id: 'col2',
    name: 'Lighting Studies',
    coverImage: 'https://picsum.photos/seed/light/300/300',
    postCount: 15,
    isPrivate: false,
  },
  {
    id: 'col3',
    name: 'Mech Parts',
    coverImage: 'https://picsum.photos/seed/mech/300/300',
    postCount: 128,
    isPrivate: true,
  },
];
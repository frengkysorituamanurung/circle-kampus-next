// Salin dan tempel kode ini untuk memastikan data dummy dan impor sudah benar.

import type { NextPageWithLayout } from './_app';
import AppLayout from '@/layouts/AppLayout';
import { PostCard, Post } from '@/components/ui/PostCard';

const dummyCurrentUser = {
  username: '@frengky',
  avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Frengky'
};

const dummyPosts: Post[] = [
  {
    author: {
      username: '@jaredpalmer',
      avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Jared'
    },
    content: "I'm absolutely loving the new design library from Shadcn. It makes creating components so much easier! 💯",
    stats: { likes: 305, comments: 2, shares: 12 },
    comments: [
      {
        author: { username: '@shadcn', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Shadcn' },
        text: 'Looking good! 👍',
        timestamp: '2m ago'
      },
      {
        author: { username: '@maxleiter', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Max' },
        text: 'Great to hear! 😊',
        timestamp: '5m ago'
      }
    ]
  },
    {
    author: {
      username: '@jaredpalmer',
      avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Jared'
    },
    content: "I'm absolutely loving the new design library from Shadcn. It makes creating components so much easier! 💯",
    stats: { likes: 305, comments: 2, shares: 12 },
    comments: [
      {
        author: { username: '@shadcn', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Shadcn' },
        text: 'Looking good! 👍',
        timestamp: '2m ago'
      },
      {
        author: { username: '@maxleiter', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Max' },
        text: 'Great to hear! 😊',
        timestamp: '5m ago'
      }
    ]
  },
    {
    author: {
      username: '@jaredpalmer',
      avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Jared'
    },
    content: "I'm absolutely loving the new design library from Shadcn. It makes creating components so much easier! 💯",
    stats: { likes: 305, comments: 2, shares: 12 },
    comments: [
      {
        author: { username: '@shadcn', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Shadcn' },
        text: 'Looking good! 👍',
        timestamp: '2m ago'
      },
      {
        author: { username: '@maxleiter', avatarUrl: 'https://api.dicebear.com/8.x/initials/svg?seed=Max' },
        text: 'Great to hear! 😊',
        timestamp: '5m ago'
      }
    ]
  },
];

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <h1 className="text-2xl font-bold">Home Feed</h1>
      <div className="w-full max-w-2xl space-y-6">
        {dummyPosts.map((post, index) => (
          <PostCard key={index} post={post} currentUser={dummyCurrentUser} />
        ))}
      </div>
    </div>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;

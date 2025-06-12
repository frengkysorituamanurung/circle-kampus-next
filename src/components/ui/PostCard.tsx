// Salin dan tempel seluruh kode ini untuk memastikan tidak ada yang terlewat.
// Pastikan semua komponen (Card, Avatar, Button, Textarea) dari shadcn sudah diinstal.

import React from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageSquare, Share2, Smile } from 'lucide-react';

interface User {
  username: string;
  avatarUrl: string;
}

interface Comment {
  author: User;
  text: string;
  timestamp: string;
}

export interface Post {
  author: User;
  content: string;
  imageUrl?: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
  comments: Comment[];
}

interface PostCardProps {
  post: Post;
  currentUser: User;
}

export const PostCard: React.FC<PostCardProps> = ({ post, currentUser }) => {
  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="p-4">
        <div className="flex items-center space-x-4">
          <Link href={`/users/${post.author.username}`} className="flex items-center space-x-2" prefetch={false}>
            <Avatar className="w-10 h-10">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.username} />
              <AvatarFallback>{post.author.username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="font-semibold">{post.author.username}</span>
          </Link>
          <Button size="sm" variant="outline" className="ml-auto border-gray-300 dark:border-gray-700">
            Follow
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <p className="whitespace-pre-wrap">{post.content}</p>
        {post.imageUrl && (
            <img src={post.imageUrl} alt="Post content" className="mt-4 rounded-lg w-full object-cover" />
        )}
      </CardContent>

      <CardFooter className="p-4">
        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1.5">
            <Button size="sm" variant="ghost" className="gap-1 p-0 h-auto">
              <Heart className="w-5 h-5" />
            </Button>
            <span className="font-medium">{post.stats.likes}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Button size="sm" variant="ghost" className="gap-1 p-0 h-auto">
              <MessageSquare className="w-5 h-5" />
            </Button>
            <span className="font-medium">{post.stats.comments}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Button size="sm" variant="ghost" className="gap-1 p-0 h-auto">
              <Share2 className="w-5 h-5" />
            </Button>
            <span className="font-medium">{post.stats.shares}</span>
          </div>
        </div>
      </CardFooter>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="grid gap-4 p-4">
          {post.comments.map((comment, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Avatar className="w-8 h-8">
                <AvatarImage src={comment.author.avatarUrl} alt={comment.author.username} />
                <AvatarFallback>{comment.author.username.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{comment.author.username}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{comment.timestamp}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-400">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <form className="flex items-start space-x-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={currentUser.avatarUrl} alt={currentUser.username} />
              <AvatarFallback>{currentUser.username.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="grid gap-2 w-full">
              <Textarea placeholder="Write a comment..." className="min-h-[3rem] text-sm" />
              <div className="flex items-center">
                <Button size="sm">Comment</Button>
                <Button size="sm" variant="ghost" className="ml-2">
                  <Smile className="w-4 h-4" />
                  <span className="sr-only">Add a reaction</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
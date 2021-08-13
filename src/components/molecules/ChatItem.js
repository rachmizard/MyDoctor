import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

export default function ChatItem({message, pic, createdAt, me}) {
  if (!me) {
    return <Other message={message} pic={pic} createdAt={createdAt} />;
  }

  return <IsMe message={message} pic={pic} createdAt={createdAt} />;
}

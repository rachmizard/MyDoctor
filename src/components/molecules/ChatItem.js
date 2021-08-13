import React from 'react';
import {Other, IsMe} from 'components';

export default function ChatItem({message, pic, createdAt, me}) {
  if (!me) {
    return <Other message={message} pic={pic} createdAt={createdAt} />;
  }

  return <IsMe message={message} pic={pic} createdAt={createdAt} />;
}

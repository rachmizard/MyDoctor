import {ICStar} from 'assets';
import React, {useEffect, useState} from 'react';

export default function Rating({count}) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (count >= 5) {
      setRating(5);
    }

    if (count < 0) {
      setRating(1);
    }

    if (count >= 1 && count <= 5) {
      setRating(count);
    }
  }, [count]);

  const elements = [];
  for (let index = 0; index < rating; index++) {
    elements.push(<ICStar key={index} />);
  }

  return elements;
}

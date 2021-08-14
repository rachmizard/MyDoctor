import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function IconButton({icon, onPress, style, disabled}) {
  return (
    <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
}

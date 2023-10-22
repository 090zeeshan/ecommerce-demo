import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TextWidget} from '../text-wdiget/TextWidget';
import {SimpleCallback} from 'src/types/common';

interface TextButtonProps {
  title: string;
  onPress: SimpleCallback;
}

export const TextButton: React.FC<TextButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextWidget type="h1" color="accent">
        {title}
      </TextWidget>
    </TouchableOpacity>
  );
};

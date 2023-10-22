import React from 'react';
import {Text, TextProps} from 'react-native';
import {useTheme} from 'src/theme';
import {TextColor, TextType} from 'src/types/text';

interface TextWidgetProps extends TextProps {
  type?: TextType;
  color?: TextColor;
}

export const TextWidget: React.FC<TextWidgetProps> = ({
  type = 'body1',
  color = 'body',
  children,
  style,
  ...props
}) => {
  const theme = useTheme();
  const textAttr = theme.text[type];
  const textColor = theme.color[color];
  const fontSize = textAttr.fontSize;
  const fontFamily = theme.font[textAttr.fontFamily];

  return (
    <Text {...props} style={[{color: textColor, fontFamily, fontSize}, style]}>
      {children}
    </Text>
  );
};

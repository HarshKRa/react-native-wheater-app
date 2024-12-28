import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

const RealMe_9_RATIO = 0.0013157894736842105;

export default function Txt({ children, style, ...restProps }) {
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions();

  return (
    <Text
      style={[
        s.txt,
        style,
        {
          fontSize: Math.round(fontSize * RealMe_9_RATIO * height),
        },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}

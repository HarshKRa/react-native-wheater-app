import { Text, TextInput, View } from "react-native";
import { s } from "./SearchBar.style";
import Txt from "../Txt/Txt";

export default function SearchBar({ onSubmit }) {
  return <TextInput onSubmitEditing={(e)=>onSubmit(e.nativeEvent.text)} style={s.input} placeholder="Type a city... EX: Patna" />;
}

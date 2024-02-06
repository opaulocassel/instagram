import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
    text: string;
    image: string;
  }

  const Body: FC<Props> = ({ text, image }) => {
    return (
            <View>
                <Image style={styles.imagem} source={{ uri:image }}/>
                <Text>{text}</Text>
            </View>
    )
};
  const styles = StyleSheet.create({
    container: {

    },
    imagem: {
      width: 250,
      height: 250
    },
  });
  
  export default Body;
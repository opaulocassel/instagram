import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
    text: string;
    image: string;
  }

  const Body: FC<Props> = ({ text, image }) => {
    return (
            <View style={styles.container}>
                <Image style={styles.imagem} source={{ uri:image }}/>
                <Text style={styles.descricao}>{text}</Text>
            </View>
    )
};
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
    },
    imagem: {
      width: 250,
      height: 250
    },
    descricao: {
      fontWeight: 'bold',
    }
  });
  
  export default Body;
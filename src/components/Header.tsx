import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
    avatar: string;
    username: string;
  }

  const Header: FC<Props> = ({ avatar, username }) => {
    return (
        <View style={styles.container}>
                <Image style={styles.usuario} source={{ uri:avatar }}/>
                <Text style={styles.nomeusuario}>{username}</Text>
        </View>  
    );
  };

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      marginVertical: 10,
    },
    nomeusuario: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
      fontWeight: 'bold',
    },
    usuario: {
      width: 40,
      height: 40,
      borderRadius: 50,
      marginRight: 8,
    },
  });

  export default Header;
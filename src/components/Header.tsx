import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
    avatar: string;
    username: string;
  }

  const Header: FC<Props> = ({ avatar, username }) => {
    return (
        <View>
                <Text style={styles.nomeusuario}>{username}</Text>
                <Image style={styles.usuario} source={{ uri:avatar }}/>
        </View>  
    );
  };

const styles = StyleSheet.create({
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
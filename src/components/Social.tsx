import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

interface Props {
    comments: number;
    reposts: number;
    likes: number;
  }
  const Social: FC<Props> = ({ comments, reposts, likes }) => {
    return (
        <View style={styles.container}>
            <View style={styles.icones}>
                <Text><FontAwesome name="comment-o" size={24} color="black" />{comments}</Text>
            </View>
            <View style={styles.icones}>
                <Text><AntDesign name="retweet" size={24} color="black" />{reposts}</Text>
            </View>
            <View style={styles.icones}>
                <Text><AntDesign name="hearto" size={24} color="black" />{likes}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: 10,
      },
      icones: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    });


export default Social;
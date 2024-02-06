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
            <Text><FontAwesome name="comment-o" size={24} color="black" />{comments}</Text>
            <Text><AntDesign name="retweet" size={24} color="black" />{reposts}</Text>
            <Text><AntDesign name="hearto" size={24} color="black" />{likes}</Text>
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
    });


export default Social;
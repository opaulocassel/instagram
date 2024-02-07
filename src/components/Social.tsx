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
                <FontAwesome name="comment-o" size={24} color="black" />
                <Text style={{paddingHorizontal: 7}}>{comments}</Text>
            </View>
            <View style={styles.icones}>
                <AntDesign name="retweet" size={24} color="black" />
                <Text style={{paddingHorizontal: 7}}>{reposts}</Text>
            </View>
            <View style={styles.icones}>
                <AntDesign name="hearto" size={24} color="black" />
                <Text style={{paddingHorizontal: 7}}>{likes}</Text>
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
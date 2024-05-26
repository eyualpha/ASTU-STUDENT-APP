import React, { useState, useRef } from "react";
import { View, FlatList, Image, Dimensions, StyleSheet } from "react-native";
import Color from "./Color";

const { width } = Dimensions.get("window");

const SlidingCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require("../Assets/Images/intro1.jpg"),
    require("../Assets/Images/getLocation.png"),
    require("../Assets/Images/intro2.jpg"),
  ];

  const onScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(newIndex);
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.card}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: index === currentIndex ? 1 : 0.5 }]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
  },
  imageContainer: {
    width: width - 30,
    height: 160,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  dotContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Color.primary,
    marginHorizontal: 5,
  },
});

export default SlidingCard;

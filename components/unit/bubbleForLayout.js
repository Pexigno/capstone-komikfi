/* eslint-disable prettier/prettier */
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  PanResponder,
  Keyboard
} from "react-native";

import { connect } from "react-redux";
import { updateBubble } from "../../store";
import bubble1 from "../../assets/bubble1.png";
import bubble2 from "../../assets/bubble2.png";
import bubble3 from "../../assets/bubble3.png";

const bubbleImages = [bubble1, bubble2, bubble3];

class Bubble extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View
          style={{
            transform: [
              { rotateZ: this.props.rotateZ || 0 },
              { translateX: this.props.translateX || 0 },
              { translateY: this.props.translateY || 0 },
              { scale: this.props.scale || 1 }
            ],
            position: "absolute",
            top: "35%",
            left: "20%"
          }}
        >
          <ImageBackground
            source={bubbleImages[this.props.shape - 1]}
            style={styles.bubble}
          >
            <Text style={styles[`text${this.props.shape}`]}>
              {this.props.text || ""}
            </Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bubble: {
    height: 150,
    width: 170
  },
  text1: {
    position: "relative",
    top: "23%",
    left: "18%",
    fontSize: 15,
    width: "58%",
    height: "25%"
  },
  text2: {
    position: "relative",
    top: "30%",
    left: "14%",
    fontSize: 15,
    width: "70%",
    height: "25%"
  },
  text3: {
    position: "relative",
    top: "37%",
    left: "28%",
    fontSize: 18,
    width: "40%",
    height: "30%"
  }
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateBubble: bubble =>
      dispatch(updateBubble(bubble, ownProps.bubbleIdx, ownProps.photoIdx))
  };
};

export default connect(null, mapDispatchToProps)(Bubble);

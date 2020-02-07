/* eslint-disable prettier/prettier */
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";
import { updateCurrentPhotoIdx } from "../../store";
import Bubble from "./bubbleForEdit";

class SinglePhoto extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={styles.singlePhoto}
        onPress={() => this.props.backToEdit(this.props.photoIdx)}
      >
        <ImageBackground
          source={{ uri: this.props.currentPhoto.image.uri }}
          style={{
            height: this.props.height - 10,
            width: this.props.width - 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View style={styles.bubbleWrapper}>
            {this.props.currentPhoto.bubbles[0]
              ? this.props.currentPhoto.bubbles.map((bubble, idx) => {
                  // console.log(bubble);
                  return (
                    <Bubble
                      key={idx}
                      photoIdx={this.props.photoIdx}
                      {...bubble}
                      bubbleIdx={idx}
                    />
                  );
                })
              : null}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  singlePhoto: {
    borderColor: "black",
    borderWidth: 5
  },
  bubbleWrapper: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    currentPhoto: state.photos[ownProps.photoIdx],
    layout: state.layout.size,
    height: state.layout.height,
    width: state.layout.width
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    backToEdit: async () => {
      await dispatch(updateCurrentPhotoIdx(ownProps.photoIdx));
      ownProps.navigation.push("Edit");
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhoto);
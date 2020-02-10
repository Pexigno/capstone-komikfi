/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { getPhotoFromLibrary, accessingCamera } from "../../store";

class PickPhotoPrompt extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.getPhotoFromLibrary}>
          <Image
            source={{
              uri:
                "https://cdn1.iconfinder.com/data/icons/social-17/48/photos2-512.png"
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.accessingCamera}>
          <Image
            source={{
              uri:
                "https://pngimage.net/wp-content/uploads/2018/05/camera-icon-png-transparent-background-3.png"
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  icon: {
    height: 50,
    width: 50,
    margin: 20
  }
});

const mapStateToProps = state => {
  return {
    currentPhotoIndex: state.currentPhotoIndex
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPhotoFromLibrary: async () => {
      const result = await dispatch(getPhotoFromLibrary(ownProps.photoIdx));
      if (!result) {
        ownProps.navigation.push("Edit");
      }
    },
    accessingCamera: async () => {
      const result = await dispatch(accessingCamera(ownProps.photoIdx));
      if (!result) {
        ownProps.navigation.push("Edit");
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PickPhotoPrompt);

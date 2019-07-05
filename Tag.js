import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

import TagStyles from "./TagStyles";

const Tag = ({ label, onPress, tagContainerStyle, tagTextStyle }) => {
  return (
    <TouchableOpacity style={[TagStyles.tag, tagContainerStyle]} onPress={onPress}>
      <Text style={[TagStyles.tagLabel, tagTextStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Tag;
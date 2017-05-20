import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const DismissKeyboardHOC = Comp => ({ children, ...props }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Comp {...props}>
      {children}
    </Comp>
  </TouchableWithoutFeedback>
);

const DismissKeyboardView = DismissKeyboardHOC(View);
export default DismissKeyboardView;

import React, { Component } from 'react';
import { View, Button, Text } from "react-native";
import Modal from "react-native-modal";
import { ModalContent } from "../base/ModalContent";
import { ModalBaseScene } from "../base/ModalBaseScene";
import { InputTextField } from '../base/InputTextField';

export class CodeModal extends ModalBaseScene {
  constructor(props) {
    super(props);
  }

  renderModal() {
    return (
      <Modal
        avoidKeyboard={true}
        onBackdropPress={this.close}
        testID={'modal'}
        isVisible={this.isVisible()}
        animationIn="slideInLeft"
        animationOut="slideOutRight">
        <ModalContent onPress={this.close} />
      </Modal>
    );
  }
}
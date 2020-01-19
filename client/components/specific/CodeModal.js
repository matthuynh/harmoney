import React, { Component } from 'react';
import Modal from "react-native-modal";
import { ModalContent } from "../base/ModalContent";
import { ModalBaseScene } from "../base/ModalBaseScene";

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
        <ModalContent onExit={this.close} onSubmit={this.props.onPress}/>
      </Modal>
    );
  }
}
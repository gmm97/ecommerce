import ReactDOM from "react-dom";
import React from "react";
import {
  NotificationWrapper,
  NotificationTitle,
  NotificationMessage,
} from "./ResponseComponentStyles";

import { NotificationItem } from "./Auth";

export const ResponseComponent = (props: NotificationItem) => {
  const { title, message, status } = props;

  return ReactDOM.createPortal(
    <NotificationWrapper status={status}>
      <NotificationTitle>{title}</NotificationTitle>
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationWrapper>,
    document.getElementById("portal")
  );
};

import React from "react";

export default function FlashMessage({ theme, text }) {
  return <div className={"alert alert-" + theme}>{text}</div>;
}

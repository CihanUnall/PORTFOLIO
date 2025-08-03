"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBattery3,
  faVolumeHigh,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

function Icon() {
  return (
    <div className="icons">
      <FontAwesomeIcon icon={faWifi} />
      <FontAwesomeIcon icon={faVolumeHigh} />
      <FontAwesomeIcon icon={faBattery3} />
    </div>
  );
}

export default Icon;

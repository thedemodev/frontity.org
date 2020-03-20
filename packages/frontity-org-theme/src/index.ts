import FrontityOrg from "../types";
import Theme from "./components";
import {
  backgroundColor,
  textColor,
  specialIcons,
  paragraphs,
  mobileDesktop,
  horizontalSeparator,
  borders,
  links,
  boxShadow,
  checklists,
  borderRadius,
  dropdown,
  polygonBackground
} from "./processors";

const frontityOrg: FrontityOrg = {
  name: "frontity-org-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      colors: {
        frontity: "#1f38c5",
        primary: "#0f1c64",
        voidblu: "#0c112b",
        grass: "#82c315",
        wall: "#f6f6f9",
        purple: "#936af4",
        orange: "#f4c053",
        red: "#f76d64",
        turqoise: "#6ac8c9",
        lightgreen: "#8ACB88",
        white: "#ffffff"
      }
    }
  },
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      processors: [
        ...paragraphs,
        ...mobileDesktop,
        ...borders,
        backgroundColor,
        textColor,
        specialIcons,
        polygonBackground,
        ...borders,
        links,
        borderRadius,
        boxShadow,
        checklists,
        dropdown,
        horizontalSeparator,
        links,
        specialIcons,
        textColor
      ]
    }
  }
};

export default frontityOrg;

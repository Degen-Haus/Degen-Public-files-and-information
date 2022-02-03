import { Colors } from "./types";

export const baseColors = {
  failure: "#f44560",
  primary: "#8cac0e",
  primaryBright: "#ccff66",
  primaryDark: "#8cac0e",
  secondary: "#f3851d",
  success: "#84b41f",
  warning: "#0633ff",
};

export const additionalColors = {
  binance: "#0633ff",
  overlay: "#84b41f",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#adb4b3",
  backgroundDisabled: "#adb4b3",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#adb4b3",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#84b41f",
  tertiary: "#EFF4F5",
  text: "#280D5F",
  textDisabled: "#BDC2C4",
  textSubtle: "#84b41f",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #ccff66 0%, #84b41f 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #84b41f 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #ccff66 100%)",
    blue: "linear-gradient(180deg, #84b41f 0%, #F2ECF2 100%)",
    violet: "linear-gradient(180deg, #84b41f 0%, #ccff66 100%)",
    violetAlt: "linear-gradient(180deg, #E9EAEB 0%, #ccff66 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#f3851d",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  cardBorder: "#1d472e",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#ccff66",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#84b41f",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #ccff66 0%, #84b41f 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #191326 0%, #84b41f 100%)",
    cardHeader: "linear-gradient(111.68deg, #191326 0%, #ccff66 100%)",
    blue: "linear-gradient(180deg, #84b41f 0%, #353547 100%)",
    violet: "linear-gradient(180deg, #84b41f 0%, #ccff66 100%)",
    violetAlt: "linear-gradient(180deg, #E9EAEB 0%, #ccff66 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

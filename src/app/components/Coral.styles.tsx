"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export const PlusHeroWrap = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "40px auto 0",
  paddingLeft: 35,
  paddingRight: 80,
  boxSizing: "border-box",
  display: "grid",
  rowGap: 15,
  justifyItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    paddingLeft: 16,
    paddingRight: 16,
    rowGap: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    paddingLeft: 20,
    paddingRight: 20,
    rowGap: 12,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "40px auto 0",
    paddingLeft: 24,
    paddingRight: 24,
    rowGap: 15,
    justifyItems: "center",
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: "100%",
    maxWidth: 520,
    paddingLeft: 16,
    paddingRight: 16,
    rowGap: 10,
  },
  "@media (min-width:800px) and (max-width:899.95px)": {
    maxWidth: "calc(100vw - 40px)",
    paddingLeft: 20,
    paddingRight: 20,
  },
  "@media (min-width:1200px) and (max-width:1280px)": {
    width: "100%",
    maxWidth: "calc(100vw - 80px)",
    margin: "40px auto 0",
    paddingLeft: 40,
    paddingRight: 40,
  },
}));

export const PlusHeroTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "36px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 38,
    lineHeight: "46px",
  },
}));

export const PlusHeroFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1200,
  height: 325,
  borderRadius: 20,
  overflow: "hidden",
  border: "1px solid #E7EDF5",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 448,
    height: 160,
    borderRadius: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    height: 220,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 960,
    height: 260,
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: "100%",
    maxWidth: 520,
    height: 210,
  },
  "@media (min-width:800px) and (max-width:899.95px)": {
    width: "100%",
    maxWidth: 820,
    height: 240,
  },
}));

export const PlusHeroImg = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "50% 28%",
  display: "block",
  [theme.breakpoints.down("sm")]: {
    objectPosition: "50% 40%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    objectPosition: "50% 30%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    objectPosition: "50% 32%",
  },
  "@media (min-width:800px) and (max-width:899.95px)": {
    objectPosition: "50% 36%",
  },
}));

export const PlusIntro = styled("div")(({ theme }) => ({
  width: 1206,
  maxWidth: "100%",
  margin: "12px auto 0",
  display: "grid",
  rowGap: 10,
  justifyItems: "center",
  marginTop: 30,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    rowGap: 8,
    marginTop: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "90%",
    maxWidth: 600,
    rowGap: 8,
    marginTop: 10,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 800,
    rowGap: 10,
    marginTop: 20,
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: "100%",
    maxWidth: 520,
  },
}));

export const PlusIntroPara = styled("p")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
    marginTop: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "24px",
  },
}));

export const PlusPromiseWrap = styled(Container)(({ theme }) => ({
  width: 1280,
  maxWidth: "100%",
  margin: "0 auto",
  paddingLeft: 35,
  paddingRight: 80,
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    paddingLeft: 16,
    paddingRight: 16,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    paddingLeft: 20,
    paddingRight: 20,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    paddingLeft: 24,
    paddingRight: 24,
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: "100%",
    maxWidth: 520,
    paddingLeft: 16,
    paddingRight: 16,
  },
  "@media (min-width:1200px) and (max-width:1280px)": {
    width: "100%",
    maxWidth: "calc(100vw - 80px)",
    paddingLeft: 40,
    paddingRight: 40,
  },
}));

export const PlusPromiseRow = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "700px 520px",
  gap: 26,
  alignItems: "start",
  width: "100%",
  marginTop: 40,
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: 50,
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "1fr",
    gap: 30,
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
    gap: 28,
    marginTop: 40,
  },
}));

export const PlusPromiseTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "36px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 32,
    lineHeight: "40px",
    textAlign: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 40,
    lineHeight: "48px",
  },
}));

export const PromiseList = styled("ul")(({ theme }) => ({
  margin: "12px 0 0",
  padding: 0,
  listStyle: "none",
  display: "grid",
  rowGap: 10,
  [theme.breakpoints.down("sm")]: {
    rowGap: 8,
  },
  [theme.breakpoints.between("sm", "md")]: {
    rowGap: 8,
  },
}));

export const PromiseItem = styled("li")(({ theme }) => ({
  position: "relative",
  paddingLeft: 18,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 10.5,
    width: 9,
    height: 9,
    borderRadius: "50%",
    backgroundImage: "linear-gradient(180deg,#0064B5 0%,#00A9DF 100%)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "18px",
    whiteSpace: "normal",
    "&::before": { top: 6, width: 6, height: 6 },
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "24px",
    whiteSpace: "normal",
    "&::before": { top: 8, width: 7, height: 7 },
  },
}));

export const MapPlusCard = styled("div")(({ theme }) => ({
  width: 478,
  height: 620,
  borderRadius: 20,
  background: "#FFFFFF",
  position: "relative",
  boxSizing: "border-box",
  display: "grid",
  alignContent: "start",
  rowGap: 10,
  paddingTop: 0,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    height: "auto",
    marginTop: -10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 480,
    height: 580,
    justifySelf: "end",
  },
}));

export const MapPlusFrame = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: 520,
  border: "1px solid #E7EDF5",
  borderRadius: 20,
  display: "block",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    height: 420,
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: 350,
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: 440,
  },
}));

export const MapPlusOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 520,
  borderRadius: 20,
  pointerEvents: "none",
  backgroundColor: "rgba(184, 202, 216, 0.85)",
  mixBlendMode: "color",
  [theme.breakpoints.down("sm")]: {
    height: 420,
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: 350,
  },
  [theme.breakpoints.between("md", "lg")]: {
    height: 440,
  },
}));

export const MapPlusPinWrap = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 88,
  left: 250,
  width: 20,
  height: 25,
  pointerEvents: "none",
  [theme.breakpoints.down("sm")]: { display: "none" },
  [theme.breakpoints.between("sm", "md")]: {
    left: "50%",
    transform: "translateX(-50%)",
    top: 60,
  },
  [theme.breakpoints.between("md", "lg")]: {
    left: "50%",
    transform: "translateX(-50%)",
    top: 70,
  },
}));

export const MapPlusPinSvg = styled("svg")({
  width: "100%",
  height: "100%",
  display: "block",
});

export const MapPlusCaption = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  bottom: 36,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "1px 10px",
  borderRadius: 8,
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 24,
  lineHeight: "20px",
  color: "#0E1B41",
  background: "transparent",
  [theme.breakpoints.down("sm")]: {
    left: 40,
    bottom: -25,
    fontSize: 14,
    lineHeight: "20px",
    gap: 6,
  },
  [theme.breakpoints.between("sm", "md")]: {
    left: "50%",
    transform: "translateX(-50%)",
    bottom: 10,
    fontSize: 16,
    lineHeight: "20px",
    gap: 6,
    background: "rgba(255,255,255,0.9)",
    padding: "4px 8px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    left: "50%",
    transform: "translateX(-50%)",
    bottom: 16,
    fontSize: 18,
    lineHeight: "22px",
    background: "rgba(255,255,255,0.9)",
    padding: "4px 10px",
  },
}));

export const MapPlusCapIcon = styled("svg")(({ theme }) => ({
  width: 20,
  height: 25,
  display: "block",
  flex: "0 0 auto",
  [theme.breakpoints.down("sm")]: { width: 16, height: 20 },
  [theme.breakpoints.between("sm", "md")]: { width: 18, height: 22 },
}));

export const ConvenienceWrap = styled("section")(({ theme }) => ({
  width: 1200,
  maxWidth: "100%",
  margin: "40px auto 0",
  display: "grid",
  rowGap: 12,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    marginTop: 80,
    rowGap: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    marginTop: 60,
    rowGap: 10,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    marginTop: 60,
    rowGap: 12,
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: "100%",
    maxWidth: 520,
  },
}));

export const ConvenienceTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "36px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 32,
    lineHeight: "40px",
    textAlign: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 40,
    lineHeight: "48px",
    textAlign: "center",
  },
}));

export const ConvenienceFrame = styled("div")(({ theme }) => ({
  width: 1084,
  height: 588,
  borderRadius: 20,
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    height: 220,
    borderRadius: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 600,
    height: 350,
    borderRadius: 15,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 900,
    height: 450,
    borderRadius: 18,
    justifySelf: "center",
  },
}));

export const ConvenienceImg = styled(Image)({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
});

export const FPWrap = styled("section")(({ theme }) => ({
  width: 1200,
  maxWidth: "100%",
  margin: "40px auto 0",
  display: "grid",
  rowGap: 12,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    paddingLeft: 0,
    paddingRight: 0,
    rowGap: 10,
    marginTop: 40,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    paddingLeft: 10,
    paddingRight: 0,
    rowGap: 16,
    marginTop: 40,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    paddingLeft: 24,
    paddingRight: 24,
    rowGap: 16,
    marginTop: 50,
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: "100%",
    maxWidth: 520,
    paddingLeft: 16,
    paddingRight: 16,
  },
  "@media (min-width:1200px) and (max-width:1280px)": {
    width: "100%",
    maxWidth: "calc(100vw - 80px)",
  },
}));

export const FPTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "64px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    textAlign: "center",
    fontSize: 28,
    lineHeight: "36px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    textAlign: "center",
    fontSize: 32,
    lineHeight: "40px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    lineHeight: "50px",
  },
}));

export const FPLead = styled("p")(({ theme }) => ({
  margin: 0,
  width: 1072,
  maxWidth: "100%",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    textAlign: "center",
    fontSize: 14,
    lineHeight: "22px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "90%",
    maxWidth: 600,
    textAlign: "center",
    fontSize: 18,
    lineHeight: "26px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 800,
    textAlign: "center",
    fontSize: 20,
    lineHeight: "30px",
    margin: "0 auto",
  },
}));

export const FPTabBar = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 0,
  width: "100%",
  marginTop: 6,
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    display: "none",
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 6,
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    display: "none",
  },
}));

export const FPTab = styled("button")<{ $active?: boolean }>(
  ({ $active, theme }) => ({
    boxSizing: "border-box",
    width: "100%",
    height: $active ? 62 : 60,
    padding: "18px 10px",
    border: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    background: $active
      ? "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)"
      : "#FFFFFF",
    color: $active ? "#FFFFFF" : "#00A6E2",
    fontFamily: "var(--font-cg)",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "100%",
    letterSpacing: 0,
    textAlign: "center",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: 350,
      height: 58,
      borderRadius: 0,
      fontSize: 18,
      padding: "18px 10px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      height: $active ? 58 : 56,
      padding: "16px 8px",
      fontSize: 16,
    },
    [theme.breakpoints.between("md", "lg")]: {
      height: $active ? 60 : 58,
      padding: "16px 8px",
      fontSize: 18,
    },
    "@media (min-width:600px) and (max-width:699.95px)": {
      height: $active ? 56 : 54,
      padding: "14px 8px",
      fontSize: 15,
      whiteSpace: "normal",
    },
  })
);

export const FPPanel = styled("div")<{
  $mobileShape?: "top" | "middle" | "bottom";
}>(({ theme, $mobileShape }) => ({
  boxSizing: "border-box",
  padding: "12px 15px",
  marginTop: -15,
  border: "2px solid transparent",
  borderRadius: "0 0 20px 20px",
  backgroundImage:
    "linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(90deg,#0064B5 0%, #00A9DF 100%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  display: "inline-block",
  justifySelf: "start",
  width: "calc(4 * 293.5px + 3 * 10px)",
  position: "relative",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    marginTop: 10,
    padding: 12,
    backgroundImage: "none",
    background: "#FFFFFF",
    overflow: "hidden",
    WebkitMaskImage: "linear-gradient(#000 0 0)",
    borderRadius:
      $mobileShape === "top"
        ? "10px 10px 0 0"
        : $mobileShape === "bottom"
        ? "0 0 10px 10px"
        : "0",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    marginTop: -10,
    padding: "10px 15px",
    borderRadius: "0 0 15px 15px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    marginTop: -12,
    padding: "12px 18px",
    borderRadius: "0 0 18px 18px",
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: "100%",
    maxWidth: 520,
    marginTop: 0,
    padding: "12px 12px 16px",
  },
}));

export const FPUnitTitle = styled("h4")(({ theme }) => ({
  margin: "6px 0 10px",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 22,
  marginTop: 60,
  lineHeight: "100%",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    fontSize: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 10,
    fontSize: 20,
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 30,
  },
}));

export const FPCols = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "370px 1fr",
  alignItems: "start",
  gap: 24,
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: 18,
    justifyItems: "stretch",
    marginLeft: -10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "1fr",
    gap: 20,
    justifyItems: "stretch",
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridTemplateColumns: "minmax(320px, 360px) minmax(0, 1fr)",
    gap: 20,
  },
}));

export const FPList = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "grid",
  rowGap: 10,
  marginTop: 10,
});

export const FPItem = styled("li")(({ theme }) => ({
  position: "relative",
  paddingLeft: 18,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",
  whiteSpace: "normal",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 7,
    width: 9,
    height: 9,
    borderRadius: "50%",
    backgroundImage: "linear-gradient(180deg,#0064B5 0%,#00A9DF 100%)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "18px",
    "&::before": { width: 7, height: 7, top: 5.5 , },
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 13,
    lineHeight: "20px",
    paddingLeft: 16,
    "&::before": { width: 8, height: 8, top: 6.5 },
  },
  [theme.breakpoints.between("md", "lg")]: {
    whiteSpace: "normal",
  },
}));

export const FPBtn = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 49,
  padding: "0 30px",
  borderRadius: 12,
  background: "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)",
  border: "1px solid #FFFFFF",
  color: "#FFFFFF",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 20,
  lineHeight: "13px",
  letterSpacing: "0.02em",
  textTransform: "capitalize",
  textDecoration: "none",
  width: 154,
  marginTop: 30,
  [theme.breakpoints.down("sm")]: {
    width: 150,
    height: 36,
    fontSize: 14,
    lineHeight: "13px",
    borderRadius: 8,
    alignSelf: "center",
    margin: "12px 70px 0",
    padding: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 180,
    height: 42,
    fontSize: 16,
    lineHeight: "13px",
    borderRadius: 10,
    marginTop: 8,
    justifySelf: "start",
  },
}));

export const FPImgWrap = styled("div")(({ theme }) => ({
  width: 800,
  height: 670,
  position: "relative",
  borderRadius: 10,
  display: "grid",
  marginTop: -160,
  marginBottom: -60,
  marginLeft: 0,
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: 250,
    height: 250,
    marginTop: 6,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 520,
    height: 360,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: 420,
    height: 520,
    marginTop: -60,
    marginBottom: -10,
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: "100%",
    maxWidth: 520,
    height: 360,
    marginTop: 0,
    marginBottom: 0,
  },
}));

export const FPPlanImg = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display: "block",
});

export const FPImgInner = styled("div")(({ theme }) => ({
  position: "relative",
  width: 580,
  height: 670,
  transform: "rotate(-270deg)",
  marginLeft: 80,
  [theme.breakpoints.down("sm")]: {
    width: 250,
    height: 300,
    transform: "rotate(-270deg)",
    marginLeft: 18,
    marginTop: -30,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 340,
    height: 400,
    marginLeft: 0,
    marginTop: -20,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: 420,
    height: 520,
    marginLeft: 10,
    marginTop: -20,
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: 320,
    height: 380,
    marginLeft: -4,
    marginTop: -10,
  },
}));

export const FPMobileOnly = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: { display: "block" },
}));

export const FPTabBarMobile = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "grid",
    gap: 10,
    width: "100%",
    maxWidth: 480,
    marginTop: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    display: "grid",
    gap: 10,
    width: "100%",
    maxWidth: 700,
    margin: "20px auto 0",
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    display: "grid",
    gap: 10,
    width: "100%",
    maxWidth: 520,
    margin: "20px auto 0",
  },
}));

export const FPTabMobile = styled("button")<{
  $active?: boolean;
  $shape?: "top" | "middle" | "bottom";
}>(({ $active, $shape }) => ({
  width: "100%",
  maxWidth: 480,
  height: 55,
  padding: "18px 10px",
  border: 0,
  borderRadius: !$active
    ? "10px"
    : $shape === "top"
    ? "10px 10px 0 0" // 1st active tab
    : $shape === "bottom"
    ? "0 0 10px 10px" // 4th active tab
    : "0", // 2nd & 3rd active
  background: $active
    ? "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)"
    : "#FFFFFF",
  color: $active ? "#FFFFFF" : "#00A6E2",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 18,
  lineHeight: "100%",
  textAlign: "center",
  cursor: "pointer",
  margin: "0 auto",
}));

export const PGalleryWrap = styled("section")(({ theme }) => ({
  width: 1230,
  maxWidth: "100%",
  margin: "40px auto 0",
  display: "grid",
  rowGap: 12,
  marginBottom: 80,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    rowGap: 8,
    marginTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 30,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    rowGap: 10,
    marginTop: 40,
    paddingLeft: 10,
    paddingRight: 0,
    marginBottom: 45,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    rowGap: 12,
    marginTop: 40,
    marginBottom: 60,
  },
  "@media (min-width:600px) and (max-width:699.95px)": {
    width: "100%",
    maxWidth: 520,
    paddingLeft: 16,
    paddingRight: 16,
  },
  "@media (min-width:1200px) and (max-width:1280px)": {
    width: "100%",
    maxWidth: "calc(100vw - 80px)",
  },
}));

export const PScroller = styled("div")(({ theme }) => ({
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: "410px",
  gap: 0,
  overflowX: "auto",
  overflowY: "hidden",
  scrollSnapType: "x mandatory",
  padding: "0 2px 6px",
  "&::-webkit-scrollbar": { display: "none" },
  [theme.breakpoints.down("sm")]: {
    gridAutoColumns: "100%",
    gap: 20,
    "&::-webkit-scrollbar": { display: "none" },
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridAutoColumns: "280px",
    gap: 12,
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridAutoColumns: "calc(50% - 10px)",
    gap: 16,
  },
}));

export const PCard = styled("div")(({ theme }) => ({
  width: 390,
  height: 300,
  borderRadius: 20,
  overflow: "hidden",
  background: "#F3F6F8",
  scrollSnapAlign: "start",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    height: 250,
    borderRadius: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 280,
    height: 200,
    borderRadius: 15,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    height: 260,
  },
}));

export const PCardImg = styled(Image)({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
});

export const PGalleryTrack = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1220,
  height: 14,
  borderRadius: 200,
  background: "#EEEEEE",
  overflow: "hidden",
  margin: "10px auto 0",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 480,
    height: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 790,
    height: 12,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: "100%",
    height: 12,
  },
}));

export const PGalleryThumb = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  borderRadius: 200,
  background: "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)",
  width: 0,
  marginLeft: -10,
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "100%",
  },
}));

export const SkeletonHeroTitle = styled(Skeleton)(({ theme }) => ({
  width: "65%",
  height: 80,
  maxWidth: 800,
  margin: "0 auto",
  borderRadius: 16,
  transform: "none",
  [theme.breakpoints.down("sm")]: {
    height: 56,
    width: "80%",
  },
}));

export const SkeletonHeroImage = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  transform: "none",
  [theme.breakpoints.down("sm")]: {
    borderRadius: 10,
  },
}));

export const SkeletonIntroLine = styled(Skeleton)(({ theme }) => ({
  width: "90%",
  maxWidth: 1000,
  height: 36,
  margin: "8px auto",
  borderRadius: 12,
  [theme.breakpoints.down("sm")]: {
    height: 26,
    width: "95%",
  },
}));

// Highlights + Map
export const SkeletonHighlightTitle = styled(Skeleton)(({ theme }) => ({
  width: 380,
  height: 70,
  borderRadius: 16,
  marginBottom: 20,
  [theme.breakpoints.down("sm")]: {
    width: 280,
    height: 50,
    margin: "0 auto 16px",
  },
}));

export const SkeletonFeatureItem = styled(Skeleton)(({ theme }) => ({
  width: "85%",
  height: 36,
  borderRadius: 8,
  [theme.breakpoints.down("sm")]: {
    height: 24,
    width: "90%",
  },
}));

export const SkeletonMap = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: 520,
  borderRadius: 20,
  [theme.breakpoints.down("sm")]: { height: 420 },
  [theme.breakpoints.between("sm", "md")]: { height: 350 },
  [theme.breakpoints.between("md", "lg")]: { height: 440 },
}));

export const SkeletonMapCaption = styled(Skeleton)(({ theme }) => ({
  width: 260,
  height: 40,
  borderRadius: 20,
  marginLeft: 8,
  [theme.breakpoints.down("sm")]: {
    width: 180,
    height: 30,
  },
}));

// Convenience
export const SkeletonConvenienceTitle = styled(Skeleton)(({ theme }) => ({
  width: 300,
  height: 70,
  margin: "0 auto 24px",
  borderRadius: 16,
  [theme.breakpoints.down("sm")]: {
    width: 240,
    height: 50,
  },
}));

export const SkeletonConvenienceImage = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: 588,
  borderRadius: 20,
  [theme.breakpoints.down("sm")]: { height: 220 },
  [theme.breakpoints.between("sm", "md")]: { height: 350 },
  [theme.breakpoints.between("md", "lg")]: { height: 450 },
}));

// Floor Plans
export const SkeletonFPTitle = styled(Skeleton)(({ theme }) => ({
  width: "70%",
  height: 80,
  maxWidth: 600,
  margin: "0 auto 20px",
  borderRadius: 16,
  [theme.breakpoints.down("sm")]: {
    height: 56,
    width: "85%",
  },
}));

export const SkeletonFPLead = styled(Skeleton)(({ theme }) => ({
  width: "92%",
  height: 140,
  maxWidth: 1100,
  margin: "20px auto 30px",
  borderRadius: 12,
  [theme.breakpoints.down("sm")]: {
    height: 100,
    width: "95%",
  },
}));

export const SkeletonTab = styled(Skeleton)(({ theme }) => ({
  height: 62,
  borderRadius: 10,
  [theme.breakpoints.down("md")]: { height: 58 },
}));

export const SkeletonUnitTitle = styled(Skeleton)({
  width: "60%",
  height: 48,
  borderRadius: 10,
  marginBottom: 16,
});

export const SkeletonFeatureText = styled(Skeleton)(({ theme }) => ({
  width: "78%",
  height: 36,
  marginBottom: 12,
  borderRadius: 8,
  [theme.breakpoints.down("sm")]: {
    height: 26,
    width: "88%",
  },
}));

export const SkeletonCheckBtn = styled(Skeleton)({
  width: 154,
  height: 49,
  borderRadius: 12,
  marginTop: 30,
});

// Floor Plan Image (rotated container!)
export const SkeletonFloorPlanImage = styled(Skeleton)(({ theme }) => ({
  width: 580,
  height: 670,
  borderRadius: 10,
  transform: "rotate(-270deg)",
  transformOrigin: "center",
  marginLeft: 80,
  [theme.breakpoints.down("sm")]: {
    width: 250,
    height: 300,
    marginLeft: 18,
    marginTop: -30,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 340,
    height: 400,
    marginLeft: 0,
    marginTop: -20,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: 420,
    height: 520,
    marginLeft: 10,
    marginTop: -20,
  },
}));

// Gallery
export const SkeletonGalleryCard = styled(Skeleton)({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  transform: "none",
});

export const SkeletonTrackThumb = styled(Skeleton)({
  width: "100%",
  height: "100%",
  borderRadius: 200,
  background: "linear-gradient(90deg, #0064B5, #00A9DF)",
});
"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";

export const VilaWrap = styled(Container)(({ theme }) => ({
  width: 1280,
  maxWidth: "100%",
  margin: "40px auto 0",
  paddingLeft: 15,
  paddingRight: 80,
  boxSizing: "border-box",
  display: "grid",
  rowGap: 24,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    margin: "40px auto 0",
    paddingLeft: 12,
    paddingRight: 12,
    rowGap: 16,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    paddingLeft: 20,
    paddingRight: 20,
    rowGap: 20,
  },
}));

export const VilaTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    lineHeight: "40px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 38,
    lineHeight: "46px",
  },
}));

export const VilaHero = styled("div")(({ theme }) => ({
  width: 1200,
  height: 325,
  margin: "0 auto",
  borderRadius: 20,
  overflow: "hidden",
  border: "1px solid #E7EDF5",
  [theme.breakpoints.down("sm")]: {
    width: "100%", 
    maxWidth: "100%",
    height: 140,
    borderRadius: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    height: 220,
  },
}));

export const VilaHeroImg = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const VilaLead = styled("div")(({ theme }) => ({
  width: 1206,
  maxWidth: "100%",
  margin: "0 auto",
  marginTop: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "90%",
    maxWidth: 600,
  },
}));

export const VilaPara = styled("p")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  "& + &": { marginTop: 10 },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "24px",
  },
}));

export const VilaSpan = styled("span")(({ theme }) => ({
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "24px",
  },
}));

export const KFRow = styled("section")(({ theme }) => ({
  width: 1200,
  maxWidth: "100%",
  margin: "40px auto 0",
  display: "grid",
  gridTemplateColumns: "700px 520px",
  gap: 50,
  alignItems: "start",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    gridTemplateColumns: "1fr",
    gap: 20,
    marginTop: 30,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    gridTemplateColumns: "1fr",
    gap: 30,
  },
}));

export const KFTitle = styled("h3")(({ theme }) => ({
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
}));

export const KFList = styled("ul")(({ theme }) => ({
  margin: "12px 0 0",
  padding: 0,
  listStyle: "none",
  display: "grid",
  rowGap: 12,
  [theme.breakpoints.down("sm")]: {
    rowGap: 8,
  },
  [theme.breakpoints.between("sm", "md")]: {
    rowGap: 10,
  },
}));

export const KFItem = styled("li")(({ theme }) => ({
  position: "relative",
  paddingLeft: 16,
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
    top: 11,
    width: 9,
    height: 9,
    borderRadius: "50%",
    backgroundImage: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
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

export const MapOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 550,
  backgroundColor: "rgba(184, 202, 216, 0.85)",
  mixBlendMode: "color",
  pointerEvents: "none",
  borderRadius: 20,
  [theme.breakpoints.down("sm")]: {
    height: 420,
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: 500,
  },
}));

export const KFBrochure = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 49,
  padding: "0 30px",
  borderRadius: 12,
  background: "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)",
  color: "#FFFFFF",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 20,
  lineHeight: "13px",
  letterSpacing: "0.02em",
  textDecoration: "none",
  marginTop: 25,
  width: 249,
  border: "1px solid #FFFFFF",
  [theme.breakpoints.down("sm")]: {
    width: 170,
    height: 36,
    fontSize: 14,
    lineHeight: "13px",
    padding: "0",
    letterSpacing: "0.02em",
    alignSelf: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 200,
    height: 42,
    fontSize: 16,
    alignSelf: "center",
  },
}));

export const MapCard = styled("div")(({ theme }) => ({
  width: 450,
  height: 620,
  borderRadius: 20,
  overflow: "hidden",
  background: "#FFFFFF",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    overflow: "visible",
    borderRadius: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    height: 550,
  },
}));

export const MapIframe = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: 550,
  border: "1px solid #E7EDF5",
  borderRadius: 20,
  display: "block",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    height: 420,
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: 500,
  },
}));

export const MapCaption = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  bottom: 0,
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "1px 10px",
  borderRadius: 0,
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
    bottom: 0,
    fontSize: 16,
    lineHeight: "20px",
    gap: 6,
    background: "rgba(255, 255, 255, 0.9)",
    padding: "4px 8px",
  },
}));

export const MapCapIcon = styled("svg")(({ theme }) => ({
  width: 20,
  height: 25,
  display: "block",
  flex: "0 0 auto",
  [theme.breakpoints.down("sm")]: { width: 16, height: 20 },
  [theme.breakpoints.between("sm", "md")]: { width: 18, height: 22, marginLeft: -250 },
}));

export const MapPinWrap = styled("div")(({ theme }) => ({
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
}));

export const MapPinSvg = styled("svg")({
  width: "100%",
  height: "100%",
  display: "block",
});

export const CGalleryWrap = styled("section")(({ theme }) => ({
  width: 1230,
  maxWidth: "100%",
  margin: "40px auto 0",
  display: "grid",
  rowGap: 12,
  paddingLeft: 22,
  marginBottom: 80,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    rowGap: 8,
    marginTop: 40,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 30,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 650,
    rowGap: 10,
    marginTop: 40,
    paddingLeft: 0,
    paddingRight: 20,
    marginBottom: 40,
  },
}));

export const CScroller = styled("div")(({ theme }) => ({
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
    gridAutoColumns: "210px",
    gap: 8,
    maxWidth: 700,
  },
}));

export const CCard = styled("div")(({ theme }) => ({
  width: 390,
  height: 300,
  borderRadius: 20,
  overflow: "hidden",
  background: "#F3F6F8",
  scrollSnapAlign: "start",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 250,
    borderRadius: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 210,
    height: 160,
    borderRadius: 15,
  },
}));

export const CCardImg = styled(Image)({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
});

export const CGalleryTrack = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1215,
  height: 14,
  borderRadius: 200,
  background: "#EEEEEE",
  overflow: "hidden",
  margin: "10px auto 0",
  marginLeft: 0,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    height: 12,
  },
}));

export const CGalleryThumb = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  borderRadius: 200,
  background: "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)",
  width: 0,
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "100%",
  },
}));

export const SkeletonBox = styled("div")({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  background: "#E0E0E0",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
    animation: "shimmer 1.5s infinite",
  },
  "@keyframes shimmer": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(100%)" },
  },
});

export const SkeletonTitle = styled("div")(({ theme }) => ({
  height: 55,
  width: "70%",
  maxWidth: 600,
  margin: "0 auto",
  borderRadius: 8,
  background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
  backgroundSize: "200% 100%",
  animation: "skeleton-loading 1.8s infinite",
  [theme.breakpoints.down("sm")]: { height: 40 },
  "@keyframes skeleton-loading": {
    "0%": { backgroundPosition: "200% 0" },
    "100%": { backgroundPosition: "-200% 0" },
  },
}));

export const SkeletonHero = styled("div")({
  width: "100%",
  height: "100%",
  background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
  backgroundSize: "200% 100%",
  animation: "skeleton-loading 1.8s infinite",
  "@keyframes skeleton-loading": {
    "0%": { backgroundPosition: "200% 0" },
    "100%": { backgroundPosition: "-200% 0" },
  },
});

export const SkeletonLead = styled("div")(({ theme }) => ({
  height: 24,
  width: "100%",
  marginBottom: 12,
  borderRadius: 6,
  background: "linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%)",
  backgroundSize: "200% 100%",
  animation: "skeleton-loading 1.8s infinite",
  [theme.breakpoints.down("sm")]: { height: 18 },
  "@keyframes skeleton-loading": {
    "0%": { backgroundPosition: "200% 0" },
    "100%": { backgroundPosition: "-200% 0" },
  },
}));

export const SkeletonFeatureItem = styled("div")({
  height: 20,
  width: "85%",
  borderRadius: 6,
  background: "linear-gradient(90deg, #e5e5e5 25%, #f0f0f0 50%, #e5e5e5 75%)",
  backgroundSize: "200% 100%",
  animation: "skeleton-loading 1.8s infinite",
  "@keyframes skeleton-loading": {
    "0%": { backgroundPosition: "200% 0" },
    "100%": { backgroundPosition: "-200% 0" },
  },
});

export const SkeletonMap = styled("div")(({ theme }) => ({
  width: "100%",
  height: 550,
  borderRadius: 20,
  background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
  backgroundSize: "200% 100%",
  animation: "skeleton-loading 1.8s infinite",
  [theme.breakpoints.down("sm")]: { height: 420 },
  [theme.breakpoints.between("sm", "md")]: { height: 500 },
  "@keyframes skeleton-loading": {
    "0%": { backgroundPosition: "200% 0" },
    "100%": { backgroundPosition: "-200% 0" },
  },
}));

export const SkeletonGalleryCard = styled("div")({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  background: "linear-gradient(90deg, #e2e2e2 25%, #f3f3f3 50%, #e2e2e2 75%)",
  backgroundSize: "200% 100%",
  animation: "skeleton-loading 1.8s infinite",
  "@keyframes skeleton-loading": {
    "0%": { backgroundPosition: "200% 0" },
    "100%": { backgroundPosition: "-200% 0" },
  },
});

export const SkeletonTrack = styled("div")({
  width: "100%",
  height: "100%",
  borderRadius: 200,
  background: "#EEEEEE",
  position: "relative",
  overflow: "hidden",
});

export const SkeletonThumb = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "30%",
  borderRadius: 200,
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  opacity: 0.6,
  animation: "skeleton-thumb 2s infinite",
  "@keyframes skeleton-thumb": {
    "0%, 100%": { transform: "translateX(0)" },
    "50%": { transform: "translateX(233%)" },
  },
});
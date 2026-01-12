"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Skeleton from "@mui/material/Skeleton";

export const GalleryWrap = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "40px auto 0",
  paddingInline: 16,
  boxSizing: "border-box",
  display: "grid",
  rowGap: 12,
  justifyItems: "center",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: "calc(100vw - 48px)",
    margin: "40px auto 0",
    paddingInline: 24,
    rowGap: 11,
    "& > div:first-of-type": {
      width: "100%",
      maxWidth: 700,
      margin: "10px auto 0",
      borderRadius: 20,
    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: "calc(100vw - 48px)",
    margin: "40px auto 0",
    paddingInline: 24,
    rowGap: 20,
  },

  [theme.breakpoints.up("lg")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "40px auto 0",
    paddingInline: 16,
  },
}));

export const GalleryTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  color: "#0E1B41",
  [theme.breakpoints.down("md")]: { fontSize: 36 },
  [theme.breakpoints.down("sm")]: { fontSize: 30 },
}));

export const GalleryHeroFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 1200,
  margin: "10px auto 0",
  height: 325,
  borderRadius: 20,
  overflow: "hidden",

  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 700,
    height: 220,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%", 
    height: 140,
    borderRadius: 10,
    margin: "10px auto 0",
  },
}));

export const GalleryHeroImg = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "50% 25%",
  filter: "grayscale(100%)",
  display: "block",
  zIndex: 0,
  [theme.breakpoints.between("sm", "md")]: { objectPosition: "50% 30%" },
  [theme.breakpoints.down("sm")]: { objectPosition: "50% 20%", },
}));

export const GalleryHeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 1,
  zIndex: 1,
});

export const GallerySubText = styled("p")(({ theme }) => ({
  marginTop: 16,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  width: "100%",
  maxWidth: 1000,
  marginLeft: "auto",
  marginRight: "auto",
  whiteSpace: "normal",

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "24px",
    maxWidth: "90%",
    whiteSpace: "normal",
  },

  [theme.breakpoints.between(600, 700)]: {
    fontSize: 16,
    lineHeight: "24px",
    maxWidth: "92%",
    padding: "0 6px",
    whiteSpace: "normal",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
    width: "100%",
    maxWidth: "100%",
    margin: "12px auto 0",
    padding: 0,
    whiteSpace: "normal",
  },
}));

export const GallerySection = styled("section")(({ theme }) => ({
  marginTop: 40,
  display: "grid",
  justifyItems: "center",
  marginBottom: 80,
  [theme.breakpoints.between("sm", "md")]: { marginTop: 30, marginBottom: 60, },
  [theme.breakpoints.between(600, 700)]: { marginTop: 28 },
  [theme.breakpoints.down("sm")]: { marginTop: 24, marginBottom: 30, },
}));

export const GalleryHeading = styled("h2")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  color: "#0E1B41",
  textAlign: "center",
  marginBottom: 20,
  [theme.breakpoints.down("md")]: { fontSize: 30,marginBottom: 20, },
  [theme.breakpoints.down("sm")]: { fontSize: 22, marginBottom: 20, },
  [theme.breakpoints.between(600, 700)]: { fontSize: 30, marginBottom: 20, },
}));

export const MainImageFrame = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 1200,
  height: 700,
  borderRadius: 30,
  overflow: "hidden",
  margin: "0 auto",
  position: "relative",

  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: "95%",
    height: 400,
  },
  [theme.breakpoints.between(600, 700)]: {
    maxWidth: "92%",
    height: 360,
    borderRadius: 22,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    height: 260,
    borderRadius: 16,
    margin: "0 auto",
  },
}));

export const MainImage = styled(Image)(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const ThumbnailsContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 1170,
  margin: "30px auto 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover .left, &:hover .right": {
    opacity: 1,
    visibility: "visible",
    pointerEvents: "auto",
  },
  [theme.breakpoints.between("sm", "md")]: { maxWidth: "95%" },
  [theme.breakpoints.between(600, 700)]: { maxWidth: "92%", marginTop: 22 },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    marginTop: 20,
  },
}));

export const ThumbnailsRow = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: 10,
  overflow: "hidden",
  width: "100%",
  [theme.breakpoints.between("sm", "md")]: { gap: 8 },
  [theme.breakpoints.between(600, 700)]: { gap: 6 },
  [theme.breakpoints.down("sm")]: {
    gap: 10,
    overflowX: "scroll",
    justifyContent: "flex-start",
    "&::-webkit-scrollbar": { display: "none" },
  },
}));

export const ThumbFrame = styled("button")(({ theme }) => ({
  width: 220,
  height: 160,
  border: "none",
  padding: 0,
  background: "none",
  borderRadius: 15,
  overflow: "hidden",
  cursor: "pointer",
  flexShrink: 0,
  "& img": { width: "100%", height: "100%", objectFit: "cover" },

  [theme.breakpoints.between("sm", "md")]: { width: 140, height: 100 },
  [theme.breakpoints.between(600, 700)]: {
    width: 120,
    height: 84,
    borderRadius: 12,
  },

  [theme.breakpoints.down("sm")]: {
    width: "calc((100% - 20px) / 3)",
    height: 70,
    borderRadius: 12,
  },
}));

export const ArrowButton = styled("button")(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: "50%",
  border: "none",
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  position: "absolute",
  zIndex: 2,
  opacity: 0,
  visibility: "hidden",
  pointerEvents: "none",
  transform: "scale(0.9)",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  "&.left": { left: -20 },
  "&.right": { right: -20 },
  "&:focus-visible": {
    opacity: 1,
    visibility: "visible",
    pointerEvents: "auto",
    transform: "scale(1)",
    outline: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 44,
    height: 44,
    "&.left": { left: -10 },
    "&.right": { right: -10 },
  },
  [theme.breakpoints.between(600, 700)]: {
    width: 40,
    height: 40,
    "&.left": { left: -8 },
    "&.right": { right: -8 },
  },
  [theme.breakpoints.down("sm")]: {
    width: 32,
    height: 32,
    opacity: 1,
    visibility: "visible",
    pointerEvents: "auto",
    transform: "scale(1)",
    "&.left": { left: -6 },
    "&.right": { right: -6 },
  },
}));

export const ArrowBack = styled(ArrowBackRoundedIcon)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: 30,
  [theme.breakpoints.down("md")]: { fontSize: 24 },
  [theme.breakpoints.down("sm")]: { fontSize: 20 },
  [theme.breakpoints.between(600, 700)]: { fontSize: 18 },
}));

export const ArrowForward = styled(ArrowForwardRoundedIcon)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: 30,
  [theme.breakpoints.down("md")]: { fontSize: 24 },
  [theme.breakpoints.down("sm")]: { fontSize: 20 },
  [theme.breakpoints.between(600, 700)]: { fontSize: 18 },
}));

export const GalleryHeroSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  animation: "none",
  backgroundColor: "#E0E0E0",
  transform: "none",
  [theme.breakpoints.down("sm")]: {
    borderRadius: 10,
  },
}));

export const MainImageSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 30,
  animation: "none",
  backgroundColor: "#E0E0E0",
  transform: "none",
  [theme.breakpoints.between("sm", "md")]: {
    borderRadius: 22,
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: 16,
  },
}));

export const ThumbSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 15,
  animation: "none",
  backgroundColor: "#E0E0E0",
  transform: "none",
  [theme.breakpoints.between("sm", "md")]: {
    borderRadius: 12,
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: 12,
  },
}));
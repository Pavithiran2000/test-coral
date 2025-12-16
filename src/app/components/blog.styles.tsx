"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export const BlogsWrap = styled(Container)(({ theme }) => ({
  width: 1280,
  maxWidth: "100%",
  margin: "30px auto 0",
  paddingLeft: 0,
  paddingRight: 0,
  boxSizing: "border-box",
  display: "grid",
  rowGap: 12,
  justifyItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "0 24px",
    margin: "32px auto 0",
    justifyItems: "center",
    boxSizing: "border-box",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: "20px auto 0",
    padding: "0 16px",
    justifyItems: "stretch",
    boxSizing: "border-box",
  },
}));

export const BlogHeroFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1200,
  marginLeft: 0,
  marginTop: 10,
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

export const BlogHeroImg = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "50% 25%",
  filter: "grayscale(100%)",
  display: "block",
  zIndex: 0,
  [theme.breakpoints.between("sm", "md")]: { objectPosition: "50% 30%" },
  [theme.breakpoints.down("sm")]: { objectPosition: "50% 20%" },
}));

export const BlogHeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 1,
  zIndex: 1,
});

export const BlogsTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  width: 1280,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 36,
    lineHeight: "44px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
    lineHeight: "32px",
    width: "100%",
    padding: "0 4px",
    boxSizing: "border-box",
  },
}));

export const BlogsIntro = styled("p")(({ theme }) => ({
  margin: "30px auto 0",
  width: 1200,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",

  [theme.breakpoints.down("md")]: {
    width: "90%",
    fontSize: 17,
    lineHeight: "26px",
    marginTop: 24,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 13,
    lineHeight: "21px",
    marginTop: 18,
    color: "#6B6B6B",
    padding: "0 6px",
    boxSizing: "border-box",
  },
}));

export const BlogSection = styled("section")(({ theme }) => ({
  marginTop: 10,
  width: 1000,
  maxWidth: 1100,
  padding: "40px 0",
  display: "grid",
  rowGap: 32,
  marginLeft: -208,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: "none",
    marginLeft: 0,
    padding: "32px 0",
    rowGap: 24,
    marginTop: 40,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down(750)]: {
    rowGap: 20,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "20px 0",
    rowGap: 18,
    borderBottom: "none",
    marginTop: -10,
    boxSizing: "border-box",
  },
}));

export const BlogGrid = styled("div")(({ theme }) => ({
  width: "1200",
  display: "grid",
  gridTemplateColumns: "310px auto",
  gap: "30px",
  padding: "30px",
  border: "1px solid #DEDEDE",
  borderRadius: 20,
  backgroundColor: "#FFFFFF",
  boxSizing: "border-box",
  transition: "background-color 0.25s ease, border-color 0.25s ease",
  "&:hover": {
    backgroundColor: "rgba(236, 249, 255, 1)",
    borderColor: "rgba(184, 202, 216, 1)",
  },

  [theme.breakpoints.down("md")]: {
    width: "100%",
    gridTemplateColumns: "280px 1fr",
    gap: 20,
    padding: "24px",
    borderRadius: 16,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down(750)]: {
    gridTemplateColumns: "260px 1fr",
    gap: 16,
    padding: "20px",
    borderRadius: 14,
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "10px",
    width: "100%",
    padding: "12px",
    borderRadius: 12,
    border: "1px solid #B8CAD8",
    boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  },
}));

export const BlogLeft = styled("div")(({ theme }) => ({
  position: "relative",
  width: 320,
  height: 280,
  borderRadius: 20,
  overflow: "hidden",
  marginTop: -20,
  marginLeft: -20,
  marginBottom: -20,
  [theme.breakpoints.down("md")]: {
    width: 280,
    height: 280,
    marginTop: -20,
    marginLeft: -20,
    marginBottom: -20,
    borderRadius: 16,
  },
  [theme.breakpoints.down(750)]: {
    width: 260,
    height: "100%",
    marginTop: -16,
    marginLeft: -16,
    marginBottom: -16,
    borderRadius: 14,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 280,
    margin: 0,
    borderRadius: 10,
  },
}));

export const BlogImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 20,

  [theme.breakpoints.down("md")]: {
    borderRadius: 16,
  },

  [theme.breakpoints.down(750)]: {
    borderRadius: 14,
  },

  [theme.breakpoints.down("sm")]: {
    borderRadius: 10,
  },
}));

export const BlogDateBox = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 20,
  width: 65,
  height: 73,
  borderBottomRightRadius: 5,
  borderBottomLeftRadius: 5,
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,

  [theme.breakpoints.down("md")]: {
    left: 14,
    width: 55,
    height: 60,
    gap: 2,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },

  [theme.breakpoints.down(750)]: {
    left: 12,
    width: 50,
    height: 55,
    gap: 2,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },

  [theme.breakpoints.down("sm")]: {
    width: 45,
    height: 43,
    left: 10,
    borderRadius: 5,
    gap: 2,
  },
}));

export const BlogDateMonth = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  fontSize: 12,
  lineHeight: "100%",
  color: "#F3F4F6",

  [theme.breakpoints.down("md")]: {
    fontSize: 11,
  },

  [theme.breakpoints.down(750)]: {
    fontSize: 10,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
    lineHeight: "100%",
  },
}));

export const BlogDateDay = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 24,
  lineHeight: "100%",
  color: "#F3F4F6",

  [theme.breakpoints.down("md")]: {
    fontSize: 20,
  },

  [theme.breakpoints.down(750)]: {
    fontSize: 18,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    lineHeight: "100%",
  },
}));

export const BlogRight = styled("div")(({ theme }) => ({
  display: "grid",
  alignContent: "flex-start",
  gap: 13,
  marginLeft: -20,
  marginRight: -20,

  [theme.breakpoints.down("md")]: {
    gap: 10,
    marginLeft: -20,
    marginRight: -20,
  },

  [theme.breakpoints.down(750)]: {
    gap: 8,
    marginLeft: -16,
    marginRight: -16,
  },

  [theme.breakpoints.down("sm")]: {
    margin: 0,
    gap: 6,
  },
}));

export const BlogHead = styled("h2")(({ theme }) => ({
  margin: 0,
  width: 840,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 28,
  lineHeight: "40px",
  color: "#0E1B41",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 22,
    lineHeight: "32px",
  },

  [theme.breakpoints.down(750)]: {
    fontSize: 20,
    lineHeight: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    lineHeight: "28px",
    fontWeight: 600,
    width: "100%",
  },
}));

export const BlogPara = styled("p")(({ theme }) => ({
  margin: 0,
  width: 840,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "27px",
  color: "#595959",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 16,
    lineHeight: "24px",
  },

  [theme.breakpoints.down(750)]: {
    fontSize: 15,
    lineHeight: "22px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "18px",
    color: "#595959",
    width: "100%",
    whiteSpace: "normal",
  },
}));

export const BlogButton = styled("button")(({ theme }) => ({
  width: 150,
  height: 49,
  borderRadius: 12,
  border: "none",
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  color: "#FFFFFF",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 20,
  letterSpacing: "2%",
  lineHeight: "13px",
  textTransform: "capitalize",
  cursor: "pointer",
  transition: "0.3s",

  "&:hover": {
    opacity: 0.9,
  },

  [theme.breakpoints.down("md")]: {
    width: 130,
    height: 42,
    fontSize: 18,
  },

  [theme.breakpoints.down("sm")]: {
    width: 100,
    height: 36,
    fontSize: 14,
    lineHeight: "13px",
    letterSpacing: "2%",
    borderRadius: 10,
    marginTop: 10,
  },
}));

export const BlogHeroSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  backgroundColor: "#E0E0E0",
  animation: "none",
  transform: "none",
  [theme.breakpoints.down("sm")]: { borderRadius: 10 },
}));

export const BlogImageSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  backgroundColor: "#E0E0E0",
  animation: "none",
  transform: "none",
  [theme.breakpoints.down("md")]: { borderRadius: 16 },
  [theme.breakpoints.down(750)]: { borderRadius: 14 },
  [theme.breakpoints.down("sm")]: { borderRadius: 10 },
}));

export const LoadingButton = styled(BlogButton)({
  opacity: 0.6,
  cursor: "default",
  pointerEvents: "none",
});
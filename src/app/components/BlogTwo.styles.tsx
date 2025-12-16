"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export const CalendarSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <rect
      x="1"
      y="2.5"
      width="14"
      height="12"
      rx="2.2"
      stroke="#00A6E2"
      strokeWidth="1.5"
    />
    <path d="M4 1.5v3M12 1.5v3" stroke="#00A6E2" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="6.2" y="3.4" width="3.6" height="1.4" rx="0.7" fill="#00A6E2" />
    <path d="M1 6h14" stroke="#00A6E2" strokeWidth="1.5" />
    <circle cx="4.0" cy="9.0" r="0.8" fill="#00A6E2" />
    <circle cx="8.0" cy="9.0" r="0.8" fill="#00A6E2" />
    <circle cx="12.0" cy="9.0" r="0.8" fill="#00A6E2" />
    <circle cx="4.0" cy="11.4" r="0.8" fill="#00A6E2" />
    <circle cx="8.0" cy="11.4" r="0.8" fill="#00A6E2" />
  </svg>
);

export const IconCalendar = styled(CalendarSvg)({
  width: 20,
  height: 20,
  flexShrink: 0,
});

export const IconAuthor = styled(Image)({
  width: 22,
  height: 22,
  display: "inline-block",
  objectFit: "contain",
});

export const BlogTwoWrap = styled("div")(({ theme }) => ({
  width: 1280,
  maxWidth: "100%",
  margin: "0 auto",
  paddingTop: 40,
  paddingLeft: 40,
  paddingRight: 40,
  display: "grid",
  justifyItems: "center",
  backgroundColor: "#FFFFFF",

  [theme.breakpoints.down("md")]: {
    padding: "32px 24px",
    boxSizing: "border-box",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "20px 16px",
    boxSizing: "border-box",
  },
}));

export const BlogTwoTitle = styled("h1")(({ theme }) => ({
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 46,
  lineHeight: "100%",
  color: "#0E1B41",

  [theme.breakpoints.down("md")]: {
    fontSize: 38,
    lineHeight: "46px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    lineHeight: "40px",
  },
}));

export const BlogTwoHero = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1200,
  height: 450,
  marginTop: 20,
  borderRadius: 20,
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 350,
    borderRadius: 16,
    marginTop: 24,
    boxSizing: "border-box",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 140,
    borderRadius: 10,
  },
}));

export const BlogTwoHeroImg = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "100% 10%",
  borderRadius: "inherit",
});

export const BlogInfoWrap = styled("div")(({ theme }) => ({
  width: 1200,
  marginTop: 30,
  display: "flex",
  flexDirection: "column",
  color: "#0E1B41",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: 24,
    boxSizing: "border-box",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: 20,
  },
}));

export const BlogHeaderRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 18,
  paddingBottom: 20,
  borderBottom: "1px solid",
  borderImage: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%) 1",

  [theme.breakpoints.down("md")]: {
    gap: 16,
    paddingBottom: 18,
  },

  [theme.breakpoints.down("sm")]: {
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 12,
  },
}));

export const DateBox = styled("div")(({ theme }) => ({
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  borderRadius: 10,
  width: 75,
  height: 94,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  [theme.breakpoints.down("md")]: {
    width: 75,
    height: 94,
    borderRadius: 9,
  },

  [theme.breakpoints.down("sm")]: {
    width: 55,
    height: 73,
    borderRadius: 8,
    marginTop: -20,
  },
}));

export const DateBoxText = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  fontSize: 20,
  color: "#F3F4F6",
  marginTop: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: 11,
    marginTop: -2,
    marginBottom: 8,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: -5,
    marginBottom: 10,
  },
}));

export const DateBoxNumber = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 42,
  color: "#FFFFFF",
  lineHeight: "100%",
  marginTop: 10,
  [theme.breakpoints.down("md")]: {
    fontSize: 22,
  },
}));

export const BlogTitle = styled("h2")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontSize: 36,
  fontWeight: 600,
  color: "#0E1B41",
  lineHeight: "44px",
  [theme.breakpoints.down("md")]: {
    fontSize: 30,
    lineHeight: "38px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    lineHeight: "22px",
    marginTop: 10,
  },
}));

export const MetaRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 14,
  color: "#595959",
  fontFamily: "var(--font-cr)",
  fontSize: 18,
  marginTop: 25,
  "& .divider": { width: 1, height: 22, backgroundColor: "#00A6E2" },

  [theme.breakpoints.down("md")]: {
    fontSize: 16,
    gap: 12,
    marginTop: 8,
    "& .divider": { height: 20 },
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    gap: 8,
    marginTop: 15,
  },
}));

export const Paragraph = styled("p")(({ theme }) => ({
  fontFamily: "var(--font-crimson)",     
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  margin: "20px 0 0 0",
  fontWeight: 400,
  "&& a, && a *": {
    textDecoration: "none !important",
    borderBottom: "0 !important",
    color: "inherit !important",
  },
  "&& u, && ins, && a u, && a ins": {
    textDecoration: "none !important",
    borderBottom: "0 !important",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: 18,
    lineHeight: "26px",
    marginTop: 16,
  },

  [theme.breakpoints.down("sm")]: {
    fontFamily: "var(--font-crimson)",  
    fontSize: 14,
    lineHeight: "22px",
    marginTop: 10,
  },
}));

export const HighlightedText = styled("span")({
  textDecoration: "underline",
  textDecorationColor: "#595959",
  textDecorationThickness: "2px",
  textUnderlineOffset: "3px",
});

export const BulletList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  marginTop: 10,
  paddingLeft: 15,
  display: "flex",
  flexDirection: "column",
  gap: 10,

  [theme.breakpoints.down("md")]: {
    paddingLeft: 12,
    gap: 8,
    marginTop: 8,
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: 10,
    gap: 6,
  },
}));

export const BulletItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  fontFamily: "vvar(--font-crimson)",
  fontSize: 21,
  lineHeight: "30px",
  color: "#595959",
  whiteSpace: "normal",

  [theme.breakpoints.down("md")]: {
    fontSize: 18,
    lineHeight: "26px",
    gap: 8,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    fontFamily: "vvar(--font-crimson)",
    lineHeight: "18px",
    gap: 8,
  },
}));

export const BulletDot = styled("span")(({ theme }) => ({
  width: 9,
  height: 9,
  borderRadius: "50%",
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  marginTop: 10,
  flexShrink: 0,

  [theme.breakpoints.down("md")]: {
    width: 8,
    height: 8,
    marginTop: 9,
  },

  [theme.breakpoints.down("sm")]: {
    width: 7,
    height: 7,
    marginTop: 6,
  },
}));

export const NavRow = styled("div")(({ theme }) => ({
  width: "100%",
  marginTop: 40,
  paddingTop: 15,
  paddingBottom: 15,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: "1px solid #B8CAD8",
  borderBottom: "1px solid #B8CAD8",

  [theme.breakpoints.down("md")]: {
    marginTop: 35,
    padding: "12px 0",
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: 30,
    padding: "10px 0",
  },
}));

export const NavButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "none",
  border: "none",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    gap: 7,
  },

  [theme.breakpoints.down("sm")]: {
    gap: 6,
  },
}));

export const NavText = styled("span")(({ theme }) => ({
  fontFamily: "var(--font-cr)",
  fontWeight: 500,
  fontSize: 24,
  lineHeight: "25px",
  color: "#00A6E2",

  [theme.breakpoints.down("md")]: {
    fontSize: 20,
    lineHeight: "22px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "16px",
  },
}));

export const NavIconLeft = styled(ArrowBackRoundedIcon)(({ theme }) => ({
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  borderRadius: "50%",
  color: "#FFFFFF",
  fontSize: 24,
  padding: 10,

  [theme.breakpoints.down("md")]: {
    fontSize: 22,
    padding: 9,
  },

  [theme.breakpoints.down("sm")]: {
    width: 26,
    height: 26,
    borderRadius: 70,
    fontSize: 12,
    padding: 6,
  },
}));

export const NavIconRight = styled(ArrowForwardRoundedIcon)(({ theme }) => ({
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  borderRadius: "50%",
  color: "#FFFFFF",
  fontSize: 24,
  padding: 10,

  [theme.breakpoints.down("md")]: {
    fontSize: 22,
    padding: 9,
  },

  [theme.breakpoints.down("sm")]: {
    width: 26,
    height: 26,
    borderRadius: 70,
    fontSize: 12,
    padding: 6,
  },
}));

export const RecentWrap = styled("section")(({ theme }) => ({
  width: 1200,
  marginTop: 50,
  display: "grid",
  gap: 20,
  marginBottom: 60,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: 40,
    gap: 18,
    boxSizing: "border-box",
    marginBottom: 40,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: 30,
    gap: 16,
    marginBottom: 30,
  },
}));

export const RecentTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 46,
  lineHeight: "44px",
  color: "#0E1B41",

  [theme.breakpoints.down("md")]: {
    fontSize: 32,
    lineHeight: "40px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    fontWeight: 400,
    lineHeight: "36px",
    textAlign: "center",
  },
}));

export const RecentGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 20,

  [theme.breakpoints.down("md")]: {
    gap: 16,
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: 12,
  },
}));

export const RecentCard = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "65px 1fr",
  gap: 12,
  padding: 10,
  border: "1px solid #BBCAD8",
  borderRadius: 10,
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "rgba(236, 249, 255, 1)",  
    borderColor: "rgba(184, 202, 216, 1)",     
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "60px 1fr",
    gap: 10,
    padding: "12px",
    borderRadius: 9,
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "55px 1fr",
    padding: "10px",
    borderRadius: 10,
    border: "1px solid #BBCAD8",
    gap: 10,
  },
}));

export const SmallDateBox = styled("div")(({ theme }) => ({
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  borderRadius: "0 0 5px 5px",
  width: 65,
  height: 92,
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -10,
  [theme.breakpoints.down("md")]: {
    width: 65,
    height: 92,
    borderRadius: "0 0 8px 8px",
    marginLeft: -12,
  },
  [theme.breakpoints.down("sm")]: {
    width: 55,
    height: 73,
    borderRadius: "5px 5px 5px 5px",
    marginLeft: -10,
  },
}));

export const SmallDateMonth = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontSize: 12,
  fontWeight: 400,
  color: "#F3F4F6",

  [theme.breakpoints.down("md")]: {
    fontSize: 11,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "14px",
  },
}));

export const SmallDateDay = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontSize: 24,
  fontWeight: 400,
  lineHeight: "100%",
  color: "#FFFFFF",

  [theme.breakpoints.down("md")]: {
    fontSize: 22,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
    lineHeight: "100%",
    marginTop: 10,
  },
}));

export const RecentContent = styled("div")(({ theme }) => ({
  display: "grid",
  gap: 6,
  marginLeft: -10,
  [theme.breakpoints.down("md")]: {
    display: "grid",
  gap: 6,
  marginLeft: 0,
  },

  [theme.breakpoints.down("sm")]: {
    display: "grid",
  gap: 6,
  marginLeft: -10,
  },
}));

export const RecentTitleText = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 22,
  lineHeight: "28px",
  color: "#0E1B41",

  [theme.breakpoints.down("md")]: {
    fontSize: 15,
    lineHeight: "22px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "22px",
  },
}));

export const RecentExcerpt = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cr)",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "18px",
  color: "#595959",
  marginTop: 0,
  [theme.breakpoints.down("md")]: {
    fontSize: 13,
    lineHeight: "18px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "18px",
    marginTop: 0,
  },
}));

const SkeletonBlock = styled("div")({
  backgroundColor: "#E5E7EB",
  borderRadius: 6,
});

export const SkeletonHero = styled(SkeletonBlock)(({ theme }) => ({
  width: 1200,
  height: 450,
  borderRadius: 20,
  [theme.breakpoints.down("md")]: { width: "100%", height: 350 },
  [theme.breakpoints.down("sm")]: { height: 140 },
}));

export const SkeletonTitle = styled(SkeletonBlock)(({ theme }) => ({
  width: "78%",
  height: 48,
  margin: "28px 0 10px",
  [theme.breakpoints.down("sm")]: { height: 44 },
}));

export const SkeletonMeta = styled(SkeletonBlock)({
  width: 280,
  height: 22,
  marginBottom: 20,
});

export const SkeletonHeading = styled(SkeletonBlock)({
  width: "58%",
  height: 32,
  margin: "30px 0 16px",
});

export const SkeletonParagraph = styled(SkeletonBlock)({
  width: "100%",
  height: 22,
  marginBottom: 16,
  "&:nth-of-type(odd)": { width: "92%" },
  "&:last-child": { width: "70%" },
});

export const SkeletonHighlightsTitle = styled(SkeletonBlock)({
  width: "42%",
  height: 32,
  margin: "30px 0 24px",
});

export const SkeletonBullet = styled("div")({
  display: "flex",
  gap: 12,
  marginBottom: 12,
  "& > div:first-child": {
    width: 9,
    height: 9,
    borderRadius: "50%",
    backgroundColor: "#E5E7EB",
    flexShrink: 0,
    marginTop: 7,
  },
  "& > div:last-child": { flex: 1, height: 22, backgroundColor: "#E5E7EB", borderRadius: 6 },
});

export const SkeletonNavButton = styled(SkeletonBlock)({
  width: 140,
  height: 44,
  borderRadius: 30,
});

export const SkeletonRelatedItem = styled("div")(({ theme }) => ({
  padding: "16px 12px",
  marginBottom: 12,
  borderRadius: 10,
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  gap: 10,

  "& > div:nth-child(1)": { width: 110, height: 14, backgroundColor: "#E5E7EB", borderRadius: 4 },
  "& > div:nth-child(2)": { width: "88%", height: 26, backgroundColor: "#E5E7EB", borderRadius: 6 },
  "& > div:nth-child(3)": { width: "100%", height: 16, backgroundColor: "#E5E7EB", borderRadius: 4 },
  "& > div:nth-child(4)": { width: "95%", height: 16, backgroundColor: "#E5E7EB", borderRadius: 4 },
  "& > div:nth-child(5)": { width: "72%", height: 16, backgroundColor: "#E5E7EB", borderRadius: 4 },

  [theme.breakpoints.down("md")]: {
    padding: "12px 10px",
    "& > div:nth-child(2)": { height: 24 },
    "& > div:nth-child(3), & > div:nth-child(4), & > div:nth-child(5)": { height: 14 },
  },
}));
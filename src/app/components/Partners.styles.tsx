"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export const FigmaCalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <rect x="1" y="2.5" width="14" height="12" rx="2.2" stroke="#00A6E2" strokeWidth="1.5" />
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

export const JohnDeoIcon = styled(Image)({
  width: 16,
  height: 16,
  display: "block",
});

export const PartnersWrap = styled(Container)(({ theme }) => ({
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
    marginLeft: 0,
    justifyItems: "stretch",
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "0 16px",
    margin: "20px auto 0",
    justifyItems: "stretch",
    boxSizing: "border-box",
    marginLeft: 0,
  },
}));

export const PartnersTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  width: 1200,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "100%",
  color: "#0E1B41",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 36,
    lineHeight: "44px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 32,
    lineHeight: "40px",
    padding: "0 4px",
    boxSizing: "border-box",
  },
}));

export const PartnersHeroFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1200,
  height: 450,
  borderRadius: 10,
  overflow: "hidden",
  marginLeft: 0,
  marginTop: 16,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: 300,
    borderRadius: 16,
    marginLeft: 0,
    marginTop: 20,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 140,
    borderRadius: 10,
    marginTop: 12,
    boxSizing: "border-box",
  },
}));

export const PartnersHeroImg = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "100% 22%",
  display: "block",
  [theme.breakpoints.down("md")]: {
    objectPosition: "50% 24%",
  },
  [theme.breakpoints.down("sm")]: {
    objectPosition: "50% 45%",
  },
}));

export const TitleRow = styled("h2")(({ theme }) => ({
  width: 1200,
  justifySelf: "start",
  margin: "28px 0 10px",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 36,
  lineHeight: "48px",
  color: "#0E1B41",
  marginLeft: 40,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 28,
    lineHeight: "36px",
    marginTop: 20,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 16,
    lineHeight: "22px",
    marginTop: 14,
    padding: "0 auto",
    boxSizing: "border-box",
    marginLeft: 10,
  },
}));

export const MetaRow = styled("div")(({ theme }) => ({
  width: 900,
  justifySelf: "start",
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 10,
  marginLeft: 40,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    gap: 10,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gap: 8,
    padding: "0 auto",
    boxSizing: "border-box",
    marginLeft: 10,
  },
}));

export const DateWrap = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  "& span": {
    fontFamily: "var(--font-crimson)",
    fontWeight: 500,
    fontSize: 18,
    color: "#595959",
  },
  [theme.breakpoints.down("md")]: {
    gap: 6,
    "& span": {
      fontSize: 16,
    },
  },
  [theme.breakpoints.down("sm")]: {
    gap: 4,
    "& span": {
      fontSize: 12,
    },
  },
}));

export const AuthorWrap = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  "& span": {
    fontFamily: "var(--font-crimson)",
    fontWeight: 500,
    fontSize: 18,
    color: "#595959",
  },
  [theme.breakpoints.down("md")]: {
    "& span": {
      fontSize: 16,
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& span": {
      fontSize: 12,
    },
  },
}));

export const VDivider = styled("div")(({ theme }) => ({
  width: 1,
  height: 20,
  background: "#00A6E2",
  [theme.breakpoints.down("md")]: {
    height: 18,
  },
  [theme.breakpoints.down("sm")]: {
    height: 16,
  },
}));

export const GradientRule = styled("div")(({ theme }) => ({
  width: 800,
  height: 1,
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  margin: "14px 0 16px",
  justifySelf: "start",
  alignSelf: "start",
  placeSelf: "start",
  marginLeft: 40,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: 12,
    justifySelf: "stretch",
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: 10,
    justifySelf: "stretch",
    boxSizing: "border-box",
    marginLeft: 10,
  },
}));

export const ContentGrid = styled("section")(({ theme }) => ({
  width: 1200,
  display: "grid",
  gridTemplateColumns: "800px 320px",
  gridTemplateAreas: '"left right" "nav nav"',
  columnGap: 40,
  alignItems: "start",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    gridTemplateColumns: "1fr",
    gridTemplateAreas: '"left" "nav" "right"',
    rowGap: 20,
    columnGap: 0,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gridTemplateColumns: "1fr",
    gridTemplateAreas: '"left" "nav" "right"',
    rowGap: 16,
    padding: "0 4px",
    boxSizing: "border-box",
  },
}));

export const LeftSection = styled("section")(({ theme }) => ({
  gridArea: "left",
  width: 800,
  justifySelf: "start",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 21,
  lineHeight: "30px",
  color: "#595959",
  whiteSpace: "normal",
  marginTop: -30,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 17,
    lineHeight: "26px",
    whiteSpace: "normal",
    marginTop: 0,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 14,
    lineHeight: "22px",
    whiteSpace: "normal",
    marginTop: -10,
    padding: "0 6px",
    boxSizing: "border-box",
  },
}));

export const Paragraph = styled("p")(({ theme }) => ({
  marginBottom: 16,
  [theme.breakpoints.down("md")]: {
    marginBottom: 14,
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: 12,
  },
}));

export const HighlightsTitle = styled("h3")(({ theme }) => ({
  marginTop: 30,
  marginBottom: 24,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 28,
  lineHeight: "28px",
  color: "#0E1B41",
  [theme.breakpoints.down("md")]: {
    marginTop: 24,
    marginBottom: 18,
    fontSize: 24,
    lineHeight: "28px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
    marginBottom: 16,
    fontSize: 18,
    lineHeight: "28px",
    padding: "0 6px",
    boxSizing: "border-box",
  },
}));

export const HighlightsList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  [theme.breakpoints.down("md")]: {
    gap: 10,
  },
  [theme.breakpoints.down("sm")]: {
    gap: 8,
    padding: "0 6px",
    boxSizing: "border-box",
  },
}));

export const HighlightItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 8,
  [theme.breakpoints.down("md")]: {
    gap: 6,
  },
  [theme.breakpoints.down("sm")]: {
    gap: 6,
  },
}));

export const Bullet = styled("div")(({ theme }) => ({
  width: 9,
  height: 9,
  borderRadius: "50%",
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  flexShrink: 0,
  marginTop: 13,
  [theme.breakpoints.down("md")]: {
    width: 8,
    height: 8,
    marginTop: 10,
  },
  [theme.breakpoints.down("sm")]: {
    width: 7,
    height: 7,
    marginTop: 7,
  },
}));

export const HighlightText = styled("span")(({ theme }) => ({
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("md")]: {
    fontSize: 17,
    lineHeight: "26px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "16px",
  },
}));

export const PostNavRow = styled("div")(({ theme }) => ({
  gridArea: "nav",
  width: 1200,
  borderTop: "1px solid #B8CAD8",
  borderBottom: "1px solid #B8CAD8",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 0",
  marginTop: 40,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "12px 0",
    marginTop: 30,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "10px 0",
    marginTop: 20,
    boxSizing: "border-box",
  },
}));

export const NavButton = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 24,
  color: "#00A6E2",
  textDecoration: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: 20,
    gap: 8,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    gap: 6,
  },
}));

export const CircleArrow = styled("div")(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: 100,
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: 48,
    height: 48,
    borderRadius: 80,
  },
  [theme.breakpoints.down("sm")]: {
    width: 32,
    height: 32,
    borderRadius: 70,
  },
}));

export const ArrowBack = styled(ArrowBackRoundedIcon)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: 30,
  [theme.breakpoints.down("md")]: {
    fontSize: 24,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));

export const ArrowForward = styled(ArrowForwardRoundedIcon)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: 30,
  [theme.breakpoints.down("md")]: {
    fontSize: 24,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));

export const RightAside = styled("aside")(({ theme }) => ({
  gridArea: "right",
  width: 400,
  justifySelf: "start",
  marginLeft: 0,
  marginTop: -20,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: 0,
    marginTop: 0,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
    marginTop: 0,
    padding: "0 6px",
    boxSizing: "border-box",
  },
}));

export const RelatedTitle = styled("h4")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 28,
  lineHeight: "36px",
  color: "#0E1B41",
  marginBottom: 8,
  [theme.breakpoints.down("md")]: {
    fontSize: 24,
    lineHeight: "32px",
    marginBottom: 10,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    lineHeight: "28px",
    marginBottom: 10,
    padding: "0 6px",
    boxSizing: "border-box",
  },
}));

export const RelatedItem = styled("article")(({ theme }) => ({
  padding: "10px 12px",
  marginBottom: 10,
  borderRadius: 10,
  background: "#FFFFFF",
  boxSizing: "border-box",
  transition: "background 0.3s ease, border-color 0.3s ease",
  cursor: "pointer",

  "&:hover": {
    background: "rgba(236, 249, 255, 1)",   // same light blue as design
    borderColor: "rgba(184, 202, 216, 1)", // same border as design
  },

  [theme.breakpoints.down("md")]: {
    padding: "8px 10px",
    marginBottom: 8,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px 8px",
    marginBottom: 8,
    marginLeft: 0,
  },
}));

export const SmallDate = styled("div")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 12,
  color: "#595959",
  marginBottom: 6,
  marginLeft: -10,
  "& svg": {
    width: 12,
    height: 12,
    stroke: "#00A6E2",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 11,
    gap: 5,
    marginBottom: 5,
    marginLeft: 0,
    "& svg": {
      width: 11,
      height: 11,
    },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 11,
    marginBottom: 4,
    marginLeft: 0,
    gap: 4,
    "& svg": {
      width: 10,
      height: 10,
    },
  },
}));

export const RelatedHead = styled("a")(({ theme }) => ({
  display: "block",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 18,
  lineHeight: "25px",
  color: "#0E1B41",
  textDecoration: "none",
  marginBottom: 10,
  marginTop: 10,
  marginLeft: -10,
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
    lineHeight: "22px",
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
    marginTop: 10,
    marginBottom: 10,
    padding: "0 6px",
    boxSizing: "border-box",
    marginLeft: -5,
  },
}));

export const RelatedSnippet = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "16px",
  color: "#595959",
  marginLeft: -10,
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
    lineHeight: "15px",
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 11,
    lineHeight: "15px",
    padding: "0 6px",
    boxSizing: "border-box",
    marginLeft: -5,
  },
}));

const SkeletonBlock = styled("div")({
  backgroundColor: "#E5E7EB",
  borderRadius: 6,
});

export const SkeletonHero = styled(SkeletonBlock)(({ theme }) => ({
  width: 1200,
  height: 450,
  borderRadius: 10,
  [theme.breakpoints.down("md")]: { width: "100%", height: 300, borderRadius: 16 },
  [theme.breakpoints.down("sm")]: { height: 140, borderRadius: 10 },
}));

export const SkeletonTitle = styled(SkeletonBlock)(({ theme }) => ({
  width: "78%",
  height: 48,
  margin: "28px 0 10px 40px",
  [theme.breakpoints.down("sm")]: { height: 44, marginLeft: 10 },
}));

export const SkeletonMeta = styled(SkeletonBlock)(({ theme }) => ({
  width: 280,
  height: 22,
  marginLeft: 40,
  marginBottom: 10,
  [theme.breakpoints.down("sm")]: { width: 200, height: 16, marginLeft: 10 },
}));

export const SkeletonHeading = styled(SkeletonBlock)(({ theme }) => ({
  width: "58%",
  height: 32,
  margin: "30px 0 16px",
  [theme.breakpoints.down("sm")]: { height: 24 },
}));

export const SkeletonParagraph = styled(SkeletonBlock)(({ theme }) => ({
  width: "100%",
  height: 22,
  marginBottom: 16,
  "&:nth-of-type(odd)": { width: "92%" },
  "&:last-child": { width: "70%" },
  [theme.breakpoints.down("sm")]: { height: 18 },
}));

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

export const SkeletonNavButton = styled(SkeletonBlock)(({ theme }) => ({
  width: 140,
  height: 44,
  borderRadius: 30,
  [theme.breakpoints.down("sm")]: { width: 100, height: 36 },
}));

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
  [theme.breakpoints.down("sm")]: { padding: "10px 8px" },
}));
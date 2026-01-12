"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export const FigmaCalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

export const NewsWrap = styled(Container)(({ theme }) => ({
  width: 1280,
  maxWidth: "100%",
  margin: "30px auto 0",
  paddingLeft: 0,
  paddingRight: 0,
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
    rowGap: 12,
    "& > div:first-of-type": {
      width: "100%",
      maxWidth: 1200,
      margin: "10px auto 0",
      borderRadius: 20,
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "30px auto 0",
    paddingInline: 12,
    rowGap: 10,
    "& > div:first-of-type": {
      width: "100%",
      maxWidth: "100%",
      margin: "10px auto 0",
      borderRadius: 10,
    },
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "40px auto 0",
    paddingInline: 16,
    "& > div:first-of-type": {
      width: "100%",
      maxWidth: 1200,
      margin: "10px auto 0",
      borderRadius: 20,
    },
  },
}));

export const NewsTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  width: "100%",
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("md")]: {
    fontSize: 32,
    lineHeight: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "32px",
    marginLeft: 0,
    padding: "0 4px",
    boxSizing: "border-box",
  },
}));

export const NewsHeroFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1200,
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

export const NewsHeroImg = styled(Image)(({ theme }) => ({
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

export const NewsHeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 1,
  zIndex: 1,
});

export const NewsIntro = styled("p")(({ theme }) => ({
  margin: "30px auto 0",
  width: 1200,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("md")]: {
    width: "85%",
    fontSize: 16,
    lineHeight: "24px",
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

export const NewsGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 25,
  marginTop: 40,
  width: 1200,
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    width: "100%",
    gap: 16,
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    width: "100%",
    gap: 18,
    padding: "0 4px",
    boxSizing: "border-box",
  },
}));

export const NewsCard = styled("div")(({ theme }) => ({
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid #BBCAD8",
  borderRadius: 10,
  padding: 12,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  boxSizing: "border-box",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(236, 249, 255, 1)",
    borderColor: "rgba(184, 202, 216, 1)",
  },
  [theme.breakpoints.down("md")]: {
    padding: 8,
  },
  [theme.breakpoints.down("sm")]: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    boxSizing: "border-box",
  },
}));

export const NewsImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: 260,
  borderRadius: 10,
  objectFit: "cover",
  display: "block",
  maxWidth: "100%",
  [theme.breakpoints.down("md")]: {
    height: 180,
  },
  [theme.breakpoints.down("sm")]: {
    height: 200,
    width: "100%",
    maxWidth: "100%",
  },
}));

export const NewsDateWrap = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginTop: 10,
});

export const NewsDateText = styled("span")(({ theme }) => ({
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 18,
  color: "#595959",
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));

export const NewsCardTitle = styled("h3")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 22,
  lineHeight: "30px",
  color: "#0E1B41",
  margin: "8px 0 0 0",
  [theme.breakpoints.down("md")]: {
    fontSize: 17,
    lineHeight: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    lineHeight: "24px",
    marginTop: 6,
  },
}));

export const NewsCardDesc = styled("p")(({ theme }) => ({
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "27px",
  color: "#595959",
  marginTop: 0,
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
    lineHeight: "21px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "18px",
  },
}));

export const ReadMoreBtn = styled("button")(({ theme }) => ({
  all: "unset",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "normal",
  cursor: "pointer",
  width: 150,
  height: 49,
  borderRadius: 12,
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 20,
  lineHeight: "13px",
  letterSpacing: "0.02em",
  color: "#fff",
  textTransform: "capitalize",
  marginTop: 5,
  transition: "opacity .3s ease",
  "&:hover": { opacity: 0.9 },
  [theme.breakpoints.down("md")]: {
    width: 120,
    height: 40,
    fontSize: 15,
  },
  [theme.breakpoints.down("sm")]: {
    width: 100,
    height: 36,
    fontSize: 14,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
}));

export const LoadMoreBtn = styled("button")(({ theme }) => ({
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  width: 240,
  height: 55,
  borderRadius: 12,
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 22,
  color: "#fff",
  textTransform: "capitalize",
  marginTop: 50,
  transition: "opacity .3s ease",
  "&:hover": { opacity: 0.9 },
  [theme.breakpoints.down("md")]: {
    width: 140,
    height: 42,
    fontSize: 17,
  },
  [theme.breakpoints.down("sm")]: {
    width: 120,
    height: 38,
    fontSize: 14,
    marginTop: 30,
  },
}));

export const NewsletterWrap = styled("section")(({ theme }) => ({
  width: 1200,
  marginTop: 60,
  display: "grid",
  justifyItems: "center",
  rowGap: 12,
  marginBottom: 60,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: 45,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: 40,
    padding: "0 8px",
    boxSizing: "border-box",
  },
}));

export const NewsletterTitle = styled("h2")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  margin: 0,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: 32,
    lineHeight: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "32px",
    padding: "0 auto",
    boxSizing: "border-box",
    textAlign: "center",
  },
}));

export const NewsletterDesc = styled("p")(({ theme }) => ({
  width: 1200,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  margin: 0,
  [theme.breakpoints.down("md")]: {
    width: "85%",
    fontSize: 15,
    lineHeight: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 14,
    lineHeight: "22px",
    padding: "0 10px",
    boxSizing: "border-box",
  },
}));

export const NewsletterForm = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginTop: 8,
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    gap: 6,
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    width: "100%",
    gap: 8,
    flexWrap: "nowrap",  
    boxSizing: "border-box",
    justifyContent: "center",
  },
}));

export const NewsletterInput = styled("input")(({ theme }) => ({
  width: 420,
  height: 49,
  border: "1px solid #BBCAD8",
  borderRadius: 10,
  background: "#FDFDFD",
  padding: "0 12px",
  fontFamily: "var(--font-crimson)",
  fontSize: 16,
  lineHeight: "30px",
  color: "#595959",
  outline: "none",
  [theme.breakpoints.down("md")]: {
    width: 280,
    height: 42,
  },
  [theme.breakpoints.down("sm")]: {
    width: 230,
    height: 38,
    fontSize: 13,
    boxSizing: "border-box",
  },
}));

export const NewsletterBtn = styled("button")(({ theme }) => ({
  all: "unset",
  width: 187,
  height: 49,
  borderRadius: 12,
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  color: "#fff",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 20,
  letterSpacing: "0.02em",
  textAlign: "center",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: 140,
    height: 42,
    fontSize: 15,
  },
  [theme.breakpoints.down("sm")]: {
    width: 110,
    height: 38,
    fontSize: 13,
    borderRadius: 8,
    boxSizing: "border-box",
  },
}));

export const NewsHeroSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  backgroundColor: "#E0E0E0",
  animation: "none",
  transform: "none",
  [theme.breakpoints.down("sm")]: { borderRadius: 10 },
}));

export const NewsImageSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: 260,
  borderRadius: 10,
  backgroundColor: "#E0E0E0",
  animation: "none",
  transform: "none",
  [theme.breakpoints.down("md")]: { height: 180 },
  [theme.breakpoints.down("sm")]: { height: 200 },
}));
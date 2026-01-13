"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export const FaqWrap = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "40px auto 0",
  paddingInline: 16,
  boxSizing: "border-box",
  display: "grid",
  rowGap: 24,
  justifyItems: "center",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    margin: "40px auto 0",
    paddingInline: 12,
    rowGap: 20,
  },

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
    maxWidth: `calc(100vw - 48px)`,
    margin: "70px auto 0",
    paddingInline: 24,
    rowGap: 24,
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
    padding: "0 16px",
    boxSizing: "border-box",
    display: "grid",
    rowGap: 24,
  },
}));

export const FaqTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  width: "100%",
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",

  "& .faq-desktop": {
    display: "inline",
  },
  "& .faq-mobile": {
    display: "none",
  },

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 38,
    lineHeight: "46px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    lineHeight: "40px",

    "& .faq-desktop": {
      display: "none",
    },
    "& .faq-mobile": {
      display: "inline",
    },
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: 800,
  },
}));

export const FaqHeroFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1200,
  marginLeft: 0,
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

export const FqHeroImg = styled(Image)(({ theme }) => ({
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

export const FaqHeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 1,
  zIndex: 1,
});

export const FaqDesc = styled("p")(({ theme }) => ({
  margin: 0,
  width: 950,
  maxWidth: "100%",
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  marginTop: 20,
  marginBottom: 16,

  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 17,
    lineHeight: "26px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 14,
    lineHeight: "22px",
    wordBreak: "break-word",
    hyphens: "auto",
  },
}));

export const AccWrap = styled("section", {
  shouldForwardProp: (prop) => prop !== "$leftOnMobile",
})<{ $leftOnMobile?: boolean }>(({ theme, $leftOnMobile }) => ({
  width: 1100,
  maxWidth: "100%",
  margin: "10px auto 0",
  display: "grid",
  rowGap: 12,

  [theme.breakpoints.down("md")]: {
    width: "100%",
    rowGap: 10,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    rowGap: 15,
    justifySelf: $leftOnMobile ? "start" : "center",
  },
}));

export const AccItem = styled("div", {
  shouldForwardProp: (prop) => prop !== "$open",
})<{ $open?: boolean }>(({ $open, theme }) => ({
  borderRadius: 10,
  overflow: "hidden",
  border: "1px solid #B8CAD8D9",
  background: $open ? "#FFFFFF" : "#ECF9FF",

  [theme.breakpoints.down("md")]: {
    borderRadius: 9,
  },

  [theme.breakpoints.down("sm")]: {
    borderRadius: 8,
  },
}));

export const AccHeader = styled("button", {
  shouldForwardProp: (prop) => prop !== "$open",
})<{ $open?: boolean }>(({ $open, theme }) => ({
  position: "relative",
  width: "100%",
  height: 64,
  padding: "0 56px 0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 10,
  cursor: "pointer",
  border: 0,
  outline: "none",
  background: $open
    ? "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)"
    : "transparent",

  [theme.breakpoints.down("md")]: {
    height: 56,
    padding: "0 48px 0 18px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "auto",
    minHeight: 40,
    padding: "12px 36px 12px 12px",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
}));

export const AccTitle = styled("span", {
  shouldForwardProp: (prop) => prop !== "$open",
})<{ $open?: boolean }>(({ $open, theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 20,
  lineHeight: "100%",
  color: $open ? "#FFFFFF" : "#0E1B41",
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block",

  [theme.breakpoints.down("md")]: {
    fontSize: 18,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "clip",
    textAlign: "left",
    lineHeight: 1.4,
    width: "100%",
    flex: 1,
    wordBreak: "break-word",
    hyphens: "auto",
  },
}));

export const AccIcon = styled(ArrowDropDownIcon as typeof ArrowDropDownIcon, {
  shouldForwardProp: (prop) => prop !== "$open",
})<{ $open?: boolean }>(({ $open, theme }) => ({
  position: "absolute",
  right: 26,
  top: "50%",
  transform: `translateY(-50%) rotate(${$open ? 180 : 0}deg)`,
  transition: "transform 120ms ease",
  fontSize: 28,
  color: $open ? "#FFFFFF" : "#00A6E2",

  [theme.breakpoints.down("md")]: {
    right: 22,
    fontSize: 26,
  },

  [theme.breakpoints.down("sm")]: {
    right: 12,
    fontSize: 18,
  },
}));

export const AccPanel = styled("div")(({ theme }) => ({
  padding: "12px 20px 16px",
  background: "#FFFFFF",
  borderTop: "1px solid #B8CAD8D9",

  [theme.breakpoints.down("md")]: {
    padding: "10px 18px 14px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "10px 12px 12px",
  },
}));

export const AccText = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "22px",
  color: "#595959",

  [theme.breakpoints.down("md")]: {
    fontSize: 13,
    lineHeight: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "18px",
    whiteSpace: "normal",
    wordBreak: "break-word",
    hyphens: "auto",
  },

  "& .bullet": {
    display: "block",
    paddingLeft: 10,
  },

  "& .para": {
    display: "inline",

    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginTop: 10,
    },
  },
}));

export const ContactRow = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "60px auto 0",
  display: "grid",
  gridTemplateColumns: "653px 506px",
  columnGap: 121,
  alignItems: "flex-start",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: "100%",
    gridTemplateColumns: "1fr 1fr",
    columnGap: 40,
    marginTop: 50,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    gridTemplateColumns: "1fr",
    columnGap: 0,
    rowGap: 24,
    marginTop: 40,
    justifyItems: "stretch",
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: 1200,
  },
}));

export const ContactTitle = styled("h2")(({ theme }) => ({
  margin: 0,
  width: "100%",
  maxWidth: 653,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "64px",
  color: "#0E1B41",

  [theme.breakpoints.down("md")]: {
    fontSize: 36,
    lineHeight: "48px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    fontSize: 28,
    lineHeight: "36px",
  },
}));

export const ContactLead = styled("p")(({ theme }) => ({
  marginTop: 10,
  width: 650,
  maxWidth: "100%",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 18,
    lineHeight: "26px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    lineHeight: "22px",
  },
}));

export const ContactForm = styled("form")(({ theme }) => ({
  width: 506,
  display: "grid",
  rowGap: 16,
  justifySelf: "stretch",
  marginLeft: -80,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    rowGap: 14,
    marginLeft: 0,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    rowGap: 12,
    marginLeft: 0,
  },
}));

export const Field = styled("div")(({ theme }) => ({
  display: "grid",
  rowGap: 10,

  [theme.breakpoints.down("md")]: {
    rowGap: 8,
  },
}));

export const Label = styled("label")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "100%",
  color: "#0E1B41",

  [theme.breakpoints.down("md")]: {
    fontSize: 15,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    paddingInline: 10,
    lineHeight: "32px",
  },
}));

const commonBox = {
  width: "100%",
  borderRadius: 10,
  border: "1px solid rgba(184,202,216,0.85)",
  background: "#FFFFFF",
  paddingInline: 16,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "22px",
  color: "#595959",
  outline: "none" as const,
  boxSizing: "border-box" as const,
} as const;

export const Input = styled("input")(({ theme }) => ({
  height: 60,
  ...commonBox,
  "::placeholder": { color: "#595959" },

  [theme.breakpoints.down("md")]: {
    height: 52,
    fontSize: 18,
    lineHeight: "20px",
    paddingInline: 14,
  },

  [theme.breakpoints.down("sm")]: {
    height: 40,
    borderRadius: 8,
    fontSize: 14,
    paddingInline: 10,
    marginTop: -5,
  },
}));

export const TextArea = styled("textarea")(({ theme }) => ({
  height: 120,
  paddingTop: 12,
  paddingBottom: 12,
  resize: "none",
  ...commonBox,
  "::placeholder": { color: "#595959" },

  [theme.breakpoints.down("md")]: {
    height: 100,
    fontSize: 18,
    lineHeight: "20px",
    paddingInline: 14,
  },

  [theme.breakpoints.down("sm")]: {
    height: 80,
    borderRadius: 8,
    fontSize: 14,
    padding: 10,
  },
}));

export const SubmitBtn = styled("button")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  minWidth: 178,
  height: 49,
  borderRadius: 12,
  padding: "18px 30px",
  border: "1px solid #FFFFFF",
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  cursor: "pointer",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 20,
  lineHeight: "13px",
  letterSpacing: "0.02em",
  textTransform: "capitalize",
  color: "#FFFFFF",
  whiteSpace: "normal",

  [theme.breakpoints.down("md")]: {
    minWidth: 150,
    height: 44,
    fontSize: 18,
    padding: "16px 24px",
  },

  [theme.breakpoints.down("sm")]: {
    width: 120,
    height: 36,
    borderRadius: 10,
    padding: "0 16px",
    fontSize: 14,
    lineHeight: "13px",
  },
}));

export const FaqHeroSkeleton = styled(Skeleton)(({ theme }) => ({
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
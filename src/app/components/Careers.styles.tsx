"use client";

import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";
import AttachFileIconBase from "@mui/icons-material/AttachFile";
import Skeleton from "@mui/material/Skeleton";

export const CareersWrap = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "40px auto 0",
  paddingInline: 16,
  boxSizing: "border-box",
  display: "grid",
  rowGap: 12,
  justifyItems: "center",
  "& > div:first-of-type": {
    width: "100%",
    maxWidth: 1200,
    margin: "10px auto 0",
    borderRadius: 20,
    overflow: "hidden",
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

export const CareersTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  width: "100%",
  maxWidth: 1280,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 38,
    lineHeight: "46px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    fontSize: 36,
    lineHeight: "44px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 32,
    lineHeight: "40px",
    textAlign: "center",
  },
}));

export const CareerHeroFrame = styled("div")(({ theme }) => ({
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

export const CareerHeroImg = styled(Image)(({ theme }) => ({
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

export const CareerHeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 1,
  zIndex: 1,
});

export const JoinWrap = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: 1200,
  margin: "30px auto 0",
  display: "grid",
  rowGap: 20,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    rowGap: 18,
    boxSizing: "border-box",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    margin: "30px auto 0",
    rowGap: 18,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    rowGap: 25,
    boxSizing: "border-box",
  },
}));

export const JoinTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 36,
    lineHeight: "48px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    fontSize: 32,
    lineHeight: "40px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 28,
    lineHeight: "36px",
    textAlign: "center",
  },
}));

export const JoinLead = styled("p")(({ theme }) => ({
  margin: "0 auto",
  width: "100%",
  maxWidth: 1206,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("md")]: {
    width: "90%",
    fontSize: 18,
    lineHeight: "26px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "90%",
    fontSize: 16,
    lineHeight: "24px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "center",
    wordBreak: "break-word",
    hyphens: "auto",
  },
}));

export const PerkRow = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 1200,
  margin: "10px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(4, 305px)",
  gap: 2,
  alignItems: "stretch",
  justifyContent: "space-between",
  [theme.breakpoints.between("md", "lg")]: {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
    justifyContent: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    margin: "10px auto 0",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 15,
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,
    justifyContent: "center",
  },
}));

export const PerkCard = styled("div")(({ theme }) => ({
  width: 280,
  height: 195,
  borderRadius: 10,
  border: "1px solid #00A6E2",
  boxSizing: "border-box",
  padding: "30px 10px 20px 10px",
  display: "grid",
  alignContent: "start",
  rowGap: 10,
  background: "#FFFFFF",
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 280,
    height: "auto",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: 280,
    height: "auto",
    padding: "25px 15px 20px 15px",
    rowGap: 12,
    borderRadius: 9,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 280,
    height: "auto",
    padding: "20px 12px 16px 12px",
    rowGap: 8,
    borderRadius: 9,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    padding: "20px 8px 16px 8px",
    rowGap: 8,
    borderRadius: 8,
  },
}));

export const PerkIconBox = styled("div")<{ $plain?: boolean }>(
  ({ theme, $plain }) => ({
    width: 42,
    height: 42,
    borderRadius: 5,
    background: $plain
      ? "transparent"
      : "linear-gradient(135deg, #0064B5 0%, #00A9DF 100%)",
    display: "grid",
    placeItems: "center",
    [theme.breakpoints.down("md")]: {
      width: 38,
      height: 38,
      borderRadius: 5,
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: 36,
      height: 36,
    },
    [theme.breakpoints.down("sm")]: {
      width: 32,
      height: 32,
      borderRadius: 4,
    },
  })
);

export const PerkIconImg = styled(Image)({
  width: "100%",
  height: "100%",
  borderRadius: 5,
  objectFit: "cover",
  display: "block",
});

export const PerkTitle = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 22,
  lineHeight: "100%",
  color: "#00A6E2",
  marginTop: 10,
  [theme.breakpoints.down("md")]: {
    fontSize: 20,
    lineHeight: "24px",
    marginTop: 8,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "20px",
    marginTop: 6,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "17px",
    marginTop: 6,
    wordBreak: "break-word",
  },
}));

export const PerkDesc = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "26px",
  color: "#595959",
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
    lineHeight: "24px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 14,
    lineHeight: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "18px",
    wordBreak: "break-word",
  },
}));

export const OpeningsWrap = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: 1200,
  margin: "40px auto 0",
  display: "grid",
  rowGap: 16,
  justifyItems: "start",
  marginBottom: 60,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    rowGap: 14,
    justifyItems: "center",
    boxSizing: "border-box",
    marginBottom: 40,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    margin: "40px auto 0",
    rowGap: 14,
    justifyItems: "center",
    boxSizing: "border-box",
    marginBottom: 40,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    rowGap: 12,
    justifyItems: "stretch",
    boxSizing: "border-box",
    marginBottom: 30,
  },
}));

export const OpeningsTitle = styled("h2")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "64px",
  color: "#0E1B41",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 36,
    lineHeight: "48px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    fontSize: 32,
    lineHeight: "40px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 28,
    lineHeight: "36px",
    justifySelf: "center",
    textAlign: "center",
  },
}));

export const OpeningsLead = styled("p")(({ theme }) => ({
  margin: 0,
  width: 650,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("md")]: {
    width: "90%",
    fontSize: 18,
    lineHeight: "26px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "90%",
    fontSize: 16,
    lineHeight: "24px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "center",
    marginLeft: 0,
    wordBreak: "break-word",
    hyphens: "auto",
  },
}));

export const JobCard = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 1160,
  height: 154,
  borderRadius: 10,
  border: "1px solid #B8CAD8",
  background: "#FFFFFF",
  padding: 20,
  display: "grid",
  gridTemplateColumns: "1fr 360px",
  alignItems: "start",
  gap: 10,
  margin: "10px auto 20px",
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 1160,
    height: "auto",
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: 900,
    height: "auto",
    padding: 16,
    gridTemplateColumns: "1fr 300px",
    gap: 12,
    borderRadius: 9,
    marginTop: 12,
    marginBottom: 16,
    boxSizing: "border-box",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "auto",
    padding: 14,
    gridTemplateColumns: "1fr 250px",
    gap: 10,
    borderRadius: 9,
    marginTop: 10,
    marginBottom: 14,
    boxSizing: "border-box",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    padding: 12,
    gridTemplateColumns: "1fr",
    rowGap: 12,
    borderRadius: 8,
    marginTop: 12,
    boxSizing: "border-box",
  },
}));

export const JobLeft = styled("div")(({ theme }) => ({
  display: "grid",
  alignContent: "start",
  rowGap: 10,
  [theme.breakpoints.down("md")]: {
    rowGap: 8,
  },
  [theme.breakpoints.between("sm", "md")]: {
    rowGap: 6,
  },
  [theme.breakpoints.down("sm")]: {
    rowGap: 8,
  },
}));

export const JobTitle = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 28,
  lineHeight: "100%",
  color: "#0E1B41",
  [theme.breakpoints.down("md")]: {
    fontSize: 24,
    lineHeight: "28px",
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 20,
    lineHeight: "24px",
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    lineHeight: "22px",
    marginLeft: 0,
  },
}));

export const JobDesc = styled("p")(({ theme }) => ({
  margin: 0,
  width: "100%",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "28px",
  color: "#595959",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 16,
    lineHeight: "24px",
    marginLeft: 0,
    whiteSpace: "normal",
    wordBreak: "break-word",
    hyphens: "auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    fontSize: 14,
    lineHeight: "20px",
    marginLeft: 0,
    whiteSpace: "normal",
    wordBreak: "break-word",
    hyphens: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 12,
    lineHeight: "18px",
    whiteSpace: "normal",
    marginLeft: 0,
    wordBreak: "break-word",
    hyphens: "auto",
  },
}));

export const TagRow = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 12,
  marginTop: 10,
  flexWrap: "wrap",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gap: 10,
    marginTop: 8,
  },
  [theme.breakpoints.between("sm", "md")]: {
    gap: 8,
    marginTop: 6,
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: 6,
    flexWrap: "nowrap",
    gap: 6,
    "& > span:nth-of-type(3)": {
      marginLeft: "auto",
    },
  },
}));

export const TagIcon = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  fontSize: 20,
  color: "#0E1B41",
  verticalAlign: "middle",
  [theme.breakpoints.down("md")]: {
    fontSize: 18,
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    marginLeft: 0,
  },
}));

export const TagText = styled("span")<{ $strong?: boolean }>(
  ({ theme, $strong }) => ({
    fontFamily: "var(--font-cg)",
    fontWeight: $strong ? 700 : 400,
    fontSize: 18,
    lineHeight: "100%",
    color: "#0E1B41",
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      whiteSpace: "normal", 
    },
  })
);

export const TagGlyphWrap = styled("span")({
  width: 32,
  height: 32,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const TagIconImg = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display: "block",
});

// ********** UPLOAD / BUTTON **********

export const UploadBox = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "60px 1fr",
  gridTemplateRows: "auto auto",
  alignItems: "center",
  columnGap: 18,
  rowGap: 12,
  marginTop: 40,
  marginLeft: 40,
  justifySelf: "start",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "60px 1fr",
    gridTemplateRows: "auto auto",
    columnGap: 16,
    rowGap: 10,
    marginTop: 30,
    marginLeft: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "50px 1fr",
    gridTemplateRows: "auto auto",
    columnGap: 12,
    rowGap: 8,
    marginTop: 20,
    marginLeft: 10,
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "40px 1fr auto",
    gridTemplateRows: "auto auto",
    alignItems: "flex-start",
    columnGap: 10,
    rowGap: 4,
    marginTop: 12,
    marginLeft: 0,
    justifySelf: "stretch",
    justifyContent: "space-between",
  },
}));

export const UploadIconWrap = styled("div")(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: 70,
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  display: "grid",
  placeItems: "center",
  gridRow: "1 / span 2",
  alignSelf: "start",
  transform: "translateY(-6px)",
  [theme.breakpoints.down("md")]: {
    width: 50,
    height: 50,
    borderRadius: 25,
    gridRow: "1 / span 2",
    transform: "translateY(-4px)",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    gridRow: "1 / span 2",
    transform: "translateY(-3px)",
  },
  [theme.breakpoints.down("sm")]: {
    width: 40,
    height: 40,
    borderRadius: 20,
    gridRow: "1 / span 2",
    gridColumn: "1 / 2",
    alignSelf: "start",
    transform: "translateY(0)",
  },
}));

export const UploadGlyphIcon = styled(AttachFileIconBase)({
  fontSize: 24,
  color: "#FFFFFF",
  transform: "rotate(45deg)",
  transformOrigin: "50% 50%",
});

export const UploadTextTop = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 18,
  color: "#00A6E2",
  lineHeight: "100%",
  whiteSpace: "normal",
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
    whiteSpace: "normal",
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
    marginTop: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 14,
    whiteSpace: "normal",
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    whiteSpace: "normal",
    gridColumn: "2 / 3",
    gridRow: "1 / 2",
  },
}));

export const UploadTextSub = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 12,
  lineHeight: "100%",
  color: "#6D6D6D",
  whiteSpace: "normal",
  marginTop: 10,
  [theme.breakpoints.down("md")]: {
    fontSize: 11,
    marginTop: 8,
    whiteSpace: "normal",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 10,
    marginTop: 6,
    whiteSpace: "normal",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
    whiteSpace: "normal",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  },
}));

export const ApplyBtn = styled("button")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  minWidth: 153,
  height: 49,
  borderRadius: 12,
  padding: "0 30px",
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
  gridColumn: "2 / 3",
  gridRow: "2 / 3",
  justifySelf: "start",
  marginTop: 20,
  marginLeft: -80,
  [theme.breakpoints.down("md")]: {
    minWidth: 140,
    height: 44,
    fontSize: 18,
    padding: "0 24px",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
    marginTop: 16,
    marginLeft: -50,
  },
  [theme.breakpoints.between("sm", "md")]: {
    minWidth: 120,
    height: 40,
    fontSize: 16,
    padding: "0 20px",
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
    marginTop: 12,
    marginLeft: -40,
  },
  [theme.breakpoints.down("sm")]: {
    gridColumn: "3 / 4",
    gridRow: "1 / span 2",
    justifySelf: "end",
    minWidth: 100,
    height: 36,
    padding: "0 16px",
    fontSize: 14,
    lineHeight: "13px",
    letterSpacing: "0.02em",
    marginTop: 0,
  },
}));

export const CareerHeroSkeleton = styled(Skeleton)(({ theme }) => ({
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
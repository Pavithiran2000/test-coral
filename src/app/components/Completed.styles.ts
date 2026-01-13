import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";

export const CompletedWrap = styled(Container)(({ theme }) => ({
  width: 1280,
  maxWidth: "100%",
  margin: "40px auto 0",
  paddingLeft: 65,
  paddingRight: 80,
  boxSizing: "border-box",
  display: "grid",
  rowGap: 25,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    paddingLeft: 12,
    paddingRight: 12,
    rowGap: 15,
  },
  [theme.breakpoints.between("sm", "md")]: {
    paddingLeft: 20,
    paddingRight: 20,
    rowGap: 20,
  },
}));

export const CompletedTitle = styled("h2")(({ theme }) => ({
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

export const CompleteHeroFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1200,
  marginLeft: -25,
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

export const CompleteHeroImg = styled(Image)(({ theme }) => ({
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

export const CompleteHeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 1,
  zIndex: 1,
});

export const CompletedDesc = styled("p")(({ theme }) => ({
  margin: "20px auto 0",
  maxWidth: 1206,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  marginLeft: -12,
  lineHeight: "30px",
  color: "#595959",
  whiteSpace: "normal",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
    whiteSpace: "normal",
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 18,
    lineHeight: "26px",
    whiteSpace: "normal",
    marginLeft: 0,
  },
}));

export const CompletedGrid = styled("section")(({ theme }) => ({
  marginLeft: -45,
  marginRight: 20,
  display: "grid",
  gridTemplateColumns: "repeat(2, 620px)",
  columnGap: 0,
  rowGap: 40,
  marginTop: 20,
  justifyContent: "center",
  [theme.breakpoints.between("sm", "md")]: {
    marginLeft: 0,
    marginRight: 0,
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: 5,
    rowGap: 15,
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginRight: 0,
    gridTemplateColumns: "1fr",
    rowGap: 15,
    justifyContent: "stretch",
  },
}));

export const CompletedCard = styled("article")(({ theme }) => ({
  width: 580,
  minHeight: 533,
  padding: "10px 10px 15px 10px",
  borderRadius: 20,
  background: "#FCFCFD",
  boxSizing: "border-box",
  position: "relative",
  border: "1px solid #B8CAD8",
  transition:
    "border 200ms ease, box-shadow 200ms ease, transform 200ms ease, background-image 200ms ease, background-color 200ms ease",

  "&:hover, &:focus-within": {
    border: "2px solid transparent",
    backgroundImage:
      "linear-gradient(rgba(234, 240, 244, 1), rgba(234, 240, 244, 1)), linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
    transform: "translateY(-2px)",
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    minHeight: 320,
    padding: "6px 6px 0px 6px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minHeight: "auto",
    padding: 8,
  },
}));

export const ImgWrap = styled("div")(({ theme }) => ({
  width: 560,
  height: 420,
  borderRadius: 20,
  overflow: "hidden",
  position: "relative",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: 420,
    borderRadius: 12,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 420,
    borderRadius: 12,
  },
}));

export const CardImg = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const Meta = styled("div")(({ theme }) => ({
  width: 540,
  height: 68,
  margin: "12px auto 0",
  display: "grid",
  alignItems: "center",
  gridTemplateRows: "38px 20px",
  justifyContent: "space-between",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "auto",
    rowGap: 4,
    gridTemplateRows: "auto auto",
    marginTop: 6,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    rowGap: 6,
    gridTemplateRows: "auto auto",
    marginTop: 8,
  },
}));

export const Name = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  fontSize: 32,
  lineHeight: "100%",
  color: "#00A6E2",
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 28,
    lineHeight: "30px",
    fontWeight: 600,
    whiteSpace: "normal",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
    lineHeight: "18px",
    fontWeight: 700,
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "unset",
  },
}));

export const Addr = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 22,
  marginTop: 20,
  lineHeight: "20px",
  color: "#0E1B41",
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 24,
    lineHeight: "16px",
    marginTop: 10,
    marginBottom: 20,
    whiteSpace: "normal",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 22,
    lineHeight: "14px",
    fontWeight: 500,
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "unset",
  },
}));

export const Badge = styled("span")(({ theme }) => ({
  position: "absolute",
  right: 20,
  bottom: 20,
  width: 64,
  height: 64,
  borderRadius: 100,
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  display: "grid",
  placeItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ArrowIcon = styled("svg")({
  width: 36,
  height: 36,
});

export const AdvantageWrap = styled("section")(({ theme }) => ({
  width: 1280,
  maxWidth: "100%",
  margin: "50px auto 0",
  display: "grid",
  rowGap: 20,
  marginLeft: "-25px",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    marginLeft: 0,
    rowGap: 18,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: "30px auto 0",
    marginLeft: 0,
    padding: 0,
    rowGap: 10,
  },
}));

export const AdvantageTitle = styled("h2")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "64px",
  letterSpacing: 0,
  color: "#0E1B41",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 36,
    lineHeight: "48px",
    textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "36px",
    textAlign: "center",
  },
}));

export const AdvantageLead = styled("p")(({ theme }) => ({
  margin: 0,
  width: 1280,
  maxWidth: "100%",
  fontFamily: "Crimson Pro, serif",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    fontSize: 18,
    lineHeight: "26px",
    textAlign: "center",
    margin: "0 auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "center",
  },
}));

export const FeaturesRow = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 305px)", 
  gap: 20,                                 
  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "repeat(2, 280px)",
    gap: 20,
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 10,
    width: "100%",
    justifyContent: "center",
  },
}));

export const FeatureCard = styled("div")(({ theme }) => ({
  width: 305,                 
  height: 199,
  borderRadius: 10,
  border: "1px solid #00A6E2",
  padding: "50px 10px 30px 10px",
  boxSizing: "border-box",
  display: "grid",
  alignContent: "start",
  rowGap: 10,
  background: "#FFFFFF",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "auto",
    padding: "20px 8px 12px 8px",
    rowGap: 4,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    padding: "15px 6px 10px 6px",
    rowGap: 3,
  },
}));

export const FeatureTitle = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 22,
  lineHeight: "26px",
  color: "#00A6E2",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 14,
    lineHeight: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "16px",
  },
}));

export const FeatureDesc = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "Crimson Pro, serif",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "26px",
  color: "#595959",
  whiteSpace: "normal",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 12,
    lineHeight: "16px",
    whiteSpace: "normal",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
    lineHeight: "14px",
    whiteSpace: "normal",
  },
}));

export const SkeletonBox = styled("div")(({ theme }) => ({
  width: "100%",
  height: 420,
  borderRadius: 20,
  backgroundColor: "#E0E0E0",
  [theme.breakpoints.down("sm")]: {
    height: 420,
    borderRadius: 12,
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: 420,
    borderRadius: 12,
  },
}));

export const SkeletonImage = styled("div")(({ theme }) => ({
  width: "100%",
  height: 350,
  borderRadius: 20,
  backgroundColor: "#E0E0E0",
  [theme.breakpoints.down("sm")]: {
    height: 140,
    borderRadius: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: 220,
    borderRadius: 12,
  },
}));

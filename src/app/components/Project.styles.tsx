import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export const ProjectsHeroWrap = styled(Container)(({ theme }) => ({
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

export const ProjectsHeroTitle = styled("h2")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 36,
    lineHeight: "44px",
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "36px",
  },
}));

export const ProjectHeroFrame = styled("div")(({ theme }) => ({
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

export const ProjectHeroImg = styled(Image)(({ theme }) => ({
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

export const ProjectHeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 1,
  zIndex: 1,
});

export const ProjectsHeroDesc = styled("p")(({ theme }) => ({
  margin: "15px -25px 0",
  width: 1206,
  maxWidth: "100%",
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",

  [theme.breakpoints.between("sm", "md")]: {
    margin: "12px auto 0",
    width: "100%",
    maxWidth: "100%",
    marginLeft: 0,
  },

  [theme.breakpoints.between("md", "lg")]: {
    margin: "12px auto 0",
    width: "100%",
    maxWidth: 800,
  },

  [theme.breakpoints.down("sm")]: {
    margin: "12px 0 0",
    width: "100%",
    fontSize: 12,
    lineHeight: "20px",
  },
}));

export const PRow = styled("div")(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "300px 1fr 360px",
  alignItems: "start",
  gap: 40,
  marginTop: 60,
  marginLeft: -25,

  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "1fr",
    gap: 30,
    marginTop: 40,
    marginLeft: 0,
    justifyItems: "center",
    maxWidth: `calc(100vw - 48px)`,
    marginInline: "auto",
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    gridTemplateColumns: "300px 1fr 360px",
    gap: 32,
    marginTop: 50,
    marginLeft: 0,
    marginInline: "auto",
    alignItems: "start",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gridTemplateColumns: "1fr",
    gap: 30,
    marginTop: 30,
    marginLeft: 0,
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    gridTemplateColumns: "minmax(260px, 300px) minmax(0, 1fr)",
    gap: 32,
    marginTop: 50,
    marginLeft: 0,
    marginInline: "auto",
    alignItems: "start",
  },
}));

export const PLeft = styled("div")(({ theme }) => ({
  display: "grid",
  gap: 6,
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: "100%",
    justifySelf: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 300,
    justifySelf: "start",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    justifySelf: "stretch",
    gap: 2,
    marginLeft: 0,
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    width: "100%",
    maxWidth: 300,
    justifySelf: "start",
  },
}));

export const PItem = styled("div")(({ theme }) => ({
  padding: "12px 15px",
  display: "grid",
  gap: 6,
  borderBottom: "1px solid #DFDFDF",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: "16px 15px",
  },
}));

export const PItemActive = styled(PItem)(({ theme }) => ({
  background: "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)",
  borderBottom: "none",
  borderRadius: 0,
  [theme.breakpoints.down("sm")]: {
    height: 53,
    padding: "8px 15px",
    borderRadius: 0,
  },
}));

export const PItemTitle = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 24,
  lineHeight: "100%",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
}));
export const PItemTitleWhite = styled(PItemTitle)({
  color: "#FFFFFF",
});

export const PItemSub = styled("div")(({ theme }) => ({
  fontFamily: "Crimson Pro, serif",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "100%",
  color: "#595959",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
export const PItemSubWhite = styled(PItemSub)({
  color: "#FFFFFF",
});

export const PMiddleCard = styled("div")(({ theme }) => ({
  width: 499,
  minHeight: 390,
  borderRadius: 12,
  marginLeft: -50,
  padding: "18px 30px",
  display: "grid",
  gap: 25,
  boxSizing: "border-box",

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: "100%",
    minHeight: 300,
    marginLeft: 0,
    padding: "12px 20px",
    justifySelf: "center",
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 520,
    marginLeft: 0,
    padding: "16px 24px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    minHeight: 240,
    padding: "8px 15px",
    justifySelf: "stretch",
    gap: 10,
    marginLeft: 0,
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    width: "100%",
    maxWidth: 620,
    minHeight: 360,
    marginLeft: 0,
    padding: "16px 24px",
  },
}));

export const PMiddleText = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "Crimson Pro, serif",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 18,
    lineHeight: "28px",
    textAlign: "left",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "20px",
    textAlign: "center",
    marginLeft: 0,
  },
}));

export const PButton = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: 49,
  width: 120,
  padding: "0 30px",
  borderRadius: 12,
  background: "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)",
  color: "#FFFFFF",
  fontFamily: "Crimson Pro, serif",
  fontWeight: 500,
  fontSize: 20,
  marginTop: "10px",
  lineHeight: "13px",
  letterSpacing: "0.02em",
  textDecoration: "none",
  whiteSpace: "normal",
  border: "1px solid #FFFFFF",
  [theme.breakpoints.between("sm", "md")]: {
    justifySelf: "center",
  },
  [theme.breakpoints.down("sm")]: {
    height: 36,
    width: 100,
    borderRadius: 10,
    fontSize: 14,
    lineHeight: "13px",
    marginTop: 8,
    marginLeft: 0,
    justifySelf: "center",
  },
}));

export const PMapCard = styled("div")(({ theme }) => ({
  width: 360,
  height: 460,
  borderRadius: 20,
  marginLeft: -55,
  overflow: "hidden",
  position: "relative",
  background: "#EAF6FE",
  boxSizing: "border-box",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: "100%",
    height: 420,
    marginLeft: 0,
    justifySelf: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 360,
    height: 420,
    marginLeft: 0,
    justifySelf: "end",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    height: 420,
    marginLeft: 0,
    justifySelf: "stretch",
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    width: "100%",
    maxWidth: 620,
    height: 420,
    marginLeft: 0,
    justifySelf: "center",
    gridColumn: "1 / -1",
    marginTop: 10,
  },
}));

export const PMapIframe = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: 0,
  display: "block",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: 420,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 420,
  },
}));

export const PMapOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 0.6,
  zIndex: 1,
});

export const PMapImg = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 420,
    marginLeft: 0,
    justifySelf: "center",
  },
}));

export const PMapPin = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "22%",
  left: "26%",
  transform: "translate(-50%, -50%)",
  width: 51.28,
  height: 51.28,
  borderRadius: 999,
  display: "grid",
  placeItems: "center",
  pointerEvents: "none",
  [theme.breakpoints.between("sm", "md")]: {
    top: "18%",
    left: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    top: "14%",
    left: "86%",
  },
}));

export const PMapPinSvg = styled("svg")({
  width: "100%",
  height: "100%",
  display: "block",
});

export const PGalleryWrap = styled("section")(({ theme }) => ({
  width: 1250,
  maxWidth: "100%",
  marginTop: "25px",
  display: "grid",
  marginLeft: -25,
  rowGap: 12,

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    marginLeft: "auto",
    marginRight: "auto",
    rowGap: 10,
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto",
    rowGap: 12,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    rowGap: 8,
    marginTop: 20,
    marginLeft: 0,
  },
}));

export const PScroller = styled("div")(({ theme }) => ({
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: "410px",
  gap: 10,
  overflowX: "auto",
  overflowY: "hidden",
  paddingBottom: 8,
  scrollSnapType: "x mandatory",
  padding: "0 1px 6px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridAutoColumns: "calc(50% - 10px)",
    gap: 20,
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    gridAutoColumns: "100%",
    gap: 20,
    marginLeft: 0,
    "&::-webkit-scrollbar": { display: "none" },
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    gridAutoColumns: "calc(50% - 10px)",
    gap: 20,
    marginLeft: 0,
  },
}));

export const PCard = styled("div")(({ theme }) => ({
  width: 400,
  height: 300,
  borderRadius: 20,
  overflow: "hidden",
  background: "#F3F6F8",
  scrollSnapAlign: "start",
  boxSizing: "border-box",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: 280,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 250,
    borderRadius: 20,
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    width: "100%",
    height: 280,
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
  width: 1250,
  height: 14,
  borderRadius: 200,
  background: "#EEEEEE",
  overflow: "hidden",
  margin: "10px auto 0",
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: 12,
    marginLeft: 0,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    height: 12,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 10,
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    width: "100%",
    height: 12,
  },
}));

export const PGalleryThumb = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  borderRadius: 200,
  background: "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)",
  width: 0,
});

export const AdvantageWrap = styled("section")(({ theme }) => ({
  width: 1280,
  maxWidth: "100%",
  margin: "80px auto 0",
  display: "grid",
  rowGap: 20,
  marginLeft: "-25px",
  marginBottom: 80,
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    margin: "40px auto 0",
    marginLeft: -25,
    paddingInline: 24,
    rowGap: 16,
    marginBottom: 40,
    [theme.breakpoints.up(800)]: {
      marginLeft: 0,
    },
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "60px auto 0",
    marginLeft: 0,
    paddingInline: 24,
    rowGap: 20,
    marginBottom: 40,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    margin: "30px auto 0",
    marginLeft: 0,
    padding: 0,
    rowGap: 10,
    marginBottom: 30,
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "60px auto 0",
    marginLeft: 0,
    paddingInline: 24,
    rowGap: 20,
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
    lineHeight: "44px",
    textAlign: "center",
    marginLeft: 50,
    [theme.breakpoints.up(800)]: {
      marginLeft: 0,
    },
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "36px",
    textAlign: "center",
    marginLeft: 0,
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
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
  marginTop: -10,
  marginBottom: 20,
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    textAlign: "center",
    margin: "0 auto",
    marginTop: 0,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 800,
    textAlign: "center",
    margin: "0 auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "center",
    marginLeft: 0,
    marginTop: 0,
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    width: "100%",
    maxWidth: 800,
    textAlign: "center",
    margin: "0 auto",
  },
}));

export const FeaturesRow = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 285px)",
  gap: 22,
  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20,
    width: "100%",
    maxWidth: 700,
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 10,
    width: "100%",
    justifyContent: "center",
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
    width: "100%",
  },
}));

export const FeatureCard = styled("div")(({ theme }) => ({
  width: 290,
  height: 199,
  borderRadius: 10,
  border: "1px solid transparent",
  backgroundImage:
    "linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(90deg, #0064B5, #00A9DF)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  padding: "50px 10px 30px 10px",
  boxSizing: "border-box",
  display: "grid",
  alignContent: "start",
  rowGap: 10,
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: 210,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    height: 210,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 215,
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    width: "100%",
    height: 210,
  },
}));

export const FeatureTitle = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 22,
  marginLeft: -1,
  lineHeight: "26px",
  color: "#00A6E2",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 20,
    lineHeight: "24px",
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    lineHeight: "24px",
  },
}));

export const FeatureDesc = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "Crimson Pro, serif",
  fontWeight: 400,
  fontSize: 18,
  marginLeft: -1,
  lineHeight: "26px",
  color: "#595959",
  whiteSpace: "normal",
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "22px",
    whiteSpace: "normal",
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "18px",
    whiteSpace: "normal",
  },

  "@media (min-width:900px) and (max-width:1199.95px)": {
    fontSize: 16,
    lineHeight: "22px",
    whiteSpace: "normal",
    marginLeft: 0,
  },
}));

export const PHeroSkeleton = styled(Skeleton)(({ theme }) => ({
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

export const PSkeletonGalleryImg = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  animation: "none",
  backgroundColor: "#E0E0E0",
  transform: "none",
  [theme.breakpoints.between("sm", "md")]: {
    borderRadius: 20,
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: 20,
  },
}));

export const PSkeletonMap = styled(Skeleton)({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  animation: "none",
  backgroundColor: "#EAF6FE",
  transform: "none",
});

export const PSkeletonMapOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgba(0, 166, 226, 0.3)",
  borderRadius: 20,
  zIndex: 1,
  pointerEvents: "none",
});

export const PSkeletonMapPin = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "22%",
  left: "26%",
  transform: "translate(-50%, -50%)",
  width: 51,
  height: 51,
  pointerEvents: "none",
  zIndex: 2,
  [theme.breakpoints.between("sm", "md")]: {
    top: "18%",
    left: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    top: "14%",
    left: "86%",
  },
}));
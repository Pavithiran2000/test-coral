import { styled } from "@mui/material/styles";
import Image from "next/image";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

export const PageSection = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "60px auto 0",
  paddingInline: 16,
  boxSizing: "border-box",
  display: "grid",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    margin: "40px auto 0",
    paddingInline: 12,
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "50px auto 0",
    paddingInline: 24,
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "60px auto 0",
    paddingInline: 24,
  },

  [theme.breakpoints.up("lg")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "60px auto 0",
    paddingInline: "clamp(12px, 6vw, 80px)",
    boxSizing: "border-box",
    display: "grid",
  },
}));

export const AboutHeroWrap = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "80px auto 0",
  paddingInline: 16,
  boxSizing: "border-box",
  display: "grid",
  rowGap: 24,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "30px auto 0",
    paddingInline: 12,
    rowGap: 20,
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "60px auto 0",
    paddingInline: 24,
    rowGap: 24,
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "70px auto 0",
    paddingInline: 24,
    rowGap: 24,
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

export const AboutHeroTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 36,
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    lineHeight: "40px",
  },
}));

export const AboutHeroFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: 1200,
  marginLeft: 20,
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

export const AboutHeroImg = styled(Image)(({ theme }) => ({
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

export const AboutHeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 1,
  zIndex: 1,
});

export const AboutBodyWrap = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "none",
  margin: 0,
  padding: "60px 0",
  backgroundColor: "#FFFFFF",
  boxSizing: "border-box",
  [theme.breakpoints.between("sm", "md")]: {
    padding: "40px 0",
  },

  [theme.breakpoints.between("md", "lg")]: {
    padding: "50px 0",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "40px 0",
  },

  [theme.breakpoints.up("lg")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "60px auto 0",
    padding: "0 16px",
    boxSizing: "border-box",
    display: "grid",
    rowGap: 60,
    marginLeft: -10,
  },
}));

export const AboutBodyTitle = styled("h2")(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "0 auto",
  paddingInline: 16,
  boxSizing: "border-box",
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "100%",
  color: "#0E1B41",

  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 1280,
    fontSize: 34,
    lineHeight: "42px",
    marginTop: 20,
    paddingInline: 24,
  },

  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: 1280,
    fontSize: 40,
    lineHeight: "46px",
    paddingInline: 24,
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: 1280,
    fontSize: 28,
    lineHeight: "36px",
    paddingInline: 12,
  },

  [theme.breakpoints.up("lg")]: {
    margin: 0,
    textAlign: "center",
    fontFamily: "var(--font-cg)",
    fontWeight: 600,
    fontSize: 46,
    lineHeight: "100%",
    color: "#0E1B41",
  },
}));

export const AboutBodyParas = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "0 auto",
  paddingInline: 16,
  boxSizing: "border-box",
  display: "grid",
  rowGap: 20,
  justifyItems: "center",

  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 720,
    rowGap: 18,
    marginTop: -10,
    paddingInline: 24,
  },

  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: 900,
    rowGap: 20,
    paddingInline: 24,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 1280,
    rowGap: 16,
    paddingInline: 12,
  },

  [theme.breakpoints.up("lg")]: {
    margin: "24px auto 0",
    width: "100%",
    maxWidth: 1200,
    display: "grid",
    rowGap: 20,
    justifyItems: "center",
    boxSizing: "border-box",
  },
}));

export const AboutPara = styled("p")(({ theme }) => ({
  margin: 0,
  maxWidth: 1000,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  whiteSpace: "normal",

  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 720,
    fontSize: 18,
    lineHeight: "28px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: 900,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    textAlign: "center",
    fontSize: 15,
    lineHeight: "22px",
    marginTop: 20,
  },

  [theme.breakpoints.up("lg")]: {
    margin: 0,
    maxWidth: 1278,
    textAlign: "center",
    fontFamily: "var(--font-crimson)",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: "30px",
    color: "#595959",
    whiteSpace: "normal",
  },
}));

export const MVWrap = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "40px auto 0",
  paddingInline: 16,
  boxSizing: "border-box",
  display: "grid",
  gridTemplateColumns: "480px 1fr",
  columnGap: 32,
  alignItems: "flex-start",
  justifyItems: "stretch",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    gridTemplateColumns: "1fr",
    rowGap: 16,
    margin: "30px auto 0",
    justifyItems: "center",
    paddingInline: 0,
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    gridTemplateColumns: "1fr",
    rowGap: 16,
    margin: "30px auto 0",
    justifyItems: "center",
    paddingInline: 24,
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    gridTemplateColumns: "minmax(0, 420px) minmax(0, 1fr)", 
    columnGap: 24,
    paddingInline: 24,
  },

  [theme.breakpoints.up("lg")]: {
    width: "100%",
    maxWidth: 1200,
    margin: "40px auto 0",
    display: "grid",
    gridTemplateColumns: "480px 1fr",
    columnGap: 24,
    alignItems: "start",
    justifyItems: "stretch",
    boxSizing: "border-box",
    paddingInline: 0,
  },
}));

export const MVImageBox = styled("div")(({ theme }) => ({
  width: 480,
  height: 550,
  borderRadius: 15,
  overflow: "hidden",

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 520,
    height: 420,
    margin: "0 auto",
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 460,
    height: 520,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    height: 330,
    margin: "0 auto",
  },
}));

export const MVImage = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const MVRight = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 703,
  borderRadius: 15,
  padding: "40px 20px 0",
  boxSizing: "border-box",
  border: "none",
  display: "grid",
  rowGap: 26,
  justifySelf: "start",
  position: "relative",
  overflow: "visible",

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 750,
    padding: "16px 16px",
    rowGap: 16,
    justifySelf: "center",
    marginTop: 16,
  },

  [theme.breakpoints.between("md", "lg")]: {
    padding: "40px 20px 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    marginTop: 20,
    rowGap: 16,
    padding: 0,
  },

  [theme.breakpoints.up("lg")]: {
    width: "100%",
    maxWidth: 703,
    minHeight: 500,
    borderRadius: 15,
    padding: "90px 20px 0px",
    boxSizing: "border-box",
    border: "none",
    display: "grid",
    rowGap: 26,
    justifySelf: "stretch",
    position: "relative",
  },
}));

export const MVRow = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "28px 1fr",
  alignItems: "start",
  columnGap: 16,

  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "1fr",
    columnGap: 0,
    width: "100%",
    maxWidth: 720,
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "15px 1fr",
    columnGap: 10,
    width: "100%",
    maxWidth: "100%",
  },
}));

const GRAD = "linear-gradient(180deg, #00A6E2 0%, #FFFFFF 100%)";

export const MVStem = styled("div")(({ theme }) => ({
  position: "relative",
  width: 28,
  height: 100,
  marginLeft: 40,

  [theme.breakpoints.between("sm", "md")]: {
    display: "none",
  },

  [theme.breakpoints.down("sm")]: {
    width: 15,
    height: 110,
    marginLeft: 20,
  },
}));

export const StemTop = styled("div")(({ theme }) => ({
  position: "absolute",
  top: -90,
  left: "50%",
  transform: "translateX(-50%)",
  width: 2,
  height: 70,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  background: GRAD,
  ["@media (max-width:600px)"]: { display: "none" },

  [theme.breakpoints.between("sm", "md")]: {
    top: -20,
    height: 40,
  },
}));

export const StemLine = styled("div")({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: 30,
  width: 2,
  height: "100%",
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  background: GRAD,
});

export const StemBottom = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: -100,
  left: "50%",
  transform: "translateX(-50%)",
  width: 2,
  height: 80,
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  background: GRAD,

  [theme.breakpoints.between("sm", "md")]: {
    bottom: -20,
    height: 40,
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const StemDot = styled("span")(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: 120,
  width: 13,
  height: 13,
  borderRadius: 99,
  background: "#00A6E2",
  boxShadow: "0 0 0 3px rgba(0,166,226,0.20)",

  [theme.breakpoints.between("sm", "md")]: { top: 64 },

  [theme.breakpoints.down("sm")]: {
    marginTop: -40,
    width: 8,
    height: 8,
  },
}));

export const MVTitle = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 20,
  lineHeight: 1,
  color: "#00A6E2",
  marginBottom: 10,
  marginLeft: -10,

  [theme.breakpoints.between("sm", "md")]: {
    marginLeft: 0,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    marginLeft: -20,
    marginBottom: 8,
    textAlign: "left",
    marginTop: 10,
  },
}));

export const MVCard = styled("div")(({ theme }) => ({
  border: "none",
  borderRadius: 10,
  padding: "12px 30px",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "27px",
  color: "#595959",
  whiteSpace: "normal",
  boxSizing: "border-box",

  [theme.breakpoints.between("sm", "md")]: {
    padding: "8px 20px",
    width: "100%",
    maxWidth: 720,
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    width: "100%",
    maxWidth: "100%",
    lineHeight: "20px",
    padding: "10px 16px",
  },
}));

export const StatsWrap = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 1160,
  margin: "40px auto 0",
  paddingInline: 16,
  boxSizing: "border-box",
  display: "flex",
  gap: 57,
  height: 174,
  justifyContent: "center",

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 520,
    margin: "30px auto 0",
    paddingInline: 24,
    flexDirection: "column",
    alignItems: "stretch",
    gap: 24,
    height: "auto",
  },

  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: 1000,
    gap: 40,
    height: "auto",
    paddingInline: 24,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    margin: "30px auto 0",
    paddingInline: 12,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    height: "auto",
    gap: 20,
  },

  [theme.breakpoints.up("lg")]: {
    width: "100%",
    maxWidth: 1200,
    margin: "40px auto 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    height: 174,
    gap: 57,
    boxSizing: "border-box",
    paddingInline: 0,
  },
}));

export const StatCard = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 350,
  height: 174,
  display: "grid",
  gridTemplateRows: "auto auto 1fr",

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "auto",
    rowGap: 12,
    paddingBottom: 16,
    borderBottom: "1px solid #BBCAD8",
    "&:last-child": { borderBottom: "none" },
  },

  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: 320,
    height: "auto",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    height: "auto",
    rowGap: 12,
    paddingBottom: 15,
    borderBottom: "1px solid #BBCAD8",
    "&:last-child": { borderBottom: "none" },
  },

  [theme.breakpoints.up("lg")]: {
    width: 350,
    height: 174,
    display: "grid",
    gridTemplateRows: "auto auto 1fr",
  },
}));

export const StatTop = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 6,
  height: 53,

  [theme.breakpoints.down("sm")]: { height: 38 },
}));

export const StatNum = styled("span")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 800,
  fontSize: 44,
  lineHeight: "44px",
  color: "#0EA6E2",

  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    lineHeight: "32px",
  },
}));

export const StatPlus = styled("span")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 800,
  fontSize: 34,
  lineHeight: "44px",
  marginTop: 4,
  color: "#0EA6E2",
  verticalAlign: "super",
  transform: "translateY(-10px)",
  display: "inline-block",

  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    lineHeight: "32px",
    transform: "translateY(-8px)",
  },
}));

export const StatTitle = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 24,
  lineHeight: "100%",
  color: "#0E1B41",
  marginTop: 6,

  [theme.breakpoints.between("sm", "md")]: { fontSize: 22 },

  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    lineHeight: "100%",
    width: "100%",
    maxWidth: 320,
    height: "auto",
  },
}));

export const StatDesc = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 350,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "26px",
  color: "#595959",
  marginTop: 6,

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "24px",
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: 320,
    fontSize: 12,
    lineHeight: "20px",
    height: "auto",
    marginTop: 0,
  },
}));

export const StatDivider = styled("div")(({ theme }) => ({
  width: 2,
  height:90,
  marginTop: -35,
  background: "rgba(0,0,0,0.20)",
  alignSelf: "center",

  [theme.breakpoints.between("sm", "md")]: { display: "none" },
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

export const VisionImageFrame = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 1200,
  height: 500,
  margin: "40px auto 0",
  borderRadius: 20,
  overflow: "hidden",

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    height: 440,
    margin: "30px auto 0",
  },

  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: 900,
    height: 460,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    height: 320,
    marginTop: 20,
  },
}));

export const VisionImage = styled(Image)({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  objectPosition: "50% 60%",
});

export const VisionariesWrap = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "60px auto",
  paddingInline: 16,
  boxSizing: "border-box",
  display: "grid",
  gridTemplateColumns: "720px 320px",
  columnGap: 100,

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "40px auto",
    paddingInline: 24,
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "40px auto",
    paddingInline: 24,
    display: "grid",
    gridTemplateColumns: "1fr 280px",
    columnGap: 40,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    margin: "50px auto 10px",
    paddingInline: 12,
    display: "flex",
    flexDirection: "column",
    rowGap: 16,
  },

  [theme.breakpoints.up("lg")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "60px auto 60px",
    padding: "0 16px",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "720px 320px",
    columnGap: 100,
  },
}));

export const VLeft = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 720,

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    order: 1,
    marginLeft: 0,
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 700,
  },

  [theme.breakpoints.down("sm")]: {
    order: 1,
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    margin: "0 auto",
  },

  [theme.breakpoints.up("lg")]: {
    width: 720,
  },
}));

export const VHeading = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "44px",
  color: "#0E1B41",

  [theme.breakpoints.down("md")]: {
    fontSize: 32,
    lineHeight: "36px",
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 351,
    fontSize: 28,
    lineHeight: "36px",
    textAlign: "center",
  },
}));

export const VIntro = styled("p")(({ theme }) => ({
  margin: "12px 0 24px",
  width: 950,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    margin: "8px auto 24px",
    fontSize: 20,
    lineHeight: "28px",
    textAlign: "center",
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 700,
    margin: "8px auto 24px",
    fontSize: 20,
    lineHeight: "28px",
    textAlign: "center",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "center",
    margin: "8px auto 16px",
  },
}));

export const VTopRow = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 720,
  paddingTop: 40,
  paddingBottom: 20,
  display: "grid",
  gridTemplateColumns: "1fr 260px",
  alignItems: "center",
  gap: 20,

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 700,
    margin: "0 auto",
    gridTemplateColumns: "1fr 200px",
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 700,
    margin: "0 auto",
    gridTemplateColumns: "1fr 200px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    paddingTop: 10,
    paddingBottom: 0,
    display: "flex",
    justifyContent: "space-between",
    gap: 0,
  },

  [theme.breakpoints.up("lg")]: {
    width: 720,
    paddingTop: 40,
    paddingBottom: 20,
    display: "grid",
    gridTemplateColumns: "1fr 260px",
    alignItems: "center",
    gap: 20,
  },
}));

export const VChairmanName = styled("a")(({ theme }) => ({
  display: "inline-block",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 28,
  lineHeight: "34px",
  color: "#00A6E2",
  textDecoration: "none",
  cursor: "default",

  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    lineHeight: "22px",
    textAlign: "left",
  },
}));

export const VChairmanTitle = styled("div")(({ theme }) => ({
  justifySelf: "end",
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 24,
  lineHeight: "29px",
  color: "#0E1B41",
  whiteSpace: "normal",

  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "17px",
    textAlign: "right",
  },
}));

export const VChairmanDesc = styled("p")(({ theme }) => ({
  margin: 12,
  width: "100%",
  maxWidth: 720,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "28px",
  color: "#595959",
  borderBottom: "1px solid #00A6E2",
  paddingBottom: 20,
  marginLeft: 0,

  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 700,
    margin: "12px auto 0",
  },

  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: 700,
    margin: "12px auto 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    margin: "12px auto 0",
    paddingBottom: 0,
    textAlign: "center",
    fontSize: 12,
    lineHeight: "18px",
    borderBottom: "none",
  },

  [theme.breakpoints.up("lg")]: {
    margin: 12,
    width: 720,
    fontFamily: "var(--font-crimson)",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: "28px",
    color: "#595959",
    borderBottom: "1px solid #00A6E2",
    paddingBottom: 20,
    marginLeft: 0,
  },
}));

export const VListRow = styled("button")(({ theme }) => ({
  width: "100%",
  maxWidth: 720,
  paddingTop: 20,
  paddingBottom: 20,
  borderBottom: "1px solid #BBCAD8",
  display: "grid",
  gridTemplateColumns: "1fr 260px",
  alignItems: "center",
  gap: 20,
  background: "transparent",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  cursor: "pointer",
  textAlign: "left",

  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: 700,
    margin: "0 auto",
  },

  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: 700,
    margin: "0 auto",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    paddingTop: 8,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    minHeight: 44,
    margin: "12px auto 0",
  },

  "&[data-active='true']": {
    borderBottom: "none",
  },

  [theme.breakpoints.up("lg")]: {
    width: 720,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottom: "1px solid #BBCAD8",
    display: "grid",
    gridTemplateColumns: "1fr 260px",
    alignItems: "center",
    gap: 20,
    background: "transparent",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    cursor: "pointer",
    textAlign: "left",
  },
}));

export const VPerson = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 28,
  lineHeight: "34px",
  color: "rgba(89,89,89,0.60)",
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",

  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
    lineHeight: "100%",
    maxWidth: 180,
  },

  "&[data-active='true']": {
    color: "#00A6E2",
  },
}));

export const VRole = styled("div")(({ theme }) => ({
  justifySelf: "end",
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 24,
  lineHeight: "29px",
  color: "rgba(89,89,89,0.60)",
  whiteSpace: "normal",

  [theme.breakpoints.down("sm")]: {
    flex: "0 0 145px",
    textAlign: "right",
    fontSize: 16,
    lineHeight: "100%",
  },

  "&[data-active='true']": {
    color: "#0E1B41",
  },
}));

export const VRight = styled("div")(({ theme }) => ({
  width: 320,
  display: "grid",
  justifyItems: "center",
  rowGap: 16,
  marginTop: 170,

  [theme.breakpoints.between("sm", "md")]: {
    display: "none",
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: 280,
    marginTop: 120,
    display: "grid",
  },

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const VPortraitCircle = styled("div")(({ theme }) => ({
  width: 240,
  height: 240,
  borderRadius: 999,
  background:
    "radial-gradient(72% 72% at 50% 30%, #1BB6EA 0%, #0EA6E2 55%, #0B97D6 100%)",
  display: "grid",
  placeItems: "center",
  overflow: "hidden",

  [theme.breakpoints.between("md", "lg")]: {
    width: 200,
    height: 200,
  },

  [theme.breakpoints.between("sm", "md")]: {
    margin: "16px auto 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: 200,
    height: 200,
    borderRadius: 300,
    background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
    margin: "16px auto 0",
  },
}));

export const VPortrait = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",

  [theme.breakpoints.between("md", "lg")]: {
    width: 200,
    height: 200,
  },

  [theme.breakpoints.down("sm")]: {
    width: 200,
    height: 200,
    objectFit: "cover",
    objectPosition: "50% 0%",
  },
}));

export const VChairmanDisplayName = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 28,
  lineHeight: "34px",
  color: "#0E1B41",
  textAlign: "center",
  marginTop: -20,

  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 22,
    lineHeight: "100%",
    marginTop: -40,
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: 248,
    height: 22,
    fontSize: 18,
    lineHeight: "100%",
    textAlign: "center",
    margin: "12px auto 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: 248,
    height: 22,
    fontSize: 18,
    lineHeight: "100%",
    textAlign: "center",
    margin: "12px auto 0",
  },
}));

export const VChairmanDegree = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 22,
  lineHeight: "28px",
  color: "#00A6E2",
  textAlign: "center",
  marginTop: -25,

  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 18,
    lineHeight: "22px",
    marginTop: -70,
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: 248,
    fontSize: 16,
    lineHeight: "22px",
    margin: "6px auto 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: 248,
    fontSize: 14,
    lineHeight: "22px",
    margin: "6px auto 0",
  },
}));

export const VDegreeLine = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.between("sm", "md")]: {
    display: "block",
    width: "100%",
    maxWidth: 700,
    height: 2,
    background: "#00A6E2",
    borderRadius: 1,
    margin: "10px auto 0",
  },

  [theme.breakpoints.between("md", "lg")]: {
    display: "block",
    width: "100%",
    maxWidth: 700,
    height: 2,
    background: "#00A6E2",
    borderRadius: 1,
    margin: "10px auto 0", 
  },

  [theme.breakpoints.down("sm")]: {
    display: "block",
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    height: 2,
    background: "#00A6E2",
    borderRadius: 1,
    margin: "10px auto 10px",
  },
}));

export const VLeftList = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: { display: "none" },
}));

export const MobileTeamList = styled("div")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.between("sm", "md")]: {
    display: "grid",
    order: 3,
    width: "100%",
    maxWidth: 700,
    margin: "0 auto",
    rowGap: 0,
  },

  [theme.breakpoints.down("sm")]: {
    display: "grid",
    order: 3,
    width: "100%",
    maxWidth: `calc(100vw - 24px)`,
    margin: "-20px auto",
    rowGap: 0,
  },
}));

export const AboutHeroSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  animation: "none",
  backgroundColor: "#E0E0E0",
  transform: "none",
  [theme.breakpoints.down("sm")]: { borderRadius: 10 },
}));

export const AboutMVImageSkeleton = styled(Skeleton)({
  width: "100%",
  height: "100%",
  borderRadius: 15,
  animation: "none",
  backgroundColor: "#E0E0E0",
  transform: "none",
});

export const AboutBuildingImageSkeleton = styled(Skeleton)({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  animation: "none",
  backgroundColor: "#E0E0E0",
  transform: "none",
});

export const AboutPortraitSkeleton = styled(Skeleton)({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  animation: "none",
  backgroundColor: "#E0E0E0",
  transform: "none",
});
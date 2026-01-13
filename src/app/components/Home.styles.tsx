import { styled } from "@mui/material/styles";
import Image from "next/image";
import Button, { ButtonProps } from "@mui/material/Button";
import ReactPlayer from "react-player";
import Skeleton from "@mui/material/Skeleton";

const ReactPlayerAny = ReactPlayer as unknown as React.ComponentType<
  Record<string, unknown>
>;

export const HeroWrap = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "80px auto 0",
  padding: "0 16px",
  display: "grid",
  rowGap: 16,
  boxSizing: "border-box",
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    rowGap: 8,
    padding: "0 16px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    rowGap: 10,
    padding: "0 24px",
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
  },
  [theme.breakpoints.between("md", "lg")]: {
    rowGap: 10,
    padding: "0 24px",
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
  },
}));

export const IntroBlock = styled("div")(({ theme }) => ({
  display: "grid",
  justifyItems: "start",
  width: 906,
  marginLeft: 5,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    rowGap: 6,
    justifyItems: "start",
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    justifyItems: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    justifyItems: "center",
  },
}));

export const HeroTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  width: "100%",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "100%",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    fontWeight: 600,
    fontSize: 32,
    lineHeight: "40px",
    letterSpacing: 0,
    margin: "0 auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginLeft: 0,
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    fontSize: 36,
    lineHeight: "48px",
    margin: "0 auto",
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginLeft: 0,
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    fontSize: 40,
    lineHeight: "48px",
    margin: "0 auto",
  },
}));

export const HeroSub = styled("p")(({ theme }) => ({
  margin: 0,
  width: "100%",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 24,
  lineHeight: "32px",
  color: "#595959",
  marginBottom: 8,
  [theme.breakpoints.down("sm")]: {
    maxWidth: `calc(100vw - 32px)`,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",
    letterSpacing: 0,
    marginLeft: 0,
    margin: "0 auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: `calc(100vw - 48px)`,
    fontSize: 18,
    lineHeight: "28px",
    marginLeft: 0,
  },
  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: `calc(100vw - 48px)`,
    fontSize: 20,
    lineHeight: "28px",
    marginLeft: 0,
  },
}));

export const MediaRow = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 20,
  justifyItems: "start",
  alignItems: "start",
  [theme.breakpoints.down("sm")]: {
    gap: 20,
    justifyItems: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    gap: 15,
    justifyItems: "center",
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
  },
  [theme.breakpoints.between("md", "lg")]: {
    gap: 20,
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    justifyItems: "center",
  },
}));

export const MediaFrame = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  overflow: "hidden",
  background: "#fff",
  boxSizing: "border-box",
  marginLeft: 5,
  [theme.breakpoints.down("sm")]: {
    margin: "10px 0 0",
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    height: 450,
    borderRadius: 20,
    background: "#FFFFFF",
    "&:last-of-type": { height: 374 },
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: 280,
    margin: 0,
    borderRadius: 15,
    background: "#FFFFFF",
    "&:last-of-type": { height: 280 },
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: "100%",
    marginLeft: 0,
  },
}));

export const LeftImage = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const MapIframe = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: 0,
  display: "block",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    height: 374,
    borderRadius: 20,
    margin: "0 auto",
    pointerEvents: "none",
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: 280,
    borderRadius: 15,
    margin: "0 auto",
    pointerEvents: "none",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    height: "100%",
  },
}));

export const FloatingChat = styled("div")(({ theme }) => ({
  position: "fixed",
  right: 20,
  bottom: 20,
  width: 130,
  height: 97,
  pointerEvents: "auto",
  zIndex: 1000,
  [theme.breakpoints.down("sm")]: { display: "none" },
  [theme.breakpoints.between("sm", "md")]: {
    right: 15,
    bottom: 15,
    width: 110,
    height: 80,
  },
}));

export const MapFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: 20,
  overflow: "hidden",
  background: "#fff",
  boxSizing: "border-box",
  marginLeft: 5,
  [theme.breakpoints.down("sm")]: {
    margin: "10px 0 0",
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    height: 450,
    borderRadius: 20,
    background: "#FFFFFF",
    "&:last-of-type": { height: 374 },
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: 280,
    margin: 0,
    borderRadius: 15,
    background: "#FFFFFF",
    "&:last-of-type": { height: 280 },
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: "100%",
    marginLeft: 0,
  },
}));

export const AskPill = styled("div")({
  position: "absolute",
  left: -20,
  bottom: 138,
  width: 130,
  height: 37,
  padding: "10px 12px",
  boxSizing: "border-box",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "17px",
  color: "#FFFFFF",
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  boxShadow: "0 2px 2px rgba(0,0,0,0.15), inset 0 2px 2px rgba(0,0,0,0.10)",
  cursor: "pointer",
});

export const RoundLogo = styled("div")({
  position: "absolute",
  left: 85,
  bottom: 84,
  width: 50,
  height: 50,
  borderRadius: 999,
  background: "#FFFFFF",
  display: "grid",
  placeItems: "center",
  boxShadow: "2px 2px 2px rgba(0,0,0,0.15), inset 2px 2px 2px rgba(0,0,0,0.10)",
  cursor: "pointer",
});

export const RoundLogoImg = styled(Image)({
  width: 36,
  height: 36,
  objectFit: "contain",
});

export const FloatingContact = styled("button")(({ theme }) => ({
  position: "fixed",
  left: 10,
  top: "50%",
  transform: "translateY(-50%)",
  width: 64,
  height: 64,
  borderRadius: "50%",
  border: "none",
  background: "linear-gradient(180deg, #0064B5 0%, #00A9DF 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
  zIndex: 1000,
  '&[data-open="true"]': {
    border: "3px solid #FFFFFF",
  },
  [theme.breakpoints.down("sm")]: { display: "none" },
  [theme.breakpoints.between("sm", "md")]: {
    left: 15,
    width: 55,
    height: 55,
  },
}));

export const BrMobile = styled("br")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: { display: "initial" },
  [theme.breakpoints.down("md")]: { display: "none" },
}));

export const BrDesktop = styled("br")(({ theme }) => ({
  display: "initial",
  [theme.breakpoints.down("sm")]: { display: "none" },
  [theme.breakpoints.down("md")]: { display: "none" },
}));

export const BrMedium = styled("br")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: { display: "initial" },
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

export const MediaCellRight = styled("div")(({ theme }) => ({
  position: "relative",
  width: 360,
  height: 560,
  overflow: "visible",
  boxSizing: "border-box",
  marginTop: -410,
  marginLeft: 910,
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: 280,
    marginTop: 0,
    marginLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    height: 374,
    marginTop: 0,
    marginLeft: 0,
  },
}));

export const AboutWrap = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: "1280px",
  margin: "80px auto 0",
  padding: "0 16px",
  display: "grid",
  gridTemplateRows: "auto auto auto auto",
  rowGap: 18,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    margin: "30px auto 0",
    padding: "0 16px",
    rowGap: 30,
    justifyItems: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "50px auto 0",
    padding: "0 24px",
    rowGap: 15,
    justifyItems: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "60px auto 0",
    padding: "0 24px",
    rowGap: 18,
    justifyItems: "center",
  },
}));

export const AboutTitle = styled("h2")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    fontWeight: 600,
    fontSize: 28,
    lineHeight: "36px",
    marginTop: 15,
    letterSpacing: 0,
    color: "#0E1B41",
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "44px",
    marginTop: 0,
    maxWidth: `calc(100vw - 48px)`,
    margin: "0 auto",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "44px",
    marginTop: 0,
    maxWidth: `calc(100vw - 48px)`,
    margin: "0 auto",
  },
}));

export const AboutSub = styled("p")(({ theme }) => ({
  margin: "6px auto 0",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",
  textAlign: "justify",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    margin: "0 auto",
    fontSize: 14,
    lineHeight: "22px",
    letterSpacing: 0,
    color: "#595959",
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "4px auto 0",
    fontSize: 18,
    lineHeight: "26px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "4px auto 0",
    fontSize: 18,
    lineHeight: "26px",
  },
}));

export const AboutFinePrint = styled("p")(({ theme }) => ({
  margin: "6px auto 6px",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 20,
  lineHeight: "30px",
  letterSpacing: "0%",
  textAlign: "center",
  color: "#171717",
  [theme.breakpoints.down("sm")]: {
    margin: "-12px auto 0",
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    fontSize: 14,
    lineHeight: "18px",
    letterSpacing: 0,
    fontWeight: 500,
    textAlign: "center",
    color: "#171717",
  },
  [theme.breakpoints.between("sm", "md")]: {
    margin: "6px auto 6px",
    maxWidth: `calc(100vw - 48px)`,
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 500,
    textAlign: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    margin: "6px auto 6px",
    maxWidth: `calc(100vw - 48px)`,
    fontSize: 16,
    lineHeight: "24px",
    fontWeight: 500,
    textAlign: "center",
  },
}));

export const VideoWrap = styled("div")(({ theme }) => ({
  width: 1000,
  maxWidth: "100%",
  margin: "0 auto",
  borderRadius: 20,
  overflow: "hidden",
  border: "1px solid #E7EDF5",
  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  aspectRatio: "16 / 9",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    height: 280,
    aspectRatio: "16/9",
    borderRadius: 20,
    border: "1px solid #E7EDF5",
    overflow: "hidden",
    margin: "0 auto",
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    aspectRatio: "16/9",
    borderRadius: 15,
    border: "1px solid #BBCAD8",
    margin: "0 auto",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    aspectRatio: "16/9",
    borderRadius: 15,
    border: "1px solid #BBCAD8",
    margin: "0 auto",
  },
}));

export const VideoIframe = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "100%",
  border: 0,
  display: "block",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    height: "100%",
  },
}));

export const VideoPlayer = styled(ReactPlayerAny)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "block",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    height: "100%",
  },
}));

export const AboutCta = styled(Button)<ButtonProps>(({ theme }) => ({
  justifySelf: "center",
  alignSelf: "center",
  marginTop: 18,
  display: "inline-flex",
  width: "100%",
  maxWidth: 320,
  minWidth: 180,
  textTransform: "none",
  borderRadius: 12,
  padding: "18px 30px",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 20,
  lineHeight: "1.2",
  letterSpacing: "0.02em",
  color: "#FFFFFF",
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
  whiteSpace: "nowrap",
  "&:hover": {
    background: "linear-gradient(90deg, #005fa8 0%, #0098cf 100%)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    width: "100%",
    maxWidth: 220,
    minWidth: 120,
    height: 36,
    padding: "0 10px",
    fontWeight: 500,
    justifySelf: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginLeft: 0,
    fontSize: 14,
    lineHeight: "36px",
    letterSpacing: 0,
    border: "none",
    boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 12,
    width: "100%",
    maxWidth: 260,
    minWidth: 140,
    height: 40,
    padding: "12px 18px",
    fontSize: 16,
    lineHeight: "1.2",
    borderRadius: 10,
    justifySelf: "center",
    alignSelf: "center",
    border: "none",
    whiteSpace: "nowrap",
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 12,
    width: "100%",
    maxWidth: 260,
    minWidth: 140,
    height: 40,
    padding: "12px 18px",
    fontSize: 16,
    lineHeight: "1.2",
    borderRadius: 10,
    justifySelf: "center",
    alignSelf: "center",
    border: "none",
    whiteSpace: "nowrap",
  },
}));

export const ProjectsWrap = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: 1350,
  margin: "80px auto 0",
  padding: "0 16px",
  display: "grid",
  rowGap: 12,
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: "20px auto 0",
    padding: "0 16px",
    rowGap: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "50px auto 0",
    padding: "0 24px",
    rowGap: 15,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "60px auto 0",
  },
}));

export const ProjectsHead = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: 30,
  rowGap: 6,
  alignItems: "end",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    alignItems: "center",
    justifyItems: "center",
    rowGap: 10,
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    padding: "18px 0",
    borderRadius: 10,
    border: "none",
    background: "#FFFFFF",
    margin: "0 auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "1fr",
    columnGap: 0,
    rowGap: 12,
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    padding: "20px 0",
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridTemplateColumns: "1fr",
    columnGap: 0,
    rowGap: 12,
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    padding: "20px 0",
  },
}));

export const ProjectsTitle = styled("h2")(({ theme }) => ({
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
  margin: 0,
  marginBottom: 10,
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 46,
  lineHeight: "1.3",
  color: "#0E1B41",
  marginLeft: 53,
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "1.3",
    letterSpacing: 0,
    textAlign: "center",
    justifySelf: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridColumn: "1 / -1",
    marginLeft: 0,
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "1.3",
    textAlign: "center",
    justifySelf: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridColumn: "1 / -1",
    marginLeft: 0,
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "1.3",
    textAlign: "center",
    justifySelf: "center",
  },
  [theme.breakpoints.up("xl")]: {
    lineHeight: "1.3",
  },
}));

export const ProjectsLead = styled("p")(({ theme }) => ({
  gridColumn: "1 / 2",
  gridRow: "2 / 3",
  margin: 0,
  maxWidth: 1000,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "1.5",
  color: "#595959",
  marginLeft: 53,
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginTop: 20,
    maxWidth: `calc(100vw - 32px)`,
    width: "100%",
    fontSize: 16,
    lineHeight: "1.5",
    letterSpacing: 0,
    textAlign: "center",
    color: "#595959",
    margin: "20px auto 0",
    justifySelf: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridColumn: "1 / -1",
    marginLeft: 0,
    marginTop: 10,
    maxWidth: `calc(100vw - 48px)`,
    width: "100%",
    fontSize: 18,
    lineHeight: "1.5",
    textAlign: "center",
    margin: "10px auto 0",
    justifySelf: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridColumn: "1 / -1",
    marginLeft: 0,
    marginTop: 10,
    maxWidth: `calc(100vw - 48px)`,
    width: "100%",
    fontSize: 18,
    lineHeight: "1.5",
    textAlign: "center",
    margin: "10px auto 0",
    justifySelf: "center",
  },
  [theme.breakpoints.up("xl")]: {
    lineHeight: "1.5",
  },
}));

export const ProjectsCta = styled(Button)<ButtonProps>(({ theme }) => ({
  gridColumn: "2 / 3",
  gridRow: "1 / 3",
  alignSelf: "bottom",
  textTransform: "none",
  borderRadius: 12,
  padding: "14px 32px",
  fontFamily: "var(--font-crimson)",
  justifyContent: "flex-end",
  fontWeight: 500,
  fontSize: 20,
  color: "#fff",
  marginRight: 74,
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  whiteSpace: "nowrap",
  "&:hover": { background: "linear-gradient(90deg, #005fa8 0%, #0098cf 100%)", whiteSpace: "nowrap" },
  [theme.breakpoints.down("sm")]: {
    gridColumn: "1 / -1",
    gridRow: "auto",
    marginTop: 10,
    minWidth: 100,
    height: 36,
    padding: "0 10px",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: "0.02em",
    lineHeight: "1.2",
    justifySelf: "center",
    whiteSpace: "nowrap",
    marginRight: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridColumn: "1 / -1",
    gridRow: "auto",
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 0,
    minWidth: 120,
    height: 38,
    padding: "12px 18px",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "0.02em",
    lineHeight: "1.2",
    justifySelf: "center",
    whiteSpace: "nowrap",
    marginRight: 0,

  },
  [theme.breakpoints.between("md", "lg")]: {
    gridColumn: "1 / -1",
    gridRow: "auto",
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 0,
    minWidth: 140,
    height: 38,
    padding: "12px 18px",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "0.02em",
    lineHeight: "1.2",
    justifySelf: "center",
    whiteSpace: "nowrap",
  },
}));

export const ProjectsBleed = styled("div")(({ theme }) => ({
  width: "100vw",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  marginTop: 30,
  overflowX: "clip",
  overflowY: "visible",
  boxSizing: "border-box",
  "@supports (width: 100dvw)": {
    width: "100dvw",
    marginLeft: "calc(50% - 50dvw)",
    marginRight: "calc(50% - 50dvw)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    overflow: "visible",
    display: "grid",
    placeItems: "center",
    marginTop: 12,
    paddingLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    overflow: "visible",
    display: "grid",
    placeItems: "center",
    marginTop: 10,
    paddingLeft: 0,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    overflow: "visible",
    display: "grid",
    placeItems: "center",
    marginTop: 10,
    paddingLeft: 0,
  },
}));

export const ProjectsRailViewport = styled("div")(({ theme }) => ({
  width: "100%",
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  overscrollBehaviorX: "contain",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },
  scrollSnapType: "x mandatory",
  padding: 0,
  margin: 0,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    margin: "0 auto",
    paddingInline: 0,
    scrollPaddingInline: 0,
    scrollSnapType: "x mandatory",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "0 auto",
    paddingInline: 0,
    scrollPaddingInline: 0,
    scrollSnapType: "x mandatory",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "0 auto",
    paddingInline: 0,
    scrollPaddingInline: 0,
    scrollSnapType: "x mandatory",
  },
}));

export const ProjectsRail = styled("div")(({ theme }) => ({
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: "380px",
  gridTemplateRows: "480px",
  gap: 20,
  scrollSnapType: "x mandatory",
  padding: 0,
  [theme.breakpoints.down("sm")]: {
    gridAutoFlow: "column",
    gridAutoColumns: "100%",
    gridTemplateRows: "380px",
    gap: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridAutoFlow: "column",
    gridAutoColumns: "300px",
    gridTemplateRows: "400px",
    gap: 15,
    scrollSnapType: "x mandatory",
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridAutoFlow: "column",
    gridAutoColumns: "320px",
    gridTemplateRows: "420px",
    gap: 18,
    scrollSnapType: "x mandatory",
  },
}));

export const ProjectCard = styled("div")(({ theme }) => ({
  width: 380,
  height: 480,
  borderRadius: 12,
  overflow: "hidden",
  background: "transparent",
  scrollSnapAlign: "start",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: 380,
    borderRadius: 12,
    border: 0,
    background: "transparent",
    margin: 0,
    scrollSnapAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 300,
    height: 400,
    borderRadius: 10,
    background: "transparent",
    scrollSnapAlign: "start",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: 320,
    height: 420,
    borderRadius: 12,
  },
}));

export const ProjectImg = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  borderRadius: 12,
  [theme.breakpoints.down("sm")]: {
    borderRadius: 15,
  },
  [theme.breakpoints.between("sm", "md")]: {
    borderRadius: 10,
  },
  [theme.breakpoints.between("md", "lg")]: {
    borderRadius: 12,
  },
}));

export const FutureWrap = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "80px auto 0",
  padding: "0 16px",
  display: "grid",
  rowGap: 16,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    margin: "40px auto 0",
    padding: "0 16px",
    rowGap: 15,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "20px auto 0",
    padding: "0 24px",
    rowGap: 12,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
  },
}));

export const FutureTitle = styled("h2")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 600,
    fontSize: 28,
    lineHeight: "36px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "44px",
    maxWidth: `calc(100vw - 48px)`,
    margin: "0 auto",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "44px",
    maxWidth: `calc(100vw - 48px)`,
    margin: "0 auto",
  },
}));

export const FutureSub = styled("p")(({ theme }) => ({
  margin: "6px auto 0",
  maxWidth: 1000,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    margin: "0 auto",
    fontSize: 14,
    lineHeight: "22px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    maxWidth: `calc(100vw - 48px)`,
    fontSize: 18,
    lineHeight: "26px",
    margin: "4px auto 0",
  },
  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: `calc(100vw - 48px)`,
    fontSize: 18,
    lineHeight: "26px",
    margin: "4px auto 0",
  },
}));

export const FutureCards = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "595px 620px",
  gap: 35,
  marginTop: 20,
  marginLeft: 20,

  "@media (min-width:1200px) and (max-width:1300px)": {
    width: "100%",
    maxWidth: "100%",
    marginLeft: 0,
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 24,
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: 20,
    marginTop: 10,
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    gridTemplateColumns: "1fr",
    gap: 15,
    marginTop: 10,
    marginLeft: 0,
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
  },
  [theme.breakpoints.between("md", "lg")]: {
    gridTemplateColumns: "1fr",
    gap: 20,
    marginTop: 20,
    marginLeft: 0,
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
  },
}));

export const FutureCard = styled("div")(({ theme }) => ({
  width: 591,
  height: 400,
  boxSizing: "border-box",
  display: "grid",
  gridTemplateColumns: "280px 1fr",
  columnGap: 18.5,
  padding: "15px 25px",
  borderRadius: 20,
  background: "#FCFCFD",
  border: "1px solid #BBCAD8",
  "@media (min-width:1200px) and (max-width:1300px)": {
    width: "100%",
    maxWidth: "100%",
    height: "auto",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    height: "auto",
    padding: 10,
    borderRadius: 15,
    background: "#FCFCFD",
    border: "1px solid #B8CAD8",
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: 10,
    margin: "0 auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: "auto",
    padding: 12,
    borderRadius: 15,
    background: "#FCFCFD",
    border: "1px solid #B8CAD8",
    gridTemplateColumns: "1fr",
    columnGap: 0,
    rowGap: 12,
    margin: "0 auto",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: "auto",
    padding: 12,
    borderRadius: 15,
    border: "1px solid #B8CAD8",
    gridTemplateColumns: "1fr",
    rowGap: 12,
    margin: "0 auto",
  },
}));

export const FutureImgWrap = styled("div")(({ theme }) => ({
  width: 280,
  height: 380,
  marginTop: -5.6,
  borderRadius: 15,
  overflow: "hidden",
  marginLeft: -20,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    height: 220,
    marginTop: 0,
    marginLeft: 0,
    justifySelf: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: 250,
    marginTop: 0,
    marginLeft: 0,
    justifySelf: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: 260,
    marginTop: 0,
    marginLeft: 0,
    justifySelf: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
}));

export const FutureImg = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const FutureBody = styled("div")(({ theme }) => ({
  display: "grid",
  gridAutoRows: "max-content",
  rowGap: 10,
  padding: "33px 5px",
  marginLeft: -30,
  [theme.breakpoints.down("sm")]: {
    padding: "0 10px 10px",
    marginLeft: 0,
    rowGap: 8,
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "8px",
    marginLeft: 0,
    rowGap: 8,
  },
  [theme.breakpoints.between("md", "lg")]: {
    padding: "8px",
    marginLeft: 0,
    rowGap: 8,
  },
}));

export const FutureName = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 32,
  marginTop: -10,
  marginLeft: -2,
  lineHeight: "100%",
  color: "#0E1B41",
  whiteSpace: "normal",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "100%",
    marginTop: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 24,
    lineHeight: "100%",
    marginTop: 0,
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 24,
    lineHeight: "100%",
    marginTop: 0,
  },
}));

export const FutureLoc = styled("div")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 20,
  lineHeight: "24px",
  color: "#0063B8",
  marginLeft: -2,
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "100%",
    fontWeight: 700,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "20px",
    fontWeight: 700,
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 16,
    lineHeight: "20px",
    fontWeight: 700,
  },
}));

export const FuturePara = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 17,
  marginTop: 15,
  marginLeft: -2,
  lineHeight: "24px",
  color: "#595959",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "16px",
    marginTop: 6,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 14,
    lineHeight: "18px",
    marginTop: 6,
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 14,
    lineHeight: "18px",
    marginTop: 6,
  },
}));

export const FutureParas = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 16,
  marginTop: 20,
  marginLeft: -2,
  lineHeight: "20px",
  color: "#171717",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: "16px",
    marginTop: 6,
    color: "#171717",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "18px",
    marginTop: 6,
    color: "#171717",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "18px",
    marginTop: 6,
    color: "#171717",
  },
}));

export const FutureParaSmall = styled("p")({
  margin: 0,
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "20px",
  color: "#171717",
});

export const FutureBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  marginTop: 35,
  width: 135,
  height: 43,
  borderRadius: 10,
  textTransform: "none",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "43px",
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  color: "#FFFFFF",
  "&:hover": { background: "linear-gradient(90deg, #005fa8 0%, #0098cf 100%)" },
  [theme.breakpoints.down("sm")]: {
    marginTop: 6,
    width: 140,
    height: 32,
    fontSize: 12,
    lineHeight: "13px",
    borderRadius: 10,
    letterSpacing: "0.02em",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 8,
    width: 130,
    height: 36,
    fontSize: 14,
    lineHeight: "18px",
    borderRadius: 10,
    letterSpacing: "0.02em",
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 8,
    width: 130,
    height: 36,
    fontSize: 14,
    lineHeight: "18px",
    borderRadius: 10,
    letterSpacing: "0.02em",
  },
}));

export const FuturesBtn = styled(Button)<ButtonProps>(({ theme }) => ({
  marginTop: 35,
  width: 135,
  height: 43,
  borderRadius: 10,
  textTransform: "none",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "43px",
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  color: "#FFFFFF",
  "&:hover": { background: "linear-gradient(90deg, #005fa8 0%, #0098cf 100%)" },
  [theme.breakpoints.down("sm")]: {
    marginTop: 6,
    width: 140,
    height: 32,
    fontSize: 12,
    lineHeight: "13px",
    borderRadius: 10,
    letterSpacing: "0.02em",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 8,
    width: 130,
    height: 36,
    fontSize: 14,
    lineHeight: "18px",
    borderRadius: 10,
    letterSpacing: "0.02em",
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 8,
    width: 130,
    height: 36,
    fontSize: 14,
    lineHeight: "18px",
    borderRadius: 10,
    letterSpacing: "0.02em",
  },
}));

export const Nowrap = styled("span")({
  whiteSpace: "normal",
});

export const GroupWrap = styled("section")(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "40px auto 0",
  padding: "60px 16px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    margin: "30px auto 0",
    padding: "0 16px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "20px auto 0",
    padding: "20px 24px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "30px auto 0",
    padding: "20px 24px",
  },
}));

export const GroupFrame = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  display: "grid",
  gridTemplateColumns: "415px 790px",
  columnGap: 20,
  alignItems: "start",
  "@media (min-width:1200px) and (max-width:1300px)": {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    gridTemplateColumns: "1fr",
    rowGap: 20,
    columnGap: 0,
    margin: "0 auto",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    gridTemplateColumns: "1fr",
    rowGap: 12,
    columnGap: 0,
    margin: "0 auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    gridTemplateColumns: "1fr",
    rowGap: 10,
    columnGap: 0,
    margin: "0 auto",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    gridTemplateColumns: "1fr",
    rowGap: 20,
    columnGap: 0,
    margin: "0 auto",
  },
}));

export const GroupLeft = styled("div")(({ theme }) => ({
  width: 415,
  height: 245,
  marginLeft: -10,

  "@media (min-width:1200px) and (max-width:1300px)": {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: "auto",
    margin: "0 auto 8px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    height: "auto",
    margin: "0 auto",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: "auto",
    margin: "0 auto 8px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    height: "auto",
    margin: "0 auto 8px",
  },
}));

export const GroupTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  marginTop: 60,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  marginLeft: 30,
  whiteSpace: "normal",

  "@media (min-width:1200px) and (max-width:1300px)": {
    marginTop: 0,
    marginLeft: 0,
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "44px",
    textAlign: "center",
    whiteSpace: "normal",
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    marginLeft: 0,
    fontWeight: 600,
    fontSize: 28,
    lineHeight: "36px",
    textAlign: "left",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 0,
    marginLeft: 0,
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "44px",
    textAlign: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 0,
    marginLeft: 0,
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "44px",
    textAlign: "center",
  },
}));

export const GroupSub = styled("p")(({ theme }) => ({
  margin: "8px 0 0",
  width: 415,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",
  marginLeft: 30,

  "@media (min-width:1200px) and (max-width:1300px)": {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    marginLeft: 0,
    fontSize: 18,
    lineHeight: "26px",
    textAlign: "center",
    margin: "6px auto 0",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    marginLeft: 0,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "left",
    margin: "8px auto 0",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    marginLeft: 0,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: "26px",
    textAlign: "center",
    margin: "6px auto 0",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    marginLeft: 0,
    fontWeight: 400,
    fontSize: 18,
    lineHeight: "26px",
    textAlign: "center",
    margin: "6px auto 0",
  },
}));

export const CompanyGrid = styled("div")(({ theme }) => ({
  width: 790,
  marginLeft: 20,
  display: "grid",
  gridTemplateColumns: "repeat(3, 250px)",
  gridTemplateRows: "repeat(2, 213px)",
  gap: 18,
  "@media (min-width:1200px) and (max-width:1300px)": {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "0 auto",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gridTemplateRows: "repeat(2, auto)",
    gap: 18,
    justifyContent: "center",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(3, auto)",
    gap: 10,
    justifyContent: "stretch",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "0 auto",
    gridTemplateColumns: "repeat(2, 200px)",
    gridTemplateRows: "repeat(3, 170px)",
    gap: 10,
    justifyContent: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: `calc(100vw - 48px)`,
    margin: "0 auto",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gridTemplateRows: "repeat(2, auto)",
    gap: 18,
    justifyContent: "center",
  },
  "@media (max-width: 360px)": {
    width: "100%",
    maxWidth: `calc(100vw - 32px)`,
    margin: 0,
    marginLeft: 0,
    marginRight: 0,
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(6, auto)",
    gap: 10,
  },
}));

export const CompanyCard = styled("div")(({ theme }) => ({
  width: 250,
  height: 190, //213
  borderRadius: 20,
  border: "1px solid #BBCAD8",
  background: "#FFFFFF",
  padding: "15px 25px",
  boxSizing: "border-box",
  display: "grid",
  gridTemplateRows: "auto auto 1fr auto",
  rowGap: 10,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
    borderRadius: 15,
    border: "1px solid #B8CAD8",
    padding: 10,
    rowGap: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 200,
    height: 170,
    borderRadius: 15,
    border: "1px solid #B8CAD8",
    padding: 10,
    rowGap: 6,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    minHeight: 213,
    height: "auto",
  },
  "@media (min-width:1200px) and (max-width:1300px)": {
    width: "100%",
    minHeight: 213,
    height: "auto",
  },
}));

export const CompanyTop = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  alignItems: "start",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    marginTop: -5,
  },
  [theme.breakpoints.between("sm", "md")]: {
    alignItems: "center",
    marginTop: 0,
  },
  [theme.breakpoints.between("md", "lg")]: {
    alignItems: "center",
    marginTop: 0,
  },
}));

export const CompanyLogoBox = styled("div")(({ theme }) => ({
  width: 166.67,
  height: 100,
  display: "grid",
  placeItems: "center",
  justifySelf: "start",
  [theme.breakpoints.down("sm")]: {
    width: 100,
    height: 60,
    justifySelf: "start",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 130,
    height: 75,
    justifySelf: "start",
  },
}));

export const CompanyLogo = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  marginLeft: -30,
  objectFit: "contain",
  display: "block",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginLeft: 0,
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginLeft: 0,
  },
}));

export const Rating = styled("div")(({ theme }) => ({
  display: "grid",
  gridAutoFlow: "column",
  alignItems: "center",
  lineHeight: "100%",
  gap: 6,
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  fontSize: 12,
  color: "#0E1B41",
  marginTop: 45,
  [theme.breakpoints.down("sm")]: {
    gap: 4,
    fontSize: 10,
    marginTop: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    gap: 5,
    fontSize: 11,
    marginTop: 0,
  },
  [theme.breakpoints.between("md", "lg")]: {
    gap: 5,
    fontSize: 11,
    marginTop: 0,
  },
}));

export const Star = styled("span")(({ theme }) => ({
  width: 24,
  height: 24,
  display: "inline-block",
  backgroundColor: "#F9C700",
  mask: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.56 5.82 22 7 14.15l-5-4.88 6.91-1.01L12 2z"/></svg>\') center / contain no-repeat',
  WebkitMask:
    'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.56 5.82 22 7 14.15l-5-4.88 6.91-1.01L12 2z"/></svg>\') center / contain no-repeat',
  [theme.breakpoints.down("sm")]: {
    width: 16,
    height: 16,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 18,
    height: 18,
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: 18,
    height: 18,
  },
}));

export const CompanyDesc = styled("p")(({ theme }) => ({
  marginTop: -20,
  marginLeft: -15,
  width: 230,
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "22px",
  color: "#595959",
  justifySelf: "center",
  wordBreak: "keep-all",
  overflowWrap: "normal",
  hyphens: "none",
  [theme.breakpoints.down("sm")]: {
    marginTop: -13,
    marginLeft: 0,
    width: 150,
    height: "auto",
    fontSize: 11,
    lineHeight: "13px",
    textAlign: "center",
    justifySelf: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: -8,
    marginLeft: 0,
    width: 160,
    height: "auto",
    fontSize: 13,
    lineHeight: "16px",
    textAlign: "center",
    justifySelf: "center",
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 0,
    marginLeft: 0,
    width: "100%",
    fontSize: 14,
    lineHeight: "18px",
  },
}));

export const CompanyBtn = styled(Button)(({ theme }) => ({
  justifySelf: "center",
  width: 170,
  height: 32,
  borderRadius: 10,
  textTransform: "none",
  letterSpacing: "0.02em",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  marginTop: -10,
  fontSize: 12,
  lineHeight: "13px",
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  color: "#FFFFFF",
  "&:hover": { background: "linear-gradient(90deg, #005fa8 0%, #0098cf 100%)" },
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    width: 120,
    height: 28,
    borderRadius: 8,
    fontSize: 12,
    lineHeight: "28px",
    padding: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 0,
    width: 130,
    height: 28,
    borderRadius: 8,
    fontSize: 12,
    lineHeight: "16px",
    padding: 0,
  },
  [theme.breakpoints.between("md", "lg")]: {
    marginTop: 0,
    width: 150,
    height: 32,
    borderRadius: 10,
    fontSize: 12,
    lineHeight: "16px",
    padding: 0,
  },
}));

export const MapOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(184, 202, 216, 0.75)",
  mixBlendMode: "color",
  pointerEvents: "none",
  borderRadius: "inherit",
});

export const ContactPanel = styled("div")(({ theme }) => ({
  position: "fixed",
  left: 74,
  top: "50%",
  transform: "translateY(-50%)",
  display: "grid",
  rowGap: 10,
  zIndex: 999,
  pointerEvents: "auto",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    left: 70,
  },
}));

export const ContactCard = styled("button")(({ theme }) => ({
  width: 230,
  minHeight: 51,
  padding: "8px 10px",
  borderRadius: 10,
  border: "none",
  background: "#FFFFFF",
  boxSizing: "border-box",
  display: "grid",
  alignItems: "flex-start",
  rowGap: 4,
  textAlign: "left",
  cursor: "pointer",
  boxShadow:
    "1px 1px 11px rgba(0,0,0,0.15), inset 1px 1px 3px rgba(0,0,0,0.10)",
  font: "inherit",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 230,
  },
}));

export const ContactCards = styled("button")(({ theme }) => ({
  width: 230,
  minHeight: 51,
  padding: "8px 10px",
  borderRadius: 10,
  border: "none",
  background: "#FFFFFF",
  boxSizing: "border-box",
  display: "grid",
  alignItems: "flex-start",
  rowGap: 4,
  textAlign: "left",
  marginLeft: 20,
  cursor: "pointer",
  boxShadow:
    "1px 1px 11px rgba(0,0,0,0.15), inset 1px 1px 3px rgba(0,0,0,0.10)",
  font: "inherit",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: 230,
  },
}));

export const ContactTitle = styled("div")({
  fontFamily: "var(--font-cg)",
  fontWeight: 700,
  fontSize: 12,
  lineHeight: "100%",
  color: "#0E1B41",
});

export const ContactText = styled("div")({
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "100%",
  color: "#595959",
});

export const HeroImageSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  backgroundColor: "#E0E0E0",
  transform: "none",
  aspectRatio: "1800 / 981",
  [theme.breakpoints.down("sm")]: {
    aspectRatio: "16 / 9",
    borderRadius: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    aspectRatio: "1 / 1",
  },
  [theme.breakpoints.up("lg")]: {
    aspectRatio: "700 / 460",
  },
}));

export const MapSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  backgroundColor: "#E0E0E0",
  transform: "none",
  aspectRatio: "4 / 3",
  [theme.breakpoints.down("sm")]: {
    aspectRatio: "16 / 9",
    borderRadius: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    aspectRatio: "1 / 1",
  },
  [theme.breakpoints.up("lg")]: {
    aspectRatio: "4 / 3",
  },
}));

export const VideoSkeleton = styled(Skeleton)({
  width: "100%",
  height: "100%",
  borderRadius: 20,
  backgroundColor: "#E0E0E0",
  transform: "none",
});

export const ProjectImageSkeleton = styled(Skeleton)(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: 12,
  backgroundColor: "#E0E0E0",
  transform: "none",
  [theme.breakpoints.down("sm")]: {
    borderRadius: 15,
  },
}));

export const FutureImageSkeleton = styled(Skeleton)({
  width: "100%",
  height: "100%",
  borderRadius: 15,
  backgroundColor: "#E0E0E0",
  transform: "none",
});

export const CompanyLogoSkeleton = styled(Skeleton)({
  width: "100%",
  height: "100%",
  borderRadius: 0,
  backgroundColor: "#E0E0E0",
  transform: "none",
});
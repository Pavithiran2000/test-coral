import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Tab, { type TabProps } from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Button, { ButtonProps } from "@mui/material/Button";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Container from "@mui/material/Container";
import Link from "next/link";

const NAVY = "#0E1B41";

export const BodyRoot = styled("body")({
  margin: 0,
  overflowX: "hidden",
});

export const HeaderRoot = styled("header")({});

export const HeaderBar = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: 1440,
  height: 100,
  margin: "0 auto",
  "&&": {
    paddingLeft: 40,
    paddingRight: 0,
  },
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: 900,
    paddingLeft: 12,
    paddingRight: 12,
    height: 40,
    marginTop: 20,
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 375,
    paddingLeft: 12,
    paddingRight: 12,
    height: 40,
    marginTop: 20,
    justifyContent: "space-between",
  },
  "@media (min-width:430px) and (max-width:600px)": {
    maxWidth: "100%",
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

export const LogoWrap = styled("div")(({ theme }) => ({
  position: "relative",
  width: 186.67,
  height: 70,
  flexShrink: 0,
  marginLeft: -40,
  [theme.breakpoints.down("md")]: {
    width: 160,
    height: 60,
    marginLeft: -30,
  },
  [theme.breakpoints.down("sm")]: {
    width: 106.67,
    height: 40,
    marginLeft: -30,
  },
}));

export const LogoImage = styled(Image)({ objectFit: "contain" });

export const NavWrap = styled("nav")(({ theme }) => ({
  flex: 1,
  display: "flex",
  marginLeft: 168,
  [theme.breakpoints.down("lg")]: { display: "none" },
}));

export const NavTabs = styled(Tabs)({
  minHeight: 4,
  "& .MuiTabs-indicator": { display: "none" },
  "& .MuiTabs-flexContainer": { gap: 22, alignItems: "center" },
  "& .MuiTabs-scroller": { overflow: "visible" },
});

export const NavTab = (styled(Tab)<TabProps>(() => ({
  textTransform: "none",
  fontSize: 18,
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  color: "#595959",
  minHeight: 22,
  height: 22,
  minWidth: 0,
  padding: 0,
  lineHeight: 1,
  "&.Mui-selected": { color: "#0063B8", fontWeight: 600 },
})) as unknown) as typeof Tab;

export const DesktopNavList = styled("ul")({
  display: "flex",
  alignItems: "center",
  gap: 22,
  listStyle: "none",
  margin: 0,
  padding: 0,
  marginLeft: 150, //tab alignment with navtabs
});

export const DesktopNavItem = styled("li")({
  display: "flex",
  alignItems: "center",
});

export const DesktopNavLink = styled(Link)({
  textDecoration: "none",
  fontSize: 18,
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  color: "#595959",
  lineHeight: 1,
  "&[data-active='true']": {
    color: "#0063B8",
    fontWeight: 600,
  },
});

export const ProjectsMenu = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: 22,
});

export const ProjectsTrigger = styled(Link)({
  textDecoration: "none",
  fontSize: 18,
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  color: "#595959",
  lineHeight: 1,
  padding: 0,
  cursor: "pointer",
  "&[data-active='true']": {
    color: "#0063B8",
    fontWeight: 600,
  },
});

export const ProjectsDropdown = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "140%",
  left: 0,
  minWidth: 220,
  backgroundColor: "#FFFFFF",
  borderRadius: 8,
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  padding: "8px 0",
  opacity: 0,
  pointerEvents: "none",
  transform: "translateY(4px)",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  zIndex: 20,
  "&[data-open='true']": {
    opacity: 1,
    pointerEvents: "auto",
    transform: "translateY(0)",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ProjectsDropdownItem = styled(Link)({
  display: "block",
  padding: "8px 16px",
  fontFamily: "var(--font-cg)",
  fontSize: 16,
  color: NAVY,
  textDecoration: "none",
  whiteSpace: "normal",
  "&:hover": {
    backgroundColor: "rgba(0, 99, 184, 0.06)",
  },
  "&[data-active='true']": {
    color: "#0063B8",
    fontWeight: 600,
    backgroundColor: "rgba(0, 99, 184, 0.06)",
  },
});

export const RightWrap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
  marginLeft: "auto",
  [theme.breakpoints.down("md")]: {
    gap: 14,
    marginRight: 50,
  },
  [theme.breakpoints.down("sm")]: {
    gap: 12,
    marginRight: 0,
  },
}));

export const CtaButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: 150,
  height: 49,
  marginLeft: 0,
  borderRadius: 12,
  padding: "0 30px",
  textTransform: "none",
  fontFamily: "Crimson Pro, sans-serif",
  fontSize: 20,
  fontWeight: 500,
  lineHeight: "1.2",
  letterSpacing: "0.02em",
  whiteSpace: "nowrap",
  color: "#FFFFFF",
  background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
  boxShadow: "0 1px 2px rgba(0,0,0,0.20)",
  boxSizing: "border-box",

  "& .MuiButton-label, & .MuiButton-startIcon, & .MuiButton-endIcon": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-block",
  },

  "&:hover": {
    background: "linear-gradient(90deg, #0064B5 0%, #00A9DF 100%)",
    borderColor: "#FFFFFF",
    border: "2px solid #FFFFFF",
    whiteSpace: "nowrap",
  },

  "&:focus-visible": {
    outline: "none",
    whiteSpace: "nowrap",
  },

  [theme.breakpoints.down("md")]: {
    minWidth: 130,
    height: 40,
    padding: "0 18px",
    fontSize: 14,
    borderRadius: 10,
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: 100,
    height: 36,
    padding: "0 10px",
    fontSize: 14,
    borderRadius: 10,
  },
}));

export const BurgerBtn = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  color: NAVY,
  display: "none",
  [theme.breakpoints.down("lg")]: {
    display: "inline-flex",
  },
}));

export const MenuIcon = styled(MenuRounded)(({ theme }) => ({
  width: 40,
  height: 40,
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
  },
}));

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "min(290px, 80vw)",
    height: "100dvh",
    "@supports not (height: 100dvh)": { height: "100vh" },
    position: "fixed",
    right: 0,
    top: 0,
    padding: "20px 16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    overflowX: "hidden",
    overscrollBehavior: "contain",
    touchAction: "pan-y",
    [theme.breakpoints.down("sm")]: {
      width: "min(290px, 90vw)",
      padding: "16px 12px",
    },
  },
}));

export const DrawerTop = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8,
});

export const DrawerLogo = styled("div")(({ theme }) => ({
  position: "relative",
  width: 125,
  height: 40,
  [theme.breakpoints.down("sm")]: {
    width: 110,
    height: 36,
  },
}));

export const DrawerNav = styled("nav")({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  marginTop: 8,
});

export const DrawerLink = styled("a")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: 1.2,
  letterSpacing: 0,
  color: NAVY,
  textDecoration: "none",
  userSelect: "none",
  padding: "8px 0",
  transition: "color 0.2s ease",
  "&:hover,&:active,&:focus": {
    color: "#0063B8",
    outline: "none",
    textDecoration: "underline",
  },
  "&[data-active='true']": {
    color: "#0063B8",
    fontWeight: 600,
    textDecoration: "underline",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
    padding: "6px 0",
  },
}));

export const DrawerSubLink = styled("a")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.2,
  color: NAVY,
  textDecoration: "none",
  userSelect: "none",
  padding: "4px 0 4px 16px",
  transition: "color 0.2s ease",
  "&:hover,&:active,&:focus": {
    color: "#0063B8",
    outline: "none",
    textDecoration: "underline",
  },
  "&[data-active='true']": {
    color: "#0063B8",
    fontWeight: 600,
    textDecoration: "underline",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
    paddingLeft: 14,
  },
}));

export const ButtonWrap = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginLeft: 20,
});

export const LogoLink = styled(Link)({
  position: "relative",
  display: "block",
  width: "100%",
  height: "100%",
});

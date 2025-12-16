"use client";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import EmailIconBase from "@mui/icons-material/Email";
import CallIconBase from "@mui/icons-material/Call";

export const ContactWrap = styled(Container)(({ theme }) => ({
  width: "100%",
  maxWidth: 1280,
  margin: "40px auto 0",
  paddingInline: 16,
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
    rowGap: 20,
  },

  [theme.breakpoints.up("lg")]: {
    width: "100%",
    maxWidth: 1280,
    margin: "40px auto 0",
    paddingInline: 16,
  },
}));

export const ContactTitle = styled("h1")(({ theme }) => ({
  margin: 0,
  width: 1280,
  maxWidth: "100%",
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    fontSize: 28,
    lineHeight: "36px",
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    fontSize: 38,
    lineHeight: "46px",
    textAlign: "center",
  },
}));

export const ContactHeroFrame = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: 1200,
  margin: "10px auto 0",
  height: 325,
  borderRadius: 20,
  overflow: "hidden",
  marginLeft: 25,
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

export const ContactHeroImg = styled(Image)(({ theme }) => ({
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

export const ContactHeroOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "rgb(0, 166, 226, 0.3)",
  opacity: 1,
  zIndex: 1,
});

export const IntroGrid = styled("section")(({ theme }) => ({
  width: 1280,
  maxWidth: "100%",
  marginTop: 30,
  display: "grid",
  rowGap: 20,
  justifyItems: "center",
  marginLeft: -20,
  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 1200,
    marginTop: 30,
    rowGap: 20,
    justifyItems: "center",
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    rowGap: 18,
    justifyItems: "center",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    rowGap: 24,
    marginTop: 24,
  },
}));

export const IntroHeading = styled("h2")(({ theme }) => ({
  margin: 0,
  textAlign: "center",
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "55px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: 375,
    fontSize: 24,
    lineHeight: "32px",
    margin: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 32,
    lineHeight: "40px",
    textAlign: "center",
    marginLeft: 0,
  },
}));

export const IntroSub = styled("p")(({ theme }) => ({
  margin: "0 auto",
  width: 1206,
  maxWidth: "100%",
  textAlign: "center",
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "30px",
  color: "#595959",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    fontSize: 12,
    lineHeight: "18px",
    textAlign: "center",
    whiteSpace: "normal",
    margin: 0,
    marginLeft: 20,
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 600,
    fontSize: 16,
    lineHeight: "24px",
    textAlign: "center",
    whiteSpace: "normal",
    margin: "0 auto",
  },
}));

export const ContactMainGrid = styled("section")(({ theme }) => ({
  width: 1200,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 80,
  marginTop: 40,
  marginLeft: -25,
  justifyItems: "center",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    gridTemplateColumns: "1fr",
    gap: 40,
    marginTop: 10,
    marginLeft: 0,
    justifyItems: "stretch",
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: "100%",
    gridTemplateColumns: "1fr",
    gap: 30,
    marginTop: 30,
    marginLeft: 0,
    justifyItems: "stretch",
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: "100%",
    gridTemplateColumns: "1fr",
    gap: 32,
    marginTop: 40,
    marginLeft: 0,
    justifyItems: "stretch",
  },
}));

export const FormWrap = styled("div")(({ theme }) => ({
  width: 540,
  display: "flex",
  flexDirection: "column",
  borderRadius: 20,
  border: "1px solid #B8CAD8D9",
  background: "#ECF9FF",
  padding: "30px 40px",
  rowGap: 20,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    padding: "24px 10px 20px",
    rowGap: 18,
    borderRadius: 10,
    alignItems: "stretch",
    boxSizing: "border-box",
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: "100%",
    padding: "24px 24px",
    rowGap: 16,
    alignItems: "stretch",
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    boxSizing: "border-box",
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 540,
    padding: "28px 32px",
    rowGap: 18,
    margin: "0 auto",
    alignItems: "flex-start",
  },
}));

export const FormTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "64px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "32px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 28,
    lineHeight: "36px",
    textAlign: "center",
  },
}));

export const FormDesc = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "center",
    whiteSpace: "normal",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "24px",
    textAlign: "center",
    whiteSpace: "normal",
  },
}));

export const Field = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    rowGap: 8,
  },

  [theme.breakpoints.between("sm", "md")]: {
    rowGap: 8,
  },

  [theme.breakpoints.between("md", "lg")]: {
    rowGap: 10,
  },
}));

export const Label = styled("label")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 16,
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    fontWeight: 400,
    marginLeft: 15,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 14,
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: 15,
  },
}));

export const Input = styled("input")<{ $hasError?: boolean }>(
  ({ theme, $hasError }) => ({
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    height: 60,
    borderRadius: 10,
    border: $hasError
      ? "1px solid #D32F2F"
      : "1px solid rgba(184,202,216,0.85)",
    background: $hasError ? "#FFF5F5" : "#fff",
    padding: "0 16px",
    fontFamily: "var(--font-crimson)",
    fontSize: 20,
    color: "#595959",
    transition: "border-color 0.2s ease, background-color 0.2s ease",
    outline: "none",

    "&:focus": {
      borderColor: $hasError ? "#D32F2F" : "#00A6E2",
      boxShadow: $hasError
        ? "0 0 0 3px rgba(211, 47, 47, 0.1)"
        : "0 0 0 3px rgba(0, 166, 226, 0.1)",
    },

    "&:disabled": {
      backgroundColor: "#f5f5f5",
      cursor: "not-allowed",
      opacity: 0.7,
    },

    [theme.breakpoints.down("sm")]: {
      height: 40,
      borderRadius: 8,
      fontSize: 14,
      padding: "0 12px",
      fontWeight: 400,
    },

    [theme.breakpoints.between("sm", "md")]: {
      height: 48,
      fontSize: 16,
      padding: "0 14px",
      borderRadius: 8,
    },

    [theme.breakpoints.between("md", "lg")]: {
      height: 54,
      fontSize: 18,
      padding: "0 14px",
      borderRadius: 8,
    },
  })
);

export const TextArea = styled("textarea")<{ $hasError?: boolean }>(
  ({ theme, $hasError }) => ({
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    height: 120,
    borderRadius: 10,
    border: $hasError
      ? "1px solid #D32F2F"
      : "1px solid rgba(184,202,216,0.85)",
    background: $hasError ? "#FFF5F5" : "#fff",
    padding: "12px 16px",
    fontFamily: "var(--font-crimson)",
    fontSize: 20,
    color: "#595959",
    resize: "none",
    transition: "border-color 0.2s ease, background-color 0.2s ease",
    outline: "none",

    "&:focus": {
      borderColor: $hasError ? "#D32F2F" : "#00A6E2",
      boxShadow: $hasError
        ? "0 0 0 3px rgba(211, 47, 47, 0.1)"
        : "0 0 0 3px rgba(0, 166, 226, 0.1)",
    },

    "&:disabled": {
      backgroundColor: "#f5f5f5",
      cursor: "not-allowed",
      opacity: 0.7,
    },

    [theme.breakpoints.down("sm")]: {
      height: 100,
      borderRadius: 8,
      fontSize: 14,
      padding: "8px 12px",
    },

    [theme.breakpoints.between("sm", "md")]: {
      height: 100,
      fontSize: 16,
      padding: "10px 14px",
      borderRadius: 8,
    },

    [theme.breakpoints.between("md", "lg")]: {
      height: 110,
      fontSize: 18,
      padding: "10px 14px",
      borderRadius: 8,
    },
  })
);

export const SubmitBtn = styled("button")(({ theme }) => ({
  alignSelf: "start",
  width: 150,
  height: 45,
  borderRadius: 10,
  border: "none",
  background: "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)",
  color: "#fff",
  fontFamily: "var(--font-crimson)",
  fontWeight: 500,
  fontSize: 18,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  transition: "opacity 0.2s ease",

  "&:disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },

  [theme.breakpoints.down("sm")]: {
    width: 140,
    height: 36,
    borderRadius: 8,
    fontSize: 14,
    lineHeight: "13px",
    textTransform: "capitalize",
    alignSelf: "center",
    gap: 6,
  },
  [theme.breakpoints.between("sm", "md")]: {
    alignSelf: "center",
    width: 160,
    height: 40,
    fontSize: 16,
    borderRadius: 8,
  },
}));

export const CompanyWrap = styled("div")(({ theme }) => ({
  width: 550,
  display: "flex",
  flexDirection: "column",
  rowGap: 30,
  marginLeft: -48,
  marginTop: 95,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    rowGap: 20,
    marginLeft: 0,
    marginTop: 0,
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 500,
    rowGap: 24,
    marginLeft: 0,
    marginTop: 0,
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 550,
    rowGap: 26,
    marginLeft: 0,
    marginTop: 40,
  },
}));

export const CompanyTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 46,
  lineHeight: "64px",
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontSize: 28,
    lineHeight: "36px",
    textAlign: "center",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 28,
    lineHeight: "36px",
    textAlign: "center",
  },
}));

export const CompanyDesc = styled("p")(({ theme }) => ({
  margin: 0,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: "30px",
  color: "#595959",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "22px",
    textAlign: "center",
    whiteSpace: "normal",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "24px",
    textAlign: "center",
    whiteSpace: "normal",
  },
}));

export const CompanyItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  columnGap: 20,
  marginTop: 10,
  [theme.breakpoints.down("sm")]: {
    columnGap: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  [theme.breakpoints.between("sm", "md")]: {
    columnGap: 12,
    marginLeft: 20,
    marginTop: 0,
  },
}));

export const CompanyIcon = styled("div")<{ $plain?: boolean }>(
  ({ theme, $plain }) => ({
    width: 52,
    height: 52,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: $plain
      ? "transparent"
      : "linear-gradient(90deg,#0064B5 0%,#00A9DF 100%)",
    [theme.breakpoints.down("sm")]: {
      width: 36,
      height: 36,
      borderRadius: 7,
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: 44,
      height: 44,
      borderRadius: 8,
    },
  })
);

export const CompanyIconImg = styled(Image)({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display: "block",
});

export const CompanyInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 4,
  [theme.breakpoints.down("sm")]: {
    rowGap: 2,
  },
  [theme.breakpoints.between("sm", "md")]: {
    rowGap: 2,
  },
}));

export const CompanyLabel = styled("span")(({ theme }) => ({
  fontFamily: "var(--font-cg)",
  fontWeight: 600,
  fontSize: 20,
  color: "#0E1B41",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "17px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "20px",
  },
}));

export const CompanyText = styled("span")(({ theme }) => ({
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 20,
  color: "#595959",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    lineHeight: "16px",
    marginTop: 5,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 16,
    lineHeight: "20px",
  },
}));

export const CompanyEmailIcon = styled(EmailIconBase)(({ theme }) => ({
  fontSize: 24,
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 22,
  },
}));

export const CompanyCallIcon = styled(CallIconBase)(({ theme }) => ({
  fontSize: 24,
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: 22,
  },
}));

export const MapWrap = styled("div")(({ theme }) => ({
  width: 1200,
  height: 600,
  borderRadius: 20,
  overflow: "hidden",
  position: "relative",
  marginTop: 40,
  marginLeft: -25,

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxWidth: "100%",
    height: 500,
    borderRadius: 20,
    margin: "32px auto 0",
    marginLeft: 0,
  },

  [theme.breakpoints.between("sm", "md")]: {
    width: "100%",
    maxWidth: 800,
    height: 400,
    margin: "32px auto 0",
    marginLeft: 0,
  },

  [theme.breakpoints.between("md", "lg")]: {
    width: "100%",
    maxWidth: 1200,
    height: 500,
    borderRadius: 20,
    margin: "40px auto 0",
    marginLeft: 0,
  },
}));

export const MapFrame = styled("iframe")({
  width: "100%",
  height: "100%",
  border: 0,
  borderRadius: "inherit",
  filter: "grayscale(20%) brightness(98%)",
});

export const MapOverlay = styled("div")({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(184, 202, 216, 0.85)",
  mixBlendMode: "color",
  pointerEvents: "none",
  borderRadius: "inherit",
});

export const ErrorText = styled("p")(({ theme }) => ({
  margin: 0,
  marginTop: 4,
  fontFamily: "var(--font-crimson)",
  fontWeight: 400,
  fontSize: 14,
  lineHeight: "18px",
  color: "#D32F2F",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "16px",
  },
}));

/** Form element wrapper for proper submit handling */
export const StyledForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 20,
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    rowGap: 18,
  },

  [theme.breakpoints.between("sm", "md")]: {
    rowGap: 16,
  },
}));

/** Success message displayed after successful form submission */
export const SuccessMessage = styled("div")(({ theme }) => ({
  padding: "16px 20px",
  borderRadius: 10,
  backgroundColor: "#E8F5E9",
  border: "1px solid #4CAF50",
  color: "#2E7D32",
  fontFamily: "var(--font-crimson)",
  fontSize: 16,
  lineHeight: "24px",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    padding: "12px 16px",
    fontSize: 14,
    lineHeight: "20px",
    borderRadius: 8,
  },
}));

/** Error message displayed when form submission fails */
export const ErrorMessage = styled("div")(({ theme }) => ({
  padding: "16px 20px",
  borderRadius: 10,
  backgroundColor: "#FFEBEE",
  border: "1px solid #F44336",
  color: "#C62828",
  fontFamily: "var(--font-crimson)",
  fontSize: 16,
  lineHeight: "24px",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    padding: "12px 16px",
    fontSize: 14,
    lineHeight: "20px",
    borderRadius: 8,
  },
}));

export const ContactHeroSkeleton = styled(Skeleton)(({ theme }) => ({
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
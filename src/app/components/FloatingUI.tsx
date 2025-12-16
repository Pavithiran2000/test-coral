"use client";

import * as React from "react";
import WifiCalling3RoundedIcon from "@mui/icons-material/WifiCalling3Rounded";
import {
  FloatingContact,
  ContactPanel,
  ContactCard,
  ContactCards,
  ContactTitle,
  ContactText,
} from "./Home.styles";

function findKamroLauncher(): HTMLElement | null {
  if (typeof window === "undefined" || typeof document === "undefined") return null;

  const explicit =
    document.querySelector<HTMLElement>("[data-kamroai-launcher]") ||
    document.querySelector<HTMLElement>("[data-kamro-launcher]") ||
    document.querySelector<HTMLElement>(".kamroai-launcher") ||
    document.querySelector<HTMLElement>(".kamro-launcher") ||
    document.querySelector<HTMLElement>("[class*='kamro']") ||
    document.querySelector<HTMLElement>("[id*='kamro']");

  if (explicit) return explicit;

  const all = Array.from(
    document.querySelectorAll<HTMLElement>("button, a, div, span"),
  );

  const candidates = all.filter((el) => {
    if (el.closest("[data-kamro-trigger-root]")) return false;

    const style = window.getComputedStyle(el);
    if (style.position !== "fixed") return false;

    const bottom = parseFloat(style.bottom || "0");
    const right = parseFloat(style.right || "0");
    if (Number.isNaN(bottom) || Number.isNaN(right)) return false;

    return bottom >= 0 && bottom <= 160 && right >= 0 && right <= 160;
  });

  if (candidates.length === 0) return null;

  candidates.sort((a, b) => {
    const za = parseInt(window.getComputedStyle(a).zIndex || "0", 10);
    const zb = parseInt(window.getComputedStyle(b).zIndex || "0", 10);
    return za - zb;
  });

  return candidates[candidates.length - 1] || null;
}

export default function FloatingUI() {
  const [openContact, setOpenContact] = React.useState(false);
  const launcherRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const launcher = findKamroLauncher();
    if (launcher) {
      launcherRef.current = launcher;
      launcher.style.opacity = "0";
      launcher.style.pointerEvents = "none";
    }
  }, []);

  const handleAddressClick = () => {
    window.open(
      "https://www.google.com/maps?q=No.+42+Ridgeway+Place,+Colombo+4",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handlePhoneClick = () => {
    const number = "+94 11 2596225";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(number).catch(() => {});
    }
    window.location.href = "tel:+94112596225";
  };

  const handleEmailClick = () => {
    const email = "marketing@coral.lk";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(() => {});
    }
    window.location.href = "mailto:marketing@coral.lk";
  };

  return (
    <>
      {/* <FloatingChat data-kamro-trigger-root>
        {!chatOpen && (
          <AskPill
            onClick={handleKamroClick}
            role="button"
            aria-label="Open KamroAI chat"
          >
            Ask KamroAI
          </AskPill>
        )}

        <RoundLogo
          onClick={handleKamroClick}
          role="button"
          aria-label="Open KamroAI chat"
        >
          <RoundLogoImg
            src="/logos/RoundLogo.png"
            alt="Kamro logo"
            width={36}
            height={36}
          />
        </RoundLogo>
      </FloatingChat> */}

      <FloatingContact
        type="button"
        aria-label="Contact details"
        data-open={openContact ? "true" : "false"}
        onClick={() => setOpenContact((prev) => !prev)}
      >
        <WifiCalling3RoundedIcon fontSize="large" />
      </FloatingContact>

      {openContact && (
        <ContactPanel>
          <ContactCard onClick={handleAddressClick}>
            <ContactTitle>Office address</ContactTitle>
            <ContactText>No. 42 Ridgeway Place, Colombo 4</ContactText>
          </ContactCard>

          <ContactCards onClick={handlePhoneClick}>
            <ContactTitle>Hotline Number</ContactTitle>
            <ContactText>+94 11 2596225</ContactText>
          </ContactCards>

          <ContactCard onClick={handleEmailClick}>
            <ContactTitle>Email Address</ContactTitle>
            <ContactText>marketing@coral.lk</ContactText>
          </ContactCard>
        </ContactPanel>
      )}
    </>
  );
}

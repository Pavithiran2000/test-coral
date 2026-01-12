"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import IconButton from "@mui/material/IconButton";
import CloseRounded from "@mui/icons-material/CloseRounded";

import { craftworkGrotesk } from "./fonts";
import { crimsonPro } from "./fonts";

import {
  BodyRoot,
  HeaderRoot,
  HeaderBar,
  LogoWrap,
  LogoImage,
  NavWrap,
  CtaButton,
  RightWrap,
  BurgerBtn,
  MenuIcon,
  MobileDrawer,
  DrawerTop,
  DrawerLogo,
  DrawerNav,
  DrawerLink,
  DrawerSubLink,
  LogoLink,
  ProjectsMenu,
  ProjectsTrigger,
  ProjectsDropdown,
  ProjectsDropdownItem,
  DesktopNavList,
  DesktopNavItem,
  DesktopNavLink,
} from "./components/Header.styles";

import FloatingUI from "./components/FloatingUI";

import {
  FooterShell,
  FooterBG,
  FooterTitle,
  FooterLead,
  FooterCallBtn,
  FooterAboutWrap,
  FooterAboutTitle,
  FooterAboutText,
  FooterAboutDivider,
  FooterSocialRow,
  SocialChip,
  FooterInfoGrid,
  InfoCol,
  InfoTitle,
  InfosTitle,
  InfoLine,
  InfosLine,
  FooterCopy,
} from "./components/Footer.styles";

import { FbGlyph, InGlyph } from "./components/PlainSocialIcons";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const current = pathname || "/";

  const [projectsOpenDesktop, setProjectsOpenDesktop] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = React.useState(false);

  const projectsMenuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!projectsOpenDesktop) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        projectsMenuRef.current &&
        !projectsMenuRef.current.contains(event.target as Node)
      ) {
        setProjectsOpenDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [projectsOpenDesktop]);

  // const isContactPage =
  //   current === "/ContactUs" ||
  //   current === "/contactus" ||
  //   current === "/contact-us";

  const isOngoingList = current === "/projects/OngoingProjects";
  const isOngoingDetail = current.startsWith("/projects/OngoingProjects/");
  const isCompletedList = current === "/projects/completedProjects";
  const isCompletedDetail = current.startsWith("/projects/completedProjects/");
  const isOngoingProjects = isOngoingList || isOngoingDetail;
  const isCompletedProjects = isCompletedList || isCompletedDetail;
  const isAnyProjects = isOngoingProjects || isCompletedProjects;

  const closeAll = () => {
    setMobileOpen(false);
    setMobileProjectsOpen(false);
    setProjectsOpenDesktop(false);
  };

  return (
    <html
      lang="en"
      className={`${craftworkGrotesk.variable} ${crimsonPro.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>Coral Properties</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The Official Website of Coral Properties - Giving you the good life. Premium property developers in Sri Lanka."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coral.lk/" />
        <meta property="og:title" content="Coral Properties" />
        <meta
          property="og:description"
          content="The Official Website of Coral Properties - Giving you the good life"
        />
        <meta
          property="og:image"
          content="https://coral.lk/v1/img/logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Coral Properties" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://coral.lk/" />
        <meta name="twitter:title" content="Coral Properties" />
        <meta
          name="twitter:description"
          content="The Official Website of Coral Properties - Giving you the good life"
        />
        <meta
          name="twitter:image"
          content="https://coral.lk/logos/og-image.png"
        />

        <meta name="theme-color" content="#0E1B41" />
        <link rel="icon" href="/logos/LogoCoral.png" />
        <link rel="apple-touch-icon" href="/logos/LogoCoral.png" />

        <script
          src="https://ap.kamroai.com/secure?path=gAAAAABncjMbDVJeOc08CMdqVQpt1FA9aKMMjKCq1MIFXgCfemUtwJKrVXFOjoi3rSdY5bH_XNPQApsQV9tgK6YbdSVIyejtZa3nSfxyPK_jOJI7knEQul0=&signature=gAAAAABncjMbIWimReCOx-MnOpTPe_VDfyp2QrYJj5Qa7QUPv7SMllMWr-xST7lpEL7SYGcrtqLasQN-1GYxmnueEJqS6bIszg=="
          defer
        ></script>
      </head>

      <BodyRoot suppressHydrationWarning>
        <AppRouterCacheProvider>
          <HeaderRoot>
            <HeaderBar>
              <LogoWrap>
                <LogoLink href="/" aria-label="Coral home">
                  <LogoImage
                    src="/logos/CoralLogo.png"
                    alt="Coral"
                    fill
                    priority
                    sizes="(max-width: 600px) 106.67px, (max-width: 900px) 160px, 186.67px"
                  />
                </LogoLink>
              </LogoWrap>

              {/* Desktop Navigation */}
              <NavWrap>
                <DesktopNavList>
                  <DesktopNavItem>
                    <DesktopNavLink href="/" data-active={current === "/" ? "true" : undefined}>
                      Home
                    </DesktopNavLink>
                  </DesktopNavItem>
                  <DesktopNavItem>
                    <DesktopNavLink href="/about" data-active={current === "/about" ? "true" : undefined}>
                      About
                    </DesktopNavLink>
                  </DesktopNavItem>

                  {/* Projects Dropdown - HYDRATION FIXED */}
                  <DesktopNavItem>
                    <ProjectsMenu ref={projectsMenuRef}>
                      <ProjectsTrigger
                        href="#" 
                        aria-haspopup="true"
                        data-active={isAnyProjects ? "true" : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          setProjectsOpenDesktop((p) => !p);
                        }}
                        style={{ pointerEvents: "auto" } as React.CSSProperties}
                      >
                        Projects
                      </ProjectsTrigger>

                      <ProjectsDropdown data-open={projectsOpenDesktop ? "true" : undefined}>
                        <ProjectsDropdownItem
                          href="/projects/OngoingProjects"
                          data-active={isOngoingProjects ? "true" : undefined}
                          onClick={() => setProjectsOpenDesktop(false)}
                        >
                          Ongoing Projects
                        </ProjectsDropdownItem>
                        <ProjectsDropdownItem
                          href="/projects/completedProjects"
                          data-active={isCompletedProjects ? "true" : undefined}
                          onClick={() => setProjectsOpenDesktop(false)}
                        >
                          Completed Projects
                        </ProjectsDropdownItem>
                      </ProjectsDropdown>
                    </ProjectsMenu>
                  </DesktopNavItem>

                  <DesktopNavItem>
                    <DesktopNavLink href="/gallery" data-active={current === "/gallery" ? "true" : undefined}>
                      Gallery
                    </DesktopNavLink>
                  </DesktopNavItem>

                  {/* <DesktopNavItem>
                    <DesktopNavLink
                      href="/news"
                      data-active={
                        current.startsWith("/news") ? "true" : undefined
                      }
                    >
                      News
                    </DesktopNavLink>
                  </DesktopNavItem> */}

                  {/* <DesktopNavItem>
                    <DesktopNavLink
                      href="/blog"
                      data-active={
                        current.startsWith("/blog") ? "true" : undefined
                      }
                    >
                      Blog
                    </DesktopNavLink>
                  </DesktopNavItem> */}

                  <DesktopNavItem>
                    <DesktopNavLink href="/faqs" data-active={current === "/faqs" ? "true" : undefined}>
                      Faqs
                    </DesktopNavLink>
                  </DesktopNavItem>

                  <DesktopNavItem>
                    <DesktopNavLink href="/careers" data-active={current === "/careers" ? "true" : undefined}>
                      Careers
                    </DesktopNavLink>
                  </DesktopNavItem>
                </DesktopNavList>
              </NavWrap>

              <RightWrap>
                <Link href="/ContactUs" style={{ textDecoration: "none" }}>
                  <CtaButton variant="contained">Contact Us</CtaButton>
                </Link>
                <BurgerBtn
                  aria-label="Open menu"
                  onClick={() => setMobileOpen(true)}
                >
                  <MenuIcon />
                </BurgerBtn>
              </RightWrap>
            </HeaderBar>
          </HeaderRoot>

          {/* Mobile Drawer */}
          <MobileDrawer
            anchor="right"
            open={mobileOpen}
            onClose={closeAll}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerTop>
              <DrawerLogo>
                <LogoLink href="/" onClick={closeAll}>
                  <LogoImage
                    src="/logos/CoralLogo.png"
                    alt="Coral"
                    fill
                    sizes="(max-width: 600px) 110px, 125px"
                  />
                </LogoLink>
              </DrawerLogo>
              <IconButton aria-label="Close menu" onClick={closeAll}>
                <CloseRounded />
              </IconButton>
            </DrawerTop>

            <DrawerNav>
              <DrawerLink href="/" data-active={current === "/" ? "true" : undefined} onClick={closeAll}>
                Home
              </DrawerLink>
              <DrawerLink href="/about" data-active={current === "/about" ? "true" : undefined} onClick={closeAll}>
                About
              </DrawerLink>

              <DrawerLink
                as="div"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileProjectsOpen((p) => !p);
                }}
                style={{ cursor: "pointer" }}
                data-active={isAnyProjects ? "true" : undefined}
              >
                Projects
              </DrawerLink>

              {mobileProjectsOpen && (
                <>
                  <DrawerSubLink
                    href="/projects/OngoingProjects"
                    data-active={isOngoingProjects ? "true" : undefined}
                    onClick={closeAll}
                  >
                    Ongoing Projects
                  </DrawerSubLink>
                  <DrawerSubLink
                    href="/projects/completedProjects"
                    data-active={isCompletedProjects ? "true" : undefined}
                    onClick={closeAll}
                  >
                    Completed Projects
                  </DrawerSubLink>
                </>
              )}

              <DrawerLink href="/gallery" data-active={current === "/gallery" ? "true" : undefined} onClick={closeAll}>
                Gallery
              </DrawerLink>
              {/* <DrawerLink
                href="/news"
                data-active={current.startsWith("/news") ? "true" : undefined}
                onClick={() => {
                  setOpen(false);
                  setProjectsOpen(false);
                }}
              >
                News
              </DrawerLink> */}
              {/* <DrawerLink
                href="/blog"
                data-active={current.startsWith("/blog") ? "true" : undefined}
                onClick={() => {
                  setOpen(false);
                  setProjectsOpen(false);
                }}
              >
                Blog
              </DrawerLink> */}
              <DrawerLink href="/faqs" data-active={current === "/faqs" ? "true" : undefined} onClick={closeAll}>
                Faqs
              </DrawerLink>
              <DrawerLink href="/careers" data-active={current === "/careers" ? "true" : undefined} onClick={closeAll}>
                Careers
              </DrawerLink>
            </DrawerNav>
          </MobileDrawer>

          <main>{children}</main>

          <FooterShell>
            <FooterBG>
              <FooterTitle>
                Let’s Build Your
                Future Together
              </FooterTitle>

              <FooterLead>
                Connect with our team today to explore our projects, discuss
                your needs, and take
                the first step towards your dream property
                investment
              </FooterLead>

              <FooterCallBtn variant="contained">Call Us Now</FooterCallBtn>

              <FooterAboutWrap>
                <FooterAboutTitle>About Coral Properties</FooterAboutTitle>
                <FooterAboutText>
                  Coral Properties has been redefining Sri Lanka’s real estate
                  landscape since 2003, delivering
                  high-quality developments that inspire modern living while
                  fostering thriving communities.
                </FooterAboutText>
                <FooterAboutDivider />
                <FooterSocialRow>
                  <SocialChip aria-label="fb" href="#">
                    <FbGlyph />
                  </SocialChip>
                  <SocialChip aria-label="li" href="#">
                    <InGlyph />
                  </SocialChip>
                  {/* <SocialChip aria-label="X" href="#">
                    <XIcon fontSize="inherit" />
                  </SocialChip> */}
                  <SocialChip aria-label="Instagram" href="#">
                    <InstagramIcon fontSize="inherit" />
                  </SocialChip>
                </FooterSocialRow>
              </FooterAboutWrap>

              <FooterInfoGrid>
                <InfoCol>
                  <InfoTitle>Office Address</InfoTitle>
                  <InfoLine>No. 42 Ridgeway Place, Colombo 4</InfoLine>
                </InfoCol>

                <InfoCol>
                  <InfoTitle>Email Address</InfoTitle>
                  <InfoLine>marketing@coral.lk</InfoLine>
                </InfoCol>

                <InfoCol>
                  <InfosTitle>Hotline Number</InfosTitle>
                  <InfosLine>0112 596 225</InfosLine>
                </InfoCol>

                <InfoCol>
                  <InfosTitle>Call Us</InfosTitle>
                  <InfoLine>0777 994 403</InfoLine>
                  <InfoLine>0777 994 408</InfoLine>
                  <InfoLine>0777 994 409</InfoLine>
                  <InfoLine>0777 994 413</InfoLine>
                </InfoCol>
              </FooterInfoGrid>

              <FooterCopy>
                Copyright &copy; 2026 Coral Properties.
                All rights reserved | Design &amp; Developed by Techorin
              </FooterCopy>
            </FooterBG>
          </FooterShell>
        </AppRouterCacheProvider>

        <FloatingUI />
      </BodyRoot>
    </html>
  );
}

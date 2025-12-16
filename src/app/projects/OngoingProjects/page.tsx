"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { BrDesktop, BrMobile } from "../../components/Home.styles";
import {
  ProjectsHeroWrap,
  ProjectsHeroTitle,
  ProjectsHeroDesc,
  PRow,
  PLeft,
  PItem,
  PItemActive,
  PItemTitle,
  PItemTitleWhite,
  PItemSub,
  PItemSubWhite,
  PMiddleCard,
  PMiddleText,
  PButton,
  PMapCard,
  PMapPin,
  PMapPinSvg,
  PGalleryWrap,
  PScroller,
  PCard,
  PCardImg,
  PGalleryTrack,
  PGalleryThumb,
  AdvantageWrap,
  AdvantageTitle,
  AdvantageLead,
  FeaturesRow,
  FeatureCard,
  FeatureTitle,
  FeatureDesc,
  PMapIframe,
  ProjectHeroFrame,
  ProjectHeroImg,
  ProjectHeroOverlay,
  PMapOverlay,
  PHeroSkeleton,
  PSkeletonGalleryImg,
  PSkeletonMap,
} from "../../components/Project.styles";

type ProjectKey = "coral-city" | "coral-ind" | "dilscoop" | "coral-plus";

export default function OngoingProjectsPage() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [activeProject, setActiveProject] = useState<ProjectKey>("coral-city");
  const [isLoading, setIsLoading] = useState(true);

  // Skeleton loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!scroller || !track || !thumb) return;

    const CARD_COUNT = 6;

    const sync = () => {
      const trackW = track.clientWidth;
      const thumbW = trackW / CARD_COUNT;
      thumb.style.width = `${thumbW}px`;

      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const maxTravel = trackW - thumbW;
      const pct = maxScroll > 0 ? scroller.scrollLeft / maxScroll : 0;
      thumb.style.transform = `translateX(${pct * maxTravel}px)`;
    };

    sync();
    scroller.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      scroller.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const getMapAddress = (project: ProjectKey) => {
    switch (project) {
      case "coral-city":
        return "71 Peterson Ln, Colombo 00600";
      case "coral-ind":
        return "217 George R. De Silva Mawatha";
      case "dilscoop":
        return "Mount Lavinia Beach, Dehiwala-Mount Lavinia";
      case "coral-plus":
      default:
        return "42 Ridgeway Pl, Colombo 00400";
    }
  };

  const getButtonHref = (project: ProjectKey) => {
    switch (project) {
      case "coral-city":
        return "/projects/OngoingProjects/coral-city";
      case "coral-ind":
        return "/projects/OngoingProjects/coral-ind";
      case "dilscoop":
        return "/projects/OngoingProjects/dilscoop";
      case "coral-plus":
      default:
        return "/projects/OngoingProjects/coral-plus";
    }
  };

  const renderDescription = (project: ProjectKey): ReactNode => {
    switch (project) {
      case "coral-city":
        return (
          <>
            <PMiddleText>
              Coral City Gampaha is a modern residential community designed to
              <BrMobile />
              bring comfort, convenience, and connectivity to families. Nestled
              in a <BrMobile />
              prime location, it blends contemporary architecture with a serene
              <BrMobile />
              environment.
            </PMiddleText>
            <PMiddleText>
              The project offers thoughtfully planned living spaces with easy
              access to <BrMobile />
              schools, hospitals, and transport hubs. It is built with
              high-quality <BrMobile />
              materials, ensuring durability and long-term value.
            </PMiddleText>
            <PMiddleText>
              Residents can enjoy landscaped gardens, recreational spaces, and
              secure <BrMobile />
              surroundings, making Coral City an ideal choice for both
              investment and <BrMobile />
              living.
            </PMiddleText>
          </>
        );
      case "coral-ind":
        return (
          <>
            <PMiddleText>
              Located in the heart of Colombo, Coral Independence Square
              redefines luxury living. This iconic project combines elegance,
              sophistication, and exclusivity, offering unmatched city living.
            </PMiddleText>
            <PMiddleText>
              Designed with premium finishes, spacious interiors, and modern
              amenities, the property caters to professionals and families who
              desire an urban lifestyle. Its prime location ensures easy access
              to business hubs, shopping, and entertainment.
            </PMiddleText>
            <PMiddleText>
              With limited units available, Coral Independence Square is not
              just a home it’s a statement of prestige and a smart investment
              for the future.
            </PMiddleText>
          </>
        );
      case "dilscoop":
        return (
          <>
            <PMiddleText>
              Dilscoop Towers stands tall in Mount Lavinia, a location known for
              its vibrant lifestyle and beachside charm. The project offers a
              mix of modern apartments and commercial spaces.
            </PMiddleText>
            <PMiddleText>
              Built with a focus on contemporary design, the development
              includes panoramic views, spacious layouts, and smart
              infrastructure. Each unit reflects Coral’s promise of quality and
              innovation.
            </PMiddleText>
            <PMiddleText>
              Close to schools, supermarkets, and the iconic Mount Lavinia
              beach, Dilscoop Towers is the perfect blend of urban living and
              leisure. It offers both lifestyle benefits and high investment
              returns.
            </PMiddleText>
          </>
        );
      case "coral-plus":
      default:
        return (
          <>
            <PMiddleText>
              Nestled along Marine Drive at No. 42 Ridgeway Place, Coral Plus
              offers a luxurious seaside living experience, complete with
              refreshing morning breezes and magical ocean sunsets. Comprising
              four custom-designed apartment styles over a 20-story structure,
              Coral Plus exudes tranquility and grandeur by the Indian Ocean.
            </PMiddleText>
            <PMiddleText>
              This project seamlessly balances modern design with maximum
              comfort. Residents enjoy premium amenities—such as an infinity
              pool with panoramic ocean views, landscaped podiums and rooftop
              barbeque areas within close reach of Colombo’s key locations. Each
              unit comes with secure parking, robust construction features, and
              thoughtful spatial layouts.
            </PMiddleText>
            <PMiddleText>
              Coral Plus redefines urban sea-front luxury with superior
              facilities: high-speed lifts, standby power supply, advanced fire
              safety systems, intercom security, private balconies, designer
              interiors, and dedicated spaces such as a gym, conference room,
              and library. It’s comfort and elegance meticulously rolled into
              your next home or investment.
            </PMiddleText>
          </>
        );
    }
  };

  const renderMap = (project: ProjectKey) => (
    <PMapCard>
      {isLoading ? (
        <PSkeletonMap />
      ) : (
        <>
          <PMapIframe
            src={
              "https://www.google.com/maps?q=" +
              encodeURIComponent(getMapAddress(project)) +
              "&z=15&output=embed"
            }
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <PMapOverlay />
          <PMapPin>
            <PMapPinSvg viewBox="0 0 52 52" aria-hidden="true">
              <defs>
                <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="52">
                  <stop offset="0" stopColor="#0064B5" />
                  <stop offset="1" stopColor="#00A9DF" />
                </linearGradient>
              </defs>
              <circle cx="26" cy="26" r="25.64" fill="url(#pinGrad)" />
              <circle cx="26" cy="26" r="22" fill="#FFFFFF" />
              <path
                d="M26 14c-6.08 0-11 4.92-11 11 0 8.25 11 19.5 11 19.5S37 33.25 37 25c0-6.08-4.92-11-11-11zm0 16a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
                fill="#00A6E2"
              />
            </PMapPinSvg>
          </PMapPin>
        </>
      )}
    </PMapCard>
  );

  const currentButtonHref = getButtonHref(activeProject);

  return (
    <main>
      <ProjectsHeroWrap>
        <ProjectsHeroTitle>Ongoing Projects</ProjectsHeroTitle>

        <ProjectHeroFrame>
          {isLoading ? (
            <PHeroSkeleton />
          ) : (
            <>
              <ProjectHeroImg
                src="/Background/ViewImage.png"
                alt="Ongoing Projects hero"
                width={1280}
                height={350}
                priority
              />
              <ProjectHeroOverlay />
            </>
          )}
        </ProjectHeroFrame>

        <ProjectsHeroDesc>
          We are redefining modern living through visionary real estate
          <BrMobile />
          developments. Our ongoing projects reflect a commitment to <BrMobile />
          luxury, functionality, and <BrDesktop />
          sustainability crafted for families, <BrMobile />
          investors, and businesses alike. Each development is <BrMobile />
          strategically located, designed with precision, and built to
          <BrDesktop />
          <BrMobile />
          enhance lifestyles while securing long-term value.
        </ProjectsHeroDesc>

        {/* PROJECT LIST + DETAILS */}
        <PRow>
          <PLeft>
            {/* Coral City */}
            {activeProject === "coral-city" ? (
              <PItemActive onClick={() => setActiveProject("coral-city")}>
                <PItemTitleWhite>Coral City</PItemTitleWhite>
                <PItemSubWhite>Gampaha</PItemSubWhite>
              </PItemActive>
            ) : (
              <PItem onClick={() => setActiveProject("coral-city")}>
                <PItemTitle>Coral City</PItemTitle>
                <PItemSub>Gampaha</PItemSub>
              </PItem>
            )}

            {isMobile && activeProject === "coral-city" && (
              <>
                <PMiddleCard>
                  {renderDescription("coral-city")}
                  <PButton href={getButtonHref("coral-city")}>View Project</PButton>
                </PMiddleCard>
                {renderMap("coral-city")}
              </>
            )}

            {/* Coral Ind. Square */}
            {activeProject === "coral-ind" ? (
              <PItemActive onClick={() => setActiveProject("coral-ind")}>
                <PItemTitleWhite>Coral Ind. Square</PItemTitleWhite>
                <PItemSubWhite>Colombo 7</PItemSubWhite>
              </PItemActive>
            ) : (
              <PItem onClick={() => setActiveProject("coral-ind")}>
                <PItemTitle>Coral Ind. Square</PItemTitle>
                <PItemSub>Colombo 7</PItemSub>
              </PItem>
            )}

            {isMobile && activeProject === "coral-ind" && (
              <>
                <PMiddleCard>
                  {renderDescription("coral-ind")}
                  <PButton href={getButtonHref("coral-ind")}>View Project</PButton>
                </PMiddleCard>
                {renderMap("coral-ind")}
              </>
            )}

            {/* Dilscoop Towers */}
            {activeProject === "dilscoop" ? (
              <PItemActive onClick={() => setActiveProject("dilscoop")}>
                <PItemTitleWhite>Dilscoop Towers</PItemTitleWhite>
                <PItemSubWhite>Mount Lavinia</PItemSubWhite>
              </PItemActive>
            ) : (
              <PItem onClick={() => setActiveProject("dilscoop")}>
                <PItemTitle>Dilscoop Towers</PItemTitle>
                <PItemSub>Mount Lavinia</PItemSub>
              </PItem>
            )}

            {isMobile && activeProject === "dilscoop" && (
              <>
                <PMiddleCard>
                  {renderDescription("dilscoop")}
                  <PButton href={getButtonHref("dilscoop")}>View Project</PButton>
                </PMiddleCard>
                {renderMap("dilscoop")}
              </>
            )}

            {/* Coral Plus */}
            {activeProject === "coral-plus" ? (
              <PItemActive onClick={() => setActiveProject("coral-plus")}>
                <PItemTitleWhite>Coral Plus</PItemTitleWhite>
                <PItemSubWhite>Marine Drive, Colombo 04</PItemSubWhite>
              </PItemActive>
            ) : (
              <PItem onClick={() => setActiveProject("coral-plus")}>
                <PItemTitle>Coral Plus</PItemTitle>
                <PItemSub>Marine Drive, Colombo 04</PItemSub>
              </PItem>
            )}

            {isMobile && activeProject === "coral-plus" && (
              <>
                <PMiddleCard>
                  {renderDescription("coral-plus")}
                  <PButton href={getButtonHref("coral-plus")}>View Project</PButton>
                </PMiddleCard>
                {renderMap("coral-plus")}
              </>
            )}
          </PLeft>

          {!isMobile && (
            <>
              <PMiddleCard>
                {renderDescription(activeProject)}
                <PButton href={currentButtonHref}>View Project</PButton>
              </PMiddleCard>

              {renderMap(activeProject)}
            </>
          )}
        </PRow>

        {/* GALLERY */}
        <PGalleryWrap>
          <PScroller ref={scrollerRef}>
            {isLoading ? (
              Array(6)
                .fill(0)
                .map((_, i) => (
                  <PCard key={i}>
                    <PSkeletonGalleryImg />
                  </PCard>
                ))
            ) : (
              <>
                <PCard>
                  <PCardImg
                    src="/Projects/Project1.jpg"
                    alt="Project 1"
                    width={410}
                    height={300}
                    priority
                  />
                </PCard>
                <PCard>
                  <PCardImg
                    src="/Projects/Project2.jpg"
                    alt="Project 2"
                    width={410}
                    height={300}
                  />
                </PCard>
                <PCard>
                  <PCardImg
                    src="/Projects/Project3.jpg"
                    alt="Project 3"
                    width={410}
                    height={300}
                  />
                </PCard>
                <PCard>
                  <PCardImg
                    src="/Projects/Project4.jpg"
                    alt="Project 4"
                    width={410}
                    height={300}
                  />
                </PCard>
                <PCard>
                  <PCardImg
                    src="/Projects/Project1.jpg"
                    alt="Project 1 repeat"
                    width={410}
                    height={300}
                  />
                </PCard>
                <PCard>
                  <PCardImg
                    src="/Projects/Project2.jpg"
                    alt="Project 2 repeat"
                    width={410}
                    height={300}
                  />
                </PCard>
              </>
            )}
          </PScroller>

          <PGalleryTrack ref={trackRef}>
            <PGalleryThumb ref={thumbRef} />
          </PGalleryTrack>
        </PGalleryWrap>

        {/* ADVANTAGE SECTION */}
        <AdvantageWrap>
          <AdvantageTitle>The Coral Advantage</AdvantageTitle>
          <AdvantageLead>
            Every project is more than just a building it’s a carefully designed
            investment opportunity. With decades of trust,
            <BrDesktop />
            unmatched expertise, and a vision for tomorrow, we ensure that your
            investment grows in both value and lifestyle impact.
          </AdvantageLead>

          <FeaturesRow>
            <FeatureCard>
              <FeatureTitle>Prime Locations</FeatureTitle>
              <FeatureDesc>
                Strategically placed in high-demand <BrDesktop />
                areas, offering excellent accessibility
                <BrDesktop />
                and long-term appreciation.
              </FeatureDesc>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>Sustainable Value</FeatureTitle>
              <FeatureDesc>
                Built with modern construction <BrDesktop />
                standards and energy-efficient designs <BrDesktop />
                to ensure lasting worth.
              </FeatureDesc>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>Trusted Expertise</FeatureTitle>
              <FeatureDesc>
                Backed by Coral’s proven track record <BrDesktop />
                in delivering projects on time with
                <BrDesktop />
                uncompromised quality.
              </FeatureDesc>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>Lifestyle &amp; Community</FeatureTitle>
              <FeatureDesc>
                Developments that balance luxury <BrDesktop />
                living with community spaces, making <BrDesktop />
                them ideal for families &amp; professionals.
              </FeatureDesc>
            </FeatureCard>
          </FeaturesRow>
        </AdvantageWrap>
      </ProjectsHeroWrap>
    </main>
  );
}

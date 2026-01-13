"use client";

import { useEffect, useRef, useState } from "react";
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
} from "../components/Project.styles";

export default function ProjectsPage() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [activeProject, setActiveProject] = useState<
    "coral-city" | "coral-ind" | "dilscoop" | "coral-plus"
  >("coral-city");

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

  const mapAddress =
    activeProject === "coral-city"
      ? "71 Peterson Ln, Colombo 00600"
      : activeProject === "coral-ind"
      ? "217 George R. De Silva Mawatha"
      : activeProject === "dilscoop"
      ? "Mount Lavinia Beach, Dehiwala-Mount Lavinia"
      : "42 Ridgeway Pl, Colombo 00400";

  const activeButtonHref =
    activeProject === "coral-city"
      ? "/projects/OngoingProjects/coral-city"
      : activeProject === "coral-ind"
      ? "/projects/OngoingProjects/coral-ind"
      : activeProject === "dilscoop"
      ? "/projects/OngoingProjects/dilscoop"
      : "/projects/OngoingProjects/coral-plus";

  return (
    <main>
      <ProjectsHeroWrap>
        <ProjectsHeroTitle>Ongoing Projects</ProjectsHeroTitle>

        <ProjectHeroFrame>
          <ProjectHeroImg
            src="/Background/ViewImage.png"
            alt="Ongoing Projects hero"
            width={1280}
            height={350}
            priority
          />
          <ProjectHeroOverlay />
        </ProjectHeroFrame>

        <ProjectsHeroDesc>
          We are redefining modern living through visionary real estate
          developments. Our ongoing projects reflect a commitment to
          luxury, functionality, and
          sustainability crafted for families,
          investors, and businesses alike. Each development is
          strategically located, designed with precision, and built to
          enhance lifestyles while securing long-term value.
        </ProjectsHeroDesc>

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
          </PLeft>

          <PMiddleCard>
            {activeProject === "coral-city" && (
              <>
                <PMiddleText>
                  Coral City Gampaha is a modern residential community designed
                  to
                  bring comfort, convenience, and connectivity to families.
                  Nestled in a
                  prime location, it blends contemporary architecture with a
                  serene
                  environment.
                </PMiddleText>
                <PMiddleText>
                  The project offers thoughtfully planned living spaces with
                  easy access to
                  schools, hospitals, and transport hubs. It is built with
                  high-quality
                  materials, ensuring durability and long-term value.
                </PMiddleText>
                <PMiddleText>
                  Residents can enjoy landscaped gardens, recreational spaces,
                  and secure
                  surroundings, making Coral City an ideal choice for both
                  investment and living.
                </PMiddleText>
              </>
            )}

            {activeProject === "coral-ind" && (
              <>
                <PMiddleText>
                  Located in the heart of Colombo, Coral Independence Square
                  redefines luxury living. This iconic project combines
                  elegance, sophistication, and exclusivity, offering unmatched
                  city living.
                </PMiddleText>
                <PMiddleText>
                  Designed with premium finishes, spacious interiors, and modern
                  amenities, the property caters to professionals and families
                  who desire an urban lifestyle. Its prime location ensures easy
                  access to business hubs, shopping, and entertainment.
                </PMiddleText>
                <PMiddleText>
                  With limited units available, Coral Independence Square is not
                  just a home it’s a statement of prestige and a smart
                  investment for the future.
                </PMiddleText>
              </>
            )}

            {activeProject === "dilscoop" && (
              <>
                <PMiddleText>
                  Dilscoop Towers stands tall in Mount Lavinia, a location known
                  for its vibrant lifestyle and beachside charm. The project
                  offers a mix of modern apartments and commercial spaces.
                </PMiddleText>
                <PMiddleText>
                  Built with a focus on contemporary design, the development
                  includes panoramic views, spacious layouts, and smart
                  infrastructure. Each unit reflects Coral’s promise of quality
                  and innovation.
                </PMiddleText>
                <PMiddleText>
                  Close to schools, supermarkets, and the iconic Mount Lavinia
                  beach, Dilscoop Towers is the perfect blend of urban living
                  and leisure. It offers both lifestyle benefits and high
                  investment returns.
                </PMiddleText>
              </>
            )}

            {activeProject === "coral-plus" && (
              <>
                <PMiddleText>
                  Nestled along Marine Drive at No. 42 Ridgeway Place, Coral
                  Plus offers a luxurious seaside living experience, complete
                  with refreshing morning breezes and magical ocean sunsets.
                  Comprising four custom-designed apartment styles over a
                  20-story structure, Coral Plus exudes tranquility and
                  grandeur by the Indian Ocean.
                </PMiddleText>
                <PMiddleText>
                  This project seamlessly balances modern design with maximum
                  comfort. Residents enjoy premium amenities—such as an infinity
                  pool with panoramic ocean views, landscaped podiums and
                  rooftop barbeque areas within close reach of Colombo’s key
                  locations. Each unit comes with secure parking, robust
                  construction features, and thoughtful spatial layouts.
                </PMiddleText>
                <PMiddleText>
                  Coral Plus redefines urban sea-front luxury with superior
                  facilities: high-speed lifts, standby power supply, advanced
                  fire safety systems, intercom security, private balconies,
                  designer interiors, and dedicated spaces such as a gym,
                  conference room, and library. It’s comfort and elegance
                  meticulously rolled into your next home or investment.
                </PMiddleText>
              </>
            )}

            <PButton href={activeButtonHref}>View Project</PButton>
          </PMiddleCard>

          <PMapCard>
            <PMapIframe
              src={
                "https://www.google.com/maps?q=" +
                encodeURIComponent(mapAddress) +
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
          </PMapCard>
        </PRow>

        <PGalleryWrap>
          <PScroller ref={scrollerRef}>
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
          </PScroller>

          <PGalleryTrack ref={trackRef}>
            <PGalleryThumb ref={thumbRef} />
          </PGalleryTrack>
        </PGalleryWrap>

        <AdvantageWrap>
          <AdvantageTitle>The Coral Advantage</AdvantageTitle>
          <AdvantageLead>
            Every project is more than just a buildingit’s a carefully designed
            investment opportunity. With decades of trust, unmatched
            expertise, and a vision for tomorrow, we ensure that your investment
            grows in both value and lifestyle impact.
          </AdvantageLead>

          <FeaturesRow>
            <FeatureCard>
              <FeatureTitle>Prime Locations</FeatureTitle>
              <FeatureDesc>
                Strategically placed in high-demand
                areas, offering excellent accessibility
                and long-term appreciation.
              </FeatureDesc>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>Sustainable Value</FeatureTitle>
              <FeatureDesc>
                Built with modern construction
                standards and energy-efficient designs
                to ensure lasting worth.
              </FeatureDesc>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>Trusted Expertise</FeatureTitle>
              <FeatureDesc>
                Backed by Coral’s proven track record
                in delivering projects on time with
                uncompromised quality.
              </FeatureDesc>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>Lifestyle &amp; Community</FeatureTitle>
              <FeatureDesc>
                Developments that balance luxury
                living with community spaces, making
                them ideal for families &amp; professionals.
              </FeatureDesc>
            </FeatureCard>
          </FeaturesRow>
        </AdvantageWrap>
      </ProjectsHeroWrap>
    </main>
  );
}

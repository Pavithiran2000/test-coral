"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  PlusHeroWrap,
  PlusHeroTitle,
  PlusHeroFrame,
  PlusHeroImg,
  PlusIntro,
  PlusIntroPara,
  PlusPromiseWrap,
  PlusPromiseRow,
  PlusPromiseTitle,
  PromiseList,
  PromiseItem,
  MapPlusCard,
  MapPlusFrame,
  MapPlusCaption,
  MapPlusCapIcon,
  MapPlusPinWrap,
  ConvenienceWrap,
  ConvenienceTitle,
  ConvenienceFrame,
  ConvenienceImg,
  FPWrap,
  FPTitle,
  FPLead,
  FPTabBar,
  FPTab,
  FPPanel,
  FPUnitTitle,
  FPCols,
  FPList,
  FPItem,
  FPBtn,
  FPImgWrap,
  FPPlanImg,
  FPImgInner,
  FPTabBarMobile,
  FPTabMobile,
  PGalleryWrap,
  PScroller,
  PCard,
  PCardImg,
  PGalleryTrack,
  PGalleryThumb,
  MapPlusOverlay,
} from "../components/Coral.styles";

function FloorPlansSection() {
  type UnitIndex = 0 | 1 | 2 | 3;
  const [active, setActive] = useState<UnitIndex>(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const units: UnitIndex[] = [0, 1, 2, 3];

  const renderPanel = (unit: UnitIndex) => {
    switch (unit) {
      case 0:
        return (
          <>
            <FPUnitTitle>UNIT A – 1465 Sq. Ft.</FPUnitTitle>

            <FPCols>
              <div>
                <FPList>
                  <FPItem>Three Bedrooms</FPItem>
                  <FPItem>Master Bedroom with Attached Bathroom</FPItem>
                  <FPItem>Common Bathroom</FPItem>
                  <FPItem>Living &amp; Dining Room</FPItem>
                  <FPItem>Kitchen with Pantry</FPItem>
                  <FPItem>Maid’s Room with Toilet</FPItem>
                </FPList>

                <FPBtn href="#">Check Availability</FPBtn>
              </div>

              <FPImgWrap>
                <FPImgInner>
                  <FPPlanImg
                    src="/CoralPlus/FloorPlan1.png"
                    alt="Unit A Floor Plan"
                    width={580}
                    height={670}
                    priority
                  />
                </FPImgInner>
              </FPImgWrap>
            </FPCols>
          </>
        );

      case 1:
        return (
          <>
            <FPUnitTitle>UNIT B – 1615 Sq. Ft.</FPUnitTitle>

            <FPCols>
              <div>
                <FPList>
                  <FPItem>Three Bedrooms</FPItem>
                  <FPItem>Master Bedroom with Attached Bathroom</FPItem>
                  <FPItem>Common Bathroom</FPItem>
                  <FPItem>Living &amp; Dining Room</FPItem>
                  <FPItem>Kitchen with Pantry</FPItem>
                  <FPItem>Maid’s Room with Toilet</FPItem>
                </FPList>

                <FPBtn href="#">Check Availability</FPBtn>
              </div>

              <FPImgWrap>
                <FPImgInner>
                  <FPPlanImg
                    src="/CoralPlus/FloorPlan2.png"
                    alt="Unit B Floor Plan"
                    width={580}
                    height={670}
                  />
                </FPImgInner>
              </FPImgWrap>
            </FPCols>
          </>
        );

      case 2:
        return (
          <>
            <FPUnitTitle>UNIT C – 945 Sq. Ft.</FPUnitTitle>

            <FPCols>
              <div>
                <FPList>
                  <FPItem>Two Bedrooms</FPItem>
                  <FPItem>Master Bedroom with Attached Bathroom</FPItem>
                  <FPItem>Common Bathroom</FPItem>
                  <FPItem>Living &amp; Dining Room</FPItem>
                  <FPItem>Kitchen with Pantry</FPItem>
                </FPList>

                <FPBtn href="#">Check Availability</FPBtn>
              </div>

              <FPImgWrap>
                <FPImgInner>
                  <FPPlanImg
                    src="/CoralPlus/FloorPlan3.png"
                    alt="Unit C Floor Plan"
                    width={580}
                    height={670}
                  />
                </FPImgInner>
              </FPImgWrap>
            </FPCols>
          </>
        );

      case 3:
      default:
        return (
          <>
            <FPUnitTitle>UNIT D – 740 Sq. Ft.</FPUnitTitle>

            <FPCols>
              <div>
                <FPList>
                  <FPItem>
                    Single Bedroom with Attached Bathroom &amp; Dressing Room
                  </FPItem>
                  <FPItem>Living &amp; Dining Room</FPItem>
                  <FPItem>Kitchen with Pantry</FPItem>
                </FPList>

                <FPBtn href="#">Check Availability</FPBtn>
              </div>

              <FPImgWrap>
                <FPImgInner>
                  <FPPlanImg
                    src="/CoralPlus/FloorPlan4.png"
                    alt="Unit D Floor Plan"
                    width={580}
                    height={670}
                  />
                </FPImgInner>
              </FPImgWrap>
            </FPCols>
          </>
        );
    }
  };

  return (
    <FPWrap>
      <FPTitle>
        Floor Plans &amp;
        Availability
      </FPTitle>

      <FPLead>
        Discover thoughtfully designed floor plans tailored for modern
        living. Explore spacious layouts, premium finishes, and
        flexible
        configurations to suit your lifestyle. Check real-time
        availability and secure your preferred apartment or villa before{" "}
        it’s gone. Coral Plus offers limited units in a prime location.
      </FPLead>

      {/* Desktop + tablet tabs: single panel, only active unit */}
      {!isMobile && (
        <>
          <FPTabBar>
            <FPTab $active={active === 0} onClick={() => setActive(0)}>
              UNIT A - 1465 Sq. Ft.
            </FPTab>
            <FPTab $active={active === 1} onClick={() => setActive(1)}>
              UNIT B - 1615 Sq. Ft.
            </FPTab>
            <FPTab $active={active === 2} onClick={() => setActive(2)}>
              UNIT C - 945 Sq. Ft.
            </FPTab>
            <FPTab $active={active === 3} onClick={() => setActive(3)}>
              UNIT D - 740 Sq. Ft.
            </FPTab>
          </FPTabBar>

          <FPPanel>{renderPanel(active)}</FPPanel>
        </>
      )}

      {/* Mobile: accordion – tab + its content right below */}
      {isMobile && (
        <FPTabBarMobile>
          {units.map((unit) => (
            <div key={unit}>
              <FPTabMobile
                $active={active === unit}
                onClick={() => setActive(unit)}
              >
                {unit === 0 && "UNIT A – 1465 Sq. Ft."}
                {unit === 1 && "UNIT B – 1615 Sq. Ft."}
                {unit === 2 && "UNIT C – 945 Sq. Ft."}
                {unit === 3 && "UNIT D – 740 Sq. Ft."}
              </FPTabMobile>

              {active === unit && (
                <FPPanel $mobileShape="bottom">{renderPanel(unit)}</FPPanel>
              )}
            </div>
          ))}
        </FPTabBarMobile>
      )}
    </FPWrap>
  );
}

export default function CoralPlusSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <PlusHeroWrap as="section">
        <PlusHeroTitle>Coral Plus</PlusHeroTitle>

        <PlusHeroFrame>
          <PlusHeroImg
            src="/Projects/Project1.jpg"
            alt="Coral Plus hero"
            priority
            width={1200}
            height={300}
          />
        </PlusHeroFrame>

        <PlusIntro>
          <PlusIntroPara>
            Nestled along Marine Drive at No. 42 Ridgeway Place, Coral Plus
            offers a luxurious seaside living experience, complete with
            refreshing morning breezes and magical ocean sunsets. Comprising
            four custom-designed apartment styles over a 20-story structure,
            Coral Plus exudes tranquility and grandeur by the Indian Ocean
          </PlusIntroPara>
          <PlusIntroPara>
            This project seamlessly balances modern design with maximum comfort.
            Residents enjoy premium amenities—such as an infinity pool with
            panoramic ocean views, landscaped podiums and rooftop barbeque areas
            within close reach of Colombo’s key locations. Each unit comes with
            secure parking, robust construction features, and thoughtful spatial
            layouts
          </PlusIntroPara>
          <PlusIntroPara>
            Coral Plus redefines urban sea-front luxury with superior
            facilities: high-speed lifts, standby power supply, advanced fire
            safety systems, intercom security, private balconies, designer
            interiors, and dedicated spaces such as a gym, conference room, and
            library. It’s comfort and elegance meticulously rolled into your
            next home or investment
          </PlusIntroPara>
        </PlusIntro>
      </PlusHeroWrap>

      <PlusPromiseWrap as="section">
        <PlusPromiseRow>
          <div>
            <PlusPromiseTitle>Coral Plus Promise</PlusPromiseTitle>

            <PromiseList>
              <PromiseItem>
                Infinity Pool overlooking the Indian Ocean
              </PromiseItem>
              <PromiseItem>
                Landscaped podium and rooftop with barbeque area
              </PromiseItem>
              <PromiseItem>
                20-story building with a dedicated car park for each unit on 5
                levels
              </PromiseItem>
              <PromiseItem>Hardscape car parking and culverts</PromiseItem>
              <PromiseItem>Mahogany doors and pantry cupboards</PromiseItem>
              <PromiseItem>
                The perfect balance of lighting, ventilation and privacy
              </PromiseItem>
              <PromiseItem>
                Master Bedroom with air conditioner (LG or equivalent) /{" "}
                provision for A/C in
                living and other rooms
              </PromiseItem>
              <PromiseItem>24-hour security with full CCTV coverage</PromiseItem>
              <PromiseItem>Standby and backup generator</PromiseItem>
              <PromiseItem>
                Unique bell lift facility with high speed lifts
              </PromiseItem>
              <PromiseItem>
                Fire protection system according to CMC regulations
              </PromiseItem>
              <PromiseItem>
                Intercom facility from security office to each apartment
              </PromiseItem>
              <PromiseItem>Designated conference room and library</PromiseItem>
              <PromiseItem>
                Soft &amp; wall-mounted energy saving LED lighting in common{" "}
                areas
              </PromiseItem>
              <PromiseItem>State-of-the-art gym</PromiseItem>
              <PromiseItem>Double glazed good-proof windows</PromiseItem>
              <PromiseItem>Three-phase electricity</PromiseItem>
              <PromiseItem>Solar lighting inverter system</PromiseItem>
              <PromiseItem>
                Private balconies for living rooms and selected bedrooms
              </PromiseItem>
              <PromiseItem>
                Air-conditioned garbage storage area (ground floor)
              </PromiseItem>
              <PromiseItem>
                Hot water in main bathroom + provision for other bathrooms{" "}
                (Ariston or
                equivalent geyser)
              </PromiseItem>
            </PromiseList>
          </div>

          <MapPlusCard>
            <MapPlusFrame
              src={
                "https://www.google.com/maps?q=" +
                encodeURIComponent("No. 42, Ridgeway Place, Colombo 04") +
                "&z=15&output=embed"
              }
              loading="lazy"
              title="No. 42, Ridgeway Place, Colombo 04"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <MapPlusOverlay />

            <MapPlusPinWrap aria-hidden="true"></MapPlusPinWrap>

            <MapPlusCaption>
              <MapPlusCapIcon viewBox="0 0 20 25" aria-hidden="true">
                <defs>
                  <path
                    id="capPinPath"
                    d="M10 0C5.58 0 2 3.58 2 8.02c0 5.53 8 16.98 8 16.98s8-11.45 8-16.98C18 3.58 14.42 0 10 0z"
                  />
                  <clipPath id="capLeft">
                    <rect x="0" y="0" width="80" height="25" />
                  </clipPath>
                  <clipPath id="capRight">
                    <rect x="10" y="0" width="80" height="25" />
                  </clipPath>
                </defs>
                <use
                  href="#capPinPath"
                  clipPath="url(#capLeft)"
                  fill="#3EC3FF"
                />
                <use
                  href="#capPinPath"
                  clipPath="url(#capRight)"
                  fill="#1DAEEF"
                />
                <circle cx="10" cy="8" r="5" fill="#FFFFFF" />
              </MapPlusCapIcon>
              No. 42, Ridgeway Place, Colombo 04
            </MapPlusCaption>
          </MapPlusCard>
        </PlusPromiseRow>

        <ConvenienceWrap>
          <ConvenienceTitle>Convenience</ConvenienceTitle>
          <ConvenienceFrame>
            <ConvenienceImg
              src="/CoralPlus/Convenience.png"
              alt="Nearby convenience map"
              width={1084}
              height={588}
              priority
            />
          </ConvenienceFrame>
        </ConvenienceWrap>

        <FloorPlansSection />

        <PGalleryWrap>
          <PScroller ref={scrollerRef}>
            <PCard>
              <PCardImg
                src="/Projects/Project1.jpg"
                alt="Gallery 1"
                width={410}
                height={300}
                priority
              />
            </PCard>
            <PCard>
              <PCardImg
                src="/Projects/Project2.jpg"
                alt="Gallery 2"
                width={410}
                height={300}
              />
            </PCard>
            <PCard>
              <PCardImg
                src="/Projects/Project3.jpg"
                alt="Gallery 3"
                width={410}
                height={300}
              />
            </PCard>
            <PCard>
              <PCardImg
                src="/Projects/Project4.jpg"
                alt="Gallery 4"
                width={410}
                height={300}
              />
            </PCard>
            <PCard>
              <PCardImg
                src="/Projects/Project1.jpg"
                alt="Gallery 5"
                width={410}
                height={300}
              />
            </PCard>
            <PCard>
              <PCardImg
                src="/Projects/Project2.jpg"
                alt="Gallery 6"
                width={410}
                height={300}
              />
            </PCard>
          </PScroller>

          <PGalleryTrack ref={trackRef}>
            <PGalleryThumb ref={thumbRef} />
          </PGalleryTrack>
        </PGalleryWrap>
      </PlusPromiseWrap>
    </>
  );
}

"use client";

import { use, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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
  MapPlusOverlay,
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
  SkeletonHeroTitle,
  SkeletonHeroImage,
  SkeletonIntroLine,
  SkeletonHighlightTitle,
  SkeletonFeatureItem,
  SkeletonMap,
  SkeletonMapCaption,
  SkeletonConvenienceTitle,
  SkeletonConvenienceImage,
  SkeletonFPTitle,
  SkeletonFPLead,
  SkeletonTab,
  SkeletonUnitTitle,
  SkeletonFeatureText,
  SkeletonCheckBtn,
  SkeletonFloorPlanImage,
  SkeletonGalleryCard,
  SkeletonTrackThumb,
} from "../../../components/Coral.styles";
import {
  OngoingProject,
  getOngoingProjectById,
} from "@/lib/utils/ongoingProjectsUtils";
import CoralPlusSection from "../../../CoralPlus/page";

interface OngoingDetailPageProps {
  params: Promise<{ id: string }>;
}

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
                    Single Bedroom with Attached Bathroom &amp;
                    Dressing Room
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

      {isMobile && (
        <FPTabBarMobile>
          {units.map((unit) => {
            const shape = unit === 0 ? "top" : unit === 3 ? "bottom" : "middle";

            return (
              <div key={unit}>
                <FPTabMobile
                  $active={active === unit}
                  $shape={shape as "top" | "middle" | "bottom"}
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
            );
          })}
        </FPTabBarMobile>
      )}
    </FPWrap>
  );
}

export default function OngoingProjectDetailPage({
  params,
}: OngoingDetailPageProps) {
  const router = useRouter();
  const { id } = use(params);
  const [project, setProject] = useState<OngoingProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id === "coral-plus") {
      setIsLoading(false);
      return;
    }

    const fetchProject = async () => {
      try {
        const data = await getOngoingProjectById(id);
        if (!data) {
          router.push("/projects");
          return;
        }
        setProject(data);
      } catch (error) {
        console.error("Error loading ongoing project:", error);
        router.push("/projects");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id, router]);

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
  }, [project]);

  if (id === "coral-plus") {
    return <CoralPlusSection />;
  }

  if (isLoading) {
    return (
      <main>
        {/* Hero Section */}
        <PlusHeroWrap as="section">
          <SkeletonHeroTitle />
          <PlusHeroFrame>
            <SkeletonHeroImage />
          </PlusHeroFrame>
          <PlusIntro>
            <SkeletonIntroLine />
            <SkeletonIntroLine />
            <SkeletonIntroLine />
          </PlusIntro>
        </PlusHeroWrap>

        <PlusPromiseWrap as="section">
          {/* Highlights + Map */}
          <PlusPromiseRow>
            <div>
              <SkeletonHighlightTitle />
              <PromiseList>
                {[1, 2, 3, 4, 5].map((i) => (
                  <PromiseItem key={i}>
                    <SkeletonFeatureItem />
                  </PromiseItem>
                ))}
              </PromiseList>
            </div>

            <MapPlusCard>
              <SkeletonMap />
              <MapPlusOverlay />
              <MapPlusPinWrap aria-hidden="true" />
              <MapPlusCaption>
                <MapPlusCapIcon viewBox="0 0 20 25" aria-hidden="true">
                  <defs>
                    <path id="capPinPath" d="M10 0C5.58 0 2 3.58 2 8.02c0 5.53 8 16.98 8 16.98s8-11.45 8-16.98C18 3.58 14.42 0 10 0z" />
                  </defs>
                  <use href="#capPinPath" fill="#3EC3FF" />
                  <use href="#capPinPath" fill="#1DAEEF" opacity="0.6" />
                  <circle cx="10" cy="8" r="5" fill="#FFFFFF" />
                </MapPlusCapIcon>
                <SkeletonMapCaption />
              </MapPlusCaption>
            </MapPlusCard>
          </PlusPromiseRow>

          {/* Convenience */}
          <ConvenienceWrap>
            <SkeletonConvenienceTitle />
            <ConvenienceFrame>
              <SkeletonConvenienceImage />
            </ConvenienceFrame>
          </ConvenienceWrap>

          {/* Floor Plans */}
          <FPWrap>
            <SkeletonFPTitle />
            <SkeletonFPLead />
            <FPTabBar>
              {[0, 1, 2, 3].map((i) => (
                <SkeletonTab key={i} />
              ))}
            </FPTabBar>
            <FPPanel>
              <SkeletonUnitTitle />
              <FPCols>
                <div>
                  <FPList>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <SkeletonFeatureText key={i} />
                    ))}
                  </FPList>
                  <SkeletonCheckBtn />
                </div>
                <FPImgWrap>
                  <SkeletonFloorPlanImage />
                </FPImgWrap>
              </FPCols>
            </FPPanel>
          </FPWrap>

          {/* Gallery */}
          <PGalleryWrap>
            <PScroller ref={scrollerRef}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <PCard key={i}>
                  <SkeletonGalleryCard />
                </PCard>
              ))}
            </PScroller>
            <PGalleryTrack ref={trackRef}>
              <PGalleryThumb ref={thumbRef}>
                <SkeletonTrackThumb />
              </PGalleryThumb>
            </PGalleryTrack>
          </PGalleryWrap>
        </PlusPromiseWrap>
      </main>
    );
  }

  if (!project) {
    return (
      <PlusHeroWrap as="main">
        <PlusIntroPara>Project not found.</PlusIntroPara>
      </PlusHeroWrap>
    );
  }

  return (
    <main>
      {/* Real Content */}
      <PlusHeroWrap as="section">
        <PlusHeroTitle>{project.name}</PlusHeroTitle>
        <PlusHeroFrame>
          <PlusHeroImg
            src={project.heroImage}
            alt={`${project.name} hero`}
            priority
            width={1200}
            height={325}
          />
        </PlusHeroFrame>
        <PlusIntro>
          {project.intro.map((para, idx) => (
            <PlusIntroPara key={idx}>{para}</PlusIntroPara>
          ))}
        </PlusIntro>
      </PlusHeroWrap>

      <PlusPromiseWrap as="section">
        <PlusPromiseRow>
          <div>
            <PlusPromiseTitle>{project.name} Highlights</PlusPromiseTitle>
            <PromiseList>
              {project.features.map((item, idx) => (
                <PromiseItem key={idx}>{item}</PromiseItem>
              ))}
            </PromiseList>
          </div>

          <MapPlusCard>
            <MapPlusFrame
              src={
                "https://www.google.com/maps?q=" +
                encodeURIComponent(project.mapAddress) +
                "&z=15&output=embed"
              }
              loading="lazy"
              title={project.mapAddress}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <MapPlusOverlay />
            <MapPlusPinWrap aria-hidden="true" />
            <MapPlusCaption>
              <MapPlusCapIcon viewBox="0 0 20 25" aria-hidden="true">
                <defs>
                  <path
                    id="capPinPath"
                    d="M10 0C5.58 0 2 3.58 2 8.02c0 5.53 8 16.98 8 16.98s8-11.45 8-16.98C18 3.58 14.42 0 10 0z"
                  />
                </defs>
                <use href="#capPinPath" fill="#3EC3FF" />
                <use href="#capPinPath" fill="#1DAEEF" opacity="0.6" />
                <circle cx="10" cy="8" r="5" fill="#FFFFFF" />
              </MapPlusCapIcon>
              {project.mapAddress}
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
              <PCardImg src="/Projects/Project1.jpg" alt="Gallery 1" width={410} height={300} priority />
            </PCard>
            <PCard>
              <PCardImg src="/Projects/Project2.jpg" alt="Gallery 2" width={410} height={300} />
            </PCard>
            <PCard>
              <PCardImg src="/Projects/Project3.jpg" alt="Gallery 3" width={410} height={300} />
            </PCard>
            <PCard>
              <PCardImg src="/Projects/Project4.jpg" alt="Gallery 4" width={410} height={300} />
            </PCard>
            <PCard>
              <PCardImg src="/Projects/Project1.jpg" alt="Gallery 5" width={410} height={300} />
            </PCard>
            <PCard>
              <PCardImg src="/Projects/Project2.jpg" alt="Gallery 6" width={410} height={300} />
            </PCard>
          </PScroller>
          <PGalleryTrack ref={trackRef}>
            <PGalleryThumb ref={thumbRef} />
          </PGalleryTrack>
        </PGalleryWrap>
      </PlusPromiseWrap>
    </main>
  );
}
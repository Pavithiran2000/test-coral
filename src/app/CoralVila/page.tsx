"use client";

import { useEffect, useRef } from "react";
import {
  VilaWrap,
  VilaTitle,
  VilaHero,
  VilaHeroImg,
  VilaLead,
  VilaPara,
  VilaSpan,
  KFRow,
  KFTitle,
  KFList,
  KFItem,
  KFBrochure,
  MapCard,
  MapIframe,
  MapCaption,
  MapCapIcon, MapOverlay, CGalleryWrap, CScroller, CCard, CCardImg, CGalleryTrack, CGalleryThumb
} from "../components/CoralVila.styles";

export default function CoralVilaPage() {
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
    <VilaWrap as="main">
      <VilaTitle>Coral Villa</VilaTitle>

      <VilaHero>
        <VilaHeroImg
          src="/CompletedProjects/Completed2.jpg"
          alt="Coral Villa"
          width={1280}
          height={430}
          priority
        />
      </VilaHero>

      <VilaLead>
        <VilaPara>
          Coral Villa is an ultra-modern, multi-storey luxury apartment complex located at 8A, Harmers’ Place, Wellawatte, Colombo 06. Designed for comfort and elegance, this 3-bedroom residence offers serene sea views, tropical aesthetics, and an intimate living experience in Sri Lanka’s vibrant cityscape.
        </VilaPara>
        <VilaPara>
          Every corner at Coral Villa reflects quality craftsmanship and thoughtful design from its breezy layouts that balance lighting, ventilation, and privacy, to private balconies and rooftop escarpments that evoke tranquility and space.
        </VilaPara>
        <VilaPara>
          <VilaSpan>
            Residents also benefit from practical features like standby generators, high-speed elevators, 24-hour security, waterproofing, intercom systems, and secure parking. With unbeatable value and everyday elegance, Coral Villa invites you to a life of exclusivity and ease
          </VilaSpan>
        </VilaPara>
      </VilaLead>

      <KFRow>
        <div>
          <KFTitle>Key Features</KFTitle>
          <KFList>
            <KFItem>Optimal balance in lighting, ventilation and privacy</KFItem>
            <KFItem>Top quality materials and luxury finishes</KFItem>
            <KFItem>Standby generators for common areas lighting, elevators, water and fire pumps</KFItem>
            <KFItem>Individual communication facility from apartments to reception office and among apartments and intercom facility</KFItem>
            <KFItem>Ample parking facility with all safety protocols</KFItem>
            <KFItem>Bathrooms, roof top balconies, yards and external walls are fully water proof</KFItem>
            <KFItem>High speed elevator up to roof top</KFItem>
            <KFItem>Modern fire protection designed in conformity with municipal regulations</KFItem>
            <KFItem>Lightening arrester mechanism</KFItem>
            <KFItem>24 hours security service</KFItem>
            <KFItem>Exhilarating sea view point at roof top</KFItem>
            <KFItem>Full secured eight feet parapet wall right around</KFItem>
            <KFItem>Private individual balconies for living and all bedrooms</KFItem>
            <KFItem>Garbage storage area in ground floor</KFItem>
          </KFList>
          <KFBrochure href="#">Download E-Brochure</KFBrochure>
        </div>

        <MapCard>
          <MapIframe
            src={
              "https://www.google.com/maps?q=" +
              encodeURIComponent("08A, Harmers’ Place, Colombo 06") +
              "&z=15&output=embed"
            }
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="08A, Harmers’ Place, Colombo 06"
          />
          <MapOverlay />
          <MapCaption>
            <MapCapIcon viewBox="0 0 20 25" aria-hidden="true">
                <defs>
                    <path id="capPinPath" d="M10 0C5.58 0 2 3.58 2 8.02c0 5.53 8 16.98 8 16.98s8-11.45 8-16.98C18 3.58 14.42 0 10 0z" />
                    <clipPath id="capLeft"><rect x="0" y="0" width="80" height="25" /></clipPath>
                    <clipPath id="capRight"><rect x="10" y="0" width="80" height="25" /></clipPath>
                </defs>
                <use href="#capPinPath" clipPath="url(#capLeft)" fill="#3EC3FF" />
                <use href="#capPinPath" clipPath="url(#capRight)" fill="#1DAEEF" />
                <circle cx="10" cy="10" r="5" fill="#FFFFFF" />
            </MapCapIcon>
            08A, Harmers’ Place, Colombo 06
          </MapCaption>
        </MapCard>
      </KFRow>

      <CGalleryWrap>
        <CScroller ref={scrollerRef}>
          <CCard>
            <CCardImg src="/Projects/Project1.jpg" alt="Gallery 1" width={410} height={300} priority />
          </CCard>
          <CCard>
            <CCardImg src="/Projects/Project2.jpg" alt="Gallery 2" width={410} height={300} />
          </CCard>
          <CCard>
            <CCardImg src="/Projects/Project3.jpg" alt="Gallery 3" width={410} height={300} />
          </CCard>
          <CCard>
            <CCardImg src="/Projects/Project4.jpg" alt="Gallery 4" width={410} height={300} />
          </CCard>
          <CCard>
            <CCardImg src="/Projects/Project1.jpg" alt="Gallery 5" width={410} height={300} />
          </CCard>
          <CCard>
            <CCardImg src="/Projects/Project2.jpg" alt="Gallery 6" width={410} height={300} />
          </CCard>
        </CScroller>
        <CGalleryTrack ref={trackRef}>
          <CGalleryThumb ref={thumbRef} />
        </CGalleryTrack>
      </CGalleryWrap>
    </VilaWrap>
  );
}

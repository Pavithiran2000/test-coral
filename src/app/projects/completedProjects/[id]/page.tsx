"use client";

import { use, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
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
  MapCapIcon,
  MapOverlay,
  CGalleryWrap,
  CScroller,
  CCard,
  CCardImg,
  CGalleryTrack,
  CGalleryThumb,
  SkeletonTitle,
  SkeletonHero,
  SkeletonLead,
  SkeletonFeatureItem,
  SkeletonMap,
  SkeletonGalleryCard,
  SkeletonTrack,
  SkeletonThumb,
} from "../../../components/CoralVila.styles";
import {
  CompletedProject,
  getCompletedProjectById,
} from "@/lib/utils/completedProjectsUtils";

interface CompletedDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function CompletedDetailPage({ params }: CompletedDetailPageProps) {
  const router = useRouter();
  const { id } = use(params);

  const [project, setProject] = useState<CompletedProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getCompletedProjectById(id);
        if (!data) {
          router.push("/projects/completedProjects");
          return;
        }
        setProject(data);
      } catch (err) {
        console.error("Error loading completed project:", err);
        router.push("/projects/completedProjects");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id, router]);

  // Scroll indicator sync (only when content is ready)
  useEffect(() => {
    if (!project || isLoading) return;
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!scroller || !track || !thumb) return;

    const CARD_COUNT = project.gallery.length || 1;

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
  }, [project, isLoading]);

  // ──────────────────────────────────────────────────────────────
  // SKELETON LAYOUT (100% matches final layout)
  // ──────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <VilaWrap as="main">
        {/* Title */}
        <SkeletonTitle />

        {/* Hero */}
        <VilaHero>
          <SkeletonHero />
        </VilaHero>

        {/* Lead Paragraphs */}
        <VilaLead>
          <SkeletonLead />
          <SkeletonLead />
          <SkeletonLead style={{ width: "80%" }} />
        </VilaLead>

        {/* Key Features + Map */}
        <KFRow>
          <div>
            <SkeletonTitle style={{ width: "60%", margin: "0 auto" }} />
            <KFList>
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <KFItem key={i}>
                    <SkeletonFeatureItem />
                  </KFItem>
                ))}
            </KFList>
            <KFBrochure as="div" style={{ opacity: 0.6 }}>
              &nbsp;
            </KFBrochure>
          </div>

          <MapCard>
            <SkeletonMap />
          </MapCard>
        </KFRow>

        {/* Gallery */}
        <CGalleryWrap>
          <CScroller>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <CCard key={i}>
                  <SkeletonGalleryCard />
                </CCard>
              ))}
          </CScroller>

          <CGalleryTrack>
            <SkeletonTrack>
              <SkeletonThumb />
            </SkeletonTrack>
          </CGalleryTrack>
        </CGalleryWrap>
      </VilaWrap>
    );
  }

  // ──────────────────────────────────────────────────────────────
  // REAL CONTENT
  // ──────────────────────────────────────────────────────────────
  if (!project) {
    return (
      <VilaWrap as="main">
        <VilaPara style={{ textAlign: "center", padding: "40px 20px" }}>
          Project not found.
        </VilaPara>
      </VilaWrap>
    );
  }

  const mapAddress = project.mapAddress || project.address;

  return (
    <VilaWrap as="main">
      <VilaTitle>{project.name}</VilaTitle>

      <VilaHero>
        <VilaHeroImg
          src={project.heroImage || project.image}
          alt={project.name}
          width={1280}
          height={430}
          priority
        />
      </VilaHero>

      <VilaLead>
        {project.lead.map((para, idx) => (
          <VilaPara key={idx}>
            {idx === project.lead.length - 1 ? <VilaSpan>{para}</VilaSpan> : para}
          </VilaPara>
        ))}
      </VilaLead>

      <KFRow>
        <div>
          <KFTitle>Key Features</KFTitle>
          <KFList>
            {project.features.map((item, idx) => (
              <KFItem key={idx}>{item}</KFItem>
            ))}
          </KFList>
          <KFBrochure href="#">Download E-Brochure</KFBrochure>
        </div>

        <MapCard>
          <MapIframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              mapAddress
            )}&z=15&output=embed`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={mapAddress}
          />
          <MapOverlay />
          <MapCaption>
            <MapCapIcon viewBox="0 0 20 25" aria-hidden="true">
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
              <use href="#capPinPath" clipPath="url(#capLeft)" fill="#3EC3FF" />
              <use href="#capPinPath" clipPath="url(#capRight)" fill="#1DAEEF" />
              <circle cx="10" cy="10" r="5" fill="#FFFFFF" />
            </MapCapIcon>
            {mapAddress}
          </MapCaption>
        </MapCard>
      </KFRow>

      <CGalleryWrap>
        <CScroller ref={scrollerRef}>
          {project.gallery.map((img, idx) => (
            <CCard key={idx}>
              <CCardImg src={img} alt={`Gallery ${idx + 1}`} width={410} height={300} />
            </CCard>
          ))}
        </CScroller>

        <CGalleryTrack ref={trackRef}>
          <CGalleryThumb ref={thumbRef} />
        </CGalleryTrack>
      </CGalleryWrap>
    </VilaWrap>
  );
}
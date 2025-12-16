"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import NextLinkBehavior from "../lib/NextLinkBehavior";

import {
  HeroWrap,
  IntroBlock,
  HeroTitle,
  HeroSub,
  MediaRow,
  LeftImage,
  MediaFrame,
  MapFrame,
  MapIframe,
  MapOverlay,
  HeroImageSkeleton,
  MapSkeleton,
  ProjectsWrap,
  ProjectsHead,
  ProjectsTitle,
  ProjectsLead,
  ProjectsCta,
  ProjectsBleed,
  ProjectsRailViewport,
  ProjectsRail,
  ProjectCard,
  ProjectImg,
  ProjectImageSkeleton,
  AboutWrap,
  AboutTitle,
  AboutSub,
  AboutFinePrint,
  VideoWrap,
  VideoIframe,
  VideoSkeleton,
  AboutCta,
  FutureWrap,
  FutureSub,
  FutureTitle,
  FutureCard,
  FutureImgWrap,
  FutureImg,
  FutureBody,
  FutureName,
  FutureLoc,
  FuturePara,
  FutureParas,
  FutureBtn,
  FuturesBtn,
  FutureCards,
  FutureImageSkeleton,
  GroupWrap,
  GroupFrame,
  GroupLeft,
  GroupTitle,
  GroupSub,
  CompanyGrid,
  CompanyCard,
  CompanyTop,
  CompanyLogoBox,
  CompanyLogo,
  Rating,
  CompanyDesc,
  Star,
  CompanyLogoSkeleton,
  Nowrap, 
} from "./components/Home.styles";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const imgs = [
    "/products/Coral1.jpg",
    "/products/Coral2.png",
    "/products/Coral3.png",
    "/products/Coral4.png",
    "/products/Coral5.jpg",
  ];

  const companies = [
    {
      logo: "/products/CoralWater.png",
      alt: "Coral Water",
      desc: "Clean water solutions that promote health and environmental care.",
    },
    {
      logo: "/products/CoralConstruction.png",
      alt: "Coral Construction",
      desc: "Proven expertise in structural integrity, precision workmanship.",
    },
    {
      logo: "/products/Techorin.png",
      alt: "Techorin",
      desc: "Empowering industries with tailored, future-ready digital tools.",
    },
    {
      logo: "/products/VetWorld.png",
      alt: "Vet World (Pvt) Ltd.",
      desc: "Transforming spaces into leisure destinations.",
    },
    {
      logo: "/products/HomeLook.png",
      alt: "Home Look",
      desc: (
        <>
          Creating interiors that reflect
          <br />
          <Nowrap>comfort, elegance, and individuality.</Nowrap>
        </>
      ),
    },
    {
      logo: "/products/Lnrco.png",
      alt: "LARCO",
      desc: (
        <>
          Reliable sourcing to ensure
          <br />
          <Nowrap>durability and style in every project.</Nowrap>
        </>
      ),
    },
  ];

  return (
    <>
      <HeroWrap>
        <IntroBlock>
          <HeroTitle>
            Building Dreams, Defining Skylines
          </HeroTitle>
          <HeroSub>
            Crafting distinctive living spaces that blend luxury,
            innovation, and timeless design for modern urban
            lifestyles
          </HeroSub>
        </IntroBlock>

        <MediaRow>
          <MediaFrame>
            {isLoading ? (
              <HeroImageSkeleton />
            ) : (
              <LeftImage
                src="/products/AdditionalContentAreaa.jpg"
                alt="Coral building"
                width={900}
                height={460}
                priority
              />
            )}
          </MediaFrame>
          <MapFrame>
            {isLoading ? (
              <MapSkeleton />
            ) : (
              <>
                <MapIframe
                  src="https://www.google.com/maps?q=71+Peterson+Ln,+Colombo+00600&output=embed"
                  loading="lazy"
                  title="71 Peterson Ln, Colombo 00600"
                />
                <MapOverlay />
              </>
            )}
          </MapFrame>
        </MediaRow>
      </HeroWrap>
      
      <AboutWrap>
        <AboutTitle>About Coral Properties</AboutTitle>
        <AboutSub>
          Established in 2003, Coral Properties has a 14 year history in{" "}
          the construction field, during which we have completed 8 
          niche property ventures. We at Coral Properties give
          our
          customers the finest living experience filled with opulence. By{" "}
          creating notonly homes but moments in our apartment{" "}
          complexes, the moments you hold close to your heart, the ones
          that matter. We strive to deliver the
          perfect combination of
          high standards in strategic locations, giving you the
          convenience and the lifestyle you’ve always dreamt of.
        </AboutSub>
        <AboutFinePrint>
          Simply put, we go that extra mile to give you the good life
        </AboutFinePrint>

        <VideoWrap>
          {isLoading ? (
            <VideoSkeleton />
          ) : (
            <VideoIframe
              src="https://www.youtube.com/embed/d_s526ntLYg"
              title="Coral Properties video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </VideoWrap>

        <AboutCta variant="contained">More About Coral Properties</AboutCta>
      </AboutWrap>

      <ProjectsWrap>
        <ProjectsHead>
          <div>
            <ProjectsTitle>
              Discover Our Signature Projects
            </ProjectsTitle>
            <ProjectsLead>
              Explore our exclusive developments across Sri Lanka,{" "}
              where exceptional design, prime locations, and 
              thoughtful amenities create spaces that inspire, 
              connect, and elevate everyday living.
            </ProjectsLead>
          </div>
          <ProjectsCta 
            variant="contained" 
            component={NextLinkBehavior} 
            href="/projects/OngoingProjects"
          >
            View All Projects
          </ProjectsCta>
        </ProjectsHead>

        <ProjectsBleed>
          <ProjectsRailViewport>
            <ProjectsRail>
              {imgs.map((src, i) => (
                <ProjectCard key={src}>
                  {isLoading ? (
                    <ProjectImageSkeleton />
                  ) : (
                    <ProjectImg
                      src={src}
                      alt={`Project ${i + 1}`}
                      width={380}
                      height={480}
                      priority={i === 0}
                    />
                  )}
                </ProjectCard>
              ))}
            </ProjectsRail>
          </ProjectsRailViewport>
        </ProjectsBleed>
      </ProjectsWrap>

      <FutureWrap>
        <FutureTitle>
          Shaping the Future of Living
        </FutureTitle>
        <FutureSub>
          Get a glimpse of our upcoming developments that redefine luxury and
          functionality, offering innovative spaces designed for tomorrow’s lifestyles in prime locations
        </FutureSub>

        <FutureCards>
          <FutureCard>
            <FutureImgWrap>
              {isLoading ? (
                <FutureImageSkeleton />
              ) : (
                <FutureImg
                  src="/products/CoralIndSquare.jpg"
                  alt="Coral Ind. Square"
                  width={300}
                  height={380}
                  priority
                />
              )}
            </FutureImgWrap>

            <FutureBody>
              <FutureName>Coral Ind. Square</FutureName>
              <FutureLoc>Colombo 07</FutureLoc>
              <FuturePara>
                An exclusive collection of luxury
                  residences set in Colombo’s prestigious
                Independence Square precinct.
              </FuturePara>
              <FutureParas>
                Walking distance to cultural landmarks,
                parks, and premium retail.
              </FutureParas>
              <FutureBtn 
                variant="contained" 
                component={NextLinkBehavior} 
                href="/projects/OngoingProjects/coral-ind"
              >
                View Details
              </FutureBtn>
            </FutureBody>
          </FutureCard>

          <FutureCard>
            <FutureImgWrap>
              {isLoading ? (
                <FutureImageSkeleton />
              ) : (
                <FutureImg
                  src="/products/DilscoopTowers.jpg"
                  alt="Dilscoop Towers"
                  width={300}
                  height={380}
                />
              )}
            </FutureImgWrap>

            <FutureBody>
              <FutureName>Dilscoop Towers</FutureName>
              <FutureLoc>Mt. Lavinia</FutureLoc>
              <FuturePara>
                A contemporary mixed-use development
                  combining stylish
                  residences with retail
                and leisure spaces.
              </FuturePara>
              <FutureParas>
               Prime location with panoramic coastal views
                and vibrant surroundings.
              </FutureParas>
              <FuturesBtn 
                variant="contained" 
                component={NextLinkBehavior} 
                href="/projects/OngoingProjects/dilscoop"
              >
                View Details
              </FuturesBtn>
            </FutureBody>
          </FutureCard>
        </FutureCards>
      </FutureWrap>

      <GroupWrap>
        <GroupFrame>
          <GroupLeft>
            <GroupTitle>The Coral Group</GroupTitle>
            <GroupSub>
              Discover the specialized companies within the Coral Group,
              each dedicated to excellence in their field while
              sharing a unified commitment to innovation and
              quality
            </GroupSub>
          </GroupLeft>

          <CompanyGrid>
            {companies.map((c) => (
              <CompanyCard key={c.logo}>
                <CompanyTop>
                  <CompanyLogoBox>
                    {isLoading ? (
                      <CompanyLogoSkeleton />
                    ) : (
                      <CompanyLogo
                        src={c.logo}
                        alt={c.alt}
                        width={167}
                        height={100}
                      />
                    )}
                  </CompanyLogoBox>
                  <Rating>
                    5.0 <Star />
                  </Rating>
                </CompanyTop>

                <CompanyDesc>{c.desc}</CompanyDesc>

                {/* <CompanyBtn
                  onClick={() => window.open(
                    [
                      "https://www.coralwater.lk/",
                      "https://coral.lk/v1/about",
                      "https://www.techorin.lk/",
                      "https://rainbowpages.lk/other/laboratory-equipment-supplies/vet-world-pvt-ltd/",
                      "https://homelux.lk/",
                      "https://www.larco.gr/"
                    ][companies.findIndex(co => co.logo === c.logo)],
                    "_blank"
                  )}
                >
                  Visit Site
                </CompanyBtn> */}
              </CompanyCard>
            ))}
          </CompanyGrid>
        </GroupFrame>
      </GroupWrap>
    </>
  );
}

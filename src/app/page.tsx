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
  HeroImageSkeleton,
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
        </IntroBlock>

        <HeroSub>
            Crafting distinctive living spaces where luxury, innovation, and timeless design come together for modern urban living.
        </HeroSub>

        <MediaRow>
          <MediaFrame>
            {isLoading ? (
              <HeroImageSkeleton />
            ) : (
              <LeftImage
                src="/products/AdditionalContentAreaa.jpg"
                alt="Coral building"
                width={1800}
                height={981}
                priority
              />
            )}
          </MediaFrame>
        </MediaRow>
      </HeroWrap>
      
      <AboutWrap>
        <AboutTitle>About Coral Properties</AboutTitle>
        <AboutSub>
          Established in 2003, Coral Property Developers is a trusted name in Sri Lanka’s real estate industry, 
          delivering high-quality residential apartments in prime locations. We don’t just build homes-we create 
          thoughtfully designed living spaces that combine modern architecture, premium finishes, and everyday comfort. 
          With a strong focus on quality and location, each Coral development offers lasting value and a refined 
          lifestyle for modern urban living.
        </AboutSub>
        <AboutFinePrint>
          Simply put, we go the extra mile to help you enjoy a better way of living.
        </AboutFinePrint>

        <VideoWrap>
          {isLoading ? (
            <VideoSkeleton />
          ) : (
            <VideoIframe
              src="https://www.youtube.com/embed/vgfSHLZJbHA"
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
              Discover Our Signature Developments
            </ProjectsTitle>
            <ProjectsLead>
              Explore premium residential developments across Sri Lanka, 
              thoughtfully designed with modern architecture, prime locations, 
              and lifestyle-focused amenities.
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

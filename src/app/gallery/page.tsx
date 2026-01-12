"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  GalleryWrap,
  GalleryTitle,
  GalleryHeroFrame,
  GalleryHeroImg,
  GalleryHeroOverlay,
  GallerySubText,
  GallerySection,
  GalleryHeading,
  MainImageFrame,
  MainImage,
  MainImageSkeleton,
  ThumbnailsContainer,
  ThumbnailsRow,
  ThumbFrame,
  ThumbSkeleton,
  ArrowButton,
  ArrowBack,
  ArrowForward,
  GalleryHeroSkeleton,
} from "../components/Gallery.styles";

export default function GalleryPage() {
  const imagesPlus = [
    "/Gallery/Gallery1.png",
    "/Gallery/Gallery2.png",
    "/Gallery/Gallery3.png",
    "/Gallery/Gallery4.png",
    "/Gallery/Gallery5.png",
    "/Gallery/Gallery6.png",
  ];

  const imagesCity = [
    "/Gal/Gal1.png",
    "/Gal/Gal2.png",
    "/Gal/Gal3.png",
    "/Gal/Gal4.png",
    "/Gal/Gal5.png",
    "/Gal/Gal6.png",
  ];

  const [currentIndexPlus, setCurrentIndexPlus] = useState(0);
  const [currentIndexCity, setCurrentIndexCity] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setCurrentIndexPlus((prev) => (prev + 1) % imagesPlus.length);
      setCurrentIndexCity((prev) => (prev + 1) % imagesCity.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading, imagesPlus.length, imagesCity.length]);

  const handlePrevPlus = () =>
    setCurrentIndexPlus((prev) => (prev - 1 + imagesPlus.length) % imagesPlus.length);
  const handleNextPlus = () =>
    setCurrentIndexPlus((prev) => (prev + 1) % imagesPlus.length);

  const handlePrevCity = () =>
    setCurrentIndexCity((prev) => (prev - 1 + imagesCity.length) % imagesCity.length);
  const handleNextCity = () =>
    setCurrentIndexCity((prev) => (prev + 1) % imagesCity.length);

  const visiblePlus = Array.from({ length: 5 }).map(
    (_, i) => imagesPlus[(currentIndexPlus + i) % imagesPlus.length]
  );
  const visibleCity = Array.from({ length: 5 }).map(
    (_, i) => imagesCity[(currentIndexCity + i) % imagesCity.length]
  );

  return (
    <GalleryWrap as="main">
      <GalleryTitle>Gallery</GalleryTitle>

      <GalleryHeroFrame>
        {isLoading ? (
          <GalleryHeroSkeleton />
        ) : (
          <>
            <GalleryHeroImg
              src="/Background/ViewImage.png"
              alt="Gallery hero"
              width={1200}
              height={350}
              priority
            />
            <GalleryHeroOverlay />
          </>
        )}
      </GalleryHeroFrame>

      <GallerySubText>
        Explore our curated collection of milestone moments live
        events, project unveilings, architectural highlights that define
        Coral’s story.
      </GallerySubText>

      {/* Launch of Coral Plus */}
      <GallerySection>
        <GalleryHeading>Launch of Coral Plus</GalleryHeading>

        <MainImageFrame>
          {isLoading ? (
            <MainImageSkeleton />
          ) : (
            <MainImage
              src={imagesPlus[currentIndexPlus]}
              alt="Coral Plus"
              width={1200}
              height={700}
              priority
            />
          )}
        </MainImageFrame>

        <ThumbnailsContainer>
          <ArrowButton className="left" onClick={handlePrevPlus}>
            <ArrowBack />
          </ArrowButton>

          <ThumbnailsRow>
            {isLoading
              ? Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <ThumbFrame key={i} as="div">
                      <ThumbSkeleton />
                    </ThumbFrame>
                  ))
              : visiblePlus.map((img, idx) => (
                  <ThumbFrame
                    key={idx}
                    onClick={() =>
                      setCurrentIndexPlus(
                        (currentIndexPlus + idx) % imagesPlus.length
                      )
                    }
                  >
                    <Image src={img} alt={`Plus ${idx + 1}`} width={220} height={160} />
                  </ThumbFrame>
                ))}
          </ThumbnailsRow>

          <ArrowButton className="right" onClick={handleNextPlus}>
            <ArrowForward />
          </ArrowButton>
        </ThumbnailsContainer>
      </GallerySection>

      {/* Launch of Coral City */}
      <GallerySection>
        <GalleryHeading>Launch of Coral City</GalleryHeading>

        <MainImageFrame>
          {isLoading ? (
            <MainImageSkeleton />
          ) : (
            <MainImage
              src={imagesCity[currentIndexCity]}
              alt="Coral City"
              width={1200}
              height={700}
              priority
            />
          )}
        </MainImageFrame>

        <ThumbnailsContainer>
          <ArrowButton className="left" onClick={handlePrevCity}>
            <ArrowBack />
          </ArrowButton>

          <ThumbnailsRow>
            {isLoading
              ? Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <ThumbFrame key={i} as="div">
                      <ThumbSkeleton />
                    </ThumbFrame>
                  ))
              : visibleCity.map((img, idx) => (
                  <ThumbFrame
                    key={idx}
                    onClick={() =>
                      setCurrentIndexCity(
                        (currentIndexCity + idx) % imagesCity.length
                      )
                    }
                  >
                    <Image src={img} alt={`City ${idx + 1}`} width={220} height={160} />
                  </ThumbFrame>
                ))}
          </ThumbnailsRow>

          <ArrowButton className="right" onClick={handleNextCity}>
            <ArrowForward />
          </ArrowButton>
        </ThumbnailsContainer>
      </GallerySection>
    </GalleryWrap>
  );
}
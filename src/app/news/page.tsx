"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  NewsWrap,
  NewsTitle,
  NewsHeroFrame,
  NewsHeroOverlay,
  NewsIntro,
  NewsGrid,
  NewsCard,
  NewsImage,
  NewsDateWrap,
  FigmaCalendarIcon,
  NewsDateText,
  NewsCardTitle,
  NewsCardDesc,
  ReadMoreBtn,
  LoadMoreBtn,
  NewsletterWrap,
  NewsletterTitle,
  NewsletterDesc,
  NewsletterForm,
  NewsletterInput,
  NewsletterBtn,
  NewsHeroSkeleton,
  NewsImageSkeleton,
} from "../components/News.styles";
import { useRouter } from "next/navigation";
import { getAllNews, NewsItem } from "@/lib/utils/newsUtils";

export default function NewsPage() {
  const router = useRouter();
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllNews()
      .then((data) => setNewsItems(data))
      .finally(() => setIsLoading(false));
  }, []);

  const displayItems = newsItems.length > 0 ? newsItems : Array(6).fill(null);

  return (
    <NewsWrap as="main">
      <NewsTitle>News</NewsTitle>

      <NewsHeroFrame>
        {isLoading ? (
          <NewsHeroSkeleton />
        ) : (
          <>
            <Image
              src="/Background/ViewImage.png"
              alt="News hero"
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "50% 25%",
                filter: "grayscale(100%)",
              }}
            />
            <NewsHeroOverlay />
          </>
        )}
      </NewsHeroFrame>

      <NewsIntro>
        Stay updated with the latest real estate developments,
        industry trends, and company announcements.
        Explore the most recent updates to stay informed and make better
        property investment decisions.
      </NewsIntro>


      <NewsGrid>
        {displayItems.map((item, index) => (
          <NewsCard key={item?.id ?? `news-placeholder-${index}`}>
            {isLoading && !item ? (
              <NewsImageSkeleton />
            ) : (
              <NewsImage
                src={item?.cardImage || "/placeholder.jpg"}
                alt={item?.title || "News image"}
                width={390}
                height={260}
              />
            )}

            <NewsDateWrap>
              <FigmaCalendarIcon aria-hidden />
              <NewsDateText>
                {item?.date || "May 31, 2025"}
              </NewsDateText>
            </NewsDateWrap>

            <NewsCardTitle>
              {item?.title ||
                "Coral Properties Launches New Luxury Apartment Project"}
            </NewsCardTitle>

            <NewsCardDesc>
              {item?.excerpt ||
                "A groundbreaking ceremony marks the beginning of our most ambitious residential development to date..."}
            </NewsCardDesc>

            <ReadMoreBtn
              onClick={() => item && router.push(`/news/${item.id}`)}
              style={{
                opacity: isLoading && !item ? 0.6 : 1,
                cursor: isLoading && !item ? "default" : "pointer",
              }}
              disabled={isLoading && !item}
            >
              Read More
            </ReadMoreBtn>
          </NewsCard>
        ))}
      </NewsGrid>

      <LoadMoreBtn>Load More</LoadMoreBtn>

      <NewsletterWrap>
        <NewsletterTitle>
          Stay Connected
          With Us
        </NewsletterTitle>
        <NewsletterDesc>
          Get instant updates on the latest property news, market
          trends, and company announcements delivered directly to
          your inbox.
        </NewsletterDesc>
        <NewsletterForm>
          <NewsletterInput placeholder="Enter Your Email" />
          <NewsletterBtn>Subscribe Now</NewsletterBtn>
        </NewsletterForm>
      </NewsletterWrap>
    </NewsWrap>
  );
}

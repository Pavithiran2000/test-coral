"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import {
  PartnersWrap,
  PartnersTitle,
  PartnersHeroFrame,
  PartnersHeroImg,
  TitleRow,
  MetaRow,
  DateWrap,
  AuthorWrap,
  FigmaCalendarIcon,
  JohnDeoIcon,
  VDivider,
  GradientRule,
  ContentGrid,
  LeftSection,
  Paragraph,
  HighlightsTitle,
  HighlightsList,
  HighlightItem,
  Bullet,
  HighlightText,
  PostNavRow,
  NavButton,
  CircleArrow,
  ArrowBack,
  ArrowForward,
  RightAside,
  RelatedTitle,
  RelatedItem,
  SmallDate,
  RelatedHead,
  RelatedSnippet,
  SkeletonHero,
  SkeletonTitle,
  SkeletonMeta,
  SkeletonHeading,
  SkeletonParagraph,
  SkeletonHighlightsTitle,
  SkeletonBullet,
  SkeletonNavButton,
  SkeletonRelatedItem,
} from "@/app/components/Partners.styles";

import {
  getNewsById,
  getNewsNavigation,
  getRelatedNews,
  NewsItem,
  NewsContentItem,
} from "@/lib/utils/newsUtils";

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

const ContentHeading = styled("h3")(({ theme }) => ({
  marginTop: 30,
  fontWeight: 600,
  fontSize: 24,
  [theme.breakpoints.down("md")]: { fontSize: 20, marginTop: 24 },
  [theme.breakpoints.down("sm")]: { fontSize: 18, marginTop: 20 },
}));

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const router = useRouter();
  const { id } = use(params);

  const [news, setNews] = useState<NewsItem | null>(null);
  const [prevNews, setPrevNews] = useState<NewsItem | null>(null);
  const [nextNews, setNextNews] = useState<NewsItem | null>(null);
  const [related, setRelated] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const main = await getNewsById(id);
        if (!main) return router.push("/news");
        setNews(main);

        const nav = await getNewsNavigation(id);
        setPrevNews(nav.prev);
        setNextNews(nav.next);
        const rel = await getRelatedNews(id, 4);
        setRelated(rel);
      } catch {
        router.push("/news");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [id, router]);

  const renderContent = (content: NewsContentItem[]) =>
    content.map((item, i) => {
      if (item.type === "paragraph") return <Paragraph key={i}>{item.text}</Paragraph>;
      if (item.type === "heading") return <ContentHeading key={i}>{item.text}</ContentHeading>;
      if (item.type === "bulletList")
        return (
          <HighlightsList key={i}>
            {item.items?.map((line, j) => (
              <HighlightItem key={j}>
                <Bullet />
                <HighlightText>{line}</HighlightText>
              </HighlightItem>
            ))}
          </HighlightsList>
        );
      return null;
    });

  if (isLoading) {
    return (
      <PartnersWrap as="main">
        <PartnersTitle>News</PartnersTitle>

        <SkeletonHero />
        <SkeletonTitle />
        <SkeletonMeta />
        <GradientRule />

        <ContentGrid>
          <LeftSection>
            <SkeletonHeading />
            <SkeletonParagraph /><SkeletonParagraph /><SkeletonParagraph /><SkeletonParagraph />
            <SkeletonHeading />
            <SkeletonParagraph /><SkeletonParagraph /><SkeletonParagraph />
            <SkeletonHighlightsTitle />
            <SkeletonBullet /><SkeletonBullet /><SkeletonBullet /><SkeletonBullet />
          </LeftSection>

          <PostNavRow>
            <SkeletonNavButton />
            <SkeletonNavButton />
          </PostNavRow>

          <RightAside>
            <RelatedTitle>Related News</RelatedTitle>
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonRelatedItem key={i}>
                <div />
                <div />
                <div />
                <div />
                <div />
              </SkeletonRelatedItem>
            ))}
          </RightAside>
        </ContentGrid>
      </PartnersWrap>
    );
  }

  if (!news) return null;

  return (
    <PartnersWrap as="main">
      <PartnersTitle>News</PartnersTitle>

      <PartnersHeroFrame>
        <PartnersHeroImg src={news.heroImage} alt={news.title} width={1200} height={450} priority />
      </PartnersHeroFrame>

      {news.id === "coral-partners-interior-design-firm" ? (
        <TitleRow>
          Coral Partners with Leading Interior Design
          Firm to Elevate Luxury Living
        </TitleRow>
      ) : (
        <TitleRow>{news.title}</TitleRow>
      )}

      <MetaRow>
        <DateWrap><FigmaCalendarIcon aria-hidden /><span>{news.date}</span></DateWrap>
        <VDivider />
        <AuthorWrap>
          <JohnDeoIcon src={news.authorImage} alt="Author" width={16} height={16} />
          <span>{news.author}</span>
        </AuthorWrap>
      </MetaRow>

      <GradientRule />

      <ContentGrid>
        <LeftSection>
          {renderContent(news.content)}
          {news.highlights?.length ? (
            <>
              {news.highlightsTitle && <HighlightsTitle>{news.highlightsTitle}</HighlightsTitle>}
              <HighlightsList>
                {news.highlights.map((t, i) => (
                  <HighlightItem key={i}><Bullet /><HighlightText>{t}</HighlightText></HighlightItem>
                ))}
              </HighlightsList>
            </>
          ) : null}
        </LeftSection>

        <PostNavRow>
          {prevNews && (
            <NavButton onClick={() => router.push(`/news/${prevNews.id}`)}>
              <CircleArrow><ArrowBack /></CircleArrow> Prev Post
            </NavButton>
          )}
          {nextNews && (
            <NavButton onClick={() => router.push(`/news/${nextNews.id}`)}>
              Next Post <CircleArrow><ArrowForward /></CircleArrow>
            </NavButton>
          )}
        </PostNavRow>

        <RightAside>
          <RelatedTitle>Related News</RelatedTitle>
          {related.map(item => (
            <RelatedItem key={item.id}>
              <SmallDate><FigmaCalendarIcon aria-hidden /><span>{item.date}</span></SmallDate>
              <RelatedHead href="#" onClick={e => { e.preventDefault(); router.push(`/news/${item.id}`); }}>
                {item.title}
              </RelatedHead>
              <RelatedSnippet>{item.excerpt}</RelatedSnippet>
            </RelatedItem>
          ))}
        </RightAside>
      </ContentGrid>
    </PartnersWrap>
  );
}

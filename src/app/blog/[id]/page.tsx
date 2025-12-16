"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import {
  BlogTwoWrap,
  BlogTwoTitle,
  BlogTwoHero,
  BlogTwoHeroImg,
  BlogInfoWrap,
  BlogHeaderRow,
  DateBox,
  DateBoxText,
  DateBoxNumber,
  BlogTitle,
  MetaRow,
  Paragraph,
  BulletList,
  BulletItem,
  BulletDot,
  IconCalendar,
  NavRow,
  NavButton,
  NavText,
  NavIconLeft,
  NavIconRight,
  RecentWrap,
  RecentTitle,
  RecentGrid,
  RecentCard,
  SmallDateBox,
  SmallDateMonth,
  SmallDateDay,
  RecentContent,
  RecentTitleText,
  RecentExcerpt,
  IconAuthor,
  SkeletonHero,
  SkeletonTitle,
  SkeletonMeta,
  SkeletonHeading,
  SkeletonParagraph,
  SkeletonHighlightsTitle,
  SkeletonBullet,
  SkeletonNavButton,
  SkeletonRelatedItem,
} from "@/app/components/BlogTwo.styles";

import {
  getBlogById,
  getBlogNavigation,
  getRelatedBlogs,
  BlogMetadata,
  BlogContent,
} from "@/lib/utils/blogUtils";

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const router = useRouter();
  const { id } = use(params);
  const [blog, setBlog] = useState<BlogMetadata | null>(null);
  const [prevBlog, setPrevBlog] = useState<BlogMetadata | null>(null);
  const [nextBlog, setNextBlog] = useState<BlogMetadata | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const b = await getBlogById(id);
        if (!b) return router.push("/blog");
        setBlog(b);

        const nav = await getBlogNavigation(id);
        setPrevBlog(nav.prev);
        setNextBlog(nav.next);

        const rel = await getRelatedBlogs(id, 6);
        setRelatedBlogs(rel);
      } catch {
        router.push("/blog");
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [id, router]);

  const renderContent = (content: BlogContent[]) => {
    return content.map((item, i) => {
      if (item.type === "paragraph") return <Paragraph key={i}>{item.text}</Paragraph>;
      if (item.type === "heading")
        return (
          <Paragraph key={i} as="h3" style={{ fontWeight: 600, fontSize: "24px", marginTop: "30px" }}>
            {item.text}
          </Paragraph>
        );
      if (item.type === "bulletList")
        return (
          <BulletList key={i}>
            {item.items?.map((t, j) => (
              <BulletItem key={j}>
                <BulletDot />
                {t}
              </BulletItem>
            ))}
          </BulletList>
        );
      return null;
    });
  };

  if (isLoading) {
    return (
      <BlogTwoWrap as="main">
        <BlogTwoTitle>Blogs</BlogTwoTitle>

        <SkeletonHero />

        <SkeletonTitle />
        <SkeletonMeta />

        <BlogInfoWrap style={{ marginTop: 30 }}>
          <SkeletonHeading />
          <SkeletonParagraph />
          <SkeletonParagraph />
          <SkeletonParagraph />
          <SkeletonParagraph />
          <SkeletonHeading />
          <SkeletonParagraph />
          <SkeletonParagraph />
          <SkeletonParagraph />

          <SkeletonHighlightsTitle />
          <SkeletonBullet />
          <SkeletonBullet />
          <SkeletonBullet />
          <SkeletonBullet />

          <NavRow>
            <SkeletonNavButton />
            <SkeletonNavButton />
          </NavRow>
        </BlogInfoWrap>

        <RecentWrap>
          <RecentTitle>Related Blogs</RecentTitle>
          <RecentGrid>
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonRelatedItem key={i}>
                <div />
                <div />
                <div />
                <div />
                <div />
              </SkeletonRelatedItem>
            ))}
          </RecentGrid>
        </RecentWrap>
      </BlogTwoWrap>
    );
  }

  if (!blog) return null;

  return (
    <BlogTwoWrap as="main">
      <BlogTwoTitle>Blogs</BlogTwoTitle>

      <BlogTwoHero>
        <BlogTwoHeroImg src={blog.image} alt={blog.title} width={1200} height={450} priority quality={100} />
      </BlogTwoHero>

      <BlogInfoWrap>
        <BlogHeaderRow>
          <DateBox>
            <DateBoxText>{blog.date.month}</DateBoxText>
            <DateBoxNumber>{blog.date.day}</DateBoxNumber>
          </DateBox>

          <div>
            <BlogTitle>{blog.title}</BlogTitle>

            <MetaRow>
              <IconCalendar />
              <span>{blog.date.day} {blog.date.month} {blog.date.year}</span>
              <div className="divider" />
              <IconAuthor src={blog.authorImage} alt="Author" width={22} height={22} />
              <span>{blog.author}</span>
            </MetaRow>
          </div>
        </BlogHeaderRow>

        {renderContent(blog.content)}

        <NavRow>
          {prevBlog && (
            <NavButton onClick={() => router.push(`/blog/${prevBlog.id}`)}>
              <NavIconLeft />
              <NavText>Prev Post</NavText>
            </NavButton>
          )}
          {nextBlog && (
            <NavButton onClick={() => router.push(`/blog/${nextBlog.id}`)}>
              <NavText>Next Post</NavText>
              <NavIconRight />
            </NavButton>
          )}
        </NavRow>
      </BlogInfoWrap>

      {relatedBlogs.length > 0 && (
        <RecentWrap>
          <RecentTitle>Related Blogs</RecentTitle>
          <RecentGrid>
            {relatedBlogs.map((b) => (
              <RecentCard key={b.id} onClick={() => router.push(`/blog/${b.id}`)} style={{ cursor: "pointer" }}>
                <SmallDateBox>
                  <SmallDateMonth>{b.date.month}</SmallDateMonth>
                  <SmallDateDay>{b.date.day}</SmallDateDay>
                </SmallDateBox>
                <RecentContent>
                  <RecentTitleText>{b.title}</RecentTitleText>
                  <RecentExcerpt>{b.excerpt}</RecentExcerpt>
                </RecentContent>
              </RecentCard>
            ))}
          </RecentGrid>
        </RecentWrap>
      )}
    </BlogTwoWrap>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BlogsWrap,
  BlogsTitle,
  BlogsIntro,
  BlogSection,
  BlogGrid,
  BlogLeft,
  BlogRight,
  BlogImg,
  BlogDateBox,
  BlogDateMonth,
  BlogDateDay,
  BlogHead,
  BlogPara,
  BlogButton,
  LoadingButton,   
  BlogHeroFrame,
  BlogHeroOverlay,
  BlogHeroSkeleton,
  BlogImageSkeleton,
} from "../components/blog.styles";
import { useRouter } from "next/navigation";
import { BlogMetadata, getAllBlogs } from "@/lib/utils/blogUtils";

export default function BlogPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllBlogs()
      .then((data) => setBlogs(data))
      .finally(() => setIsLoading(false));
  }, []);

  const handleReadMore = (blogId: string) => {
    router.push(`/blog/${blogId}`);
  };

  const displayBlogs = blogs.length > 0 ? blogs : Array(3).fill(null);

  return (
    <BlogsWrap as="main">
      <BlogsTitle>Blogs</BlogsTitle>

      <BlogHeroFrame>
        {isLoading ? (
          <BlogHeroSkeleton />
        ) : (
          <>
            <Image
              src="/Background/ViewImage.png"
              alt="Blogs hero"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "50% 25%", filter: "grayscale(100%)" }}
            />
            <BlogHeroOverlay />
          </>
        )}
      </BlogHeroFrame>

      <BlogsIntro>
        Stay informed with the latest real estate news, expert{" "}
        investment tips, project updates, and market trends.{" "}
        Explore our blogs to gain valuable insights and make smarter{" "}
        property decisions.
      </BlogsIntro>

      <BlogSection>
        {displayBlogs.map((blog, index) => (
          <BlogGrid key={blog?.id ?? `placeholder-${index}`}>
            <BlogLeft>
              {isLoading && !blog ? (
                <BlogImageSkeleton />
              ) : (
                <BlogImg
                  src={blog?.image || "/placeholder.jpg"}
                  alt={blog?.title || "Blog image"}
                  width={320}
                  height={280}
                />
              )}

              <BlogDateBox>
                <BlogDateMonth>{blog?.date.month || "May"}</BlogDateMonth>
                <BlogDateDay>{blog?.date.day || "31"}</BlogDateDay>
              </BlogDateBox>
            </BlogLeft>

            <BlogRight>
              <BlogHead>
                {blog?.title || "How to be a good neighbor when you are living in an Apartment"}
              </BlogHead>
              <BlogPara>
                {blog?.excerpt ||
                  "Living with a neighbour who blasts music intentionally and gives you snide comments and dirty looks is a nightmare..."}
              </BlogPara>

              {isLoading && !blog ? (
                <LoadingButton>Loading...</LoadingButton>
              ) : (
                <BlogButton onClick={() => blog && handleReadMore(blog.id)}>
                  Read More
                </BlogButton>
              )}
            </BlogRight>
          </BlogGrid>
        ))}

        {!isLoading && blogs.length === 0 && (
          <p style={{ textAlign: "center", padding: "80px 20px", color: "#595959", fontSize: 20 }}>
            No blogs found at the moment.
          </p>
        )}
      </BlogSection>
    </BlogsWrap>
  );
}

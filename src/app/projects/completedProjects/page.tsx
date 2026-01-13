"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CompletedWrap,
  CompletedTitle,
  CompletedDesc,
  CompletedGrid,
  CompletedCard,
  ImgWrap,
  CardImg,
  Meta,
  Name,
  Addr,
  Badge,
  ArrowIcon,
  CompleteHeroFrame,
  CompleteHeroImg,
  CompleteHeroOverlay,
  SkeletonBox,
  SkeletonImage,
} from "../../components/Completed.styles";
import {
  AdvantageWrap,
  AdvantageTitle,
  AdvantageLead,
  FeatureCard,
  FeatureDesc,
  FeatureTitle,
  FeaturesRow,
} from "../../components/Project.styles";
import {
  CompletedProject,
  getAllCompletedProjects,
} from "@/lib/utils/completedProjectsUtils";

export default function CompletedProjectsPage() {
  const [projects, setProjects] = useState<CompletedProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const all = await getAllCompletedProjects();
        setProjects(all);
      } catch (error) {
        console.error("Error fetching completed projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <CompletedWrap as="main">
      <CompletedTitle>Completed Projects</CompletedTitle>

      <CompleteHeroFrame>
        {isLoading ? <SkeletonImage /> : (
          <>
            <CompleteHeroImg
              src="/Background/ViewImage.png"
              alt="Completed Projects hero"
              width={1280}
              height={350}
              priority
            />
            <CompleteHeroOverlay />
          </>
        )}
      </CompleteHeroFrame>

      <CompletedDesc>
        Founded in 2003, Coral Properties has successfully delivered 8{" "}
        niche developments, each crafted to offer refined living{" "}
        experiences filled with comfort
        and elegance. Here, you’ll find
        our portfolio of completed projects, each home designed to{" "}
        create lasting memories.
      </CompletedDesc>

      <CompletedGrid>
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, idx) => (
                <CompletedCard key={idx}>
                  <SkeletonBox />
                </CompletedCard>
              ))
          : projects.length === 0
          ? Array(1)
              .fill(0)
              .map((_, idx) => (
                <p key={idx}>No completed projects found.</p>
              ))
          : projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/completedProjects/${p.id}`}
                style={{ textDecoration: "none" }}
              >
                <CompletedCard>
                  <ImgWrap>
                    <CardImg src={p.image} alt={p.name} width={600} height={420} />
                  </ImgWrap>

                  <Meta>
                    <Name>{p.name}</Name>
                    <Addr>{p.address}</Addr>
                  </Meta>

                  <Badge aria-hidden>
                    <ArrowIcon viewBox="0 0 24 24">
                      <path
                        d="M8 16L16 8M9 8h7v7"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </ArrowIcon>
                  </Badge>
                </CompletedCard>
              </Link>
            ))}
      </CompletedGrid>

      <AdvantageWrap>
        <AdvantageTitle>The Coral Advantage</AdvantageTitle>
        <AdvantageLead>
          Every project is more than just a building—it’s a carefully designed
          investment opportunity. With decades of trust,
          unmatched expertise, and a vision for tomorrow, we
          ensure that your investment grows in both value and lifestyle impact.
        </AdvantageLead>

        <FeaturesRow>
          <FeatureCard>
            <FeatureTitle>Prime Locations</FeatureTitle>
            <FeatureDesc>
              Strategically placed in high-demand
              areas, offering excellent accessibility
              and long-term appreciation.
            </FeatureDesc>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Sustainable Value</FeatureTitle>
            <FeatureDesc>
              Built with modern construction
              standards and energy-efficient designs
              to ensure lasting worth.
            </FeatureDesc>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Trusted Expertise</FeatureTitle>
            <FeatureDesc>
              Backed by Coral’s proven track record
              in delivering projects on time with
              uncompromised quality.
            </FeatureDesc>
          </FeatureCard>

          <FeatureCard>
            <FeatureTitle>Lifestyle &amp; Community</FeatureTitle>
            <FeatureDesc>
              Developments that balance luxury
              living with community spaces, making
              them ideal for families &amp; professionals.
            </FeatureDesc>
          </FeatureCard>
        </FeaturesRow>
      </AdvantageWrap>
    </CompletedWrap>
  );
}

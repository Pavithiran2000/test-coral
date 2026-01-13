"use client";

import { useState, useEffect } from "react";
import {
  CareersWrap,
  CareersTitle,
  JoinWrap,
  JoinTitle,
  JoinLead,
  PerkRow,
  PerkCard,
  PerkIconBox,
  PerkTitle,
  PerkDesc,
  OpeningsWrap,
  OpeningsTitle,
  OpeningsLead,
  JobCard,
  JobLeft,
  JobTitle,
  JobDesc,
  TagRow,
  TagIcon,
  TagGlyphWrap,
  UploadBox,
  UploadIconWrap,
  UploadTextTop,
  UploadTextSub,
  ApplyBtn,
  PerkIconImg,
  TagIconImg,
  UploadGlyphIcon,
  CareerHeroOverlay,
  CareerHeroFrame,
  CareerHeroImg,
  CareerHeroSkeleton,
  TagText,
} from "@/app/components/Careers.styles";

function IconStar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2l2.37 6.63 7.03.56-5.28 4.57 1.64 6.99L12 17.77 6.24 20.75l1.64-6.99L2.6 9.19l7.03-.56L12 2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function CareersPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CareersWrap as="main">
      <CareersTitle>Careers</CareersTitle>

      <CareerHeroFrame>
        {isLoading ? (
          <CareerHeroSkeleton />
        ) : (
          <>
            <CareerHeroImg
              src="/Background/ViewImage.png"
              alt="Careers hero"
              width={1280}
              height={350}
              priority
            />
            <CareerHeroOverlay />
          </>
        )}
      </CareerHeroFrame>

      {/* Join section */}
      <JoinWrap>
        <JoinTitle>Join With Us!</JoinTitle>
        <JoinLead>
          Coral Property Developers (Pvt) Ltd is constantly on the lookout for
          qualified and dynamic individuals to grow with us. We welcome
          enquiries from anyone who possesses relevant experience, and desires
          to be an asset to Coral Property Developers (Pvt) Ltd.
        </JoinLead>

        <PerkRow>
          <PerkCard>
            <PerkIconBox>
              <IconStar />
            </PerkIconBox>
            <PerkTitle>Innovative Culture</PerkTitle>
            <PerkDesc>
              Work on cutting-edge projects that shape tomorrow
            </PerkDesc>
          </PerkCard>

          <PerkCard>
            <PerkIconBox $plain>
              <PerkIconImg
                src="/Careers/Champ.svg"
                alt="Career Growth"
                width={42}
                height={42}
              />
            </PerkIconBox>
            <PerkTitle>Career Growth</PerkTitle>
            <PerkDesc>We invest in your development and learning</PerkDesc>
          </PerkCard>

          <PerkCard>
            <PerkIconBox $plain>
              <PerkIconImg
                src="/Careers/work.svg"
                alt="Impactful Work"
                width={42}
                height={42}
              />
            </PerkIconBox>
            <PerkTitle>Impactful Work</PerkTitle>
            <PerkDesc>
              Create lasting contributions to Sri Lanka’s infrastructure.
            </PerkDesc>
          </PerkCard>

          <PerkCard>
            <PerkIconBox $plain>
              <PerkIconImg
                src="/Careers/Team.svg"
                alt="Collaborative Team"
                width={42}
                height={42}
              />
            </PerkIconBox>
            <PerkTitle>Collaborative Team</PerkTitle>
            <PerkDesc>
              Work alongside talented and supportive professionals.
            </PerkDesc>
          </PerkCard>
        </PerkRow>
      </JoinWrap>

      {/* Openings */}
      <OpeningsWrap>
        <OpeningsTitle>Current Openings</OpeningsTitle>
        <OpeningsLead>
          Explore our latest career opportunities and take the next step in your
          journey with Coral Holdings
        </OpeningsLead>

        {/* Job 1 */}
        <JobCard>
          <JobLeft>
            <JobTitle>Project Manager</JobTitle>
            <JobDesc>
              We are looking for an experienced Project Manager to lead and
              execute
              residential and commercial developments with precision and{" "}
              excellence
            </JobDesc>

            <TagRow>
              <TagIcon>
                <TagGlyphWrap>
                  <TagIconImg
                    src="/Careers/location.svg"
                    alt="Location"
                    width={24}
                    height={24}
                  />
                </TagGlyphWrap>
              </TagIcon>

              <TagText>Colombo, Sri Lanka</TagText>

              <TagIcon>
                <TagGlyphWrap>
                  <TagIconImg
                    src="/Careers/ProjectBased.svg"
                    alt="Project based"
                    width={24}
                    height={24}
                  />
                </TagGlyphWrap>
              </TagIcon>
              <TagText>Project-based</TagText>
            </TagRow>
          </JobLeft>

          <UploadBox>
            <UploadIconWrap>
              <UploadGlyphIcon />
            </UploadIconWrap>
            <div>
              <UploadTextTop>Upload Resume</UploadTextTop>
              <UploadTextSub>PDF or DOCX</UploadTextSub>
            </div>
            <ApplyBtn>Apply Now</ApplyBtn>
          </UploadBox>
        </JobCard>

        {/* Job 2 */}
        <JobCard>
          <JobLeft>
            <JobTitle>Marketing Executive</JobTitle>
            <JobDesc>
              We are looking for an experienced Project Manager to lead and{" "}
              execute residential and commercial developments with precision and{" "}
              excellence
            </JobDesc>

            <TagRow>
              <TagIcon>
                <TagGlyphWrap>
                  <TagIconImg
                    src="/Careers/location.svg"
                    alt="Location"
                    width={24}
                    height={24}
                  />
                </TagGlyphWrap>
              </TagIcon>

              <TagText>Colombo, Sri Lanka</TagText>

              <TagIcon>
                <TagGlyphWrap>
                  <TagIconImg
                    src="/Careers/ProjectBased.svg"
                    alt="Work type"
                    width={24}
                    height={24}
                  />
                </TagGlyphWrap>
              </TagIcon>

              <TagText>Full-Time</TagText>
            </TagRow>
          </JobLeft>

          <UploadBox>
            <UploadIconWrap>
              <UploadGlyphIcon />
            </UploadIconWrap>
            <div>
              <UploadTextTop>Upload Resume</UploadTextTop>
              <UploadTextSub>PDF or DOCX</UploadTextSub>
            </div>
            <ApplyBtn>Apply Now</ApplyBtn>
          </UploadBox>
        </JobCard>
      </OpeningsWrap>
    </CareersWrap>
  );
}

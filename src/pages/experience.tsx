import { List, ListItem } from "@chakra-ui/core";
import React from "react";
import { BackButton } from "../components/BackButton";
import { ContentWrapper } from "../components/ContentWrapper";
import { ExperienceItem } from "../components/ExperienceItem";
import { Layout, SiteSection } from "../components/Layout";
import { PageHeading } from "../components/PageHeading";
import { Spacer } from "../components/Spacer";
import { SubHeading } from "../components/SubHeading";
import metadata, { IExperience } from "../metadata";

const UsesPage = () => {
  const currentExperience = metadata.experience.filter(e => e.current);
  const pastExperience = metadata.experience.filter(e => !e.current);
  const getExperienceItemKey = (exp: IExperience) =>
    `${exp.role}_${exp.company}`;

  return (
    <ContentWrapper>
      <SiteSection>
        <PageHeading title="Experience" />
      </SiteSection>

      <SiteSection justifyContent="center">
        <SubHeading title="Current:" />

        <List styleType="none">
          {currentExperience.map(exp => (
            <ListItem mb={2} key={getExperienceItemKey(exp)}>
              <ExperienceItem {...exp} />
            </ListItem>
          ))}
        </List>

        <Spacer size={2} />
        <SubHeading title="Previous:" />
        <List styleType="none">
          {pastExperience.map(exp => (
            <ListItem mb={2} key={getExperienceItemKey(exp)}>
              <ExperienceItem {...exp} />
            </ListItem>
          ))}
        </List>

        <Spacer size={2} />
        <BackButton />
      </SiteSection>
    </ContentWrapper>
  );
};

export default UsesPage;

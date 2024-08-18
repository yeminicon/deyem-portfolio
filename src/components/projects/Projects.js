import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, editor,
  chatting,
  social, } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Organization Website"
          des="A website designed for an organization, featuring a user-friendly interface and robust functionality to showcase the organization's services and information."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="An online store with integrated payment platforms and email marketing features, designed to enhance the shopping experience and streamline business operations."
          src={projectTwo}
        />
        <ProjectsCard
          title="Web Editor"
          des="A web-based editor that allows users to create and edit content with ease, providing a range of tools and features for efficient content management."
          src={editor}
        />
        <ProjectsCard
          title="Social Media Clone"
          des="A project replicating popular social media platforms, featuring user profiles, posts, and interactive elements to mimic social media functionality."
          src={social}
        />
        <ProjectsCard
          title="Fintech Application"
          des="A financial technology application designed to simplify banking and financial management, featuring advanced tools for budgeting, transactions, and analytics."
          src={chatting}
        />
        <ProjectsCard
          title="Portfolio Website"
          des="A personal portfolio website showcasing various projects, skills, and achievements, with a focus on presenting professional work and attracting potential clients or employers."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects;

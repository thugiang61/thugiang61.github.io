<template>
  <div
    id="past-projects"
    class="section-border-bottom"
    v-motion-slide-visible-top
  >
    <h1>Some of my past projects</h1>
    <h3>Homemade</h3>
    <div class="projects">
      <ProjectCard
        v-for="(homemadeProject, index) in homemadeProjects"
        :key="index"
        :project-name="homemadeProject.name"
        :project-id="homemadeProject.id"
      />
    </div>
    <h3>From work</h3>
    <div class="projects">
      <ProjectCard
        v-for="(workProject, index) in workProjects"
        :key="index"
        :project-name="workProject.name"
        :project-id="workProject.id"
      />
    </div>

    <p>During my internship and working period,</p>
    <p>
      I have been contributing to different projects, be it an out-source or a
      logistics software company!
    </p>
  </div>
</template>

<script setup>
import ProjectCard from "@/components/HomePage/ProjectSection/ProjectCard";

import { homemadeProjects } from "@/data/projects-details";
import { workProjects } from "@/data/projects-details";
</script>

<style scoped>
#past-projects {
  text-align: center;
}

p {
  font-size: 20px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  justify-content: space-evenly;
}
</style>

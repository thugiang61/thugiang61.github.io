<template>
  <div class="project-details" :style="projectThemeColor">
    <Transition name="fade">
      <a
        v-if="!isMobile && showElement"
        class="left-arrow"
        @click="arrowClicked(previousProjectLink)"
      >
        &larr;
      </a>
    </Transition>

    <TheHeader show-title />

    <div class="grid-layout">
      <div class="left-column">
        <ProjectInfo :project="currentProject" :show-element="showElement" />

        <div v-if="isMobile">
          <Transition name="fade">
            <a
              v-if="showElement"
              class="left-arrow"
              @click="arrowClicked(previousProjectLink)"
            >
              &larr;
            </a>
          </Transition>

          <Transition name="fade">
            <a
              v-if="showElement"
              class="right-arrow"
              @click="arrowClicked(nextProjectLink)"
            >
              &rarr;
            </a>
          </Transition>
        </div>
      </div>
      <div class="right-column center">
        <ProjectGif
          :project-name="currentProject.name"
          :project-id="currentProject.id"
          :project-color="currentProject.color"
          :show-gif="currentProject.showGif"
          :show-element="showElement"
        />
      </div>
    </div>

    <Transition name="fade"
      ><a
        v-if="!isMobile && showElement"
        class="right-arrow"
        @click="arrowClicked(nextProjectLink)"
      >
        &rarr;
      </a>
    </Transition>
  </div>
</template>

<script setup>
import TheHeader from "@/components/common/TheHeader";
import ProjectInfo from "@/components/ProjectDetails/ProjectInfo";
import ProjectGif from "@/components/ProjectDetails/ProjectGif";

import { computed, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { allProjects } from "@/data/projects-details";
import useDetectMobile from "@/composables/DetectMobile";

const route = useRoute();
const router = useRouter();
const showElement = ref(false);
const { isMobile } = useDetectMobile();

const currentProjectIndex = computed(() =>
  allProjects.findIndex((e) => e.id == route.params.projectId),
);
const currentProject = computed(() => allProjects[currentProjectIndex.value]);
const projectThemeColor = computed(() => {
  return `--project-theme-color: ${currentProject.value.color}`;
});

const previousProjectIndex = computed(() =>
  currentProjectIndex.value == 0
    ? allProjects.length - 1
    : currentProjectIndex.value - 1,
);
const previousProjectLink = computed(
  () => `/projects/${allProjects[previousProjectIndex.value].id}`,
);

const nextProjectIndex = computed(() =>
  currentProjectIndex.value == allProjects.length - 1
    ? 0
    : currentProjectIndex.value + 1,
);
const nextProjectLink = computed(
  () => `/projects/${allProjects[nextProjectIndex.value].id}`,
);

function arrowClicked(link) {
  showElement.value = false;

  const projectBody = document.getElementById("project-body");
  if (projectBody.scrollTop !== 0) projectBody.scrollTop = 0;

  setTimeout(() => router.push(link), 500);

  // wait to get next/ previous project
  setTimeout(() => (showElement.value = true), 1500);
}

onMounted(() => {
  setTimeout(() => (showElement.value = true), 500);
});
</script>

<style scoped lang="scss">
.project-details,
.grid-layout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.project-details {
  border: 4px solid var(--border-color);
  margin: 10px 30px;
  box-shadow: -3px 1px 3px -1px rgb(0 0 0 /75%);
  position: relative;

  .left-arrow,
  .right-arrow {
    color: #fff;
    background-color: var(--project-theme-color);
    padding: 5px 14px 10px 14px;
    font-size: 26px;
    border-radius: 20%;
    box-shadow: 6px 6px 3px -1px rgb(0 0 0 / 75%);
    cursor: pointer;

    position: absolute;
    transition-duration: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .left-arrow {
    top: 50%;
    left: -2%;
  }

  .right-arrow {
    bottom: 41.8%;
    right: -2%;
  }
}

.grid-layout {
  background-color: var(--secondary-background-color);
}

@media (max-width: 750px) {
  .project-details {
    .left-column {
      margin-bottom: 20px;
    }

    .left-arrow,
    .right-arrow {
      width: 50px;
      height: 50px;
      position: relative;
    }

    .left-arrow {
      top: 0;
      left: 55%;

      padding-right: 8px;
    }

    .right-arrow {
      top: 0;
      left: 60%;

      padding-right: 12px;
    }
  }
}
</style>

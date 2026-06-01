<template>
  <div
    id="about-me"
    class="grid-layout section-border-bottom secondary-background"
    v-motion-fade-visible
  >
    <div class="left-column" style="padding: 20px">
      <div class="border-bottom">
        <h2>More about me</h2>
        <p>
          I build <b>software applications</b> and love learning
          <b>foreign languages</b>, reading books and listening to music
        </p>
        <p>
          Most of my skills are self-taught and from work experiences, but I
          like and also <b>learn most from</b> interacting and studying with
          other people
        </p>
      </div>

      <div :class="{ 'border-bottom': isMobile }">
        <div>
          <h2>My skills/ knowledge</h2>
          <p>
            What I have learnt at school and from my job as well as some
            subjects I'm studying hard right now:
            <a href="./NguyenThanhThuGiang_CV.pdf" target="_blank"
              >My CV/ résumé</a
            >
          </p>
          <div class="skills-list">
            <ul>
              <li>C#, .NET</li>
              <li>HTML, CSS, JS</li>
              <li>VueJs</li>
              <li>ThreeJS</li>
            </ul>
            <ul>
              <li>C++</li>
              <li>English</li>
              <li>French</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="right-column center">
      <img
        class="media-profile"
        src="@/assets/imgs/github-profile.png"
        alt="github-profile"
      />

      <h1>Find me on social platform</h1>
      <p>
        Linkedin:
        <a
          target="_blank"
          href="https://www.linkedin.com/in/giang-nguyen-aba339267/"
        >
          @GiangNguyen
        </a>
      </p>
      <p>
        Github:
        <a target="_blank" href="https://github.com/thugiang61">@thugiang61</a>
      </p>

      <h1>Or contact me via</h1>
      <p>
        Gmail: <a @click="copyToClipboard(email)">{{ email }}</a>
      </p>
      <p style="text-align: center">
        Tel:
        <a @click="copyToClipboard(phone)">{{ phone }}</a>
      </p>
      <!-- <p>
        (Also&nbsp;my&nbsp;<a href="https://zalo.me/pc" target="_blank">Zalo</a
        >&nbsp;and&nbsp;<a href="https://whatsapp.com" target="_blank"
          >Whatsapp</a
        >&nbsp;number)
      </p> -->
    </div>
  </div>

  <TheToaster :show-toaster="showNotification">
    &check;&emsp;Copied to clipboard!
  </TheToaster>
</template>

<script setup>
import { ref } from "vue";
import TheToaster from "@/components/common/TheToaster";
import useDetectMobile from "@/composables/DetectMobile";

const showNotification = ref(false);
const { isMobile } = useDetectMobile();

const email = "thugiang6.1@gmail.com";
const phone = "(+84) 905 093 938";

function copyToClipboard(value) {
  navigator.clipboard.writeText(value);
  showNotification.value = true;
  setTimeout(() => (showNotification.value = false), 3000);
}
</script>

<style scoped lang="scss">
p {
  font-size: 18px;
}

.left-column {
  display: grid;
  align-content: center;

  h2,
  p {
    margin: 30px 0;
  }

  .border-bottom {
    border-bottom: 2px solid var(--border-color);
  }

  .skills-list {
    width: 50%;
    margin: 30px auto;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--skills-list-background-color);

    display: flex;
    justify-content: space-evenly;
  }
}

.right-column {
  margin-bottom: 20px;

  h1 {
    margin: 20px 0;
    text-align: center;
  }

  p {
    margin: 5px;
  }

  a {
    cursor: pointer;
  }

  .media-profile {
    width: 80%;
    margin: 10px auto;
    border-radius: 10px;
    border: 2px solid var(--border-color);
  }
}
</style>

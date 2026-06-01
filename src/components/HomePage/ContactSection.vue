<template>
  <div id="contact-me" class="secondary-background" v-motion-fade-visible>
    <h1 style="text-align: center">Get in touch</h1>
    <div id="contact-form">
      <label>Name</label>
      <input
        v-model="name"
        type="text"
        name="name"
        class="input-field"
        placeholder="John Doe"
      />

      <label>Subject</label>
      <input
        v-model="subject"
        type="text"
        name="subject"
        class="input-field"
        placeholder="Work offer from USA"
      />

      <label>Email</label>
      <input
        v-model="email"
        type="text"
        name="email"
        class="input-field"
        placeholder="john.doe@gmail.com"
      />

      <label>Message</label>
      <textarea
        v-model="msg"
        name="message"
        class="input-field"
        placeholder="I'm really interested in your profile. Would you want to join a junior position in GameLoft's technology department?"
      ></textarea>

      <button id="submit-btn" @click="handleSubmit">SEND</button>
    </div>
  </div>

  <TheToaster :show-toaster="showNotification" :is-danger="hasErrors">
    {{ toasterMsg }}
  </TheToaster>
</template>

<script setup>
import { addMessage } from "@/firebase/contacts.firestore";
import { ref } from "vue";

import TheToaster from "@/components/common/TheToaster";

const name = ref("");
const subject = ref("");
const email = ref("");
const msg = ref("");

const showNotification = ref(false);
const toasterMsg = ref("");
const hasErrors = ref(true);

function handleSubmit() {
  if (!name.value || !subject.value || !email.value || !msg.value) {
    toasterMsg.value = "Please fill in all fields!";
    hasErrors.value = true;
  } else {
    if (!validEmail(email.value)) {
      toasterMsg.value = "You entered an invalid email!";
      hasErrors.value = true;
    } else {
      addMessage({
        name: name.value,
        subject: subject.value,
        email: email.value,
        msg: msg.value,
      });

      toasterMsg.value = "\u{2714}\u{2003}Message sent!";
      hasErrors.value = false;

      name.value = null;
      subject.value = null;
      email.value = null;
      msg.value = null;
    }
  }

  showNotification.value = true;
  setTimeout(() => {
    showNotification.value = false;
  }, 3000);
}

function validEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}
</script>

<style scoped lang="scss">
#contact-me {
  padding-bottom: 20px;
}

h1 {
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  // padding: 20px auto;
}

#contact-form {
  display: block;
  max-width: 600px;

  margin: 0 auto;
  padding: 15px;

  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--primary-background-color);

  label {
    line-height: 2.7em;
    color: var(--text-color);
  }

  .input-field {
    width: 96%;
    display: block;
    border: 1px solid var(--border-color);
    background-color: var(--input-color);
    color: var(--text-color);
    border-radius: 5px;
    padding: 10px;
  }

  textarea {
    width: 96%;
    min-height: 100px;
  }

  #submit-btn {
    background-color: var(--border-color);
    font-family: "Poppins", sans-serif;
    font-weight: bolder;
    color: #fff;
    width: 100%;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="form-class-container">
    <div>
      <h1>Form Class</h1>
      <p>
        Para poder conectar nuestros inputs[formControls] con nuestra
        data[formData], usamos la directiva v-model para poder implementar el
        concepto de <strong>two-way data handling</strong>
      </p>
    </div>
    <!-- WITHOUT v-model -->

    <!-- WITH v-model -->

    <!-- Job Application Form -->
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const message = ref("");

// Job Application Data  - stored within an object
const formValues = reactive({
  formName: "",
  profileSummary: "",
  country: "",
  jobLocation: [],
  remoteWork: false,
  skillSet: [],
  yearsOfExperience: "",
  profileAge: null,
});

function submitForm() {
  console.log("Form Values", formValues);
}
</script>

<style scoped>
pre {
  font-size: 32px;
}
div {
  display: flex;
  flex-direction: column;
}

.multiple-checkboxes {
  display: flex;
  flex-direction: row;
}

.form-class-container {
  min-width: 75%;
}
</style>

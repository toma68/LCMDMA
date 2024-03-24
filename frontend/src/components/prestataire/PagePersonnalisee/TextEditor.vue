<template>
  <main>
      <vue-editor :editorOptions="editorSettings" v-model="content"> </vue-editor>
      <v-btn color="success mt-10" @click="validerUpdate">
        Valider
      </v-btn>
  </main>
</template>

<script>
import { VueEditor, Quill } from "vue2-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module--fix-imports-error";

Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      content: this.contenu,
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      }
    };
  },
  props: {
    contenu: {
      type: String,
      required: false
    }
  },
  methods: {
    validerUpdate() {
      this.$emit("validerUpdate", this.content);
    }
  }
};
</script>
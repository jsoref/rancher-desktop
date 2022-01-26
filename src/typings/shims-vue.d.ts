declare module '*.vue' {
  import Vue from 'vue';
  /* Load @nuxt/types, as a side effect it arguments Vue */
  import {} from '@nuxt/types';
  export default Vue;
}

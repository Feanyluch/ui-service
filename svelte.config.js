import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";
/** @type {import('@sveltejs/kit').Config} */
import autoprefixer from "autoprefixer";
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  vitePlugin:{
     experimental:{
       inspector:true
     }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          `@import 'src/styles.scss';`,
          `@import 'src/nav.scss';`,
          `@import 'src/login.scss';`,
        ], // Include your SCSS file
      },
    },
  },

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
};
export default config;

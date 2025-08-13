// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxt/scripts',
        '@nuxt/ui',
        //
    ],
    css: ['~/assets/css/main.css'],

    app: {
        head: {
            // titleTemplate: '%s - Nuxt ToDo App',
            title: 'Nuxt ToDo App',
        }
    }
});

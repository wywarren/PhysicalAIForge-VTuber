// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/../assets/css/style.css", "~/../assets/css/vtube.css"],
    modules: ["@nuxt/fonts", "@nuxtjs/sitemap"],
    router: {
        options: {
            linkActiveClass: "active",
            linkExactActiveClass: "exact-active",
        },
    },
    app: {
        head: {
            link: [
                { rel: "icon", href: "/logo32.png", sizes: "32x32" },
                { rel: "icon", href: "/logo192.png", sizes: "192x192" },
                { rel: "apple-touch-icon", href: "/logo180.png" },
            ],
        },
    },
    site: {
        name: "VTube Piloter",
        url: "https://vtube.qoobit.com",
    },
    // sitemap: {
    //     sources: ["/api/sitemap-urls"],
    // },
});

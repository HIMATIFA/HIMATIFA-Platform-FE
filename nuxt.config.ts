import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    compatibilityDate: '2026-08-22',

    future: {
        compatibilityVersion: 4,
    },

    typescript: {
        strict: true,
        typeCheck: true
    },

    css: ['~/assets/css/main.css'],

    vite: {
        plugins: [
            tailwindcss()
        ]
    },

    app: {
        baseURL: 'Himatifa-Platform-FE',
        head: {
            title: 'HIMATIFA - Himpunan Mahasiswa Informatika',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Website Resmi Himpunan Mahasiswa Informatika (HIMATIFA)' },
                { name: 'theme-color', content: '#000510' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    }
})
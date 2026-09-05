<script setup>
import { watch } from 'vue'
</script>
<template>
    <header>
        <!-- <router-link class="logo" to="/"></router-link>
        <nav ref="mainNav" class="main-nav">
            <ul class="nav h-nav">
                <template v-for="(page, index) in sections" :key="index">
                    <li v-if="!page.hasOwnProperty('url')" :class="{ selected: nestedPath(page) }">
                        <router-link :to="`/` + page.id" :class="{
                            'router-link-active': route &&
                                ((route.path.startsWith('/' + page.id) && page.id.length > 0) || (route.path == '/' && page.id == ''))
                        }">
                            {{ page.name }}
                        </router-link>
                    </li>
                    <li v-if="page.hasOwnProperty('url')">
                        <a :href="page.url" target="_blank">{{ page.name }}</a>
                    </li>
                </template>
            </ul>
        </nav>        
        <a ref="burgerMenuButton" class="mobile-menu-toggle" @click="toggleMobileMenu">
            <hr />
        </a>
         -->
    </header>
</template>
<script>

export default {
    components: {
    },
    props: [
        "sections",
        "section",
    ],
    data() {
        return {
            route: null,
        }
    },
    mounted() {
        const route = useRoute();
        this.route = route;
        watch(() => route.path, (newPath, oldPath) => {
            this.hideMobileMenu();
        })
    },
    methods: {
        nestedPath(page) {
            if (this.route) {
                if ((this.route.path.startsWith('/work/') || this.route.path.startsWith('/works/')) && page.id == 'works') {
                    return true;
                }
                else if ((this.route.path.startsWith('/product/') || this.route.path.startsWith('/products/')) && page.id == 'products') {
                    return true;
                }
            }

            return false;
        },
        toggleMobileMenu() {
            // this.$refs.burgerMenuButton.classList.toggle("side");
            // this.$refs.mask.classList.toggle("visible");
            // this.$refs.mainNav.classList.toggle("visible");
        },
        hideMobileMenu() {
            // this.$refs.burgerMenuButton.classList.remove("side");
            // this.$refs.mask.classList.remove("visible");
            // this.$refs.mainNav.classList.remove("visible");
        },

    }
}
</script>
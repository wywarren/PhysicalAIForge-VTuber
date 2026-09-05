<script setup>
import { watch } from 'vue'
</script>
<template>
    <aside>
        <nav ref="mainNav" class="main-nav">
            <router-link class="logo" to="/"></router-link>
            <ul class="nav h-nav" style="margin-top: 20px;">
                <template v-for="(page, index) in sections" :key="index">
                    <li v-if="!page.hasOwnProperty('url')" :class="{ selected: nestedPath(page) }">
                        <router-link :to="`/` + page.id" :class="{
                            'router-link-active': route &&
                                ((route.path.startsWith('/' + page.id) && page.id.length > 0) || (route.path == '/' && page.id == ''))
                        }">
                            <div class="icon">
                                <i :class="`icon-` + page.icon"></i>
                            </div>
                            <div>
                                {{ page.name }}
                            </div>
                        </router-link>
                    </li>
                    <li v-if="page.hasOwnProperty('url')">
                        <a :href="page.url" target="_blank">{{ page.name }}</a>
                    </li>
                </template>
            </ul>
            <ul class="bottom-menu">
                <li>
                    <router-link to="/jobs" :class="{
                        'router-link-active': route &&
                            ((route.path.startsWith('/jobs')))
                    }">
                        <div class="icon">
                            <i class="icon-server"></i>
                            <span class="counter-bubble" v-if="jobs.length>0">{{ jobs.length }}</span>
                        </div>
                        <div>
                            Jobs
                        </div>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>
<script>

export default {
    components: {
    },
    props: [
        "sections",
        "section",
        "jobs",
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

        })
    },
    methods: {
        nestedPath(page) {
            if (this.route) {
            }

            return false;
        },
    }
}
</script>
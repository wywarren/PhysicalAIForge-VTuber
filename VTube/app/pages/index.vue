<script setup></script>
<template>
    <div style="display: flex;align-items: center;justify-content: center;flex-direction: column;height:100%">
        <h1>Welcome to VTube Shorts Builder</h1>
        <h2 style="font-weight: normal;">Select a feature to get started</h2>

        <div class="row-container">
            <ul class="step-container" style="margin:50px">
                <template v-for="(page, index) in sections" :key="index">
                    <li class="step-card">
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
                </template>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    components: {

    },
    props: [
        "sections"
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
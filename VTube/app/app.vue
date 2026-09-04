<script setup>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

useHead({
    meta: [
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }
    ]
});
</script>
<template>
    <Header />
    <div class="content-container">
        <Menu :sections="sections" :section="section" />
        <div class="main-content">
            <NuxtPage v-slot="{ Component } = {}">
                <component :is="Component" />
            </NuxtPage>
        </div>
    </div>
</template>
<script>

export default {
    components: {
        Header,
        Menu,
    },
    data() {
        return {
            sections: [
                { id: "avatar", name: "Avatar", icon: "male"},
                { id: "clips", name: "Clips", icon: "video" },
                { id: "transfer", name: "Transfer", icon: "login" },
                { id: "composite", name: "Composite", icon: "cubes" },
            ],
            section: "",
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
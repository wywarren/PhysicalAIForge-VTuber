<script setup>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

import Globals from "./globals.js";

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
                <component :is="Component" :sections="sections" :avatars="avatars" :selected-avatar="selectedAvatar"
                    :clips="clips" :selected-clips="selectedClips" 
                    :transfers="transfers" :selected-transfers="selectedTransfers" 
                    :plates="plates" :selected-plates="selectedPlates"
                    :finals="finals" :selected-finals="selectedFinals"
                    @select-avatar="selectAvatar" />
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
                { id: "avatar", name: "Avatar", icon: "male" },
                { id: "clips", name: "Clips", icon: "video" },
                { id: "transfer", name: "Transfer", icon: "login" },
                { id: "composite", name: "Composite", icon: "cubes" },
                { id: "final", name: "Final", icon: "upload-cloud" },
            ],
            section: "",
            avatars: Globals.avatars,
            selectedAvatar: null,
            clips: Globals.clips,
            selectedClips: [],
            transfers: Globals.transfers,
            selectedTransfers: [],
            plates: Globals.plates,
            selectedPlates: [],
            finals: Globals.finals,
            selectedFinals: [],
        }
    },
    mounted() {

    },
    methods: {
        async selectAvatar(avatar) {
            this.selectedAvatar = avatar;
            if (this.selectedClips.length > 0) {
                navigateTo("/transfer");
            }
            else {
                navigateTo("/clips");
            }
        }
    }
}
</script>
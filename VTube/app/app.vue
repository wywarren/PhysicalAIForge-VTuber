<script setup>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";

import Hachiware from "./../assets/img/hachiware.jpg"
import Luna from "./../assets/img/Luna.jpg"
import KOLSample from "./../assets/img/kol-sample.png"
import TransferSample from "./../assets/img/sample-transfer.jpg"
import PlateSample from "./../assets/img/heidi-fin-2TLREZi7BUg-unsplash.jpg"
import FinalSample from "./../assets/img/sample-composite.png"

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
            avatars: [
                {
                    "id": "luna",
                    "name": "Luna",
                    "thumbnail": Luna,
                },
                {
                    "id": "hachiware",
                    "name": "Hachiware",
                    "thumbnail": Hachiware,
                }
            ],
            selectedAvatar: null,
            clips: [
                {
                    "id": "kol-f01",
                    "name": "KOL Female 01",
                    "thumbnail": KOLSample,
                },
                {
                    "id": "kol-f02",
                    "name": "KOL Female 02",
                    "thumbnail": KOLSample,
                },
                {
                    "id": "kol-m01",
                    "name": "KOL Male 01",
                    "thumbnail": KOLSample,
                },
                {
                    "id": "kol-m02",
                    "name": "KOL Male 02",
                    "thumbnail": KOLSample,
                },
            ],
            selectedClips: [],
            transfers: [
                {
                    "id": "luna-transfer-01",
                    "name": "KOL Female 01 > Luna",
                    "thumbnail": TransferSample,
                },
                {
                    "id": "luna-transfer-02",
                    "name": "KOL Female 02 > Luna",
                    "thumbnail": TransferSample,
                },
            ],
            selectedTransfers: [],
            plates: [
                {
                    "id": "plate-01",
                    "name": "Plate Sample 01",
                    "thumbnail": PlateSample,
                },
                {
                    "id": "plate-02",
                    "name": "Plate Sample 02",
                    "thumbnail": PlateSample,
                }
            ],
            selectedPlates: [],
            finals: [
                {
                    "id": "final-01",
                    "name": "Final Sample 01",
                    "thumbnail": FinalSample,
                },
                {
                    "id": "final-02",
                    "name": "Final Sample 02",
                    "thumbnail": FinalSample,
                },
            ],
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
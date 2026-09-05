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
        <Menu :sections="sections" :section="section" :jobs="jobs" />
        <div class="main-content">
            <NuxtPage v-slot="{ Component } = {}">
                <component :is="Component" :sections="sections" :avatars="avatars" :selected-avatar="selectedAvatar"
                    :clips="clips" :selected-clips="selectedClips" :transfers="transfers"
                    :selected-transfer="selectedTransfer" :plates="plates" :selected-plates="selectedPlates"
                    :finals="finals" :selected-finals="selectedFinals" @select-avatar="selectAvatar"
                    @select-clip="selectClip" @select-transfer="selectTransfer" @select-plate="selectPlate"
                    @remove-clip="removeClip" @remove-plate="removePlate" @convert-transfers="convertTransfers"
                    @convert-finals="convertFinals" :jobs="jobs" />
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
            selectedTransfer: null,
            plates: Globals.plates,
            selectedPlates: [],
            finals: Globals.finals,
            selectedFinals: [],
            jobs: [],
        }
    },
    mounted() {

    },
    methods: {
        async convertFinals() {
            let now = new Date();

            let tasks = [];

            for (let i = 0; i < this.selectedPlates.length; i++) {
                let plate = this.selectedPlates[i];
                let task = {
                    id: "",
                    slug: "convert_final",
                    source: this.selectedTransfer,
                    target: plate,
                }
                tasks.push(task);
            }

            let job = {
                id: "",
                slug: "convert_final",
                submittedBy: "Guest",
                date: now.toISOString(),
                tasks: tasks,
                completedTasks: [],
                status: 2,
            }

            this.selectedTransfer = null;
            this.selectedPlates = [];
            this.jobs.push(job);
            console.log(job);
        },
        async convertTransfers() {
            let now = new Date();

            let tasks = [];

            for (let i = 0; i < this.selectedClips.length; i++) {
                let clip = this.selectedClips[i];

                let task = {
                    id: "",
                    slug: "convert_transfer",
                    source: this.selectedAvatar,
                    target: clip,
                }

                tasks.push(task);
            }

            let job = {
                id: "",
                slug: "convert_transfer",
                submittedBy: "Guest",
                date: now.toISOString(),
                tasks: tasks,
                completedTasks: [],
                status: 2,
            }

            this.selectedAvatar = null;
            this.selectedClips = [];
            this.jobs.push(job);
            console.log(job);
        },
        async selectTransfer(transfer) {
            this.selectedTransfer = transfer;

            navigateTo("/composite");
        },
        async selectAvatar(avatar) {
            this.selectedAvatar = avatar;

            navigateTo("/clips");
        },
        async removeClip(clip) {
            for (let i = 0; i < this.selectedClips.length; i++) {
                if (this.selectedClips[i].id == clip.id) {
                    this.selectedClips.splice(i, 1);
                    break;
                }
            }
        },
        async selectClip(clip) {
            let exists = false;
            for (let i = 0; i < this.selectedClips.length; i++) {
                if (this.selectedClips[i].id == clip.id) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                this.selectedClips.push(clip)
            }
        },
        async removePlate(plate) {
            for (let i = 0; i < this.selectedPlates.length; i++) {
                if (this.selectedPlates[i].id == plate.id) {
                    this.selectedPlates.splice(i, 1);
                    break;
                }
            }
        },
        async selectPlate(plate) {
            let exists = false;
            for (let i = 0; i < this.selectedPlates.length; i++) {
                if (this.selectedPlates[i].id == plate.id) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                this.selectedPlates.push(plate)
            }
        }
    }
}
</script>
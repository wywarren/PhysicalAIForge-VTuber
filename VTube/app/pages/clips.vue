<script setup>
import AvatarTransfer from '~/components/AvatarTransfer.vue';
</script>
<template>
    <div style="display: flex;justify-content: center;flex-direction: column;">
        <div class="row-container" style="margin-top: 100px;">
            <input type="search" placeholder="Search Clips"
                style="margin-left:10px;padding: 8px 10px;font-size: 16px;" />
            <button @click="" class="primary coming-soon"
                style="margin-left: 10px;color: #CCC;font-size: 16px;padding: 8px 10px;">
                Upload Clip
            </button>
            <button @click="" class="primary coming-soon"
                style="margin-left: 10px;color: #CCC;font-size: 16px;padding: 8px 10px;">
                Create Clip
            </button>
        </div>
        <div class="row-container">
            <ul class="results grid" style="margin-top: 20px;">
                <template v-for="(clip, index) in clips" :key="index">
                    <li>
                        <div class="clip-item">
                            <div class="thumbnail" :style="`background-image: url(` + clip.thumbnail + `);`">
                                <div class="fade-mask"></div>
                                <div class="hover-mask">
                                    <a class="play-circle" @click="">
                                        <div class="play-triangle"></div>
                                    </a>
                                    <button class="secondary" @click="selectClip(clip.id)">
                                        Select Clip
                                    </button>
                                </div>
                                <div class="name">
                                    <span class="tag">{{ clip.name }}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        <AvatarTransfer :selected-avatar="selectedAvatar" :selected-clips="selectedClips"
            @remove-clip="removeClip"
            @convert-transfers="convertTransfers"/>
    </div>
</template>
<script>

export default {
    components: {
        AvatarTransfer
    },
    props: [
        "clips",
        "selected-avatar",
        "selected-clips",
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        convertTransfers(){
            this.$emit("convert-transfers");
        },
        removeClip(clip){
            this.$emit("remove-clip", clip);
        },
        selectClip(id) {
            for (let i = 0; i < this.clips.length; i++) {
                let clip = this.clips[i];
                if (clip.id == id) {
                    this.$emit("select-clip", clip);
                    break;
                }
            }
        }
    }
}
</script>
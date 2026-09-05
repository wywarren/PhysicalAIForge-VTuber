<script setup></script>
<template>
    <div class="footer-selection" v-if="selectedAvatar || selectedClips">
        <div class="avatar-item" v-if="selectedAvatar"
            :style="`background-image: url(` + selectedAvatar.thumbnail + `);`">
            <div class="hover-mask">
                <button class="secondary" @click="changeAvatar" style="top:50%">
                    Change
                </button>
            </div>
            <div class="name" style="bottom:0px">
                <span class="tag">{{ selectedAvatar.name }}</span>
            </div>
        </div>
        <div class="avatar-item" v-if="!selectedAvatar">
            <div class="hover-mask">
                <button class="secondary" @click="changeAvatar" style="top:50%">
                    Select
                </button>
            </div>
        </div>
        <div class="triangle">

        </div>
        <div class="clip-selection">
            <ul>
                <template v-for="(clip, index) in selectedClips" :key="index">
                    <li :style="`background-image: url(` + clip.thumbnail + `);`">
                        <div class="hover-mask">
                            <a class="play-circle" @click="">
                                <div class="play-triangle"></div>
                            </a>
                            <button class="remove" @click="removeClip(clip)" style="top:68%">
                                Remove
                            </button>
                        </div>
                        <div class="name" style="bottom:5px;position: absolute;text-align: center; width: 100%;">
                            <span class="tag">{{ clip.name }}</span>
                        </div>
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
        "selected-avatar",
        "selected-clips"
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        removeClip(clip) {
            this.$emit("remove-clip", clip);
        },
        changeAvatar() {
            navigateTo("/avatar")
        }
    }
}
</script>
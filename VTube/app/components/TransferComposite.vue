<script setup></script>
<template>
    <div class="footer-selection" v-if="selectedTransfer || selectedPlates">
        <div class="avatar-item" v-if="selectedTransfer"
            :style="`background-image: url(` + selectedTransfer.thumbnail + `);`">
            <div class="hover-mask">
                <a class="play-circle" @click="playVideo(selectedTransfer)">
                    <div class="play-triangle"></div>
                </a>
                <button class="secondary" @click="changeTransfer" style="top:68%">
                    Change
                </button>
            </div>
            <div class="name" style="bottom:0px">
                <span class="tag">{{ selectedTransfer.name }}</span>
            </div>
        </div>
        <div class="avatar-item" v-if="!selectedTransfer">
            <div class="hover-mask">
                <button class="secondary" @click="changeTransfer" style="top:50%">
                    Select
                </button>
            </div>
        </div>
        <div class="triangle"></div>
        <div class="clip-selection">
            <ul>
                <template v-for="(plate, index) in selectedPlates" :key="index">
                    <li :style="`background-image: url(` + plate.thumbnail + `);`">
                        <div class="hover-mask">
                            <a class="play-circle" @click="playVideo(plate)">
                                <div class="play-triangle"></div>
                            </a>
                            <button class="remove" @click="removePlate(plate)" style="top:68%">
                                Remove
                            </button>
                        </div>
                        <div class="name" style="bottom:5px;position: absolute;text-align: center; width: 100%;">
                            <span class="tag">{{ plate.name }}</span>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        <div class="actions" v-if="selectedTransfer && selectedPlates.length > 0">
            <button class="primary" @click="convertFinal()">
                Convert
            </button>
        </div>
    </div>
</template>
<script>

export default {
    components: {

    },
    props: [
        "selected-transfer",
        "selected-plates"
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        playVideo(clip) {
            this.$emit("play-video", clip);
        },
        convertFinal() {
            // console.log(this.selectedTransfer);
            // console.log(this.selectedPlates);
            this.$emit("convert-finals");
        },
        removePlate(plate) {
            this.$emit("remove-plate", plate);
        },
        changeTransfer() {
            navigateTo("/transfer")
        }
    }
}
</script>
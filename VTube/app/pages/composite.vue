<script setup>
import TransferComposite from '~/components/TransferComposite.vue';
</script>
<template>
    <div style="display: flex;justify-content: center;flex-direction: column;">
        <div class="row-container" style="margin-top: 100px;">
            <input type="search" placeholder="Search Plates"
                style="margin-left:10px;padding: 8px 10px;font-size: 16px;" />
            <button @click="" class="primary coming-soon"
                style="margin-left: 10px;color: #CCC;font-size: 16px;padding: 8px 10px;">
                Upload Plate
            </button>
            <button @click="" class="primary coming-soon"
                style="margin-left: 10px;color: #CCC;font-size: 16px;padding: 8px 10px;">
                Create Plate
            </button>
        </div>
        <div class="row-container">
            <ul class="results grid" style="margin-top: 20px;">
                <template v-for="(plate, index) in plates" :key="index">
                    <li>
                        <div class="plate-item">
                            <a class="thumbnail" @click="selectPlate(plate.id)"
                                :style="`background-image: url(` + plate.thumbnail + `);`">
                                <div class="fade-mask">
                                </div>
                                <div class="hover-mask">
                                    <a class="play-circle" @click="">
                                        <div class="play-triangle"></div>
                                    </a>
                                    <button class="secondary">
                                        Select Plate
                                    </button>
                                </div>
                                <div class="name">
                                    <span class="tag">{{ plate.name }}</span>
                                </div>
                            </a>
                        </div>
                    </li>
                </template>
            </ul>
        </div>
        <TransferComposite :selected-transfer="selectedTransfer" :selected-plates="selectedPlates"
            @remove-plate="removePlate" 
            @convert-finals="convertFinals" />
    </div>
</template>
<script>
export default {
    components: {
        TransferComposite
    },
    props: [
        "plates",
        "selected-transfer",
        "selected-plates",
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        convertFinals(){
            this.$emit("convert-finals");
        },
        removePlate(plate){
            this.$emit("remove-plate", plate);
        },
        selectPlate(id) {
            for (let i = 0; i < this.plates.length; i++) {
                let plate = this.plates[i];
                if (plate.id == id) {
                    this.$emit("select-plate", plate);
                    break;
                }
            }
        }
    }
}
</script>
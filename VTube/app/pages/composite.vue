<script setup>

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
            <ul class="results" style="margin-top: 20px;">
                <template v-for="(plate, index) in plates" :key="index">
                    <li>
                        <div class="plate-item">
                            <a class="thumbnail" @click="selectPlate(plate.id)"
                                :style="`background-image: url(` + plate.thumbnail + `);`">
                                <div class="fade-mask">
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
    </div>
</template>
<script>

export default {
    components: {

    },
    props: [
        "plates"
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        selectTransfer(id) {
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
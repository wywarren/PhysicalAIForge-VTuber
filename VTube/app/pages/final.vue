<script setup>

</script>
<template>
    <div style="display: flex;justify-content: center;flex-direction: column;">
        <div class="row-container" style="margin-top: 100px;">
            <input type="search" placeholder="Search Finals"
                style="margin-left:10px;padding: 8px 10px;font-size: 16px;" />
            <button @click="" class="primary coming-soon"
                style="margin-left: 10px;color: #CCC;font-size: 16px;padding: 8px 10px;">
                Upload Final
            </button>
        </div>
        <div class="row-container">
            <ul class="results" style="margin-top: 20px;">
                <template v-for="(final, index) in finals" :key="index">
                    <li>
                        <div class="final-item">
                            <a class="thumbnail" @click="selectFinal(final.id)"
                                :style="`background-image: url(` + final.thumbnail + `);`">
                                <div class="fade-mask"></div>
                                <div class="name">
                                    <span class="tag">{{ final.name }}</span>
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
        "finals"
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        selectFinal(id) {
            for (let i = 0; i < this.finals.length; i++) {
                let final = this.finals[i];
                if (final.id == id) {
                    this.$emit("select-final", final);
                    break;
                }
            }
        }
    }
}
</script>
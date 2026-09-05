<script setup>

</script>
<template>
    <div style="display: flex;justify-content: center;flex-direction: column;">
        <div class="row-container" style="margin-top: 100px;">
            <input type="search" placeholder="Search Transfers"
                style="margin-left:10px;padding: 8px 10px;font-size: 16px;" />
            <!-- <button @click="" class="primary coming-soon"
                style="margin-left: 10px;color: #CCC;font-size: 16px;padding: 8px 10px;">
                Upload Clip
            </button>
            <button @click="" class="primary coming-soon"
                style="margin-left: 10px;color: #CCC;font-size: 16px;padding: 8px 10px;">
                Create Clip
            </button> -->
        </div>
        <div class="row-container">
            <ul class="results" style="margin-top: 20px;">
                <template v-for="(transfer, index) in transfers" :key="index">
                    <li>
                        <div class="transfer-item">
                            <div class="thumbnail" :style="`background-image: url(` + transfer.thumbnail + `);`">
                                <div class="fade-mask">
                                </div>
                                <div class="hover-mask">
                                    <a class="play-circle" @click="">
                                        <div class="play-triangle"></div>
                                    </a>
                                    <button class="secondary" @click="selectTransfer(transfer.id)">
                                        Select Transfer
                                    </button>
                                </div>
                                <div class="name">
                                    <span class="tag">{{ transfer.name }}</span>
                                </div>
                            </div>
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
        "transfers"
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        selectTransfer(id) {
            for (let i = 0; i < this.transfers.length; i++) {
                let transfer = this.transfers[i];
                if (transfer.id == id) {
                    this.$emit("select-transfer", transfer);
                    break;
                }
            }
        }
    }
}
</script>
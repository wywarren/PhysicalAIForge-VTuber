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
                    <li class="transfer-item" :style="`background-image: url(` + transfer.thumbnail + `);`">
                        <div class="fade-mask">

                        </div>
                        <a @click="selectTransfer(transfer.id)">
                            <div class="name">
                                <span class="tag">{{ transfer.name }}</span>
                            </div>
                        </a>
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
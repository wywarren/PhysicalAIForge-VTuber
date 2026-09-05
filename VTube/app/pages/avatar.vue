<script setup>

</script>
<template>
    <div style="display: flex;justify-content: center;flex-direction: column;">
        <div class="row-container" style="margin-top: 100px;">
            <input type="search" placeholder="Search Avatars"
                style="margin-left:10px;padding: 8px 10px;font-size: 16px;" />
            <button @click="" class="primary coming-soon"
                style="margin-left: 10px;color: #CCC;font-size: 16px;padding: 8px 10px;">
                Create Avatar
            </button>
        </div>
        <div class="row-container">
            <ul class="results" style="margin-top: 20px;">
                <template v-for="(avatar, index) in avatars" :key="index">
                    <li class="avatar-item" :style="`background-image: url(` + avatar.thumbnail + `);`">
                        <div class="fade-mask">

                        </div>
                        <a @click="selectAvatar(avatar.id)">
                            <div class="name">
                                <span class="tag">{{ avatar.name }}</span>
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
        "avatars"
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        selectAvatar(id) {
            for (let i = 0; i < this.avatars.length; i++) {
                let avatar = this.avatars[i];
                if (avatar.id == id) {
                    this.$emit("select-avatar", avatar);
                    break;
                }
            }
        }
    }
}
</script>
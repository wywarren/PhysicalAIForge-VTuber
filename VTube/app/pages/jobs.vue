<script setup></script>
<template>
    <div class="row-container">
        <div v-if="jobs.length==0" style="font-size: 14px;padding-top: 100px;">
            No Active Jobs
        </div>
        <ul class="results" v-if="jobs.length>0" style="padding-top: 50px;">
            <li class="job-item heading">
                <div class="date">
                    Date
                </div>
                <div class="type">
                    Type
                </div>
                <div class="progress">
                    Progress
                </div>
                <div class="submittedBy">
                    Submitted By
                </div>
                <div class="status">
                    Status
                </div>
                <div class="actions">
                    Actions
                </div>
            </li>
            <template v-for="(job, index) in jobs" :key="index">
                <li class="job-item">
                    <div class="date">
                        {{ job.date }}
                    </div>
                    <div class="type">
                        <span class="tag">
                            {{ job.slug }}
                        </span>
                    </div>
                    <div class="progress" style="text-align: center;font-size: 10px;padding: 0 5px;">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 70%;"></div>
                        </div>
                        {{ job.completedTasks.length }} / {{ job.tasks.length }}
                    </div>
                    <div class="submittedBy">
                        {{ job.submittedBy }}
                    </div>
                    <div class="status">
                        <span class="tag">{{ statusToLabel(job.status) }}</span>
                    </div>
                    <div class="actions">
                        <button @click="removeJob(job)" class="remove">Cancel</button>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>
<script>

export default {
    components: {

    },
    props: [
        "jobs"
    ],
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        removeJob(job) {
            for (let i = 0; i < this.jobs.length; i++) {
                if (this.jobs[i].id == job.id) {
                    this.jobs.splice(i, 1);
                    break;
                }
            }
        },
        statusToLabel(status) {
            switch (status) {
                case -1:
                    return "Failed";
                case 1:
                    return "Completed";
                case 2:
                    return "In Progress";
                default:
                    break;
            }
        }
    }
}
</script>
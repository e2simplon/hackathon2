<template>
    <v-list-item
        :key="projectId + '-project'"
    >
        <v-list-item-icon>
            <v-icon large>build_circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title><h2> {{ projectName }} </h2>

            </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
            <div>
                <v-btn @click="getIdProject()" fab large class="mx-2">
                    <v-icon color="grey lighten-1">create</v-icon>
                </v-btn>
                <v-btn @click="" fab large class="mx-2">
                    <v-icon color="grey lighten-1">delete</v-icon>
                </v-btn>
                <v-btn @click="" fab large class="mx-2">
                    <v-icon color="grey lighten-1">delete</v-icon>
                </v-btn>
            </div>
        </v-list-item-action>

    </v-list-item>
</template>

<script>
    export default {
        name: "projectStatusDetail.vue",
        props: ['projectId'],
        data: function () {
            return {
                projectName: "",
                projectStatus: "",
            }
        },
        created: function () {
            let projectData = this.$store.state.projects.find(project => project.id === this.projectId);
            this.projectName = projectData.name;
            this.projectStatus = projectData.status_id;
        },
        methods: {
            getIdProject: function () {
                alert(this.projectId +'//' +this.projectStatus);
            }
        }
    }
</script>

<style>

</style>

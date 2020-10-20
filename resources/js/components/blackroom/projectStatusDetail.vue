<template>
    <v-list-item
        :key="projectId + '-project'"
    >
        <v-list-item-icon>
            <v-icon large>build_circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>
              <strong> {{ projectName }} </strong>

            </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
            <div>
                <v-chip
                    color="#c90f54"
                    text-color="white"
                >
                   <strong> 0 / 10</strong>
                </v-chip>&nbsp;&nbsp;&nbsp;
                <v-btn @click="getIdProject()" fab large class="mx-2">
                    <v-icon color="grey lighten-1">schedule</v-icon>
                </v-btn>
                <v-btn @click="changeStatus()" fab large class="mx-2">
                    <v-icon color="grey lighten-1">how_to_vote</v-icon>
                </v-btn>
                <v-btn @click="" fab large class="mx-2">
                    <v-icon color="grey lighten-1">cancel</v-icon>
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
                alert(this.$store.state.projects.find(project => project.id === this.projectId).id +'//' + this.$store.state.projects.find(project => project.id === this.projectId).status_id);
            },
            changeStatus: function () {
                this.$store.dispatch('changeProjectStatus', this.projectId);
            }
        }
    }
</script>

<style>

</style>

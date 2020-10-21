<template>
    <v-list-item
        :key="projectId + '-project'">
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
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                <v-btn fab large class="mx-2" v-bind="attrs"
                       v-on="on" color="gray" :disabled="pendingAction"  :style="[projectStatus === 1 ? {'background-color':'#c90f54 !important'}: {}]">
                    <v-icon>schedule</v-icon>
                </v-btn></template>
                        <span>En attente</span>
                </v-tooltip>
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                <v-btn @click="changeStatusOpen()" v-bind="attrs"
                       v-on="on" fab large class="mx-2" color="gray"  :disabled="openAction"  :style="[projectStatus === 2 ? {'background-color':'#c90f54 !important'}: {}]">
                    <v-icon>how_to_vote</v-icon>
                </v-btn></template>
                        <span>Activer la notation</span>
                </v-tooltip>
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                <v-btn @click="changeStatusClosed()" v-bind="attrs"
                       v-on="on" fab large class="mx-2" color="gray" :disabled="closedAction"  :style="[projectStatus === 3 ? {'background-color':'#c90f54 !important'}: {}]">
                    <v-icon>cancel</v-icon>
                </v-btn>
                    </template>
                    <span>Fermer la notation</span>
                </v-tooltip>
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
                projectStatus: 1,
                pendingAction: true,
                openAction: false,
                closedAction: true,

            }
        },
        created: function () {
            let projectData = this.$store.state.projects.find(project => project.id === this.projectId);
            this.projectName = projectData.name;
            this.projectStatus = projectData.status_id;
        },
        methods: {
            changeStatusOpen: function () {
                this.projectStatus = 2;
            },

            changeStatusClosed: function () {
                this.projectStatus = 3;
            }
        }
        ,
        watch: {
            projectStatus: function () {
                switch (this.projectStatus) {
                    case 2:
                        this.pendingAction = true;
                        this.openAction = true;
                        this.closedAction = false;
                        break;
                    case 3:
                        this.pendingAction = true;
                        this.openAction = true;
                        this.closedAction = true;
                        break;
                }
            }
        }
    }
</script>

<style>

</style>

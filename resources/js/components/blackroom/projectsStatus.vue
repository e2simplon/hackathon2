<template>
    <div
        style="padding-left:50px;padding-right:50px;">


        <h1 style="margin-bottom:20px;">Status des projets</h1>
        <v-card width="100%">
            <v-card-title>
                <v-icon x-large
                        color="black">
                    account_balance
                </v-icon>
                &nbsp;Plateau QUAI ALPHA
            </v-card-title>
            <v-list>
                <v-list-item-group
                ><template v-for="(project, index) in $store.state.projects">
                    <project-status-detail :projectId="project.id"></project-status-detail>
                    <v-divider
                        v-if="index < $store.state.projects.length - 1"
                        :key="index"
                    ></v-divider>
                </template>


                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    import projectStatusDetail from './projectStatusDetail.vue'
    export default {
        name: "projectsStatus.vue",
        components: {projectStatusDetail},
        data: function () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>

</style>

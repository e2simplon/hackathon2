<template>
    <div style="padding-left:50px;padding-right:50px;">
        <div class="text-center">
        <v-dialog
            v-model="deleteProjectBox"
            width="500"
        >
            <v-card>
                <v-card-title class="headline" primary-title style="background-color:#e91e63;">
                    <span style="color:white;">Effacer un projet</span>
                    <v-spacer></v-spacer>
                    <v-btn text icon color="white" right @click="deleteProjectBox = false">
                        <v-icon large>close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    Le projet <b>{{ projectNameToDelete }}</b> sera définitivement supprimé, êtes-vous certain de vouloir faire cela ??
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="secondary"
                        @click="deleteProjectBox = false"
                    >
                        Annuler
                    </v-btn>
                    <v-btn
                        color="#e91e63"
                        @click="deleteProjectAction()"
                        class="white--text"
                    >
                        Supprimer
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="editProjectBox"
            width="500"
        >
            <v-card>
                <v-card-title class="headline" primary-title style="background-color:#e91e63;">
                    <span style="color:white;">Editer un projet</span>
                    <v-spacer></v-spacer>
                    <v-btn text icon color="white" right @click="editProjectBox = false">
                        <v-icon large>close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-form @submit.prevent="editProjectConfirm()" v-model="editProjectForm" ref="projectFormEdit">
                    <v-card-text>

                        <v-text-field
                            id="name"
                            prepend-icon="construction"
                            name="name"
                            label="Nom du projet"
                            color="#e91f62"
                            v-model="editedProject.name"
                            :rules="nameRules"
                            required></v-text-field>


                        <v-select
                            v-model="editedProject.spot_id"
                            :items="$store.state.spots"
                            item-text="name"
                            item-value="id"
                            id="spot_id"
                            prepend-icon="account_balance"
                            name="spot_id"
                            type="text"
                            color="#e91f62"
                            label="Plateau"
                            :rules="spotRules"
                            required
                        ></v-select>


                    </v-card-text>
                </v-form>
                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="secondary"
                        @click="editProjectBox = false"
                    >
                        Annuler
                    </v-btn>
                    <v-btn
                        color="#e91f62"
                        @click="editProjectAction()"
                        :disabled="!editProjectForm"
                        class="white--text"
                    >
                        Modifier
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        </div>
        <h1 style="margin-bottom:20px;">Gestion des projets</h1>
        <v-card width="100%">
            <v-card-title>
                <v-icon x-large
                        color="black">
                    add_circle_outline
                </v-icon>
                &nbsp;Ajouter un projet
            </v-card-title>
            <v-form @submit.prevent="addProject()" v-model="addProjectForm" ref="projectForm">
                <v-card-text>

                    <v-text-field
                        id="name"
                        prepend-icon="construction"
                        name="name"
                        label="Nom du projet"
                        color="#e91f62"
                        v-model="name"
                        :rules="nameRules"
                        required></v-text-field>


                    <v-select
                        v-model="spot_id"
                        :items="$store.state.spots"
                        item-text="name"
                        item-value="id"
                        id="spot_id"
                        prepend-icon="account_balance"
                        name="spot_id"
                        type="text"
                        color="#e91f62"
                        label="Plateau"
                        :rules="spotRules"
                        required
                    ></v-select>


                </v-card-text>
                <v-card-actions style="padding:20px;">
                    <v-spacer></v-spacer>
                    <v-btn color="#e91f62" type="submit" x-large :disabled="!addProjectForm" class="white--text"> Enregistrer
                        le projet
                    </v-btn>

                </v-card-actions>
            </v-form>
        </v-card>
        <v-card width="100%" style="margin-top:30px;">
            <v-card-title>
                <v-icon x-large
                        color="black">
                    construction
                </v-icon>
                &nbsp;Liste des projets
            </v-card-title>
            <v-list>
                <v-list-item-group
                >
                    <template v-for="(project, index) in $store.state.projects">
                        <v-list-item
                                     :key="project.id + '-project'"
                        >
                            <v-list-item-icon>
                                <v-icon>build_circle</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title> <strong>{{ project.name }}</strong>
                                    <v-chip
                                        class="ma-2"
                                        color="pink"
                                        label
                                        text-color="white"
                                    ><v-icon left>
                                        account_balance
                                    </v-icon>
                                        {{getSpot(project.spot_id)}}
                                    </v-chip>
                                </v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <div>
                                    <v-btn icon
                                    @click="editProject(project.id)">
                                        <v-icon color="grey lighten-1">create</v-icon>
                                    </v-btn>
                                    <v-btn icon
                                           @click="deleteProject(project.id, project.name)">
                                        <v-icon color="grey lighten-1">delete</v-icon>
                                    </v-btn>
                                </div>
                            </v-list-item-action>

                        </v-list-item>
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
    export default {
        name: "projects.vue",
        data: function () {
            return {
                addProjectForm: false,
                editProjectForm: false,
                deleteProjectBox: false,
                editProjectBox: false,
                spot_id: "",
                name: "",
                projectIdToDelete:"",
                projectNameToDelete:"",
                editedProject:{},
                nameRules: [
                    v => !!v || 'Le nom est obligatoire',
                ],
                spotRules: [
                    v => !!v || 'Un plateau est obligatoire',
                ],
            }
        },
        methods: {
            addProject: function () {

                this.$store.dispatch('addProject', {name: this.name, spot_id: this.spot_id});
                this.$refs.projectForm.reset();
            },
            getSpot: function (spotId) {
                return this.$store.state.spots.find(spot => spot.id === spotId).name;
            },
            deleteProject: function (projectId, projectName) {
                this.deleteProjectBox = true;
                this.projectNameToDelete = projectName;
                this.projectIdToDelete = projectId;
            },
            deleteProjectAction: function () {
                this.$store.dispatch('deleteProject', this.projectIdToDelete);
                this.projectIdToDelete = "";
                this.projectNameToDelete = "";
                this.deleteProjectBox = false
            },
            editProject: function (projectId){
                let projectData = this.$store.state.projects.find( project => project.id === projectId);
                this.editedProject = _.clone(projectData);
                this.editProjectBox = true;
            },
            editProjectAction: function (){
                this.$store.dispatch('editProjectConfirm', {id: this.editedProject.id, name: this.editedProject.name, spot_id: this.editedProject.spot_id});
                this.editProjectBox = false;
                this.$refs.projectFormEdit.reset();
            },
        }
    }
</script>

<style>

</style>


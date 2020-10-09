<template>
    <div
        style="padding-left:50px;padding-right:50px;">
        <h1 style="margin-bottom:20px;">Gestion des projets</h1>
        <v-card width="100%">
            <v-card-title>
                <v-icon x-large
                        color="black">
                    add_circle_outline
                </v-icon>
                &nbsp;Ajouter un projet
            </v-card-title>
            <v-form @submit.prevent="addProject()" v-model="valid" ref="projectForm">
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
                    > </v-select>


                </v-card-text>
                <v-card-actions style="padding:20px;">
                    <v-spacer></v-spacer>
                    <v-btn color="#e91f62" type="submit" x-large :disabled="!valid" class="white--text"> Enregistrer
                        le projet
                    </v-btn>

                </v-card-actions>
            </v-form>
        </v-card>
        <v-card width="100%" style="margin-top:30px;">
            <v-card-title>
                <v-icon x-large
                        color="black">
                    account_balance
                </v-icon>
                &nbsp;Liste des projets
            </v-card-title>
            <v-list>
                <v-list-item-group
                >
                    <template v-for="(spot, index) in $store.state.spots">
                        <v-list-item two-line

                                     :key="spot.id + '-spot'"
                        >
                            <v-list-item-icon>
                                <v-icon>account_balance</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="spot.name"></v-list-item-title>
                                <v-list-item-subtitle v-text="spot.slug"></v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <div>
                                    <v-btn icon>
                                        <v-icon color="grey lighten-1">create</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon color="grey lighten-1">delete</v-icon>
                                    </v-btn>
                                </div>
                            </v-list-item-action>

                        </v-list-item>
                        <v-divider
                            v-if="index < $store.state.spots.length - 1"
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
                valid:false,
                name:"",
                slug:"",


                nameRules: [
                    v => !!v || 'Le nom est obligatoire',
                ],
                slugRules: [
                    v => !!v || 'Le slug est obligatoire',
                ],
            }
        },
        methods: {
            addProject: function() {

                this.$store.dispatch('addSpot', {name: this.name, slug: this.slug});
                this.$refs.projectForm.reset();
            }
        }
    }
</script>

<style>

</style>


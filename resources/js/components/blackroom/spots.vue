<template>
    <div
        style="padding-left:50px;padding-right:50px;">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card>
                <v-card-title class="lighten-2">
                    Êtes-vous sûr ?
                </v-card-title>
                <v-card-text>
                    Le plateau sera supprimé !
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="secondary"
                        @click="dialog = false"
                    >
                        Annuler
                    </v-btn>
                    <v-btn
                        color="error"
                        @click="deleteSpotConfirm()"
                    >
                        Supprimer
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="dialogEdit"
            width="500"
        >
            <v-card>
                <v-card-title class="lighten-2">
                    Modifier le plateau
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="editSpotConfirm()" v-model="valid2" ref="spotForm">
                        <v-card-text>

                            <v-text-field
                                id="name"
                                prepend-icon="account_balance"
                                name="name"
                                label="Nom du plateau"
                                color="#e91f62"
                                v-model="editedSpot.name"
                                :rules="nameRules"
                                required></v-text-field>


                            <v-text-field id="slug"
                                          prepend-icon="link"
                                          name="slug"
                                          label="slug"
                                          color="#e91f62"
                                          v-model="editedSpot.slug"
                                          :rules="slugRules"
                                          required></v-text-field>


                        </v-card-text>
                    </v-form>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="secondary"
                        @click="dialog = false"
                    >
                        Annuler
                    </v-btn>
                    <v-btn
                        color="success"
                        @click="editSpotConfirm(editedSpot)"
                        :disabled="!valid2"
                    >
                        Modifier
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <h1 style="margin-bottom:20px;">Gestion des plateaux</h1>
        <v-card width="100%">
            <v-card-title>
                <v-icon x-large
                        color="black">
                    add_circle_outline
                </v-icon>
                &nbsp;Ajouter un plateau
            </v-card-title>
            <v-form @submit.prevent="addSpot()" v-model="valid" ref="spotForm">
                <v-card-text>

                    <v-text-field
                        id="name"
                        prepend-icon="account_balance"
                        name="name"
                        label="Nom du plateau"
                        color="#e91f62"
                        v-model="name"
                        :rules="nameRules"
                        required></v-text-field>


                    <v-text-field id="slug"
                                  prepend-icon="link"
                                  name="slug"
                                  label="slug"
                                  color="#e91f62"
                                  v-model="slug"
                                  :rules="slugRules"
                                  required></v-text-field>


                </v-card-text>
                <v-card-actions style="padding:20px;">
                    <v-spacer></v-spacer>
                    <v-btn color="#e91f62" type="submit" x-large :disabled="!valid" class="white--text"> Enregistrer
                        le plateau
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
                &nbsp;Liste des plateaux
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
                <v-btn icon
                       @click="editSpot(spot.id)">
                    <v-icon color="grey lighten-1">create</v-icon>
                </v-btn>
                <v-btn icon
                       @click="deleteSpot(spot.id)">
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
        name: "spots.vue",
        data: function () {
            return {
                valid:false,
                valid2:false,
                name:"",
                slug:"",
                dialog: false,
                dialogEdit: false,
                spotIdToDelete:"",
                editedSpot:"",

                nameRules: [
                    v => !!v || 'Le nom est obligatoire',
                ],
                slugRules: [
                    v => !!v || 'Le slug est obligatoire',
                ],
            }
        },
        methods: {
            addSpot: function() {
               this.$store.dispatch('addSpot', {name: this.name, slug: this.slug});
                this.$refs.spotForm.reset();
            },
            deleteSpot: function (spotId) {
                this.dialog = true
                this.spotIdToDelete = spotId;
            },
            deleteSpotConfirm: function () {
                this.$store.dispatch('deleteSpot', this.spotIdToDelete);
                this.spotIdToDelete = "";
                this.dialog = false
            },
            /*editSpot: function (spotId){
                this.editedSpot = this.$store.state.spots.find( spot => spot.id === spotId);
                this.dialogEdit = true
            },
            editSpotConfirm: function (){
                this.$store.dispatch('editSpotConfirm', {id: this.editedSpot.id, name: this.editedSpot.name, slug: this.editedSpot.slug});
                this.dialogEdit = false
            },*/
        }
    }
</script>

<style>

</style>

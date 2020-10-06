<template>
    <div
        style="padding-left:50px;padding-right:50px;">
        <h1 style="margin-bottom:20px;">Gestion des utilisateurs</h1>
        <v-card width="100%">
            <v-card-title>
                <v-icon  x-large
                 color="black">
                    account_box
                </v-icon>
                 &nbsp;Ajouter un utilisateur
            </v-card-title>
            <v-form @submit.prevent="addJudge()" v-model="valid">
                <v-card-text>

                    <v-text-field
                        prepend-icon="face"
                        name="name"
                        label="Nom"
                        color="#e91f62"
                        v-model="name"
                        :rules="nameRules"
                        background-color="white"
                        required></v-text-field>

                    <v-select
                        v-model="spot_id"
                        :items="spots"
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
                    >
                    </v-select>
                    <v-text-field id="email"
                                  prepend-icon="email"
                                  name="email"
                                  label="Email"
                                  type="email"
                                  color="#e91f62"
                                  v-model="email"
                                  :rules="emailRules"
                                  background-color="white"
                                  required></v-text-field>
                    <v-text-field id="password"
                                  prepend-icon="vpn_key"
                                  name="password"
                                  label="Mot de passe"
                                  type="text"
                                  color="#e91f62"
                                  v-model="password"
                                  :rules="passwordRules"
                                  background-color="white"
                                  required></v-text-field>
                    <v-row>
                    <v-col style="width:200px;">
                        <v-switch
                            v-model="id_admin"
                            label="Administrateur"
                            color="#C90F54"
                            value="#C90F54"
                            hide-details
                        ></v-switch>
                    </v-col>
                    <v-col>
                        <v-switch
                            v-model="is_judge"
                            label="Juge"
                            color="#C90F54"
                            value="#C90F54"
                            hide-details
                        ></v-switch>
                    </v-col>
                        </v-row>



                </v-card-text>
                <v-card-actions style="padding:20px;">
                    <v-spacer></v-spacer>
                    <v-btn color="#e91f62" type="submit" x-large :disabled="!valid" class="white--text"> Enregistrer l'utilisateur </v-btn>

                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "users.vue",
        data: function () {
            return {
                name: "",
                email: "",
                password: "",
                is_judge:0,
                is_admin:0,
                spot_id: 0,
                spots: [{id: 1, name: 'Quai alpha'}, {id: 2, name: 'Pôle e-tourisme'}, {id: 3, name: 'Pôle image'}],
                nameRules: [
                    v => !!v || 'Le nom est obligatoire',
                ],
                emailRules: [
                    v => !!v || 'L\'adresse mail est obligatoire',
                ],
                spotRules: [
                    v => !!v || 'Ce champ est obligatoire',
                ],
                passwordRules: [
                    v => !!v || 'Ce champ est obligatoire',
                ],
            }
        },
    }
</script>

<style>
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0px 30px #ffffff inset !important;
    }
</style>

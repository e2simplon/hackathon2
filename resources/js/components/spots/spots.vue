<template>
    <v-main style="backgroundColor : black" class="transit">
        <a href="/">
            <v-btn
                class="mx-2"
                fab
                large
                color="white"
                absolute
                left
                top
                style="left:15px;top:25px"
            >
                <v-icon color="black">
                    keyboard_backspace
                </v-icon>
            </v-btn>
        </a>
        <v-container fill-height fluid style="padding:0px;">
            <v-row align="center" justify="center">

                <v-col align="center" justify="center" cols="6" style="padding:0px;">
                    <transition name="slide-fade">
                        <v-row align="center" justify="center" :style="{'background-image': 'url(' + selectedBackground + ')'}" class="backgroundImage" style="height:100vh;">

                            <img src="/img/logo-qa-white.svg" width="600">

                        </v-row>
                    </transition>
                </v-col>

                <v-col align="center" justify="center" cols="6" style="padding:0px;">
                    <v-row class="specialHeight transit" align="center" justify="center"
                           :style="{backgroundColor : backgroundQA}"
                           @mouseover="backgroundQA = '#C90F54', selectedBackground='/img/quai-alpha.jpg'"
                           @mouseout="backgroundQA = '#212121',selectedBackground='none'" @click="goScoring()">scoring quai alpha
                    </v-row>
                    <v-row class="specialHeight transit" align="center" justify="center"
                           :style="{backgroundColor : backgroundTourisme}"
                           @mouseover="backgroundTourisme = '#cae00f', selectedBackground='/img/pole-tourisme.jpg'"
                           @mouseout="backgroundTourisme = '#424242',selectedBackground='none'">scoring pôle e-tourisme
                    </v-row>
                    <v-row class="specialHeight transit" align="center" justify="center"
                           :style="{backgroundColor : backgroundImage}"
                           @mouseover="backgroundImage = '#21164E', selectedBackground='/img/pole-image.jpg'"
                           @mouseout="backgroundImage = '#616161',selectedBackground='none'">scoring pôle image
                    </v-row>
                    <v-row class="specialHeight transit" align="center" justify="center"
                           :style="{backgroundColor : backgroundFinale}"
                           @mouseover="backgroundFinale = '#FFD500', selectedBackground='/img/grande-finale.jpg'"
                           @mouseout="backgroundFinale = '#757575',selectedBackground='none'">scoring grande finale
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        name: 'spots.vue',
        data: function () {
            return {
                backgroundQA: '#212121',
                backgroundTourisme: '#424242',
                backgroundImage: '#616161',
                backgroundFinale: '#757575',
                selectedBackground: 'none',
                currentID: 0,
            }
        },
        methods: {
            goScoring () {
                this.$root.$router.push({ name: 'scoring' })
            }
        }
    }
</script>

<style>
    .transit {
        transition: background-color 0.5s ease;
    }

    .specialHeight {
        height: 25vh;
        font-size: 40px;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        text-transform: uppercase;
    }

    .backgroundImage {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        -webkit-transition: background-image 0.2s ease-in-out;
        transition: background-image 0.2s ease-in-out;
    }

    .effect {
        /* make this the size of the window */
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .slide-fade-enter-active {
        opacity: 1;
        z-index: 10;
    }

    .slide-fade-leave-active {
        opacity: 1;
    }

    .slide-fade-enter,
    .slide-fade-leave-to {
        opacity: 0;
    }


</style>


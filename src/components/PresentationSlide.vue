<template>
    <div data-aos="fade-up" :class="'image-and-text div-bounce '  + (active ? 'div-bouncing' : '')">
            <div class="image-and-text-text">
                <h4>Trackez vos stats en direct</h4>
                <p>
                Suivez statistiques, classements et tournois sur Discord
                directement
                </p>
          </div>
          <div class="image-and-text-image">
            <img
              src="https://cdn.glitch.com/12319aa7-c5e0-41a5-82b7-d5c9ad05fdd0%2FStatistiques.png?v=1572108211945"
            />
          </div>
        </div>
</template>

<script>

//import { Waypoint } from 'vue-waypoint'
import AOS from 'aos'
export default {

    name: "PresentationSlide",
    data() {
        return {
            active: false
        }
    },
    components: {
        //Waypoint

    },

    methods: {
        wannaKMS(context) {
            console.log(context)
        }
    },
    created() {
        AOS.init()
    },

}
</script>
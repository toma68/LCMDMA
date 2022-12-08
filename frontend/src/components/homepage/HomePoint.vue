<template>
  <v-main class="homepoint">
    <div class="debut_trop_style">
      <img src="/images/le_chateau_sans_ciel.png" height="113%" width="113%" id="chateau" alt="Jolie Image de Chateau">
      <img src="/images/le_ciel_du_chateau.png" height="113%" width="113%" id="ciel" alt ="Jolie Image du ciel">
      <img src="/images/rocher.png" id="rocher" alt="rocher">
      <div class="titre">
        <h1>La Cour Médievale De </h1>
        <h1>Monseigneur Ambert </h1>
      </div>
      <div class="date-lieux">
        <h2>Les 8 et 9 juillet 2023</h2>
        <h2>au chateau de Montby</h2>
      </div>
      <div class="button-see-more">
        <a @click="ClickSuivant">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#fff"
               class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            <path fill-rule="evenodd"
                  d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </a>
      </div>
    </div>

  </v-main>
</template>

<script>
export default {
  name: "HomePoint",
  methods: {
    ClickSuivant() {
      this.$emit("click-suivant");
    }
  },
  mounted() {
    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      var chateau = document.getElementById('chateau');

      chateau.style.transform = 'translate(' + x / 100 + 'px, ' + y / 100 + 'px)';
    })
  }
}
</script>

<style scoped>
body{
  overflow-x: hidden;
}

header{
  position: absolute;
  width: 100%;
}

/* Les images */
.debut_trop_style{
  height: 100vh;
  overflow-y: hidden;
}
#chateau{
  position: absolute;
  z-index: 1;
  left:-20px;
  top: -100px;

}

#ciel{
  position: absolute;
  top: -100px;
  z-index: 0;
}

#rocher{
  position: relative;
  z-index: 0;
  top: 200px;
  left: -100px;
  height: 100px;
  animation: mymove 5s infinite, float 2s infinite, myrotate 10s infinite;
}



@keyframes mymove {
  0%   {left: -10%; top : 600px; z-index: 10;}
  35%  { top : 200px; z-index: 0}
  45%   {top : 250px;}
  100% {left: 150%;}
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}

@keyframes myrotate {
  0%   {transform: rotate(0deg);}
  100% {transform: rotate(2000deg);}
}


/* Les textes */

.titre{
  position: absolute;
  top: 18%;
  left: 7%;
  color: white;
  font-family: 'Secular One', sans-serif;
  text-align: center;
  z-index: 1;
  text-align: justify;
}
.titre h1{
  font-size: 5rem;
  font-weight: bold;
}


.date-lieux{
  position: absolute;
  top: 50%;
  left: 7%;
  color: white;
  font-family: 'Secular One', sans-serif;
  text-align: center;
  z-index: 1;
  text-align: justify;
}

.button-see-more{
  cursor: pointer;
  position: absolute;
  top: 90%;
  left: 7%;
  z-index: 3;
  transition: transform 0.5s;
}

.button-see-more:hover{
  transform: scale(1.2);
}


</style>
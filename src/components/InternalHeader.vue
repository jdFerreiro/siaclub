<template>
  <div class="row">
    <div class="header row degradadoBanderaGal">
      <div class="col-md-12">
        <div class="left col-md-8 horizontalText">
          <div class="left logo">
            <img src="../assets/logoHG.png" style="width: 60px" />
          </div>
          <div class="left subtitulo">
            <span class="textoRojo bordeTextoAmarillo1 bold">
              Hermandad Gallega de Venezuela A.C.
            </span>
            <br />
            <span class="textoAmarillo bordeTextoRojo1"> Galicia en Caracas </span>
          </div>
        </div>
        <div class="right">
          <div class="horizontalText">
            <div>
              <p>Fecha: {{ currentDate() }}</p>
            </div>
            <div>
              <font-awesome-icon icon="globe" size="1x" /> &nbsp;Idioma: &nbsp;
              <select class="form-control" id="selLang">
                <option value="spa" selected>Español</option>
                <option value="gal">Gallego</option>
                <option value="eng">Inglés</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="InfoUser col-md-12 mt-2">
        <span class="right">
          <button class="btn btn-primary" @click="signOut">Cerrar Sesión</button>
        </span>
        <span class="fw-bold">Bienvenido: </span> {{ username }}<br />
        <span class="fw-bold">Última conexión: {{ lastConnectionDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "InternalHeader",
  data() {
    return {
      lastConnectionDate: null,
      username: "",
      userId: 0,
    };
  },
  mounted() {
    var date = this.$store.state.lastConnectedDate;
    this.username = this.$store.state.userName;
    this.userId = this.$store.state.userId;
    if (!date) {
      date = new Date();
    }
    this.lastConnectionDate = moment.utc(date).local().format("DD-MM-YYYY HH:mm");
  },
  methods: {
    currentDate() {
      return new Date().toLocaleString();
    },
    signOut() {
      this.$store.dispatch("auth/logout", this.userId);
      this.$router.push("/login");
    },
  },
};
</script>

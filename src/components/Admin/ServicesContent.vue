<template>
  <div class="w-90 m-auto bg-white mt-3">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center">Id</th>
          <th class="text-center">Nombre</th>
          <th class="text-center">Estado</th>
          <th class="right">
            <button
              type="button"
              class="btn btn-primary"
              @click="AddItem(0)"
              title="Agregar"
              data-bs-toggle="modal"
              data-bs-target="#pageModal"
            >
              <i class="fas fa-circle-plus fa-2x"></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" v-show="!this.dataResult">
          <td colspan="4">No hay información disponible</td>
        </tr>
        <tr v-show="this.dataResult" v-for="reg in this.dataResult" :key="reg">
          <td>
            {{ reg.IdServicio }}
          </td>
          <td>
            {{ reg.Descripcion }}
          </td>
          <td>
            {{ reg.EstadoServicio.Descripcion }}
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="EditItem(id)"
              title="Editar"
            >
              <i class="fas fa-pen"></i>
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="DelItem"
              title="Eliminar"
            >
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
    <modal-servicio :idReg="idData"></modal-servicio>
  </div>
</template>

<script>
import ModalServicio from "../Modals/modalServicio.vue";

export default {
  name: "ServicesContentAdmin",
  components: {
    ModalServicio,
  },
  data() {
    return {
      dataResult: null,
      idData: 0,
    };
  },
  mounted() {
    console.log(this.dataResult);
    this.$store
      .dispatch("servicio/getAll")
      .then((result) => {
        this.dataResult = result;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.dataResult);
  },
  methods: {
    AddItem(id) {
      this.idData = id;
    },
    EditItem(id) {
      this.idData = id;
    },
    DelItem() {},
  },
};
</script>

<style></style>

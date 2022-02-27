<template>
  <div
    class="modal fade"
    id="pageModal"
    tabindex="-1"
    aria-labelledby="pageModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-danger" id="pageModalLabel">Datos del Servicio</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            arial-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <Form @submit="handleAction" :validation-schema="schema">
            <div class="form-group mb-3">
              <label for="description">Descripción:</label>
              <Field name="description" type="text" class="form-control" />
              <ErrorMessage name="description" class="error-feedback" />
            </div>
            <div class="form-group">
              <button class="right btn btn-primary btn-block" :disabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Guardar</span>
              </button>
            </div>
            <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "modalServicio",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    idReg: Number,
  },
  data() {
    const schema = yup.object().shape({
      description: yup.string().required("La descripción es obligatoria!"),
    });
    return {
      schema,
      loading: false,
      message: "",
    };
  },
  created() {
    console.log(this.idReg);
  },
  methods: {
    handleAction(data) {
      if (this.idReg && this.idReg > 0) {
        var updReg = {
          id: this.idReg,
          description: data.description,
        };

        this.$store.dispatch("servicio/update", updReg).then();
      } else {
        var newReg = {
          description: data.description,
        };

        this.$store.dispatch("servicio/create", newReg).then();
      }
    },
  },
};
</script>

<style></style>

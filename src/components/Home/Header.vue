<template>
  <div class="container-fluid">
    <div class="header row degradadoBanderaGal">
      <div class="col-md-12">
        <div class="left col-md-8 horizontalText">
          <div class="left logo">
            <img src="../../assets/logoHG.png" style="width: 60px" />
          </div>
          <div class="left subtitulo">
            <span class="textoRojo bordeTextoAmarillo1 bold">
              Hermandad Gallega de Venezuela
            </span>
            <br />
            <span class="textoAmarillo bordeTextoRojo1">
              Galicia en Caracas
            </span>
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
      <ul id="menuDD" class="dropdown">
        <li v-for="menu in primaryMenu" :key="menu">
          <a href="#"> {{ menu.name }} <span v-if="menu.children"><i class="fas fa-caret-down"></i> </span> </a>
          <ul v-if="menu.children" style="margin-left: -28px;">
            <li v-for="child in menu.children" :key="child">
              <a href="" v-if="!child.children"> {{child.name}} </a>
              <a href="#" v-if="child.children"> {{child.name}} <span><i class="fas fa-caret-right"></i> </span> </a>
              <ul v-if="child.children">
                  <li v-for="child1 in child.children" :key="child1" style="margin-left: -28px;">
                    <a href=""> {{child1.name}} </a>
                  </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="right">
          <a href="#"> <span><i class="fas fa-user"></i></span>&nbsp;&nbsp;Ingresar&nbsp;&nbsp;<span><i class="fas fa-caret-down"></i> </span> </a>
          <div class="degradadoBanderaGal dropstart fixed" style="width: 320px;margin-left:auto; margin-right:0;">
            <Form class="mx-4 my-3 was-validated" @submit="handleLogin" :validation-schema="schema">
              <div class="fw-bold center w-100">
                Acceso de Socios
              </div>
              <div class="mb-3">
                <label for="useremail" class="form-label">Correo electrónico:</label>
                <Field name="useremail" type="email" class="form-control" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">No compartiremos tu correo electrónico con nadie más sin tu autorización.</div>
                <ErrorMessage name="username" class="error-feedback" />
              </div>
              <div class="mb-3">
                <label for="userpassword" class="form-label">Contraseña:</label>
                <Field type="password" class="form-control" name="userpassword" />
                <ErrorMessage name="userpassword" class="error-feedback" />
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" name="chkremember" />
                <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
              </div>
              <button type="submit" class="btn btn-primary btn-block right">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Ingresar</span>
              </button>
              <div class="form-group">
                <div v-if="message" class="alert alert-danger" role="alert">
                  {{ message }}
                </div>
              </div>
            </Form>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">¿No tienes usuario? Registrate</a>
            <a class="dropdown-item" href="#">¿Olvidaste la contraseña?</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";
import { FontAwesomeIcon } from '../../plugins/font-awesome';
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    FontAwesomeIcon,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      useremail: yup.string().required("Se requiere un correo electrónico"),
      userpassword: yup.string().required("Se requiere la contraseña"),
    });
    return {
      loading: false,
      message: "",
      schema,
      primaryMenu: [
        {
          name: "Inicio",
        },
        {
          name: "Junta Directiva",
          children: [
            { name: "Junta Directiva" },
            { name: "Órganos Electivos" },
            {
              name: "Comité de Damas",
              children: [
                { name: "Escuela de Sevillanas" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Comité Juvenil",
            },
          ],
        },
        {
          name: "Direcciones",
          children: [
            {
              name: "Dirección de Admisión y Órden Social",
              children: [
                { name: "Planillas para descargar" },
                { name: "Trámites" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Asistencia Social",
              children: [
                { name: "Centro de Día Santiago Apostol" },
                { name: "Jornadas de Salud" },
                { name: "Directorio Médico" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Cultura",
              children: [
                { name: "Planillas para descargar" },
                { name: "Grupos Folklóricos" },
                { name: "Teatro" },
                { name: "Corales" },
                { name: "Gaitas" },
                { name: "Ballet" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Deportes",
              children: [
                { name: "Gimnasio" },
                { name: "Actividades Deportivas" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Fiestas",
              children: [
                { name: "Día de Galicia" },
                { name: "Noite de San Xoan" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Obras y Mantenimiento",
              children: [
                { name: "Mantenimiento y Remodelaciones" },
                { name: "Contacto" },
              ],
            },
            {
              name: "Dirección de Relaciones Públicas",
              children: [
                { name: 'Boletín "Somos Hermandad"' },
                { name: "Contacto" },
              ],
            },
            {
              name: "Oficina de Administración",
            },
          ],
        },
        {
          name: "Estatutos y Reglamentos",
          children: [
            {
              name: "Estatutos",
            },
            {
              name: "Reglamento de la Cámara de Representantes",
            },
          ],
        },
        {
          name: "Servicios",
          children: [
            {
              name: "Servicios Médicos",
            },
            {
              name: "Restaurantes y Cafeterías",
            },
            {
              name: "Área Comercial",
            },
          ],
        },
        {
          name: "OBAS",
          children: [
            {
              name: "Planillas para Descargar",
            },
            {
              name: "Programas",
            },
            {
              name: "Contacto",
            },
            {
              name: "Convocatorias",
            },
          ],
        },
        {
          name: "Conócenos",
          children: [
            {
              name: "Historia",
            },
            {
              name: "Sedes",
              children: [
                {
                  name: "Maripérez",
                },
                {
                  name: "Valle Fresco",
                },
              ],
            },
          ],
        },
        {
          name: "Prensa Española",
          children: [
            {
              name: "Magazine Español",
            },
            {
              name: "La Voz de Galicia",
            },
            {
              name: "La Región Internacional",
            },
            {
              name: "Galicia en el Mundo",
            },
          ],
        },
      ],
      selectedDropdown: "None",
      content: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
  methods: {
    handleLogin(data) {
      this.loading = true;

       var userObj = {
        email: data.useremail,
        password: data.userpassword,
      };

      this.$store.dispatch("auth/login", userObj)
      .then(() => {
        this.$router.push("/profile");
      },
      (error) => {
        this.loading = false;
        this.message = (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();
      });
    },
    currentDate() {
      return new Date().toLocaleString();
    },
    setSelectedItem(item) {
      console.log("item selected" + item);
      this.selectedDropdown = item;
    },
  },
};
</script>

<style>

#menuDD {
  margin-top: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: block;
  position: relative;
  float: left;
}

li ul, li div { display: none; }

li div form div {
  display: block;
}

ul li a {
  display: block;
  text-decoration: none;
  white-space: nowrap;
  padding: 1em;
  color: #000;
}

ul li a:hover { 
  background: #da1919; 
  color: yellow; 
}

li:hover > ul {
  display: block;
  position: absolute;
}

li:hover > div {
  display: block;
}

li:hover li { float: none; }

li:hover a {
  background: rgb(255,255,255);
  background: -moz-linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,158,224,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,158,224,1) 100%);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,158,224,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#009ee0",GradientType=1);
}


.main-navigation li ul li { border-top: 0; }

ul ul ul {
  left: 100%;
  top: 0;
}

ul:before,
ul:after {
  content: " "; /* 1 */
  display: table; /* 2 */
}

ul:after { clear: both; }

</style>

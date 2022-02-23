<template>
  <div class="container-fluid">
    <div class="header row degradadoBanderaGal">
      <div class="col-md-12">
        <div class="left col-md-8 horizontalText">
          <div class="left logo">
            <img src="../assets/logoHG.png" style="width: 60px" />
          </div>
          <div class="left subtitulo">
            <span class="textoRojo bordeTextoRojo1"
              >Hermandad Gallega de Venezuela</span
            ><br />
            <span class="textoAmarillo bordeTextoNegro1"
              >La segunda casa de los gallegos en Caracas</span
            >
          </div>
        </div>
        <div class="right">
          <div class="horizontalText">
            <div>
              <p>Fecha: {{ currentDate() }}</p>
            </div>
            <div>
              <font-awesome-icon icon="globe" size="1x" />&nbsp;Idioma: &nbsp;
              <select id="selLang">
                <option value="spa" selected>Español</option>
                <option value="gal">Gallego</option>
                <option value="eng">Inglés</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-default dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Dropdown <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li v-for="item in menuItems" :key="item" :class="{ 'dropdown-submenu': item.children }">
            <a class="test" tabindex="-1" href="#">
                {{ item.name }}<span class="caret" v-if="item.children"></span>
            </a>
            <ul class="dropdown-menu" v-if="item.children">
              <li v-for="child in item.children" :key="child">
                <a tabindex="-1" href="#" @click="setSelectedItem(child.name)">
                    {{ child.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { $ } from 'jquery';
import UserService from "../services/user.service";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: "Home",
    data() {
        return {
            menuItems: [
                {
                    name: 'Item 1',
                    children: [
                            {name: 'Subitem 1'},
                            {name: 'Subitem 2'},
                            {name: 'Subitem 3'}
                        ]
                },
                {
                    name: 'Item 2'
                }
            ],
            selectedDropdown: 'None',
            content: "",
        };
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
        currentDate() {
            return new Date().toLocaleString();
        },
        setSelectedItem(item) {
            this.selectedDropdown = item;
        }
    },
    ready: function() {
        $('.drop*down-submenu a.test').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });    
    }
};
</script>

<style>
.dropdown-submenu {
    position: relative;
}

.dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -1px;
}
</style>
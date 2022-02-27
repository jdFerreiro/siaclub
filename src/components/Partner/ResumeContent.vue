<template>
  <div class="row">
    <div class="row mt-4">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-header text-center">Resumen Financiero</div>
          <div class="card-body" style="height: 150px">Body</div>
          <div class="card-footer">
            <div class="right">
              <button class="btn btn-primary">Pagar</button>
            </div>
          </div>
        </div>
        <div class="card" style="margin-top: 10px">
          <div class="card-header text-center">Avisos Importantes</div>
          <div class="card-body" style="height: 155px">Body</div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="card">
          <div class="card-header text-center">
            Servicios <br />
            Realice todas sus operaciones en un solo lugar
          </div>
          <div class="card-body overflow-auto" style="max-height: 380px">
            <div class="row showServiceMap">
              <div class="lineMap col-md-12"></div>
              <div class="lineMap col-md-12"></div>
              <div class="row lineMap">
                <div class="col-md-2"></div>
                <div class="row col-md-2">
                  <div class="col-md-6"></div>
                  <div class="col-md-6">
                    <router-link to="/BusinessPartner">
                      <i
                        class="fas fa-store fa-2x fa_cianShadowText_2_2_5"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Área comercial"
                        aria-hidden="true"
                      >
                      </i>
                      <br />
                      <span>Comercios</span>
                    </router-link>
                  </div>
                </div>
                <div class="col-md-2">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Raquet"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Raquet</span>
                  </a>
                </div>
                <div class="col-md-1">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Paddle"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Paddle</span>
                  </a>
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-1">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Frontón"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Frontón</span>
                  </a>
                </div>
              </div>
              <div class="row lineMap">
                <div class="col-md-3 text-center">
                  <a href="#">
                    <i
                      class="fas fa-car-rear fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Estacionamiento"
                      aria-hidden="true"
                    >
                    </i
                    ><br />
                    <span>Estacionamiento</span>
                  </a>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-2 ms-3">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Tenis de Mesa"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Tenis de Mesa</span>
                  </a>
                </div>
                <div class="col-md-1">
                  <a href="#">
                    <i
                      class="fas fa-hotdog fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="La Raqueta"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>La Raqueta</span>
                  </a>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1">
                  <a class="text-black" href="#">
                    <i
                      class="fas fa-basketball fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Basquet"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Basquet</span>
                  </a>
                </div>
                <div class="col-md-1">
                  <a class="text-black" href="#">
                    <i
                      class="fas fa-volleyball fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Volibol"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Volibol</span>
                  </a>
                </div>
                <div class="col-md-2"></div>
              </div>
              <div class="lineMap"></div>
              <div class="lineMap"></div>
              <div class="row lineMap">
                <div class="col-md-4"></div>
                <div class="col-md-3">
                  <a href="#">
                    <i
                      class="fas fa-table-tennis-paddle-ball fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Tenis"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Tenis</span>
                  </a>
                </div>
                <div class="col-md-5"></div>
              </div>
              <div class="row lineMap">
                <div class="col-md-4"></div>
                <div class="col-md-1">
                  <a href="#">
                    <i
                      class="fas fa-bandage fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Servicios Médicos"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Servicios Médicos</span>
                  </a>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1">
                  <a href="#">
                    <i
                      class="fas fa-book-open-reader fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Castelao"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Castelao</span>
                  </a>
                </div>
                <div class="col-md-5"></div>
              </div>
              <div class="lineMap"></div>
              <div class="row lineMap">
                <div class="col-md-4"></div>
                <div class="col-md-1">
                  <a href="#">
                    <i
                      class="fas fa-credit-card fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Administración"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Administración</span>
                  </a>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1">
                  <a href="#">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="La Tasca"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>La Tasca</span>
                  </a>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-1">
                  <a class="text-black" href="#">
                    <i
                      class="fas fa-futbol fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Fútbol"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Fútbol</span>
                  </a>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-2">
                  <a href="#">
                    <i
                      class="fas fa-bowling-ball fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Pool"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Pool</span>
                  </a>
                </div>
              </div>
              <div class="row lineMap">
                <div class="col-md-2"></div>
                <div class="col-md-2">
                  <a href="#">
                    <i
                      class="fas fa-dumbbell fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Gimnasio"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Gimnasio</span>
                  </a>
                </div>
                <div class="col-md-8"></div>
              </div>
              <div class="row lineMap">
                <div class="col-md-10"></div>
                <div class="col-md-1">
                  <a href="#">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="La Marina"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>La Marina</span>
                  </a>
                </div>
                <div class="col-md-1"></div>
              </div>
              <div class="row lineMap">
                <div class="col-md-10"></div>
                <div class="col-md-2">
                  <a class="text-black" href="#">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="A Chave"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>A Chave</span>
                  </a>
                </div>
              </div>
              <div class="lineMap"></div>
              <div class="row lineMap">
                <div class="col-md-1"></div>
                <div class="col-md-2">
                  <a href="#">
                    <i
                      class="fas fa-masks-theater fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Teatro"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Teatro</span>
                  </a>
                </div>
              </div>
              <div class="row lineMap">
                <div class="col-md-4"></div>
                <div class="col-md-2">
                  <a href="#">
                    <i
                      class="fas fa-person-swimming fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Natación"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Natación</span>
                  </a>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-2">
                  <a href="#">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Xacobeo"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>Xacobeo</span>
                  </a>
                </div>
                <div class="col-md-2"></div>
              </div>
              <div class="lineMap"></div>
              <div class="lineMap"></div>
              <div class="row lineMap">
                <div class="col-md-5"></div>
                <div class="col-md-2">
                  <a href="#">
                    <i
                      class="fas fa-utensils fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="La Plaza"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>La Plaza</span>
                  </a>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-2">
                  <a href="#">
                    <i
                      class="fas fa-users fa-2x fa_cianShadowText_2_2_5"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="J. Directiva"
                      aria-hidden="true"
                    >
                    </i>
                    <br />
                    <span>J. Directiva</span>
                  </a>
                </div>
                <div class="col-md-2"></div>
              </div>
              <div class="lineMap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";

export default {
  // eslint-disable-next-line
  name: "ResumeContent",
  data() {
    return {};
  },
  mounted() {
    Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]')).forEach(
      (tooltipNode) => new Tooltip(tooltipNode)
    );
  },
  created() {},
};
</script>

<style></style>

import { createStore } from "vuex";
import { auth } from "./auth.module";

export default createStore({
    state: {
        stateId: null,
        userId: null,
        email: null,
        isAuthenticated: false,
        rolId: [],
        userName: null,
        lastConnectedDate: null,
        user: null,
        IdSocio: null,
        IdPersona: null,
    },
    mutations: {
        setAuthenticated(state, value) {
            state.isAuthenticated = value;
        },
        setAuthData(state, { stateId, userId, email, rolId, userName, lastConnectedDate, idSocio, idPersona }) {
            state.userId = userId;
            state.stateId = stateId;
            state.email = email;
            state.rolId = rolId;
            state.userName = userName;
            state.lastConnectedDate = lastConnectedDate;
            state.IdSocio = (idSocio) ? idSocio : null;
            state.IdPersona = (idPersona) ? idPersona : null ;
        },
    },    
    modules: {
        auth
    },
});


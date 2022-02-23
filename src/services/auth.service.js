import api from "./api";
import TokenService from "./token.service";

class AuthService {
    login( { email, password }) 
    {
        return api.post('auth/signIn', {
            email: email,
            password: password
        }).then(response => {
            if (response.data.accessToken) {
                TokenService.setUser(response.data);
            }
            return response.data;
        });
    }
    logout() {
        var user = localStorage.getItem('user');
        
        return api.post('auth/signOut', {
            username: user.id
        }).then(response => {
            if (response.data.success) {
                TokenService.setUser(response.data);
            }
            return response.data;
        });
    }
    register({ email, password, roles }) {
        return api.post('auth/signUp', {
            NroAccion: email,
            ClaveUsuario: password,
            Roles: roles
        });
    }
}

export default new AuthService();
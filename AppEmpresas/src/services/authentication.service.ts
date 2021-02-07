import axios from 'axios'
// @ts-ignore
import { BASE_URL, API_VERSION } from '@env';
import { UserState } from '../redux/reducers/auth-reducer';

class AuthenticationService {
    private URL = `${BASE_URL}${API_VERSION}/users/auth/sign_in`
    private HEADERS = { 'Content-Type': 'application/json' }

    public async login(email: string, password: string) {
        const body = { email, password }
        const result: UserState = {
            token: null,
            client: null,
            uid: null
        }
        try {
            const response = await axios.post(this.URL, body, { headers: this.HEADERS })
            result.token = response.headers["access-token"]
            result.client = response.headers["client"]
            result.uid = response.headers["uid"]
            
        } catch (error) {
            console.log(error, this.URL)
        }

        return result
    }


}

export const authenticationService = new AuthenticationService()
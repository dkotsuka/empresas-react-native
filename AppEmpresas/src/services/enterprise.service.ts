import axios from 'axios'
// @ts-ignore
import { BASE_URL, API_VERSION } from '@env';
import { Enterprise, EnterpriseDetails } from './enterprise.service.types';
import { enterpriseMapper, MappedEnterprise, MappedEnterpriseDetails, MappedType } from './enterprise.mapper';

interface ListResult {
    enterprises: MappedEnterprise[],
    types: MappedType[]
}

class EnterpriseService {
    headers = { 
        "Content-Type": "application/json",
        "access-token": "",
        "client": "",
        "uid": ""
    }

    public setCredentials(token: string, client: string, uid:string) {
        this.headers["access-token"] = token
        this.headers["client"] = client
        this.headers["uid"] = uid
        return this
    }

    public async list(type?: number, query?: string): Promise<ListResult> {
        const typeFilters = type ? `enterprise_types=${type}` : ""
        const queryFilters = query ? `&name=${query}` : ""
        const filters = (typeFilters || queryFilters) ? `?${typeFilters}${queryFilters}` : ""

        const url = `${BASE_URL}${API_VERSION}/enterprises${filters}`
        const result: ListResult = {
            enterprises: [],
            types: []
        }
        try {
            const response = await axios.get(url, {headers: this.headers})
            const resEnterprises: Enterprise[] = response.data.enterprises
            const [enterprises, types] = enterpriseMapper.mapAll(resEnterprises)
            result.enterprises = enterprises
            result.types= types
        } catch (error) {
            console.log(error, url)
        }
        return result
    }

    public async getOne(enterpriseId: number|string): Promise<MappedEnterpriseDetails | null> {
        const url = `${BASE_URL}${API_VERSION}/enterprises/${enterpriseId}`
        let result = null
        try {
            const response = await axios.get(url, {headers: this.headers})
            const resEnterprise: EnterpriseDetails = response.data.enterprise
            result = enterpriseMapper.mapDetails(resEnterprise)
        } catch(error) {
            console.log(error, url)
        }
        return result
    }
}

export const enterpriseService = new EnterpriseService()
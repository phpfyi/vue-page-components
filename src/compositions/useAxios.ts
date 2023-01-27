import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import https from 'https'
import { ref } from 'vue'
import * as Client from '../types/Client'
import { useEnvironment } from './useEnvironment'

export function useAxios() {
    const { isSSR } = useEnvironment()

    const fetching = ref(false)

    const client = (): AxiosInstance => {
        return axios.create({
            ...(isSSR()
                ? {
                      httpsAgent: new https.Agent({
                          rejectUnauthorized: false,
                      }),
                  }
                : {}),
        })
    }
    const fetch = async (
        callback: (client: AxiosInstance) => Promise<unknown>
    ): Promise<Client.Response> => {
        let response: AxiosResponse | null = null
        let exception: AxiosError | null = null

        fetching.value = true

        try {
            response = (await callback(client())) as AxiosResponse
        } catch (e) {
            exception = e as AxiosError
        }
        fetching.value = false

        const body: Client.ResponseData = exception ? exception?.response?.data : response?.data

        return { response, exception, body }
    }
    return {
        fetch,
        fetching,
    }
}

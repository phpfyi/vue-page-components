import { AxiosError, AxiosResponse } from 'axios'

export type RequestData = Record<string, unknown>
export type ResponseData = Record<string, unknown>

export interface Response {
    response: AxiosResponse | null
    exception: AxiosError | null
    body: ResponseData
}

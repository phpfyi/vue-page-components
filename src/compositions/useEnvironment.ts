import { ENVIRONMENTS } from '../constants/Environment'
import { Environment } from '../types/Environment'

export function useEnvironment() {
    const isEnv = (environment: Environment): boolean => process.env.NODE_ENV === environment
    const isDev = (): boolean => isEnv(ENVIRONMENTS.DEVELOPMENT)
    const isProd = (): boolean => isEnv(ENVIRONMENTS.PRODUCTION)
    const isSSR = (): boolean => typeof window === 'undefined'

    return {
        isEnv,
        isDev,
        isProd,
        isSSR,
    }
}

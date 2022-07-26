export const ENVIRONMENTS = <const>{
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
}

export type Environment = typeof ENVIRONMENTS[keyof typeof ENVIRONMENTS]

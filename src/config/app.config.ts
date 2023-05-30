export const EnvConfiguration = () =>({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: +process.env.PORT || 3002
})
// Esta configuración solo se usa en los modulos de nest, no en las partes más externas del proyecto
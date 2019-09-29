module.exports = {
    swaggerDefinition: {
        info: {
            description: 'Nodejs Deneme',
            title: 'Nodejs Deneme',
            version: '1.0.0',
        },
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https']
    },
    basedir: __dirname, //app absolute path
    files: ['../routes/*.js'] //Path to the API handle folder
}
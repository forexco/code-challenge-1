module.exports = {
    development: {        
        dialect: 'postgres',
        protocol: 'postgres',
        host: 'ec2-54-164-56-10.compute-1.amazonaws.com',
        database: 'da1si5vp3hl089',
        username: 'whktcalcfxaozo',
        password: '28c1ee0fe107da0d8d192123a003ca8d406adedb1caf64ce6ce0a6bcde6f0a38',
        port:'5432',     
        // uri: 'postgres://whktcalcfxaozo:28c1ee0fe107da0d8d192123a003ca8d406adedb1caf64ce6ce0a6bcde6f0a38@ec2-54-164-56-10.compute-1.amazonaws.com:5432/da1si5vp3hl089',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
            keepAlive: true,
        },
        ssl: true,
    },
}
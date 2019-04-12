module.exports = [
    {
        "name": "dev",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "postgres",
        "database": "typeormRelationId",
        "synchronize": false,
        "logging": false,
        "entities": [
            "entities/*.entity.ts"
        ],
        "migrations": [
            "migration/**/*.ts"
        ],
        "subscribers": [
            "subscriber/**/*.ts"
        ],
        "cli": {
            "entitiesDir": "entities",
            "migrationsDir": "migration",
            "subscribersDir": "subscriber"
        }
    }
];
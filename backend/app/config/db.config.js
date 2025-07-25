export default {
    HOST: "host.docker.internal",
    USER: "root",
    PASSWORD: "#Hemal",
    DB: "tutorial",
    PORT: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
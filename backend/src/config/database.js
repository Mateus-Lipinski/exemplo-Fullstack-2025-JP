import { Sequelize } from "sequelize";

class Database {

    constructor() {
        this.init();
    }

    init() {
        // .env - dotenv
        this.db = new Sequelize({
            database: 'exemplo-sexta-feira',
            host: 'dpg-d4l2l87pm1nc738ivigg-a',
            port: 5432,
            username: 'ronaldo',
            password: 'A3wSnYlGMJa518kP8wKhvGRLCY229UTC',
            dialect: 'postgres'
        })
    }
}

export default new Database()
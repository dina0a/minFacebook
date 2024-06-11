import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(`mysql://u8wovyvn9yrssqz6:5OtuJ8itkyVBod2CrzHT@b3krlcqevtzn4zaa2zmw-mysql.services.clever-cloud.com:3306/b3krlcqevtzn4zaa2zmw`)

export const connectDB = ()=>{sequelize.authenticate().then(()=>{console.log("db connected successfully");})
.catch(()=>{console.log("failed to connect to db");})
}

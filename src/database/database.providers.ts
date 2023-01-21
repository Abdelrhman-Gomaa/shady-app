import { Sequelize } from "sequelize-typescript";
import { User } from "../user/entities/user.entity";
import { Busket } from "../busket/entities/busket.entity";
import { Course } from "../course/entities/course.entity";
import { Subject } from "src/subject/entities/subject.entity";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () =>{
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER, // 'postgres'
        password: process.env.DATABASE_PASSWORD, //'pass123' 
        database: process.env.DATABASE_NAME,
        define: {
          timestamps: false
        }
      });
      sequelize.addModels([User, Busket, Course, Subject])
      //await sequlize.sync();

      // Check dataBase Connection
      sequelize.authenticate()
      .then(() => {
        console.log('DataBase Connected Successfully');
      }).catch((err) => {
        console.log(`Oobs Database Can't Connected : ${err.message}`)
      })
      
      sequelize.sync({alter: true})
        .then(() =>{
          console.log(`Models and relation synchronization In DB Successfully------------------------------`)
        }).catch((err) => {
          console.log(`Can't synchronization Models and relation In BD ------------------------------ ${err.message}`)
        });
      
      return sequelize;
    },
  },
];
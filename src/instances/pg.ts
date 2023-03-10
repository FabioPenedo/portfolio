import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.PG_DB as string,
  process.env.PG_USER as string,
  process.env.PG_PASSWORD as string,
  {
      dialect: 'postgres',
      port: parseInt(process.env.PG_PORT as string)
  }
);

export const sequelizeConnect = async () => {
  try {
    console.log("Conectando ao PostgreSQL...");
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso!");
  }catch (error){
    console.log("Erro de conexão: ", error);
  }
};
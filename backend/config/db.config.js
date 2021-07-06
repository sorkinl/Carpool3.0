export const HOST = "carpool-db.cesz2k2wejsn.us-east-2.rds.amazonaws.com";
export const USER = "postgres";
export const PASSWORD = "password";
export const DB = "carpool";
export const dialect = "postgres";
export const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};

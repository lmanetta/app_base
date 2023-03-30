//importar conexion a la db
import db from "../database/db.js";

//importamo sequelize
import { DataTypes } from "sequelize";


//se colocan los campos que vamos a utilizar que provienen de la db
const BlogModel = db.define('blogs', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
} , {
    timestamps: false,
    freezeTableName: true,
    tableName: "blogs"
});

export default BlogModel
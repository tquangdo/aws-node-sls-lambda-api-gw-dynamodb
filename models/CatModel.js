/**
 * Created by trungquandev.com's author on 05/12/2018.
 * models/CatModel.js
 */

let Joi = require("joi"); //định nghĩa các Object Schema
let dynamo = require("dynamodb");

class Cat {
    constructor() {
        this.tableName = "cat"; //tên database ở đây chúng ta sẽ để dạng tiếng anh số ít là cat, nó sẽ tự hiểu với tên database số nhiều cats trên AWS
        this.tableSchema = dynamo.define(this.tableName, {
            hashKey: "id",
            timestamps: false,
            schema: {
                id: Joi.string(),
                name: Joi.string(),
                kind: Joi.string(),
                createdAt: Joi.number().default(new Date().getTime()),
            }
        });
    }

    create(item, callback) {
        return this.tableSchema.create(item, callback);
    }
    getById(id, callback) {
        return this.tableSchema.get(id, callback);
    }
    update(newItem, callback) {
        return this.tableSchema.update(newItem, callback);
    }
    deleteById(id, callback) {
        return this.tableSchema.destroy(id, callback);
    }
}

// export default new Cat();
module.exports = new Cat();
const db = require('../../utils/database');

const Shop_14 = class Shop_14 {
    constructor(id, name, cat_id, remote_url, local_url) {
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }

    // get all categories
    static async fetchAll() {
        try {
            let results = await db.query(`SELECT * from Shop_14`);
            return results.rows;
        } catch (e) {
            console.log('error', e);
        }
    }

    static async fetchByCatId(id) {
        const query = {
            text: `SELECT * FROM Shop_14 WHERE cat_id = $1;`,
            values: [id]
        }
        try {
            const results = await db.query(query);
            return results.rows;
        } catch (e) {
            console.log(e);
        }
    }
};

// const test = async () => {
//   let results = await Category_14.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// }

// test();
module.exports = Shop_14;
const db = require('../../config/db');
const { date } = require('../../lib/utils');

module.exports = {
  all(callback) {
    db.query(
      `SELECT recipes.*,  chefs.name AS chef_name
    FROM recipes 
    LEFT JOIN chefs ON (recipes.chef_id = chefs.id)`,
      function (err, results) {
        if (err) throw `Database Error! ${err}`;

        callback(results.rows);
      }
    );
  },
  create(data, callback) {
    const query = `
      INSERT INTO recipes (        
        image,
        title,
        ingredients,
        preparation,
        information,   
        chef_id,     
        created_at        
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `;

    const values = [
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      data.chef,
      date(Date.now()).iso,
    ];

    db.query(query, values, function (err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(
      `
      SELECT recipes.*,  chefs.name AS chef_name
      FROM recipes 
      LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
      WHERE recipes.id = $1`,
      [id],
      function (err, results) {
        if (err) throw `Database Error! ${err}`;
        callback(results.rows[0]);
      }
    );
  },
  findBy(filter, callback) {
    db.query(
      `
      SELECT recipes.*,  chefs.name AS chef_name
      FROM recipes 
      LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
      WHERE recipes.title ILIKE '%${filter}%'      
      `,
      function (err, results) {
        if (err) throw `Database error! ${err}`;

        callback(results.rows);
      }
    );
  },
  update(data, callback) {
    const query = `
    UPDATE recipes SET
        image=($1),
        title=($2),
        ingredients=($3),
        preparation=($4),
        information=($5),
        chef_id=($6)
    WHERE id = $7
      `;

    const values = [
      data.image,
      data.title,
      data.ingredients,
      data.preparation,
      data.information,
      data.chef,
      data.id,
    ];

    db.query(query, values, function (err, results) {
      if (err) throw `Database Error! ${err}`;

      callback();
    });
  },
  delete(id, callback) {
    db.query(
      `DELETE FROM recipes WHERE id = $1`,
      [id],
      function (err, results) {
        if (err) throw `Database Error! ${err}`;

        return callback();
      }
    );
  },
  chefsSelectOptions(callback) {
    db.query(`SELECT name, id FROM chefs`, function (err, results) {
      if (err) throw `Database Error! ${err}`;
      callback(results.rows);
    });
  },
  paginate(params) {
    const { limit, offset, callback } = params;

    let query = `
    SELECT recipes.*, (SELECT count(*) FROM recipes) AS total   
    FROM recipes
    GROUP BY recipes.id LIMIT $1 OFFSET $2
    `;

    db.query(query, [limit, offset], function (err, results) {
      if (err) throw `Database Error! ${err}`;

      callback(results.rows);
    });
  },
};

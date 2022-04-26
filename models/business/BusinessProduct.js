const Database = require("../Database");

class BusinessProduct {
  id = 0;
  businessid = "";
  igapvendorid = "";
  businessvendorid = "";
  businessproductcategoryid = "";
  name = "";
  title = "";
  description = "";
  specification = "";
  mrp = 0;
  price = 0;
  instock = "";
  status = "";

  db = new Database.Database();

  constructor() {
    this.id = 0;
    this.businessid = 0;
    this.igapvendorid = 0;
    this.businessvendorid = "";
    this.businessproductcategoryid = "";
    this.name = "";
    this.title = "";
    this.description = "";
    this.specification = "";
    this.mrp = "";
    this.price = "";
    this.instock = "";
    this.status = "";
  }

  save = () => {
    if (this.id == 0) {
      this.query = "INSERT INTO business_products(businessid, igapvendorid, businessvendorid, businessproductcategoryid, name, title, description, specification, mrp, price, instock, status) ";
      this.query += "VALUES (" + this.businessid + ", " + this.igapvendorid + ", " + this.businessvendorid + ", ";
      this.query += this.businessproductcategoryid + " , '" + this.name + "', '" + this.title + "', '" + this.description +"', ";
      this.query += "'" +this.specification +  "', " + this.mrp + ", " + this.price + ", '" + this.instock + "', 'open')";
    } 
    else {
      this.query = "UPDATE business_products SET businessid = " + this.businessid + ", ";
      this.query += "igapvendorid = " + this.igapvendorid + ", ";
      this.query += "businessvendorid = " + this.businessvendorid + ", ";
      this.query += "businessproductcategoryid = " + this.businessproductcategoryid + ", ";
      this.query += "name = '" + this.name + "', ";
      this.query += "title = '" + this.title + "', ";
      this.query += "description = '" + this.description + "', ";
      this.query += "specification = '" + this.specification + "', ";
      this.query += "mrp = " + this.mrp + ", ";
      this.query += "price = " + this.price + ", ";
      this.query += "instock = '" + this.instock + "' ";
      this.query += "WHERE id =" + this.id;
    }
    console.log(this.query);
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  };

  list = () => {
    this.query = "SELECT * FROM business_products WHERE businessid = " + this.businessid + " ORDER BY name";
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  delete = () => {
    this.query = "DELETE FROM business_products WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  changestatus = () => {
    this.query = "UPDATE business_products SET status = '" + this.status + "' WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };

  get = () => {
    this.query = "SELECT * FROM business_products WHERE id = " + this.id;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) reject(err);
        resolve(result);
      });
    });
  };
}

module.exports = {
  BusinessProduct: BusinessProduct
};

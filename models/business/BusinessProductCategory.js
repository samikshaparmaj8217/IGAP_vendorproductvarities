const Database = require("../Database");

class BusinessProductCategory {

    id = 0;
    businessid = 0;
    srno = 0;
    picpath = "";
    name = "";

    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.businessid = 0;
        this.srno = 0;
        this.picpath = "";
        this.name = "";          
    }

    save = () => {
        if (this.id == 0) {
            this.query = "INSERT INTO business_productcategories(businessid, srno, picpath, name) ";
            this.query += "VALUES(" + this.businessid + ", " + this.srno + ", '" + this.picpath + "', '" + this.name + "')";        }
        else {
            this.query = "UPDATE business_productcategories SET  businessid = " + this.businessid + ", ";
            this.query += "name = '" + this.name + "', ";
            this.query += "srno = " + this.srno + ", picpath = '" + this.picpath + "' ";
            this.query += "WHERE id = " + this.id;
        }
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err){
                    return reject(err) };
                resolve(result);
            });
        });
    }
    list = ()=>{
        this.query = "SELECT * FROM business_productcategories ";
        this.query += "WHERE businessid = " + this.businessid + " ORDER BY srno";             
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });
    }

    delete = ()=>{
        this.query = "DELETE FROM business_productcategories WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });         
    }
    get = ()=>{
        this.query = "SELECT * FROM business_productcategories WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    reject(err);                
                resolve(result);
            });
        });         
    }
}

module.exports = {
    BusinessProductCategory: BusinessProductCategory
}
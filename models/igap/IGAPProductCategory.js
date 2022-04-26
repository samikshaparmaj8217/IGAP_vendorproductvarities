let Database = require("../Database");

class IGAPProductCategory {
    id = 0;
    name = "";
    picpath = "";
    srno = 0;
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.name = "";
        this.picpath = "";
        this.srno = 0;
    }

    save=()=>{
        if(this.id==0){
            this.query = "INSERT INTO igap_productcategories(name, picpath, srno) ";
           this.query += "VALUES('"+ this.name +"','"+ this.picpath +"', " + this.srno + ")"; 
        }
        else {
            this.query = "UPDATE igap_productcategories SET name = '" + this.name + "', ";
            this.query += "picpath = '" + this.picpath +"', ";
            this.query += "srno = " + this.srno +" ";
            this.query += "WHERE id = " + this.id;
        }
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }

    get=()=>{
        this.query = "SELECT * FROM igap_productcategories WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }

    list=()=>{
        this.query =  "SELECT * FROM igap_productcategories ORDER BY srno";
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }

    delete=()=>{
        this.query = "DELETE FROM igap_productcategories  WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.query, (err, result)=>{
                this.db.close();
                if(err)
                    return reject(err);                
                resolve(result);
            });
        });           
    }
}

module.exports={
    IGAPProductCategory:IGAPProductCategory
}
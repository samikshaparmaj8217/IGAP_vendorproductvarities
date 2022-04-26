let Database = require("../Database");

class IGAP_vendorproductvarieties{
    id = 0;
    productid = "";
    colour = "";
    size = "";
    weight = "";
    mrp = "";
    price = "";
    instock = "";
    status = "";

    // query = "";
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.productid = "";
        this.colour = "";
        this.size = "";
        this.weight = "";
        this.mrp = "";
        this.price = "";
        this.instock = "";
        this.status = "";
    }


    save = ()=>{
        if(this.id == 0)
        {
            this.query = "INSERT INTO igap_vendorproductvarieties(productid, colour, size, weight, mrp, price,instock, status )";
            this.query += "VALUES ('" + this.productid + "', '" + this.colour + "', '" + this.size + "', '" + this.weight + "', " + this.mrp + ", '" + this.price + "','" + this.instock + "','" + this.status + "')";
        }
        else
        {
            this.query = "UPDATE igap_vendorproductvarieties SET productid = '" + this.productid + "', ";
            this.query += "colour = '" + this.colour +"', ";
            this.query += "sizes = '" + this.size +"', ";
            this.query += "weight= " + this.weight + ", ";
            this.query += "mrp= " + this.mrp + ", ";
            this.query += "price = '" + this.price +"' ";
            this.query += "instock = '" + this.instock +"' ";
            this.query += "status = '" + this.status +"' ";
            this.query += "WHERE id = " + this.id;
        }
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });        
    }

    get = () =>{
        this.query = "SELECT * FROM igap_vendorproductvarieties WHERE id = " + this.id;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });        
    }

    list = () =>{
        this.query = "SELECT * FROM igap_vendorproductvarieties";
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

    
    delete = ()=>{
        this.query = "DELETE FROM igap_vendorproductvarieties  WHERE id =" + this.id;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

    change = ()=>{
        this.query = "UPDATE igap_vendorproductvarieties SET status='close' WHERE id =" + this.id;
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }
    changestock = ()=>{
        this.query = "UPDATE igap_vendorproductvarieties SET instock='N' WHERE id =" + this.id;
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

}



module.exports = {
    IGAP_vendorproductvarieties:IGAP_vendorproductvarieties
}
var express = require("express");
var IGAP_vendorproductvarieties = require("../../models/igap/IGAP_vendorproductvarieties")
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  let igapvendorproductvarieties = new IGAP_vendorproductvarieties.IGAP_vendorproductvarieties();
  igapvendorproductvarieties.id = body.data.id;
  igapvendorproductvarieties.productid = body.data.productid;
  igapvendorproductvarieties.colour = body.data.colour;
  igapvendorproductvarieties.size = body.data.size;
  igapvendorproductvarieties.weight = body.data.weight;
  igapvendorproductvarieties.mrp = body.data.mrp;
  igapvendorproductvarieties.price = body.data.price;
  igapvendorproductvarieties.instock = body.data.instock;
  igapvendorproductvarieties.status = body.data.status;

  igapvendorproductvarieties.save().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/get", async (req, res) => {
  let body = req.body;
  let igapvendorproductvarieties = new IGAP_vendorproductvarieties.IGAP_vendorproductvarieties();
  igapvendorproductvarieties.id = body.data.id;
  igapvendorproductvarieties.get().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/list", async (req, res) => {
  let body = req.body;
  let igapvendorproductvarieties = new IGAP_vendorproductvarieties.IGAP_vendorproductvarieties();

  igapvendorproductvarieties.list().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/delete", async (req, res) => {
  let body = req.body;
  let igapvendorproductvarieties = new IGAP_vendorproductvarieties.IGAP_vendorproductvarieties();
  igapvendorproductvarieties.id = body.data.id;
  igapvendorproductvarieties.delete().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/change", async (req, res) => {
  let body = req.body;
  let igapvendorproductvarieties = new IGAP_vendorproductvarieties.IGAP_vendorproductvarieties();
  igapvendorproductvarieties.id = body.data.id;
  
  igapvendorproductvarieties.change().then(result => {

      let data = {
          "status": "open",
          "data": result
      }


      res.end(JSON.stringify(data));
  },
      err => {
          let data = {
              "status": "close"
          }
          res.end(JSON.stringify(data));
          console.log(err)
      });
});

router.post("/changestock", async (req, res) => {
  let body = req.body;
  let igapvendorproductvarieties = new IGAP_vendorproductvarieties.IGAP_vendorproductvarieties();
  igapvendorproductvarieties.id = body.data.id;
  
  igapvendorproductvarieties.changestock().then(result => {

      let data = {
          "status": "Y",
          "data": result
      }


      res.end(JSON.stringify(data));
  },
      err => {
          let data = {
              "status": "N"
          }
          res.end(JSON.stringify(data));
          console.log(err)
      });
});
module.exports = router;
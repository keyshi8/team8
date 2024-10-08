var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',{title: 'Halaman Home',layout:'main'});
});

router.get('/produk', function(req, res, next) {
  res.render('produk',{title: 'Halaman produk',produk,produkminuman,produkobat,layout:'main'});
});
const produk = [
  { nama: "lays" , foto: "./img/lays.jpeg" },
  { nama: "snack buah", foto: "./img/snack.jpg" },
  { nama: "snack bar", foto: "./img/bar.jpg" }
];
const produkminuman = [
  { nama: "jelly", foto: "./img/jelly.jpg" },
  { nama: "minuman", foto: "./img/minuman.jpg" },
  { nama: "Fanta", foto: "./img/fanta.jpg" }
];
const produkobat = [
  { nama: "Paracetamol", foto: "./img/paracetamol.jpg" },
  { nama: "mylanta", foto: "./img/mylanta.jpg" },
  { nama: "panadol", foto: "./img/panadol.jpg" }
];
module.exports = router;

// route json produk
router.get("/stok",(req,res) => {
    res.json({
        "status" : "success",
        "message" : "Data Produk",
        "data" :[{kdbarang : 1332, namabarang:"beng-beng",jumlahstok:50},
                {kdbarang : 1322, namabarang:"paracetamol",jumlahstok:10},
                {kdbarang : 1232, namabarang:"Kacang",jumlahstok:20},
                {kdbarang : 1132, namabarang:"Indomie",jumlahstok:150},
                {kdbarang : 1142, namabarang:"Beras",jumlahstok:10},
                {kdbarang : 2232, namabarang:"susu",jumlahstok:530},
                {kdbarang : 132, namabarang:"air mineral",jumlahstok:60}]
    })
    
});
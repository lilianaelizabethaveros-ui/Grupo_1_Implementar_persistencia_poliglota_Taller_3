rs.initiate({ _id: "rs0", members: [{ _id: 0, host: "localhost:27017" }] });

db = db.getSiblingDB("distribuidora_db");

db.detalle_productos.insertOne({
    id_factura: 1001,
    productos: [
        { codigo: "TV001", nombre: "Smart TV 55 pulgadas", categoria: "Electrodomésticos", precio: 150.00 }
    ]
});

db.detalle_productos.find({ id_factura: 1001 });

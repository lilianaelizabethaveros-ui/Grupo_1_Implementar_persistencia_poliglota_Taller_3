// ==============================================================
// Taller 3: Persistencia Políglota - Catálogo Polimórfico (MongoDB)
// ==============================================================

// 1. Inicialización del Replica Set de 1 nodo (rs0)
try {
  rs.initiate({
    _id: "rs0",
    members: [{ _id: 0, host: "localhost:27017" }]
  });
  print("Replica set rs0 inicializado correctamente.");
} catch(e) {
  print("Replica set ya inicializado o en proceso: " + e);
}

// 2. Seleccionar base de datos e insertar detalle de productos con esquema flexible
db = db.getSiblingDB("distribuidora_db");

db.detalle_productos.insertOne({
  id_factura: 1001,
  productos: [
    {
      codigo: "TV001",
      nombre: "Smart TV 55 pulgadas",
      categoria: "Electrodomésticos",
      precio: 150.00
    }
  ]
});

// 3. Verificación del documento insertado
printjson(db.detalle_productos.find({ id_factura: 1001 }).toArray());

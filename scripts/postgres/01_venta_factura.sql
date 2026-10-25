CREATE TABLE ventas_factura (
    id_factura INT             PRIMARY KEY,
    cliente    VARCHAR (100)  ,
    total      DECIMAL (10, 2),
    fecha      TIMESTAMP      
);

INSERT  INTO ventas_factura (
    id_factura,
    cliente,
    total,
    fecha
)
VALUES                      (1001, 'Juan Jaramillo', 150.00, NOW());

SELECT *
FROM   ventas_factura;

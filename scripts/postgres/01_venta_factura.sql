-- ==============================================================
-- Taller 3: Persistencia Políglota - Transaccional ACID (PostgreSQL)
-- ==============================================================

-- 1. Crear tabla transaccional para facturación
CREATE TABLE IF NOT EXISTS ventas_factura (
    id_factura INT PRIMARY KEY,
    cliente VARCHAR(100),
    total DECIMAL(10,2),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Registrar la factura y pago (ACID)
INSERT INTO ventas_factura (id_factura, cliente, total, fecha)
VALUES (1001, 'Juan Jaramillo', 150.00, NOW());

-- 3. Verificar el registro insertado
SELECT * FROM ventas_factura;

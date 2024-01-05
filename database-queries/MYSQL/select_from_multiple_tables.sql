-- select different columns from different tables
SELECT orders.order_id, suppliers.name   
FROM suppliers  
INNER JOIN orders  
ON suppliers.supplier_id = orders.supplier_id  
ORDER BY order_id;  

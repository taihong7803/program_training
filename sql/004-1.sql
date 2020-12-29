--DISTINCTを指定すると、重複した行を1つにまとめることができます

SELECT DISTINCT 顧客名,商品名,単価
 FROM 受注表,商品表
 WHERE 受注表.商品番号 = 商品表.商品番号;
--商品表から、価格が1万円以上5万円以下のすべての列を抽出する

SELECT 番号,品名,価格 FROM 商品表
 WHERE 価格 BETWEEN 10000 AND 50000;
const PRODUCT = { NAME: "שם מוצר", PRICE: "מחיר מוצר" };
const SUPPLIER = { NAME: "שם ספק", TYPE: "סוג ספק" };
const SIZES = {
  KG: 'ק"ג',
  UNIT: "יחידה",
  BOX: "קרטון",
  THIRD: "שליש",
  D_THIRD: "ד. שליש",
  BOX_DOUGH: "ק. כדורים",
  BATH: "אמבטיה",
};
const IN_STOCK = {
  KG: 'מלאי בק"ג',
  UNIT: "יחידות במלאי",
  BOX: "קרטונים במלאי",
  THIRD: "כמות שלישים",
  D_THIRD: "כמות ד. שליש",
  BOX_DOUGH: "כמות ק. כדורים",
  BATH: "כמות אמבטיות",
  TOTAL: "כמות במלאי",
};
const TABLE_COLUMNS = [
  PRODUCT.NAME,
  PRODUCT.PRICE,
  SUPPLIER.NAME,
  SUPPLIER.TYPE,
  SIZES.KG,
  SIZES.UNIT,
  SIZES.BOX,
  SIZES.THIRD,
  SIZES.D_THIRD,
  SIZES.BOX_DOUGH,
  SIZES.BATH,
  IN_STOCK.KG,
  IN_STOCK.UNIT,
  IN_STOCK.BOX,
  IN_STOCK.THIRD,
  IN_STOCK.D_THIRD,
  IN_STOCK.BOX_DOUGH,
  IN_STOCK.BATH,
  IN_STOCK.TOTAL,
];
const INVENTORY_COUNTING = {
  DAILY: "ספירת מלאי יומית",
  WEEKLY: "ספירת מלאי שבועית",
  FORTNIGHTLY: "ספירת מלאי דו-שבועית",
  MONTHLY: "ספירת מלאי חודשית",
};

exports.LABELS = {
  PRODUCT,
  SUPPLIER,
  SIZES,
  IN_STOCK,
  TABLE_COLUMNS,
  INVENTORY_COUNTING,
};

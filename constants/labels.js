const PRODUCT = {
  NAME: "שם מוצר",
  PRICE: "מחיר מוצר",
  VALUE_IN_SALES: "שווי במכירות",
};
const SUPPLIER = { NAME: "שם ספק", TYPE: "סוג ספק" };
const SIZES = {
  STOCK_DAILY: "מידה ביומית",
  STOCK_MONTHLY: "מידה בחודשית",
  IN_ORDER: "מידה בהזמנה",
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
const CALCULATIONS = {
  ORDER_INVENTORY_VALUE: "שווי מלאי במחזור",
  OUT_OF_STOCK: "חסר במלאי",
  NEED_TO_ORDER: "צריך להזמין",
  MONTHLY_INVENTORY_VALUE: "שווי מלאי בחודשית",
};
const INSERT_ORDER = "הכנס הזמנה",
const DAILY_TABLE_COLUMNS = [
  SUPPLIER.NAME,
  PRODUCT.NAME,
  PRODUCT.PRICE,
  PRODUCT.VALUE_IN_SALES,
  SIZES.STOCK_DAILY,
  SIZES.IN_ORDER,
  IN_STOCK.KG,
  IN_STOCK.UNIT,
  IN_STOCK.BOX,
  IN_STOCK.THIRD,
  IN_STOCK.D_THIRD,
  IN_STOCK.BOX_DOUGH,
  IN_STOCK.BATH,
  IN_STOCK.TOTAL,
  CALCULATIONS.ORDER_INVENTORY_VALUE,
  CALCULATIONS.OUT_OF_STOCK,
  CALCULATIONS.NEED_TO_ORDER,
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
  CALCULATIONS,
  INSERT_ORDER,
  DAILY_TABLE_COLUMNS,
  INVENTORY_COUNTING,
};

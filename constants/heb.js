const PRODUCT = {
  NAME: "שם מוצר",
  PRICE: "מחיר מוצר",
  VALUE_IN_SALES: "שווי במכירות",
};
const SUPPLIER = {
  NAME: "שם ספק",
  TYPE: "סוג ספק",
  TYPES: ["יומי", "שבועי", "דו-שבועי", "מיוחד"],
  DELIVERY_DAYS: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי"],
  ORDER_DAYS: ["שבת", "ראשון", "שני", "שלישי", "רביעי", "חמישי"],
  COMMUNICATION_OPTIONS: ["אימייל", "וואצאפ", "טלפון"],
};
const SIZES = {
  STOCK_DAILY: "מידה ביומית",
  STOCK_MONTHLY: "מידה בחודשית",
  IN_ORDER: "מידה בהזמנה",
  TYPES: [
    'ק"ג',
    "יחידה",
    "קרטון",
    "שליש",
    "דאבל שליש",
    "קופסאת כדורים",
    "אמבטיה",
  ],
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
const INSERT_ORDER = "הזן הזמנה";
const DAILY_TABLE_COLUMNS = [
  SUPPLIER.NAME,
  PRODUCT.NAME,
  PRODUCT.PRICE,
  PRODUCT.VALUE_IN_SALES,
  SIZES.STOCK_DAILY,
  SIZES.IN_ORDER,
  IN_STOCK.KG,
  IN_STOCK.BOX,
  IN_STOCK.UNIT,
  IN_STOCK.THIRD,
  IN_STOCK.D_THIRD,
  IN_STOCK.BOX_DOUGH,
  IN_STOCK.BATH,
  IN_STOCK.TOTAL,
  CALCULATIONS.ORDER_INVENTORY_VALUE,
  CALCULATIONS.OUT_OF_STOCK,
  CALCULATIONS.NEED_TO_ORDER,
  INSERT_ORDER,
];

exports.HEB = {
  PRODUCT,
  SUPPLIER,
  SIZES,
  IN_STOCK,
  CALCULATIONS,
  INSERT_ORDER,
  DAILY_TABLE_COLUMNS,
};

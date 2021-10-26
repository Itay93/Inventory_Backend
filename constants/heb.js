const PRODUCT = {
  NAME: "שם מוצר",
  PRICE: "מחיר מוצר",
  VALUE_IN_SALES: "שווי במכירות",
  INCLUDE_IN_MONTHLY_INVENTORY: "נכלל בטבלה החודשית",
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
  VALUES: {
    KG: 'שווי ק"ג',
    BOX: "שווי קרטון",
    UNIT: "שווי יחידה",
    THIRD: "שווי שליש",
    D_THIRD: "שווי ד. שליש",
    BOX_DOUGH: "שווי ק. כדור",
    BATH: "שווי אמבטיה",
  },
};
const IN_STOCK = {
  KG: 'מלאי בק"ג',
  BOX: "קרטונים במלאי",
  UNIT: "יחידות במלאי",
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
const PRODUCTS_TABLE_COLUMNS = [
  PRODUCT.NAME,
  PRODUCT.PRICE,
  PRODUCT.VALUE_IN_SALES,
  PRODUCT.INCLUDE_IN_MONTHLY_INVENTORY,
  SUPPLIER.NAME,
  SUPPLIER.TYPE,
  SIZES.STOCK_DAILY,
  SIZES.STOCK_MONTHLY,
  SIZES.IN_ORDER,
  SIZES.VALUES.KG,
  SIZES.VALUES.BOX,
  SIZES.VALUES.UNIT,
  SIZES.VALUES.THIRD,
  SIZES.VALUES.D_THIRD,
  SIZES.VALUES.BOX_DOUGH,
  SIZES.VALUES.BATH,
];
const INVENTORY = {
  TABLES_OPTIONS: ["יומית", "שבועית", "דו-שבועית", "מיוחדת", "חודשית"],
  TABLES_COLUMNS: [
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
  ],
};

exports.HEB = {
  PRODUCT,
  PRODUCTS_TABLE_COLUMNS,
  SUPPLIER,
  SIZES,
  IN_STOCK,
  CALCULATIONS,
  INSERT_ORDER,
  INVENTORY,
};

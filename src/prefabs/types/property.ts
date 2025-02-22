export const PropertyKind = {
  AUTO_INCREMENT: 'AUTO_INCREMENT',
  BELONGS_TO: 'BELONGS_TO',
  BOOLEAN: 'BOOLEAN',
  BOOLEAN_EXPRESSION: 'BOOLEAN_EXPRESSION',
  COUNT: 'COUNT',
  DATE: 'DATE',
  DATE_EXPRESSION: 'DATE_EXPRESSION',
  DATE_TIME: 'DATE_TIME',
  DATE_TIME_EXPRESSION: 'DATE_TIME_EXPRESSION',
  DECIMAL: 'DECIMAL',
  DECIMAL_EXPRESSION: 'DECIMAL_EXPRESSION',
  EMAIL: 'EMAIL',
  EMAIL_ADDRESS: 'EMAIL_ADDRESS',
  ENUM: 'ENUM',
  FILE: 'FILE',
  FLOAT: 'FLOAT',
  GOOGLE_DOCUMENT: 'GOOGLE_DOCUMENT',
  HAS_AND_BELONGS_TO_MANY: 'HAS_AND_BELONGS_TO_MANY',
  HAS_MANY: 'HAS_MANY',
  HAS_ONE: 'HAS_ONE',
  IBAN: 'IBAN',
  IMAGE: 'IMAGE',
  INTEGER: 'INTEGER',
  INTEGER_EXPRESSION: 'INTEGER_EXPRESSION',
  LIST: 'LIST',
  LOGIN_TOKEN: 'LOGIN_TOKEN',
  MINUTES: 'MINUTES',
  MINUTES_EXPRESSION: 'MINUTES_EXPRESSION',
  MULTI_FILE: 'MULTI_FILE',
  MULTI_IMAGE: 'MULTI_IMAGE',
  OBJECT: 'OBJECT',
  PASSWORD: 'PASSWORD',
  PDF: 'PDF',
  PERIODIC_COUNT: 'PERIODIC_COUNT',
  PHONE_NUMBER: 'PHONE_NUMBER',
  PRICE: 'PRICE',
  PRICE_EXPRESSION: 'PRICE_EXPRESSION',
  RICH_TEXT: 'RICH_TEXT',
  SERIAL: 'SERIAL',
  SIGNED_PDF: 'SIGNED_PDF',
  STRING: 'STRING',
  STRING_EXPRESSION: 'STRING_EXPRESSION',
  SUM: 'SUM',
  TEXT: 'TEXT',
  TEXT_EXPRESSION: 'TEXT_EXPRESSION',
  TIME: 'TIME',
  URL: 'URL',
  ZIPCODE: 'ZIPCODE',
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type PropertyKind = keyof typeof PropertyKind;

export interface Property {
  id: string;
  name: string;
  label: string;
  kind: PropertyKind;
}

export interface ModelPropertyInput {
  label: string;
  kind: PropertyKind;
}

export interface Properties {
  id: string;
  name: string;
  label: string;
  kind: PropertyKind;
  format: string;
}

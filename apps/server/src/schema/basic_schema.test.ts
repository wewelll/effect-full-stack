import { Schema } from '@effect/schema';

// Schema.Schema<string, string>
const demoString = Schema.String;

// Schema.Schema<number, number>
const demoNumber = Schema.Number;

// Schema.Schema<number, string>
const demoNumberFromString = Schema.NumberFromString;

it('should encode / decode string', () => {
  expect(Schema.decodeSync(demoString)('hello Paris')).toStrictEqual(
    'hello Paris'
  );
  expect(Schema.encodeSync(demoString)('hello Paris')).toStrictEqual(
    'hello Paris'
  );
});

it('should encode / decode number', () => {
  expect(Schema.decodeSync(demoNumber)(42)).toStrictEqual(42);
  expect(Schema.encodeSync(demoNumber)(42)).toStrictEqual(42);
});

it('should encode / decode number from string', () => {
  expect(Schema.decodeSync(demoNumberFromString)('42')).toStrictEqual(42);
  expect(Schema.encodeSync(demoNumberFromString)(42)).toStrictEqual('42');
});

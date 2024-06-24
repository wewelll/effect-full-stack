import { Schema } from '@effect/schema';

const EmailAddressRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// copied from stackoverflow
// https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression

export const EmailAddress = Schema.Lowercase.pipe(
  Schema.pattern(EmailAddressRegex, {
    message: (s) => `"${s.actual}" is not a valid email address`,
    title: 'EmailAddress',
    description: 'A valid Email address',
    arbitrary: () => (fc) => fc.emailAddress(),
  }),
  Schema.brand('EmailAddress')
);

it('should not be a valid EmailAddress if it has an uppercase character', () => {
  expect(Schema.is(EmailAddress)('SB@spiko.tech')).toBe(false);
});

it('should decode an email address', () => {
  expect(Schema.decodeSync(EmailAddress)('SB@spiko.tech')).toStrictEqual(
    'sb@spiko.tech'
  );
});

it('should not be a valid EmailAddress if it does has an @', () => {
  expect(Schema.is(EmailAddress)('invalid_email_address')).toBe(false);
});

it('should not be a valid EmailAddress', () => {
  expect(Schema.is(EmailAddress)('sb@spiko.tech')).toBe(true);
});

import { isValidEmail } from './validations'


test('Проверка email должна пропускать корректные значения', () => {
  expect(isValidEmail('email@mail.com')).toBe(true)
})

test('Проверка email не должна допускать пробельные символы', () => {
  expect(isValidEmail('asdf asdf@mail.ru')).toBe(false)
})

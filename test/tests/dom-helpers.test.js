import { createUlFormText } from "./dom-helpers";


test('Функция createUlFormText должна создать ul-список', () => {
  const expectedText = '<ul><li>Элемент 1</li><li>Элемент 2</li><li>Элемент 3</li></ul>'
  const el = createUlFormText([
    'Элемент 1',
    'Элемент 2',
    'Элемент 3'
  ])
  expect(el).toBeInstanceOf(HTMLUListElement)
  expect(el.outerHTML).toBe(expectedText)
})

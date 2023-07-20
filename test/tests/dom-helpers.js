import { el } from 'redom'

export function createUlFormText(items) {
  return el('ul', items.map((item) => el('li', item)))
}

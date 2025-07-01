import { Column, Row, Sort } from './WTable'

export function getMockupLabels2() {
  return [
    {
      sortType: Sort.alphabetically,
      label: 'Title',
      break: true,
      index: 0
    },
    {
      sortType: Sort.alphabetically,
      label: 'Description',
      break: true,
      index: 1
    },
    {
      label: 'Tags',
      break: false,
      index: 2
    },
    {
      label: 'Labels',
      break: false,
      index: 3
    },
    {
      sortType: Sort.alphabeticallyReverse,
      label: 'Date',
      break: false,
      index: 4
    },
    {
      label: 'Link',
      break: false,
      index: 5
    }
  ]
}

export function getMockupLabels3() {
  return [
    {
      sortType: Sort.alphabetically,
      label: 'Title',
      break: true,
      index: 0
    },
    {
      sortType: Sort.alphabetically,
      label: 'Description',
      break: true,
      index: 1
    },
    {
      sortType: Sort.alphabeticallyReverse,
      label: 'Date',
      break: false,
      index: 2
    },
    {
      label: 'Link',
      break: false,
      index: 3
    }
  ]
}

export function getMockupLabels() {
  return [
    {
      sortType: Sort.ascentant,
      label: 'Rank',
      break: false,
      index: 0
    },
    {
      sortType: Sort.alphabetically,
      label: 'Address',
      break: false,
      index: 1
    },
    {
      sortType: Sort.descendant,
      label: 'Amount',
      break: false,
      index: 2
    }
  ]
}
const rankRow = {
  value: 1,
  label: 'Rank'
}
const addressRow = {
  value: 'wit1hp8xnclrhm4j5lrzxwnxurdetzsjqw88kwr06k',
  label: 'Address',
  url: 'https://'
}
const amountRow = {
  value: 1,
  label: 'Amount'
}
const row: Row = [rankRow, addressRow, amountRow]
export function addRow(index: number, row: Row): Row {
  return row.map((col) => {
    if (typeof col.value == 'number') {
      return {
        ...col,
        value: index
      }
    } else if (typeof col.value == 'string') {
      return {
        ...col,
        value: `${col.value.replace('1', index.toString())}`
      }
    } else {
      return col
    }
  })
}
export function getMockupData() {
  const row2: Row = addRow(2, row)
  const row3: Row = addRow(3, row)
  return [row, row2, row3]
}
const col2_1: Column = {
  value: 'Lorem ipsum dolor sit amet',
  label: 'Title'
}
const col2_2 = {
  value:
    'Description descruotuin descruotuin descruotuin descruotuin descruotuin descruotuin descruotuin descruotuin descruotuin',
  label: 'Description'
}
const col2_3 = {
  chips: [
    {
      label: 'tag1',
      color: 'bg-wit-blue-500'
    },
    { label: 'tag2', color: 'bg-black-950' }
  ],
  label: 'Tags'
}
const col2_4 = {
  chips: [
    {
      label: 'label1',
      color: 'bg-black-600'
    },
    {
      label: 'label2',
      color: 'bg-wit-blue-600'
    }
  ],
  label: 'Labels'
}
const col2_5 = {
  value: '2025-01-11',
  label: 'Date'
}
const col2_6 = {
  value: 'Meet us there',
  label: 'Link',
  url: 'https://google.com'
}
const row1: Row = [col2_1, col2_2, col2_3, col2_4, col2_5, col2_6]
export function getMockupData2() {
  const row2: Row = addRow(2, row1)
  const row3: Row = addRow(3, row1)
  const row4: Row = addRow(4, row1)
  return [row1, row2, row3, row4]
}
const col3_2 = {
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.',
  url: 'https://google.com',
  label: 'Description',
  truncate: true
}
const truncatedRow: Row = [col2_1, col3_2, col2_5, col2_6]
export function getMockupData3() {
  const row2: Row = addRow(2, truncatedRow)
  const row3: Row = addRow(3, truncatedRow)
  const row4: Row = addRow(4, truncatedRow)
  return [row2, row3, row4]
}

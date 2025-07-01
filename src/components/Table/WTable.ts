export enum Sort {
  ascentant,
  alphabetically,
  alphabeticallyReverse,
  descendant
}

export type Column = {
  value?: string | number
  chips?: Chip[]
  label: string
  truncate?: boolean
  url?: string
}

export type Label = {
  sortType?: Sort
  break: boolean
  label: string
  index: number
}

export type Chip = {
  label: string
  color: string
}

export type Row = Column[]

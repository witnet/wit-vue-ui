export type Option = { key: string; label: string; icon: string | null }
export enum DropdownYPosition {
  Top = 'top',
  Bottom = 'bottom'
}
export enum DropdownXPosition {
  Right = 'right',
  Left = 'left'
}
export const dropdownYPositions = Object.values(DropdownYPosition)
export const dropdownXPositions = Object.values(DropdownXPosition)

export type Option = {key: string, label: string, icon: string | null}
export enum DropdownPosition {
  Top = 'top',
  Bottom = 'bottom'
}
export const dropdownPostions = Object.values(DropdownPosition)
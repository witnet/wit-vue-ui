export type Option = {key: string, label: string, icon: string | null}
export enum DropdownPosition {
  top = 'top',
  bottom = 'bottom'
}
export const dropdownPostions = Object.values(DropdownPosition)
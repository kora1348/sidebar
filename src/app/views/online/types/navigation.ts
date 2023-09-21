export interface IMenuItem {
  id?: string;
  title?: string;
  description?: string;
  type: string;
  name?: string;
  state?: string;
  icon?: string;
  tooltip?: string;
  disabled?: boolean;
  sub?: IChildItem[];
  badges?: IBadge[];
  active?: boolean;
}

export interface IChildItem {
  id?: string;
  parentId?: string;
  type?: string;
  name: string;
  state?: string;
  icon?: string;
  active?: boolean;
}

interface IBadge {
  color: string;
  value: string;
}

interface ISidebarState {
  sidenavOpen?: boolean;
  childnavOpen?: boolean;
}

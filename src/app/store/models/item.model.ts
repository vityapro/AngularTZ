import { ActionCreatorProps } from "@ngrx/store";

export interface StoreItem {
  id: number;
  title: string;
  authorId: number;
  type: string;
  details: object
}

export class AddActionProps implements ActionCreatorProps<StoreItem>{
  _as: 'props' = 'props';
  _p: StoreItem;

  constructor(_p: StoreItem) {
    this._p = _p;
  }
}

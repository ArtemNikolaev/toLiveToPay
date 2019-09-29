import store from '../utils/store';

export class Category {
  constructor (name = '', index) {
    this._name = String(name || '');
    this.name = String(name || '');
    this._index = index;
    this._errors = {
      isNotChange: 'Category name are the same',
      isEmpty: "Can't use empty string as category name",
      isExist: 'Category with such name already exist',
    }
  }

  _map () {
    this.name = this.name.trim();

    return this;
  }

  _validate () {
    delete this.error;

    if (this.name === this._name) this.error = this._errors.isNotChange;

    if (!this.name.length) this.error = this._errors.isEmpty;

    if (store.getState().categories.indexOf(this.name) !== -1) this.error = this._errors.isExist;

    return this;
  }

  _dispatch (type, payload) {
    if (this.error) return false;

    store.dispatch({ type, payload });

    this.name = this._name;

    return true;
  }

  add () {
    if (Number.isInteger(this._index)) return false;

    return this._map()._validate()._dispatch('ADD_CATEGORY', this.name);
  }
}

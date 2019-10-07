import store from '../utils/store';

const errors = {
  isNotChange: 'Category name are the same',
  isEmpty: "Can't use empty string as category name",
  isExist: 'Category with such name already exist',
};

export class Category {
  constructor (name = '', index) {
    const correctName = typeof name === 'string' && name !== '';
    const correctIndex = Number.isInteger(index) && index >= 0;

    if (!correctName && correctIndex) {
      throw new Error(`name equals '${name}' instead of string`);
    }

    if (correctName && !correctIndex) {
      throw new Error(`index equals '${index}' instead of positive integer`);
    }

    this._name = String(name || '');
    this.name = String(name || '');
    this._index = index;
  }

  _map () {
    this.name = this.name.trim();

    return this;
  }

  _validate () {
    delete this.error;

    if (this.name === this._name) {
      this.error = errors.isNotChange;
    }

    if (!this.name.length) {
      this.error = errors.isEmpty;
    }

    if (store.getState().categories.indexOf(this.name) !== -1) {
      this.error = errors.isExist;
    }

    return this;
  }

  _dispatch (type, payload) {
    if (this.error) return false;

    store.dispatch({ type, payload });

    if (type === 'ADD_CATEGORY') this.name = this._name;

    return true;
  }

  add () {
    if (Number.isInteger(this._index) && this._index >= 0) {
      return false;
    }

    return this._map()._validate()._dispatch('ADD_CATEGORY', this.name);
  }
}

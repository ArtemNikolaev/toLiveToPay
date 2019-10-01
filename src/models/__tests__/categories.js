import { Category } from '../categories';
import store from '../../utils/store';

store.getState = jest.fn(() => {
  return { categories: [] };
});

store.dispatch = jest.fn(() => {});

describe('categories.js', () => {
  describe('Categories class', () => {
    const name = 'name';

    describe('should create correct object with input ', () => {
      test('(undefined)', () => {
        const cat = new Category();

        expect(cat.name).toBe('');
      });

      test('(<string>)', () => {
        const cat = new Category(name);
        expect(cat.name).toBe(name);
      });

      test('(<number>)', () => {
        const name = 123;

        const cat = new Category(name);
        expect(cat.name).toBe(String(name));
      })
    });

    describe('add() function should', () => {
      test('be falsy if index true', () => {
        const cat = new Category('', 0);
        expect(cat.add()).toBeFalsy();

        expect(store.getState).not.toHaveBeenCalled();
        expect(store.dispatch).not.toHaveBeenCalled();
      });

      test('add correct regular value', () => {
        const cat = new Category();
        cat.name = name;
        let dispatch;

        store.dispatch = jest.fn((val) => { dispatch = val });

        expect(cat.add()).toBeTruthy();
        expect(store.getState).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch.payload).toBe(name);
      });

      test('add value without spaces', () => {
        const cat = new Category();
        cat.name = '   ' + name + '   ';
        let dispatch;

        store.dispatch = jest.fn((val) => { dispatch = val });

        expect(cat.add()).toBeTruthy();
        expect(dispatch.payload).toBe(name);
      });

      test('be falsy for empty value', () => {
        const cat = new Category();

        expect(cat.add()).toBeFalsy();
        expect(cat.error).toBe(cat._errors.isEmpty);
        expect(store.getState).toHaveBeenCalledTimes(1);
        expect(store.dispatch).not.toHaveBeenCalled();
      });

      test('be falsy for exist value', () => {
        store.getState = jest.fn(() => {
          return { categories: [name] }
        });

        const cat = new Category();
        cat.name = name;

        expect(cat.add()).toBeFalsy();
        expect(cat.error).toBe(cat._errors.isExist);
        expect(store.getState).toHaveBeenCalledTimes(1);
        expect(store.dispatch).not.toHaveBeenCalled();
      });
    });
  });
});

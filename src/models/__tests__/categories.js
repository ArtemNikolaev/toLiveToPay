import { Category } from '../categories';
import store from '../../utils/store';

store.dispatch = jest.fn(() => {});

const name = 'name';

describe('categories.js', () => {
  describe('Categories class', () => {
    describe('Constructor should', () => {
      // name can be null, undefined, string
      // index can be positive integer only
      test('be truly if input empty', () => {
        const cat = new Category();

        expect(cat._name).toBe('');
        expect(cat.name).toBe('');
        expect(cat._index).toBeUndefined();
      });

      test('be truly if input (str, unsigned int)', () => {
        function createCategory (name, index) {
          const cat = new Category(name, index);

          expect(cat._name).toBe(name);
          expect(cat.name).toBe(name);
          expect(cat._index).toBe(index);
        }

        createCategory(name, 0);
        createCategory(name, 1);
      })

      function shouldThrow (name, index) {
        expect(() => new Category(name, index)).toThrow();
      }

      test('throw if name str and index < 0 (array index cant be negative)', () => {
        shouldThrow(name, -1);
      })

      test('throw if name str and index not integer (array index cant be negative)', () => {
        shouldThrow(name, 3.5);
      });

      test('throw if `index` number but `name` wrong type', () => {
        [-1, 0, 1, undefined, null, [], {}].forEach(item => shouldThrow(item, 1));
      });

      test('throw if `name` str, but index not num', () => {
        [name, undefined, null, [], {}].forEach(item => shouldThrow(name, item));
      });
    });

    describe('internal function', () => {
      describe('_map should', () => {
        const names = [
          name,
          `   ${name}   `,
          `${name} ${name} ${name}`,
          `  ${name} ${name} ${name}  `,
        ]

        test('should always return this', () => {
          names.forEach(name => {
            const cat = new Category(name, 0);

            expect(cat._map()).toBe(cat);
          });
        });

        test('should trim correctly', () => {
          names.forEach(name => {
            const cat = new Category(name, 0);

            cat._map();

            expect(cat.name).toBe(name.trim());
          });
        });
      });

      describe('_validate', () => {
        beforeAll(() => {
          store.getState = jest.fn(() => {
            return { categories: [] };
          });
        });

        function shouldReturnThis (cat) {
          test('should always return this', () => {
            expect(cat._validate()).toBe(cat);
          });
        }

        function shouldAddError (cat, msg) {
          test('should add correct error message', () => {
            expect(cat.error).toBe(msg);
          });
        }

        describe("when `name` isn't change", () => {
          const cat = new Category(name, 0);

          shouldReturnThis(cat);
          shouldAddError('Category name are the same');
        });

        describe('when `name` is the same', () => {
          function sameName (name, index) {
            const cat = new Category(name, index);
            cat.name = '';

            shouldReturnThis(cat);
            shouldAddError(cat, "Can't use empty string as category name");
          }

          describe('and new category', () => sameName());
          describe('and old catgory', () => sameName(name, 0));
        });

        describe('whem `name` exist', () => {
          beforeAll(() => {
            store.getState = jest.fn(() => {
              return { categories: [name] };
            });
          });

          function nameExist (cat) {
            shouldReturnThis(cat);
            shouldAddError(cat, 'Category with such name already exist');
          }

          describe('and new category', () => {
            const cat = new Category();
            cat.name = name;

            nameExist(cat);
          });
          describe('and old category', () => {
            const cat = new Category('some name', 0);
            cat.name = name;

            nameExist(cat);
          });
        })
      });

      describe('_dispatch should', () => {
        test('return false if error', () => {
          const cat = new Category(name, 0);
          cat.error = 'some error';

          expect(cat._dispatch()).toBeFalsy();
          expect(store.dispatch).not.toHaveBeenCalled();
        });

        test('return true if no error', () => {
          const cat = new Category(name, 0);

          expect(cat._dispatch()).toBeTruthy();
          expect(store.dispatch).toHaveBeenCalledTimes(1);
        });

        test('should clear `.name` if type is `ADD_CATEGORY`', () => {
          const cat = new Category();
          cat.name = name;

          cat._dispatch('ADD_CATEGORY', cat.name);

          expect(cat.name).toBe('');
        });
      });
    });

    describe('public function', () => {
      function mockInternals (cat) {
        cat._map = jest.fn(() => cat);
        cat._validate = jest.fn(() => cat);
        cat._dispatch = jest.fn(() => true);
      }

      describe('add', () => {
        test('should be false when index is int >= 0', () => {
          const cat = new Category(name, 0);
          mockInternals(cat);

          expect(cat.add()).toBeFalsy();

          expect(cat._map).not.toHaveBeenCalled();
          expect(cat._validate).not.toHaveBeenCalled();
          expect(cat._dispatch).not.toHaveBeenCalled();
        });

        test('should be true in any other situation', () => {
          const cat = new Category();
          mockInternals(cat);

          expect(cat.add()).toBeTruthy();

          expect(cat._map).toHaveBeenCalledTimes(1);
          expect(cat._validate).toHaveBeenCalledTimes(1);
          expect(cat._dispatch).toHaveBeenCalledTimes(1);
        });
      });
    })
  });
});

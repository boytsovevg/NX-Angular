import { getAddTodoButton, getTodoDeleteButton, getTodos } from '../support/app.po';

describe('todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodos().should(t => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).equal(3));
  });

  it('should delete todo', () => {
    getTodos().should(t => expect(t.length).equal(2));
    getTodoDeleteButton('Todo 1').click();

    getTodos().should(t => expect(t.length).equal(1));
  });
});

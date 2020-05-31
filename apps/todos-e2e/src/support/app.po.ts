export const getTodos = () => cy.get('.todo');
export const getAddTodoButton = () => cy.get('#add-todo');
export const getTodo = (title: string) => getTodos().get(`[title="${title}"]`);
export const getTodoDeleteButton = (title: string) => getTodo(title).get('.delete-todo').first();

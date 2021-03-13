exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').truncate()
    .then(function () {
      return knex('questions').insert([
        {question: 'What is React?', answer: 'A front end, JavaScript library for building user interfaces or UI components'},
        {question: 'What is Node.js?', answer: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser'}
      ]);
    });
};

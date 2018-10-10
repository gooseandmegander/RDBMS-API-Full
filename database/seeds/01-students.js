
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Keiran Keiran Kozlowski', cohort_id: 1 },
        { name: 'Cristina Laryea', cohort_id: 2 },
        { name: 'Frank', cohort_id: 3 },
        { name: 'Michael Hacker', cohort_id: 1 },
        { name: 'Caleb Kirkwood', cohort_id: 1 },
        { name: 'Andrew Ghobrial', cohort_id: 1 },
        { name: 'Csilla Gates', cohort_id: 1 },
        { name: 'Johnathan Huggett', cohort_id: 2 },
        { name: 'Alexandra Swartz', cohort_id: 1 },
        { name: 'Johnathan Huggett', cohort_id: 1 },
      ]);
    });
};

export async function createGoalCompletion(goalId: string) {
  await fetch('http://localhost:3333/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}

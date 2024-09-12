import { CreateGoal } from './components/create-goal'
import { Dialog } from './components/ui/dialog'
import { Summury } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summury /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}

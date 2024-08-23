import Accordion from '../../components/Accordion'
import EmptyLine from '../../components/EmptyLine'
import { useAppContext } from '../../context/AppContext'

export default function Home() {
  const { data } = useAppContext()

  if (data.tasks.length === 0) {
    return <EmptyLine />
  }

  return <Accordion data={data.tasks} type="tasks" />
}

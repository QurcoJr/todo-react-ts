import Accordion from '../../components/Accordion'
import EmptyLine from '../../components/EmptyLine'
import { useAppContext } from '../../context/AppContext'

export default function History() {
  const { data } = useAppContext()

  if (data.history.length === 0) {
    return <EmptyLine />
  }

  return <Accordion data={data.history} type="history" />
}

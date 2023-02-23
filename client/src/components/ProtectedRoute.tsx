import { Navigate } from 'react-router-dom'

interface Props {
  isAllowed: boolean
  children: React.ReactNode
}

function ProtectedRoute({ children, isAllowed }: Props) {
  if (!isAllowed) return <Navigate to='/login' />

  return <>{children}</>
}

export default ProtectedRoute

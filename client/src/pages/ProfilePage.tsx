import { useAuthStore } from '../store/auth'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
  const logout = useAuthStore((state) => state.logout)
  const profile = useAuthStore((state) => state.profile)
  const navigate = useNavigate()

  return (
    <div>
      <h2>Profile Page</h2>
      <h3>{profile.name}</h3>
      <button
        onClick={() => {
          logout()
          navigate('/login')
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default ProfilePage

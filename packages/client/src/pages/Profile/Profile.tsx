import React from 'react'
import { useAuth } from '../../hooks/useAuth'

const Profile: React.FC = function () {
  const [checkAuth] = useAuth()
  checkAuth('private')

  return <div>Profile</div>
}

export { Profile }

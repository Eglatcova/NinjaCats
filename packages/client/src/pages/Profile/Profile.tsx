import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

const Profile: React.FC = function () {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.user)

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user])

  return <div>Profile</div>
}

export { Profile }

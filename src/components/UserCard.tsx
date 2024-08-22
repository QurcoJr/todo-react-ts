import avatarIcon from '../assets/avatar.svg'
import settingIcon from '../assets/settings.svg'

export default function UserCard() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={avatarIcon} alt="avatar" />
        <h2 className="username poppins-bold">James Ronald</h2>
      </div>
      <img src={settingIcon} alt="settings" />
    </div>
  )
}

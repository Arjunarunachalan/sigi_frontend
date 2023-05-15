import React from 'react'

const ProfileItems = () => {
  return (
    <div className='w-[150px] flex align-top justify-items-end h-5  '>
        <select name="profileItems" id="profileItems">
            <option value="Edit Profile">Edit Profie</option>
            <option value="Change Password">Change Passwod</option>
            <option value="Logout">Log Out</option>
        </select>
    </div>
  )
}

export default ProfileItems
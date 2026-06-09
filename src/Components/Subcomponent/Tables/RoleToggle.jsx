import React from 'react'
import { toast } from 'react-toastify'

const RoleToggle = ({ users, setUsers, currentRole, userId }) => {
    const handleClick = () => {  // ← Capital C for consistency
        const currentUser = users.find(u => u.id === userId)
        const newRole = currentUser.role === 'admin' ? 'user' : 'admin'
        
        setUsers(users.map(user => 
            user.id === userId ? { ...user, role: newRole } : user
        ))

        toast.success(
            newRole === 'admin' ? ' User promoted to admin!' : ' User demoted to user'
        )
    }
    
    return (
        <button onClick={handleClick} className="px-3 py-1 rounded text-white flex items-center gap-2 bg-purple-500 hover:bg-purple-600">
             
            <span>{currentRole === 'admin' ? 'Demote' : 'Promote'}</span>
        </button>
    )
}

export default RoleToggle
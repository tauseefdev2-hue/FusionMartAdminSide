import React from 'react'

const StatusBadge = ({ variant, children }) => {
    const getStatusDesign = () => {
        switch(variant){
            case 'active':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'inactive':
                return 'bg-gray-100 text-gray-800 border-gray-200';
            case 'out-of-stock':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    }
    
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusDesign()}`}>
            {children}
        </span>
    )
}

export default StatusBadge
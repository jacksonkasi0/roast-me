import { RoastResponse } from '@/type';
import React from 'react';


const RoastCard: React.FC<RoastResponse> = ({ avatarUrl, username, roastText }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={avatarUrl} alt="avatar" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{username}</div>
                    <p className="mt-2 text-gray-500">{roastText}</p>
                </div>
            </div>
        </div>
    );
};

export default RoastCard;
import React from 'react'

const Settings = ({ userDetails, handleUserAPI }) => {
    let userInformation = [
        {
            placeholder: 'Username',
            value: userDetails?.name?.first || ''
        },
        {
            placeholder: 'Email',
            value: userDetails?.email || ''
        },
        {
            placeholder: 'Phone',
            value: userDetails?.phone || ''
        },
        {
            placeholder: 'Gender',
            value: userDetails?.gender || ''
        },
        {
            placeholder: 'Location',
            value: userDetails?.location?.country || ''
        },
    ];

    return (
        <main className='flex flex-col h-[auto] w-screen pt-2 bg-gray-100 '>
            <div className="flex flex-col items-center justify-evenly h-[32vh] bg-gray-800 py-3">
                <div className="flex">
                    <p className='text-white font-bold text-xl font-sans'>Profile Setting</p>
                </div>
                {userDetails?.picture && (
                    <img src={userDetails.picture.medium} className='size-[18vh] shadow-gray-800 shadow-xl rounded-[50%]' alt="User avatar" />
                )}
            </div>
            <div className="flex flex-col h-[70vh] px-3 py-2 ">
                {userInformation.map((item, index) => (
                    <div key={index} className="flex flex-col my- 2">
                        <p className='text-gray-400 text-sm font-semibold'>{item.placeholder}</p>
                        <p className='italic font-serif bg-transparent border-b h-[5.5vh] text-gray-600 border-zinc-200 w-[95%] outline-none px-1 my-1'>{item.value} </p>
                    </div>
                ))}
                <button onClick={handleUserAPI} className='bg-gray-800 p-2 rounded-[1vh] my-3 text-gray-200 active:bg-gray-600'>Switch Account</button>
            </div>
        </main>
    );
}

export default Settings;

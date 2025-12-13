import defaultProfile from '../../assets/images/defaultProfile.png';
function Profile() {
    return (
        <div className="w-full min-h-screen bg-[#025043] flex justify-center items-start py-20 md:py-32 px-6 lg:px-20 font-sans text-white">
            <div
                className="w-full max-w-3xl rounded-2xl p-8 md:p-12 flex flex-col gap-8 shadow-xl"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                <h1 className="text-3xl font-[Expo-bold] text-center">Edit Profile</h1>

                {/* Profile Image */}
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={defaultProfile}
                        alt="Profile"
                        className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
                    />
                    <input
                        type="file"
                        className="px-3 py-1.5 bg-white text-[#025043] focus:ring-2 focus:ring-white rounded-lg font-[Expo-arabic] hover:bg-gray-200 transition-all duration-200 shadow w-60"
                    />

                </div>

                {/* Form Fields */}
                <form className="flex flex-col gap-6 font-[Expo-arabic]">

                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold tracking-wide">
                            Full Name
                        </label>
                        <input
                            type="text"
                            autoComplete="name"
                            placeholder="Enter your name"
                            className="px-4 py-2 rounded-lg text-black bg-white/90 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold tracking-wide">
                            Email
                        </label>
                        <input
                            type="email"
                            autoComplete="email"
                            placeholder="example@email.com"
                            className="px-4 py-2 rounded-lg text-black bg-white/90 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-semibold tracking-wide">
                            Password
                        </label>
                        <input
                            type="password"
                            autoComplete="new-password"
                            placeholder="Enter new password"
                            className="px-4 py-2 rounded-lg text-black bg-white/90 focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-white text-[#025043] rounded-lg font-[Expo-arabic] hover:bg-gray-200 transition-all duration-200 shadow-md"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Profile;

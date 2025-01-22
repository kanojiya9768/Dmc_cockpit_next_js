"use client"
import { environment } from '@/utils/url-constant'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const GoogleLogIn = () => {
    // const { isLogIn } = useContext(WindowContext);
    const isLogIn = false;

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const { data, status } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                });
                if (status === 200) {
                    const formData = isLogIn ? {
                        first_name: data?.given_name,
                        last_name: data?.family_name,
                        email: data?.email,
                        google_id: data?.sub,
                    } : {
                        first_name: data?.given_name,
                        last_name: data?.family_name,
                        email: data?.email,
                        google_id: data?.sub,
                        initiated: "sign-up"
                    }
                    const encryptedData = btoa(JSON.stringify(formData));
                    window.location.assign(`https://${environment}.dmcockpit.com/login-google?info=${encryptedData}`);
                }
            } catch (error) {
                console.error("Some error occured with Sign up with Google", error)
            }
        },
    })
    return (
        <button onClick={() => { googleLogin() }} className="bg-white px-6 py-3 hover:bg-green-color hover:text-white mx-auto md:mx-0 duration-200 text-sm flex items-center rounded-full border border-[#707070] text  max-[400px]:w-full w-max sm:w-fit justify-center gap-2 h-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" /><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" /><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" /><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" /></svg>
            Sign up with Google
        </button>
    )
}

export default GoogleLogIn
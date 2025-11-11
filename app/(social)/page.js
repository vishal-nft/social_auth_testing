"use client"
import { signIn, useSession, signOut } from "next-auth/react"

export default function SocialLoginButtons() {
  const { data: session } = useSession()

  console.log(session)
  
  const signInFbHandler = () =>{
    window.location.href = 'https://www.facebook.com/v20.0/dialog/oauth?client_id=1113346303956356&redirect_uri=https://socialauthtesting.vercel.app/social/fb&scope=email,public_profile&response_type=code'
  }

  const signInIGHandler = () =>{
    window.location.href = 'https://www.instagram.com/oauth/authorize?force_reauth=true&client_id=23938232769173184&redirect_uri=https://socialauthtesting.vercel.app/social/ig&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights'
  }   

  return (
    <div style={{display:"flex",margin:"300px auto",justifyContent:"center"}}>
      <button onClick={() => signInFbHandler("facebook")}>Login with Facebook</button>
      <button onClick={() => signInIGHandler("instagram")}>Login with Instagram</button>
    </div>
  )
}

import { useState, useEffect } from 'react'
    import { useAuth } from './auth-context'

    const LinkedInAuth = () => {
      const { setAccessToken, linkedInUser } = useAuth()
      const [authUrl, setAuthUrl] = useState('')

      useEffect(() => {
        // Generate auth URL
        const generateAuthUrl = async () => {
          try {
            const response = await fetch('/api/auth/url')
            const data = await response.json()
            setAuthUrl(data.url)
          } catch (error) {
            console.error('Error generating auth URL:', error)
          }
        }

        generateAuthUrl()
      }, [])

      return (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login with LinkedIn</h2>
          <div className="flex flex-col items-center">
            <button
              className="w-full max-w-md bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={async () => {
                window.location.href = authUrl
              }}
            >
              Continue with LinkedIn
            </button>
          </div>
        </div>
      )
    }

    export default LinkedInAuth

import { useState, useEffect } from 'react'
    import { useUser } from './auth-context'
    import CampaignForm from './CampaignForm'
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

    const Dashboard = () => {
      const { user } = useUser()
      const [campaigns, setCampaigns] = useState([])

      useEffect(() => {
        const fetchCampaigns = async () => {
          try {
            const response = await fetch('/api/campaigns')
            const data = await response.json()
            setCampaigns(data)
          } catch (error) {
            console.error('Error fetching campaigns:', error)
          }
        }

        fetchCampaigns()
      }, [])

      return (
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome back, {user?.email}</h1>
            
            <div className="mb-8">
              <LineChart width={800} height={400} data={campaigns}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="leads" stroke="#8884d8" dot={false} />
              </LineChart>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Active Campaigns</h2>
                <div className="space-y-4">
                  {campaigns.filter(c => c.status === 'active').map(c => (
                    <div key={c.id} className="border-b pb-4">
                      <h3 className="font-medium text-gray-900">{c.name}</h3>
                      <p className="text-sm text-gray-500">Status: {c.status}</p>
                      <p className="text-sm text-gray-500">Leads: {c.leads}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Create New Campaign</h2>
                <CampaignForm />
              </div>
            </div>
          </div>
        </div>
      )
    }

    export default Dashboard

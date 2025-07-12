import { useState } from 'react'
    import { useUser } from './auth-context'

    interface Campaign {
      id: string
      name: string
      searchUrl: string
      messageTemplate: string
      connectionMessage: string
      followUpMessage: string
      status: 'draft' | 'active' | 'paused' | 'completed'
    }

    const CampaignForm = () => {
      const { user } = useUser()
      const [campaign, setCampaign] = useState<Campaign>({
        name: '',
        searchUrl: '',
        messageTemplate: '',
        connectionMessage: '',
        followUpMessage: '',
        status: 'draft',
      })

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
          const response = await fetch('/api/campaign', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(campaign),
          })
          const data = await response.json()
          console.log('Campaign created:', data)
        } catch (error) {
          console.error('Error creating campaign:', error)
        }
      }

      return (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Create New Campaign</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Campaign Name</label>
              <input
                type="text"
                value={campaign.name}
                onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn Search URL</label>
              <input
                type="url"
                value={campaign.searchUrl}
                onChange={(e) => setCampaign({ ...campaign, searchUrl: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message Template</label>
              <textarea
                value={campaign.messageTemplate}
                onChange={(e) => setCampaign({ ...campaign, messageTemplate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Connection Message</label>
              <textarea
                value={campaign.connectionMessage}
                onChange={(e) => setCampaign({ ...campaign, connectionMessage: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Follow Up Message</label>
              <textarea
                value={campaign.followUpMessage}
                onChange={(e) => setCampaign({ ...campaign, followUpMessage: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Create Campaign
            </button>
          </form>
        </div>
      )
    }

    export default CampaignForm

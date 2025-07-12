import { useState } from 'react'
    import Sidebar from '../components/Sidebar'
    import { CampaignList } from '../components/Campaigns'

    const Dashboard = () => {
      return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Bem-vindo ao LinkedIn Prospector</h1>
              <p className="text-gray-600 mt-2">Sua plataforma de automação de prospecção</p>
            </div>
            <CampaignList />
          </div>
        </div>
      )
    }

    export default Dashboard

import { useState } from 'react'
    import { Menu, Home, Users, Calendar, Settings } from 'lucide-react'

    const Sidebar = () => {
      const [activeMenu, setActiveMenu] = useState('home')

      const menus = [
        { id: 'home', title: 'Dashboard', icon: <Home size={20} /> },
        { id: 'campaigns', title: 'Campanhas', icon: <Users size={20} /> },
        { id: 'analytics', title: 'Análises', icon: <Calendar size={20} /> },
        { id: 'settings', title: 'Configurações', icon: <Settings size={20} /> }
      ]

      return (
        <div className="bg-gray-800 text-white w-64 min-h-screen flex-shrink-0">
          <div className="p-4">
            <h1 className="text-xl font-bold mb-6">LinkedIn Prospector</h1>
            <nav>
              {menus.map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => setActiveMenu(menu.id)}
                  className={`w-full flex items-center space-x-2 p-2 rounded-lg mb-1 ${activeMenu === menu.id ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                >
                  <span>{menu.icon}</span>
                  <span>{menu.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )
    }

    export default Sidebar

import { useState } from 'react';
import { Trophy, Sword, Lock } from 'lucide-react';

interface EventForm {
  date: string;
  title: string;
  time: string;
  location: string;
  rewards: string[];
  description: string;
  imageUrl: string;
}

export default function AdminPanel() {
  const [formData, setFormData] = useState<EventForm>({
    date: '',
    title: '',
    time: '19:00',
    location: 'Spawn',
    rewards: ['64 Diamonds'],
    description: '',
    imageUrl: ''
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminKey, setAdminKey] = useState('');

  // Simple admin authentication (replace with Auth0 in production)
  const handleAdminLogin = async () => {
    if (adminKey === import.meta.env.VITE_ADMIN_SECRET) {
      setIsAuthenticated(true);
      await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({ key: adminKey })
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${adminKey}`
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Event created successfully!');
        setFormData({
          date: '',
          title: '',
          time: '19:00',
          location: 'Spawn',
          rewards: ['64 Diamonds'],
          description: '',
          imageUrl: ''
        });
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-stone-900 p-8 rounded-lg max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Lock className="text-emerald-400" />
          <h2 className="font-minecraft text-2xl">Admin Access</h2>
        </div>
        <input
          type="password"
          className="w-full bg-stone-700 rounded p-3 mb-4"
          placeholder="Enter Admin Key"
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
        />
        <button
          onClick={handleAdminLogin}
          className="w-full bg-emerald-600 hover:bg-emerald-500 p-3 rounded font-minecraft"
        >
          Unlock Admin Panel
        </button>
      </div>
    );
  }

  return (
    <div className="bg-stone-800/50 p-8 rounded-lg backdrop-blur-sm">
      <h1 className="font-minecraft text-3xl mb-6 flex items-center gap-2">
        <Sword className="text-emerald-400" />
        Create New Event
      </h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Form fields */}
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Event Date</label>
            <input
              type="date"
              className="w-full bg-stone-700 rounded p-2"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
          
          <div>
            <label className="block mb-2">Event Title</label>
            <input
              type="text"
              className="w-full bg-stone-700 rounded p-2"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-2">Rewards</label>
            {formData.rewards.map((reward, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <Trophy className="text-yellow-400" />
                <input
                  type="text"
                  value={reward}
                  className="w-full bg-stone-700 rounded p-2"
                  onChange={(e) => {
                    const newRewards = [...formData.rewards];
                    newRewards[index] = e.target.value;
                    setFormData({ ...formData, rewards: newRewards });
                  }}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setFormData({ ...formData, rewards: [...formData.rewards, ''] })}
              className="text-sm bg-stone-600 hover:bg-stone-500 px-2 py-1 rounded"
            >
              Add Reward
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-emerald-600 hover:bg-emerald-500 p-3 rounded font-minecraft"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
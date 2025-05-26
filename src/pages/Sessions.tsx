
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Play, 
  Users,
  User,
  Bell,
  Video,
  CheckCircle
} from 'lucide-react';

export const Sessions = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const liveSessions = [
    {
      id: 1,
      title: 'Market Analysis Monday',
      educator: 'Sarah Chen',
      educatorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      description: 'Weekly market overview and trend analysis for the upcoming week.',
      startTime: '2:00 PM EST',
      endTime: '3:30 PM EST',
      date: 'Today',
      status: 'live',
      viewers: 234,
      category: 'Analysis',
      duration: '90 min',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'DeFi Protocol Deep Dive',
      educator: 'Mike Rodriguez',
      educatorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      description: 'Exploring the latest DeFi protocols and yield farming opportunities.',
      startTime: '7:00 PM EST',
      endTime: '8:30 PM EST',
      date: 'Today',
      status: 'upcoming',
      viewers: 156,
      category: 'DeFi',
      duration: '90 min',
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Altcoin Research Workshop',
      educator: 'Lisa Park',
      educatorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      description: 'Learn systematic approaches to researching and evaluating altcoins.',
      startTime: '11:00 AM EST',
      endTime: '12:30 PM EST',
      date: 'Tomorrow',
      status: 'scheduled',
      viewers: 89,
      category: 'Research',
      duration: '90 min',
      thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=200&fit=crop'
    }
  ];

  const upcomingSessions = [
    {
      id: 4,
      title: 'Trading Psychology Masterclass',
      educator: 'Dr. James Wilson',
      educatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      description: 'Master your emotions and develop disciplined trading habits.',
      startTime: '3:00 PM EST',
      endTime: '4:30 PM EST',
      date: 'Dec 28',
      status: 'scheduled',
      viewers: 0,
      category: 'Psychology',
      duration: '90 min',
      registered: true
    },
    {
      id: 5,
      title: 'NFT Market Trends',
      educator: 'Alex Thompson',
      educatorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      description: 'Analyzing current NFT market trends and future opportunities.',
      startTime: '6:00 PM EST',
      endTime: '7:00 PM EST',
      date: 'Dec 29',
      status: 'scheduled',
      viewers: 0,
      category: 'NFTs',
      duration: '60 min',
      registered: false
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-red-100 text-red-800 animate-pulse">🔴 Live</Badge>;
      case 'upcoming':
        return <Badge className="bg-orange-100 text-orange-800">⏰ Starting Soon</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">📅 Scheduled</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Sessions</h1>
          <p className="text-gray-600">Join live trading sessions and learn from expert educators</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="live" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="live">Live & Today</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="recorded">Recorded</TabsTrigger>
              </TabsList>

              <TabsContent value="live" className="space-y-6 mt-6">
                {liveSessions.map((session) => (
                  <Card key={session.id} className="overflow-hidden hover-scale">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative">
                        <img
                          src={session.thumbnail}
                          alt={session.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          {getStatusBadge(session.status)}
                        </div>
                        {session.status === 'live' && (
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <Play className="h-12 w-12 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                            <p className="text-gray-600 mb-3">{session.description}</p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {session.startTime} - {session.endTime}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {session.viewers} viewers
                              </div>
                              <div className="flex items-center gap-1">
                                <Video className="h-4 w-4" />
                                {session.duration}
                              </div>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                              <img
                                src={session.educatorAvatar}
                                alt={session.educator}
                                className="w-8 h-8 rounded-full"
                              />
                              <div>
                                <p className="font-medium text-sm">{session.educator}</p>
                                <p className="text-xs text-gray-500">{session.category} Expert</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button className="flex-1" disabled={session.status === 'scheduled'}>
                            {session.status === 'live' ? (
                              <>
                                <Play className="h-4 w-4 mr-2" />
                                Join Live Session
                              </>
                            ) : session.status === 'upcoming' ? (
                              <>
                                <Bell className="h-4 w-4 mr-2" />
                                Set Reminder
                              </>
                            ) : (
                              'Scheduled'
                            )}
                          </Button>
                          <Button variant="outline">
                            <User className="h-4 w-4 mr-2" />
                            View Educator
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-6 mt-6">
                {upcomingSessions.map((session) => (
                  <Card key={session.id} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{session.title}</h3>
                          <p className="text-gray-600 mb-3">{session.description}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              {session.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {session.startTime} - {session.endTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Video className="h-4 w-4" />
                              {session.duration}
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <img
                              src={session.educatorAvatar}
                              alt={session.educator}
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <p className="font-medium text-sm">{session.educator}</p>
                              <p className="text-xs text-gray-500">{session.category} Expert</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-4">
                          {getStatusBadge(session.status)}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant={session.registered ? "outline" : "default"} className="flex-1">
                          {session.registered ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Registered
                            </>
                          ) : (
                            <>
                              <Bell className="h-4 w-4 mr-2" />
                              Register
                            </>
                          )}
                        </Button>
                        <Button variant="outline">
                          <User className="h-4 w-4 mr-2" />
                          View Educator
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="recorded" className="mt-6">
                <div className="text-center py-12">
                  <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Recorded Sessions</h3>
                  <p className="text-gray-600">Access to recorded sessions will be available soon.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Session Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Live Sessions</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Your Registered</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Hours Watched</span>
                  <span className="font-medium">8.5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

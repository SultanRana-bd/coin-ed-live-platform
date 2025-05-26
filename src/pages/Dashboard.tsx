
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  Play, 
  Clock,
  Users,
  CheckCircle,
  Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const recentModules = [
    {
      id: 1,
      title: 'Bitcoin Fundamentals',
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Technical Analysis Basics',
      progress: 45,
      totalLessons: 8,
      completedLessons: 4,
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'DeFi Explained',
      progress: 100,
      totalLessons: 6,
      completedLessons: 6,
      status: 'completed'
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: 'Market Analysis Monday',
      educator: 'Sarah Chen',
      time: '2:00 PM EST',
      date: 'Today',
      viewers: 234
    },
    {
      id: 2,
      title: 'Altcoin Deep Dive',
      educator: 'Mike Rodriguez',
      time: '7:00 PM EST',
      date: 'Tomorrow',
      viewers: 156
    }
  ];

  const notifications = [
    {
      id: 1,
      message: 'New lesson available in Bitcoin Fundamentals',
      time: '2 hours ago',
      type: 'course'
    },
    {
      id: 2,
      message: 'Live session starting in 30 minutes',
      time: '30 minutes',
      type: 'session'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Continue your crypto trading journey</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Modules Completed</p>
                  <p className="text-2xl font-bold text-green-600">12</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Live Sessions</p>
                  <p className="text-2xl font-bold text-blue-600">48</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Learning Streak</p>
                  <p className="text-2xl font-bold text-orange-600">7 days</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Hours</p>
                  <p className="text-2xl font-bold text-purple-600">156</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Continue Learning
                </CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentModules.map((module) => (
                  <div key={module.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{module.title}</h3>
                      <Badge variant={module.status === 'completed' ? 'default' : 'secondary'}>
                        {module.status === 'completed' ? 'Completed' : 'In Progress'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600">
                        {module.completedLessons}/{module.totalLessons} lessons
                      </span>
                      <span className="text-sm text-gray-600">{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="mb-3" />
                    <Button size="sm" className="w-full" asChild>
                      <Link to={`/modules/${module.id}`}>
                        {module.status === 'completed' ? 'Review' : 'Continue'}
                      </Link>
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/modules">View All Modules</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="border rounded-lg p-3 hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium mb-1">{session.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">by {session.educator}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-blue-600">{session.date} at {session.time}</span>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Users className="h-3 w-3" />
                        {session.viewers}
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-2">
                      <Play className="h-3 w-3 mr-1" />
                      Join Session
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/sessions">View All Sessions</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
                    <div className={`h-2 w-2 rounded-full mt-2 ${
                      notification.type === 'course' ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/charts">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Charts
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/educators">
                    <Users className="h-4 w-4 mr-2" />
                    Browse Educators
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

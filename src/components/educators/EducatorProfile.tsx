
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Users, 
  Calendar, 
  Play,
  MessageSquare,
  Clock,
  BookOpen
} from 'lucide-react';

interface EducatorProfileProps {
  educator: {
    id: number;
    name: string;
    title: string;
    bio: string;
    avatar: string;
    rating: number;
    students: number;
    courses: number;
    liveSessions: number;
    specialties: string[];
    experience: string;
    nextSession?: string;
    recentSessions: Array<{
      title: string;
      date: string;
      viewers: number;
    }>;
  };
}

export const EducatorProfile = ({ educator }: EducatorProfileProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={educator.avatar}
              alt={educator.name}
              className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
            />
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{educator.name}</h1>
              <p className="text-xl text-blue-600 mb-4">{educator.title}</p>
              <p className="text-gray-600 mb-4 leading-relaxed">{educator.bio}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{educator.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {educator.students.toLocaleString()} students
                </div>
                <span>{educator.experience}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {educator.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message Educator
                </Button>
                <Button variant="outline" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Session
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{educator.courses}</div>
            <div className="text-sm text-gray-500">Courses Created</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Play className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{educator.liveSessions}</div>
            <div className="text-sm text-gray-500">Live Sessions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{educator.students.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Total Students</div>
          </CardContent>
        </Card>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="sessions" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sessions">Recent Sessions</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="sessions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Live Sessions</CardTitle>
              <CardDescription>Latest recorded sessions from {educator.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {educator.recentSessions.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Play className="h-8 w-8 text-blue-600" />
                      <div>
                        <h4 className="font-medium">{session.title}</h4>
                        <p className="text-sm text-gray-500">{session.date} • {session.viewers} viewers</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Watch
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <Card>
            <CardContent className="p-8 text-center">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Courses Coming Soon</h3>
              <p className="text-gray-600">Structured courses from this educator will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Schedule and upcoming live sessions</CardDescription>
            </CardHeader>
            <CardContent>
              {educator.nextSession ? (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-700 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">Next Session:</span>
                  </div>
                  <p className="text-blue-800">{educator.nextSession}</p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No upcoming sessions scheduled</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

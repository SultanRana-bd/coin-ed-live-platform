
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  Calendar, 
  Play,
  MessageSquare,
  User,
  Clock
} from 'lucide-react';

export const Educators = () => {
  const educators = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior Crypto Analyst',
      bio: 'Former Goldman Sachs analyst with 8+ years in traditional finance and 5 years in crypto. Specializes in technical analysis and market trends.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      rating: 4.9,
      students: 15420,
      courses: 12,
      liveSessions: 156,
      specialties: ['Technical Analysis', 'Market Trends', 'Risk Management'],
      experience: '8+ years',
      nextSession: 'Market Analysis Monday - Today 2:00 PM',
      recentSessions: [
        { title: 'Weekly Market Overview', date: 'Dec 23', viewers: 234 },
        { title: 'Altcoin Season Analysis', date: 'Dec 20', viewers: 189 },
        { title: 'End of Year Predictions', date: 'Dec 18', viewers: 312 }
      ]
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      title: 'DeFi Specialist',
      bio: 'Early DeFi adopter and protocol contributor. Former software engineer at Ethereum Foundation with deep knowledge of smart contracts and yield farming.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      rating: 4.8,
      students: 8934,
      courses: 8,
      liveSessions: 89,
      specialties: ['DeFi Protocols', 'Yield Farming', 'Smart Contracts'],
      experience: '6+ years',
      nextSession: 'DeFi Deep Dive - Tomorrow 7:00 PM',
      recentSessions: [
        { title: 'New DeFi Protocols', date: 'Dec 22', viewers: 156 },
        { title: 'Yield Farming Strategies', date: 'Dec 19', viewers: 203 },
        { title: 'DeFi Risk Assessment', date: 'Dec 17', viewers: 178 }
      ]
    },
    {
      id: 3,
      name: 'Dr. James Wilson',
      title: 'Trading Psychology Expert',
      bio: 'PhD in Behavioral Finance. Author of "The Crypto Trader\'s Mind". Helps traders develop mental discipline and emotional control.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      rating: 4.9,
      students: 12567,
      courses: 6,
      liveSessions: 78,
      specialties: ['Trading Psychology', 'Risk Management', 'Behavioral Finance'],
      experience: '12+ years',
      nextSession: 'Psychology Masterclass - Dec 28 3:00 PM',
      recentSessions: [
        { title: 'Overcoming FOMO', date: 'Dec 21', viewers: 298 },
        { title: 'Discipline in Trading', date: 'Dec 18', viewers: 234 },
        { title: 'Managing Losses', date: 'Dec 16', viewers: 267 }
      ]
    },
    {
      id: 4,
      name: 'Lisa Park',
      title: 'Blockchain Research Lead',
      bio: 'Former research director at ConsenSys. Expert in blockchain technology, cryptocurrency fundamentals, and project evaluation methodologies.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      rating: 4.7,
      students: 9876,
      courses: 10,
      liveSessions: 92,
      specialties: ['Blockchain Tech', 'Project Research', 'Fundamentals'],
      experience: '7+ years',
      nextSession: 'Altcoin Research - Tomorrow 11:00 AM',
      recentSessions: [
        { title: 'Layer 2 Solutions', date: 'Dec 23', viewers: 189 },
        { title: 'Tokenomics Analysis', date: 'Dec 20', viewers: 156 },
        { title: 'Blockchain Scalability', date: 'Dec 18', viewers: 201 }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I join a live session?',
      answer: 'Click on any upcoming session and hit "Join Session" when it goes live. You\'ll be taken to the live streaming room where you can watch and participate in chat.'
    },
    {
      question: 'Can I ask questions during live sessions?',
      answer: 'Yes! All live sessions include interactive chat where you can ask questions. Educators typically address questions during breaks or at the end of sessions.'
    },
    {
      question: 'Are sessions recorded?',
      answer: 'Most sessions are recorded and available to subscribers within 24 hours. Check the specific session details for recording availability.'
    },
    {
      question: 'What if I miss a live session?',
      answer: 'Don\'t worry! You can access recorded sessions in your dashboard or from the educator\'s profile page.'
    },
    {
      question: 'How do I book a 1-on-1 session?',
      answer: 'Premium subscribers can book private sessions with educators. Visit the educator\'s profile and click "Book Private Session" if available.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Meet Our Educators</h1>
          <p className="text-gray-600">Learn from industry experts with proven track records</p>
        </div>

        <Tabs defaultValue="educators" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="educators">Educators</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>

          <TabsContent value="educators" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {educators.map((educator) => (
                <Card key={educator.id} className="hover-scale overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={educator.avatar}
                        alt={educator.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{educator.name}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium mb-2">
                          {educator.title}
                        </CardDescription>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
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
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{educator.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {educator.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-3 border-t border-b">
                      <div className="text-center">
                        <div className="font-semibold text-blue-600">{educator.courses}</div>
                        <div className="text-xs text-gray-500">Courses</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-600">{educator.liveSessions}</div>
                        <div className="text-xs text-gray-500">Live Sessions</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-purple-600">{educator.students.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                    </div>

                    {educator.nextSession && (
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2 text-blue-700">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium text-sm">Next Session:</span>
                        </div>
                        <p className="text-blue-800 text-sm mt-1">{educator.nextSession}</p>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Recent Sessions
                      </h4>
                      {educator.recentSessions.slice(0, 2).map((session, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{session.title}</span>
                          <div className="flex items-center gap-2 text-gray-500">
                            <span>{session.date}</span>
                            <span>•</span>
                            <span>{session.viewers} viewers</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button asChild className="flex-1" size="sm">
                        <Link to={`/educator/${educator.id}`}>
                          <User className="h-4 w-4 mr-2" />
                          View Profile
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faqs" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-600">Everything you need to know about our educators and sessions</p>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="hover-scale">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Still have questions?</h3>
                    <p className="text-blue-700 mb-4">
                      Our support team is here to help you get the most out of your learning experience.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

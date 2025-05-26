
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Play, 
  Search,
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

export const Modules = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const modules = [
    {
      id: 1,
      title: 'Bitcoin Fundamentals',
      description: 'Learn the basics of Bitcoin, how it works, and why it matters in the digital economy.',
      level: 'Beginner',
      duration: '4 hours',
      lessons: 12,
      progress: 75,
      rating: 4.8,
      students: 15420,
      category: 'fundamentals',
      status: 'in-progress',
      thumbnail: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Technical Analysis Masterclass',
      description: 'Master chart patterns, indicators, and trading strategies used by professional traders.',
      level: 'Intermediate',
      duration: '8 hours',
      lessons: 24,
      progress: 0,
      rating: 4.9,
      students: 8934,
      category: 'analysis',
      status: 'not-started',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'DeFi Deep Dive',
      description: 'Understand decentralized finance protocols, yield farming, and DeFi investment strategies.',
      level: 'Advanced',
      duration: '6 hours',
      lessons: 18,
      progress: 100,
      rating: 4.7,
      students: 5621,
      category: 'defi',
      status: 'completed',
      thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Crypto Trading Psychology',
      description: 'Develop the mental discipline and emotional control needed for successful trading.',
      level: 'Intermediate',
      duration: '3 hours',
      lessons: 10,
      progress: 30,
      rating: 4.6,
      students: 12567,
      category: 'psychology',
      status: 'in-progress',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'Altcoin Research Methods',
      description: 'Learn how to research and evaluate alternative cryptocurrencies and their potential.',
      level: 'Intermediate',
      duration: '5 hours',
      lessons: 15,
      progress: 0,
      rating: 4.5,
      students: 7834,
      category: 'research',
      status: 'not-started',
      thumbnail: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=200&fit=crop'
    },
    {
      id: 6,
      title: 'Risk Management Strategies',
      description: 'Protect your capital with proven risk management techniques and position sizing.',
      level: 'Beginner',
      duration: '3 hours',
      lessons: 9,
      progress: 0,
      rating: 4.8,
      students: 11234,
      category: 'risk',
      status: 'not-started',
      thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=200&fit=crop'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'fundamentals', label: 'Fundamentals' },
    { id: 'analysis', label: 'Technical Analysis' },
    { id: 'defi', label: 'DeFi' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'research', label: 'Research' },
    { id: 'risk', label: 'Risk Management' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Modules</h1>
          <p className="text-gray-600">Expand your crypto knowledge with our comprehensive courses</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search modules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <Card key={module.id} className="hover-scale overflow-hidden">
              <div className="aspect-video bg-gradient-to-r from-blue-500 to-green-500 relative">
                <img
                  src={module.thumbnail}
                  alt={module.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getLevelColor(module.level)}>
                    {module.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(module.status)}>
                    {module.status === 'completed' && <CheckCircle className="h-3 w-3 mr-1" />}
                    {module.status === 'in-progress' && <Play className="h-3 w-3 mr-1" />}
                    {module.status === 'completed' ? 'Completed' : 
                     module.status === 'in-progress' ? 'In Progress' : 'New'}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {module.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {module.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {module.lessons} lessons
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{module.rating}</span>
                    <span className="text-gray-500">({module.students.toLocaleString()})</span>
                  </div>
                </div>

                {module.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} />
                  </div>
                )}

                <Button className="w-full" variant={module.status === 'completed' ? 'outline' : 'default'}>
                  {module.status === 'completed' ? 'Review' : 
                   module.status === 'in-progress' ? 'Continue' : 'Start Learning'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredModules.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No modules found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

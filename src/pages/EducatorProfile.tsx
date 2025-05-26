
import { useParams } from 'react-router-dom';
import { EducatorProfile } from '@/components/educators/EducatorProfile';

export const EducatorProfilePage = () => {
  const { id } = useParams();

  // Sample educator data - in a real app this would come from an API
  const educator = {
    id: 1,
    name: 'Sarah Chen',
    title: 'Senior Crypto Analyst',
    bio: 'Former Goldman Sachs analyst with 8+ years in traditional finance and 5 years in crypto. Specializes in technical analysis and market trends. Sarah has helped thousands of traders develop systematic approaches to cryptocurrency trading through her comprehensive courses and live trading sessions.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    rating: 4.9,
    students: 15420,
    courses: 12,
    liveSessions: 156,
    specialties: ['Technical Analysis', 'Market Trends', 'Risk Management', 'Chart Patterns'],
    experience: '8+ years',
    nextSession: 'Market Analysis Monday - Today 2:00 PM EST',
    recentSessions: [
      { title: 'Weekly Market Overview', date: 'Dec 23', viewers: 234 },
      { title: 'Altcoin Season Analysis', date: 'Dec 20', viewers: 189 },
      { title: 'End of Year Predictions', date: 'Dec 18', viewers: 312 },
      { title: 'Bitcoin Dominance Study', date: 'Dec 16', viewers: 278 },
      { title: 'Risk Management Strategies', date: 'Dec 14', viewers: 195 }
    ]
  };

  return <EducatorProfile educator={educator} />;
};

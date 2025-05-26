
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CryptoChart } from '@/components/charts/CryptoChart';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3,
  Search,
  Star,
  Eye,
  Activity,
  DollarSign,
  Users,
  Zap,
  AlertTriangle,
  Target,
  PieChart
} from 'lucide-react';

export const Charts = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  
  // Sample chart data
  const chartData = [
    { time: '09:00', price: 42156, volume: 1250000 },
    { time: '10:00', price: 42280, volume: 1180000 },
    { time: '11:00', price: 42150, volume: 1320000 },
    { time: '12:00', price: 42450, volume: 1450000 },
    { time: '13:00', price: 42380, volume: 1380000 },
    { time: '14:00', price: 42520, volume: 1520000 },
    { time: '15:00', price: 42680, volume: 1680000 },
    { time: '16:00', price: 42590, volume: 1590000 },
  ];

  const marketData = [
    {
      symbol: 'BTC/USD',
      name: 'Bitcoin',
      price: 42156.78,
      change: 2.34,
      changePercent: 5.87,
      volume: '28.5B',
      marketCap: '825.3B',
      trending: 'up',
      signal: 'bullish'
    },
    {
      symbol: 'ETH/USD', 
      name: 'Ethereum',
      price: 2534.90,
      change: -45.23,
      changePercent: -1.75,
      volume: '15.2B',
      marketCap: '304.8B',
      trending: 'down',
      signal: 'bearish'
    },
    {
      symbol: 'BNB/USD',
      name: 'BNB',
      price: 315.67,
      change: 8.45,
      changePercent: 2.75,
      volume: '1.8B',
      marketCap: '48.6B',
      trending: 'up',
      signal: 'neutral'
    },
    {
      symbol: 'SOL/USD',
      name: 'Solana',
      price: 78.34,
      change: -2.11,
      changePercent: -2.62,
      volume: '2.1B',
      marketCap: '33.8B',
      trending: 'down',
      signal: 'bearish'
    }
  ];

  const watchlist = [
    { symbol: 'AVAX/USD', price: 38.45, change: 3.21, signal: 'bullish' },
    { symbol: 'MATIC/USD', price: 0.89, change: -1.45, signal: 'bearish' },
    { symbol: 'DOT/USD', price: 6.78, change: 0.98, signal: 'neutral' },
    { symbol: 'UNI/USD', price: 6.23, change: 2.14, signal: 'bullish' }
  ];

  const marketInsights = [
    {
      title: "Market Sentiment",
      value: "Bullish",
      description: "Strong buying pressure across major cryptocurrencies",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Fear & Greed Index",
      value: "52",
      description: "Neutral market conditions",
      icon: Activity,
      color: "text-orange-600"
    },
    {
      title: "Bitcoin Dominance",
      value: "49.3%",
      description: "Stable dominance level",
      icon: PieChart,
      color: "text-blue-600"
    },
    {
      title: "24h Volume",
      value: "$89.2B",
      description: "Above average trading volume",
      icon: BarChart3,
      color: "text-purple-600"
    }
  ];

  const getSignalBadge = (signal: string) => {
    const signalConfig = {
      bullish: { color: 'bg-green-100 text-green-800', text: 'Bullish' },
      bearish: { color: 'bg-red-100 text-red-800', text: 'Bearish' },
      neutral: { color: 'bg-gray-100 text-gray-800', text: 'Neutral' }
    };
    
    const config = signalConfig[signal as keyof typeof signalConfig] || signalConfig.neutral;
    return <Badge className={config.color}>{config.text}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Market Scanner</h1>
          <p className="text-gray-600">Advanced market analysis and crypto intelligence for better trading decisions</p>
        </div>

        {/* Market Insights Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {marketInsights.map((insight, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{insight.title}</p>
                    <p className={`text-2xl font-bold ${insight.color}`}>{insight.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{insight.description}</p>
                  </div>
                  <insight.icon className={`h-8 w-8 ${insight.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Chart Area */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <CryptoChart symbol="BTC/USD" data={chartData} />
            </div>

            {/* Enhanced Market Scanner */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Advanced Market Scanner
                </CardTitle>
                <CardDescription>Real-time market analysis with technical indicators and trading signals</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="signals" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="signals">Trading Signals</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
                    <TabsTrigger value="losers">Top Losers</TabsTrigger>
                  </TabsList>

                  <TabsContent value="signals" className="mt-4">
                    <div className="space-y-3">
                      {marketData.map((coin, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {coin.symbol.substring(0, 2)}
                            </div>
                            <div>
                              <div className="font-medium">{coin.symbol}</div>
                              <div className="text-sm text-gray-500">{coin.name}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="font-medium">${coin.price.toLocaleString()}</div>
                              <div className={`text-sm flex items-center gap-1 ${
                                coin.trending === 'up' ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {coin.trending === 'up' ? 
                                  <TrendingUp className="h-3 w-3" /> : 
                                  <TrendingDown className="h-3 w-3" />
                                }
                                {Math.abs(coin.changePercent).toFixed(2)}%
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-end gap-1">
                              {getSignalBadge(coin.signal)}
                              <span className="text-xs text-gray-500">Signal</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="trending" className="mt-4">
                    <div className="text-center py-8">
                      <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Trending cryptocurrencies analysis</p>
                      <p className="text-sm text-gray-500">Based on social sentiment and trading volume</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="gainers" className="mt-4">
                    <div className="text-center py-8">
                      <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Top gaining cryptocurrencies</p>
                      <p className="text-sm text-gray-500">Sorted by 24h percentage change</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="losers" className="mt-4">
                    <div className="text-center py-8">
                      <TrendingDown className="h-12 w-12 text-red-500 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Top losing cryptocurrencies</p>
                      <p className="text-sm text-gray-500">Sorted by 24h percentage change</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Enhanced Watchlist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Portfolio Tracker
                  </span>
                  <Button variant="outline" size="sm">Add</Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {watchlist.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                    <div>
                      <div className="font-medium text-sm">{item.symbol}</div>
                      <div className="text-xs text-gray-500">${item.price}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={item.change > 0 ? "default" : "destructive"} className="text-xs">
                        {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%
                      </Badge>
                      {getSignalBadge(item.signal)}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Market Intelligence */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Market Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Global Market Cap</span>
                  <span className="font-medium">$1.67T</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Cryptocurrencies</span>
                  <span className="font-medium">8,924</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Market Pairs</span>
                  <span className="font-medium">68,431</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">DeFi TVL</span>
                  <span className="font-medium">$47.2B</span>
                </div>
              </CardContent>
            </Card>

            {/* Learning Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Analysis Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Technical Indicators
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Pattern Scanner
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Risk Calculator
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Social Sentiment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

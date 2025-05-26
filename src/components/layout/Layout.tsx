
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export const Layout = ({ children, isAuthenticated, user }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={isAuthenticated} user={user} />
      <main>{children}</main>
    </div>
  );
};

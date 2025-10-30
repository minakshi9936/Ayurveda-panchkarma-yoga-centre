import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
      <CardHeader>
        <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4 line-clamp-3">{description}</CardDescription>
        {href && (
          <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Link href={href}>Learn More</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({ name, review, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <div className="flex space-x-1">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground italic">&ldquo;{review}&rdquo;</p>
      </CardContent>
    </Card>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash2, ArrowLeft, Star } from 'lucide-react';

interface Review {
  id: string;
  customerName: string;
  treatmentName: string;
  rating: number;
  comment: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

const mockReviews: Review[] = [
  {
    id: '1',
    customerName: 'Priya Sharma',
    treatmentName: 'Abhyanga',
    rating: 5,
    comment: 'Excellent service! The therapist was very professional and the treatment was very relaxing.',
    date: '2024-01-10',
    status: 'approved'
  },
  {
    id: '2',
    customerName: 'Rahul Kumar',
    treatmentName: 'Panchakarma',
    rating: 4,
    comment: 'Great experience overall. The staff was helpful and the facilities were clean.',
    date: '2024-01-08',
    status: 'approved'
  },
  {
    id: '3',
    customerName: 'Anjali Patel',
    treatmentName: 'Shirodhara',
    rating: 5,
    comment: 'Amazing therapy! I felt completely rejuvenated after the session.',
    date: '2024-01-12',
    status: 'pending'
  },
];

export default function ReviewsManagement() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [formData, setFormData] = useState({
    customerName: '',
    treatmentName: '',
    rating: 5,
    comment: '',
    status: 'pending' as 'pending' | 'approved' | 'rejected'
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in') === 'true';
    if (!loggedIn) {
      router.push('/admin');
    } else {
      setIsLoggedIn(true);
      loadReviews();
    }
  }, [router]);

  const loadReviews = () => {
    const storedReviews = localStorage.getItem('admin_reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      setReviews(mockReviews);
      localStorage.setItem('admin_reviews', JSON.stringify(mockReviews));
    }
  };

  const saveReviews = (updatedReviews: Review[]) => {
    setReviews(updatedReviews);
    localStorage.setItem('admin_reviews', JSON.stringify(updatedReviews));
  };

  const handleAddReview = () => {
    if (!formData.customerName || !formData.treatmentName || !formData.comment) return;

    const newReview: Review = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedReviews = [...reviews, newReview];
    saveReviews(updatedReviews);
    setFormData({
      customerName: '',
      treatmentName: '',
      rating: 5,
      comment: '',
      status: 'pending'
    });
    setIsAddDialogOpen(false);
  };

  const handleEditReview = () => {
    if (!editingReview || !formData.customerName || !formData.treatmentName || !formData.comment) return;

    const updatedReviews = reviews.map(review =>
      review.id === editingReview.id ? { ...review, ...formData } : review
    );
    saveReviews(updatedReviews);
    setEditingReview(null);
    setFormData({
      customerName: '',
      treatmentName: '',
      rating: 5,
      comment: '',
      status: 'pending'
    });
    setIsEditDialogOpen(false);
  };

  const handleDeleteReview = (reviewId: string) => {
    const updatedReviews = reviews.filter(review => review.id !== reviewId);
    saveReviews(updatedReviews);
  };

  const handleStatusChange = (reviewId: string, newStatus: 'pending' | 'approved' | 'rejected') => {
    const updatedReviews = reviews.map(review =>
      review.id === reviewId ? { ...review, status: newStatus } : review
    );
    saveReviews(updatedReviews);
  };

  const openEditDialog = (review: Review) => {
    setEditingReview(review);
    setFormData({
      customerName: review.customerName,
      treatmentName: review.treatmentName,
      rating: review.rating,
      comment: review.comment,
      status: review.status
    });
    setIsEditDialogOpen(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 px-4 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" onClick={() => router.push('/admin/dashboard')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-xl font-bold text-foreground">Reviews Management</h1>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Review
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Review</DialogTitle>
              <DialogDescription>
                Add a customer review for a treatment.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customerName" className="text-right">Customer Name</Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="treatmentName" className="text-right">Treatment</Label>
                <Input
                  id="treatmentName"
                  value={formData.treatmentName}
                  onChange={(e) => setFormData({ ...formData, treatmentName: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rating" className="text-right">Rating</Label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="col-span-3 p-2 border rounded"
                >
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="comment" className="text-right">Comment</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">Status</Label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'pending' | 'approved' | 'rejected' })}
                  className="col-span-3 p-2 border rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddReview}>Add Review</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
            <CardDescription>
              Manage customer reviews and testimonials. Total reviews: {reviews.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Treatment</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Comment</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviews.map((review) => (
                  <TableRow key={review.id}>
                    <TableCell className="font-medium">{review.customerName}</TableCell>
                    <TableCell>{review.treatmentName}</TableCell>
                    <TableCell>
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{review.comment}</TableCell>
                    <TableCell>{review.date}</TableCell>
                    <TableCell>
                      <select
                        value={review.status}
                        onChange={(e) => handleStatusChange(review.id, e.target.value as 'pending' | 'approved' | 'rejected')}
                        className={`p-1 border rounded text-xs ${
                          review.status === 'approved' ? 'bg-green-100 text-green-800' :
                          review.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditDialog(review)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteReview(review.id)}
                          className="hover:bg-destructive hover:text-destructive-foreground"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Review</DialogTitle>
              <DialogDescription>
                Update the review details.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-customerName" className="text-right">Customer Name</Label>
                <Input
                  id="edit-customerName"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-treatmentName" className="text-right">Treatment</Label>
                <Input
                  id="edit-treatmentName"
                  value={formData.treatmentName}
                  onChange={(e) => setFormData({ ...formData, treatmentName: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-rating" className="text-right">Rating</Label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="col-span-3 p-2 border rounded"
                >
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-comment" className="text-right">Comment</Label>
                <Textarea
                  id="edit-comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">Status</Label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'pending' | 'approved' | 'rejected' })}
                  className="col-span-3 p-2 border rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleEditReview}>Update Review</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}

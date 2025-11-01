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
import { Plus, Edit, Trash2, ArrowLeft } from 'lucide-react';

interface Therapy {
  id: string;
  name: string;
  description: string;
  benefits: string;
  duration: string;
  price: string;
  status: 'active' | 'inactive';
}

const mockTherapies: Therapy[] = [
  {
    id: '1',
    name: 'Abhyanga',
    description: 'Traditional Ayurvedic oil massage for relaxation and healing',
    benefits: 'Reduces stress, improves circulation, nourishes skin',
    duration: '60 mins',
    price: '₹2500',
    status: 'active'
  },
  {
    id: '2',
    name: 'Shirodhara',
    description: 'Continuous pouring of warm oil on forehead for mental relaxation',
    benefits: 'Reduces anxiety, improves sleep, mental clarity',
    duration: '45 mins',
    price: '₹3000',
    status: 'active'
  },
  {
    id: '3',
    name: 'Panchakarma',
    description: 'Complete detoxification and rejuvenation therapy',
    benefits: 'Detoxifies body, boosts immunity, rejuvenates tissues',
    duration: '90 mins',
    price: '₹5000',
    status: 'inactive'
  },
];

export default function TherapiesManagement() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [therapies, setTherapies] = useState<Therapy[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingTherapy, setEditingTherapy] = useState<Therapy | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    benefits: '',
    duration: '',
    price: '',
    status: 'active' as 'active' | 'inactive'
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in') === 'true';
    if (!loggedIn) {
      router.push('/admin');
    } else {
      setIsLoggedIn(true);
      loadTherapies();
    }
  }, [router]);

  const loadTherapies = () => {
    const storedTherapies = localStorage.getItem('admin_therapies');
    if (storedTherapies) {
      setTherapies(JSON.parse(storedTherapies));
    } else {
      setTherapies(mockTherapies);
      localStorage.setItem('admin_therapies', JSON.stringify(mockTherapies));
    }
  };

  const saveTherapies = (updatedTherapies: Therapy[]) => {
    setTherapies(updatedTherapies);
    localStorage.setItem('admin_therapies', JSON.stringify(updatedTherapies));
  };

  const handleAddTherapy = () => {
    if (!formData.name || !formData.description) return;

    const newTherapy: Therapy = {
      id: Date.now().toString(),
      ...formData
    };

    const updatedTherapies = [...therapies, newTherapy];
    saveTherapies(updatedTherapies);
    setFormData({ name: '', description: '', benefits: '', duration: '', price: '', status: 'active' });
    setIsAddDialogOpen(false);
  };

  const handleEditTherapy = () => {
    if (!editingTherapy || !formData.name || !formData.description) return;

    const updatedTherapies = therapies.map(therapy =>
      therapy.id === editingTherapy.id ? { ...therapy, ...formData } : therapy
    );
    saveTherapies(updatedTherapies);
    setEditingTherapy(null);
    setFormData({ name: '', description: '', benefits: '', duration: '', price: '', status: 'active' });
    setIsEditDialogOpen(false);
  };

  const handleDeleteTherapy = (therapyId: string) => {
    const updatedTherapies = therapies.filter(therapy => therapy.id !== therapyId);
    saveTherapies(updatedTherapies);
  };

  const openEditDialog = (therapy: Therapy) => {
    setEditingTherapy(therapy);
    setFormData({
      name: therapy.name,
      description: therapy.description,
      benefits: therapy.benefits,
      duration: therapy.duration,
      price: therapy.price,
      status: therapy.status
    });
    setIsEditDialogOpen(true);
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
          <h1 className="text-xl font-bold text-foreground">Therapies Management</h1>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Therapy
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Therapy</DialogTitle>
              <DialogDescription>
                Enter the details for the new therapy.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="benefits" className="text-right">Benefits</Label>
                <Textarea
                  id="benefits"
                  value={formData.benefits}
                  onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">Duration</Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">Price</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">Status</Label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                  className="col-span-3 p-2 border rounded"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddTherapy}>Add Therapy</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <Card>
          <CardHeader>
            <CardTitle>Therapies</CardTitle>
            <CardDescription>
              Manage all therapy services. Total therapies: {therapies.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Benefits</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {therapies.map((therapy) => (
                  <TableRow key={therapy.id}>
                    <TableCell className="font-medium">{therapy.name}</TableCell>
                    <TableCell className="max-w-xs truncate">{therapy.description}</TableCell>
                    <TableCell className="max-w-xs truncate">{therapy.benefits}</TableCell>
                    <TableCell>{therapy.duration}</TableCell>
                    <TableCell>{therapy.price}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-xs ${therapy.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {therapy.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditDialog(therapy)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteTherapy(therapy.id)}
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
              <DialogTitle>Edit Therapy</DialogTitle>
              <DialogDescription>
                Update the therapy details.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-name" className="text-right">Name</Label>
                <Input
                  id="edit-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-description" className="text-right">Description</Label>
                <Textarea
                  id="edit-description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-benefits" className="text-right">Benefits</Label>
                <Textarea
                  id="edit-benefits"
                  value={formData.benefits}
                  onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-duration" className="text-right">Duration</Label>
                <Input
                  id="edit-duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-price" className="text-right">Price</Label>
                <Input
                  id="edit-price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">Status</Label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                  className="col-span-3 p-2 border rounded"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleEditTherapy}>Update Therapy</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}

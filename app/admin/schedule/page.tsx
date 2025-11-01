'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Plus, Calendar } from 'lucide-react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface Event {
  id: string;
  title: string;
  start: string;
  end: string;
  description: string;
  type: 'class' | 'appointment' | 'maintenance';
  instructor?: string;
  capacity?: number;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Yoga Class - Morning',
    start: '2024-01-15T06:00:00',
    end: '2024-01-15T07:00:00',
    description: 'Morning yoga session for beginners',
    type: 'class',
    instructor: 'Priya Sharma',
    capacity: 20
  },
  {
    id: '2',
    title: 'Abhyanga Therapy',
    start: '2024-01-15T10:00:00',
    end: '2024-01-15T11:00:00',
    description: 'Full body oil massage therapy',
    type: 'appointment',
    instructor: 'Dr. Rajesh Kumar'
  },
];

export default function ScheduleManagement() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [formData, setFormData] = useState({
    title: '',
    startTime: '',
    endTime: '',
    description: '',
    type: 'class' as 'class' | 'appointment' | 'maintenance',
    instructor: '',
    capacity: ''
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in') === 'true';
    if (!loggedIn) {
      router.push('/admin');
    } else {
      setIsLoggedIn(true);
      loadEvents();
    }
  }, [router]);

  const loadEvents = () => {
    const storedEvents = localStorage.getItem('admin_schedule_events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    } else {
      setEvents(mockEvents);
      localStorage.setItem('admin_schedule_events', JSON.stringify(mockEvents));
    }
  };

  const saveEvents = (updatedEvents: Event[]) => {
    setEvents(updatedEvents);
    localStorage.setItem('admin_schedule_events', JSON.stringify(updatedEvents));
  };

  const handleDateClick = (arg: any) => {
    setSelectedDate(arg.dateStr);
    setIsAddDialogOpen(true);
  };

  const handleAddEvent = () => {
    if (!formData.title || !formData.startTime || !formData.endTime) return;

    const startDateTime = `${selectedDate}T${formData.startTime}:00`;
    const endDateTime = `${selectedDate}T${formData.endTime}:00`;

    const newEvent: Event = {
      id: Date.now().toString(),
      title: formData.title,
      start: startDateTime,
      end: endDateTime,
      description: formData.description,
      type: formData.type,
      instructor: formData.instructor || undefined,
      capacity: formData.capacity ? parseInt(formData.capacity) : undefined
    };

    const updatedEvents = [...events, newEvent];
    saveEvents(updatedEvents);
    setFormData({
      title: '',
      startTime: '',
      endTime: '',
      description: '',
      type: 'class',
      instructor: '',
      capacity: ''
    });
    setIsAddDialogOpen(false);
  };

  const handleEventClick = (arg: any) => {
    // Could implement edit/delete functionality here
    console.log('Event clicked:', arg.event);
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
          <h1 className="text-xl font-bold text-foreground">Schedule Management</h1>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>
                Schedule a new class, appointment, or maintenance event for {selectedDate}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startTime" className="text-right">Start Time</Label>
                <Input
                  id="startTime"
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="endTime" className="text-right">End Time</Label>
                <Input
                  id="endTime"
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="type" className="text-right">Type</Label>
                <Select value={formData.type} onValueChange={(value: 'class' | 'appointment' | 'maintenance') => setFormData({ ...formData, type: value })}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="class">Class</SelectItem>
                    <SelectItem value="appointment">Appointment</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="instructor" className="text-right">Instructor</Label>
                <Input
                  id="instructor"
                  value={formData.instructor}
                  onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                  className="col-span-3"
                />
              </div>
              {(formData.type === 'class' || formData.type === 'appointment') && (
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="capacity" className="text-right">Capacity</Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              )}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddEvent}>Add Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <Card>
          <CardHeader>
            <CardTitle>Schedule Calendar</CardTitle>
            <CardDescription>
              Manage classes, appointments, and maintenance schedules. Click on a date to add a new event.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="calendar-container">
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events.map(event => ({
                  id: event.id,
                  title: event.title,
                  start: event.start,
                  end: event.end,
                  backgroundColor: event.type === 'class' ? '#10b981' : event.type === 'appointment' ? '#3b82f6' : '#f59e0b',
                  borderColor: event.type === 'class' ? '#059669' : event.type === 'appointment' ? '#2563eb' : '#d97706'
                }))}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                height="auto"
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,dayGridWeek'
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Event List */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              List of all scheduled events. Total events: {events.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events
                .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
                .map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.start).toLocaleDateString()} at {new Date(event.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      {event.instructor && (
                        <p className="text-sm text-muted-foreground">Instructor: {event.instructor}</p>
                      )}
                      {event.capacity && (
                        <p className="text-sm text-muted-foreground">Capacity: {event.capacity}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        event.type === 'class' ? 'bg-green-100 text-green-800' :
                        event.type === 'appointment' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

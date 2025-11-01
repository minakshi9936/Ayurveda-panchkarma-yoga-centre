# Admin Panel Implementation TODO

## Tasks
- [x] Create app/admin/page.tsx: Login page with form, hardcoded credentials, localStorage auth, redirect to dashboard
- [x] Create app/admin/dashboard/page.tsx: Protected dashboard with sidebar, topbar, logout, placeholder sections
- [x] Test login flow: Enter credentials, redirect to dashboard
- [x] Test auth guard: Access dashboard without login redirects to /admin
- [x] Test logout: Clears localStorage, redirects to /admin
- [x] Test responsiveness: Ensure UI works on mobile and desktop

## CRUD Implementation
- [ ] Install required packages: FullCalendar, ApexCharts (if needed)
- [ ] Create CRUD pages for each module:
  - [ ] Registered Users: app/admin/users/page.tsx (list, add, edit, delete users)
  - [ ] Treatments: app/admin/treatments/page.tsx (manage treatments)
  - [ ] Packages: app/admin/packages/page.tsx (manage packages)
  - [ ] Schedule Classes: app/admin/schedule/page.tsx (use FullCalendar for scheduling)
  - [ ] Banner Update: app/admin/banners/page.tsx (manage banners)
  - [ ] Therapies: app/admin/therapies/page.tsx (manage therapies)
  - [ ] Reviews: app/admin/reviews/page.tsx (manage reviews)
  - [ ] Gallery: app/admin/gallery/page.tsx (manage gallery images)
  - [ ] Blog: app/admin/blog/page.tsx (manage blog posts)
- [ ] Update dashboard with real charts using Recharts
- [ ] Update sidebar links to navigate to CRUD pages
- [ ] Use localStorage for data persistence (mock JSON)
- [ ] Add navigation guards for admin routes
- [ ] also add pages of sidebar


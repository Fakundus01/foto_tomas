import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/widgets/layout/MainLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import('@/pages/home/HomePage')).HomePage }),
      },
      {
        path: 'servicios',
        lazy: async () => ({ Component: (await import('@/pages/services/ServicesPage')).ServicesPage }),
      },
      {
        path: 'reservas',
        lazy: async () => ({ Component: (await import('@/pages/booking/BookingPage')).BookingPage }),
      },
      {
        path: 'perfil',
        lazy: async () => ({ Component: (await import('@/pages/profile/ProfilePage')).ProfilePage }),
      },
      {
        path: 'auth/login',
        lazy: async () => ({ Component: (await import('@/pages/auth/LoginPage')).LoginPage }),
      },
      {
        path: 'auth/registro',
        lazy: async () => ({ Component: (await import('@/pages/auth/RegisterPage')).RegisterPage }),
      },
      {
        path: 'admin',
        lazy: async () => ({ Component: (await import('@/pages/admin/AdminDashboardPage')).AdminDashboardPage }),
      },
    ],
  },
])

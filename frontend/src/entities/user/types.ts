export interface UserProfile {
  displayName: string
  email: string
  role: 'guest' | 'user' | 'admin'
  activeBooking: string
  meetingStatus: string
}

import { BookingForm } from '@/features/booking/components/BookingForm'
import { AvailabilitySection } from '@/widgets/availability/AvailabilitySection'

export function BookingPage() {
  return (
    <div className="page-shell space-y-10 py-12">
      <BookingForm />
      <AvailabilitySection />
    </div>
  )
}

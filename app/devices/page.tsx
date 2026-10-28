import type { Metadata } from 'next';
import { DevicesDetailView } from '@/components/sections/DevicesDetailView';

export const metadata: Metadata = {
  title: 'Device Matrix & Specifications — ScreenShift Responsive Simulator',
  description:
    'Explore 40+ precision device viewports, Retina pixel ratios (DPR), hardware Dynamic Island bezels, and copy-ready responsive CSS queries for responsive web testing.',
};

export default function DevicesPage() {
  return <DevicesDetailView />;
}

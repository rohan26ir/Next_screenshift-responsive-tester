import type { Metadata } from 'next';
import { AboutUsView } from '@/components/sections/AboutUsView';

export const metadata: Metadata = {
  title: 'About Us — ScreenShift Responsive Simulator & Device Laboratory',
  description:
    'Learn about ScreenShift’s mission to solve responsive device fragmentation for developers, designers, and QA teams with 1:1 hardware precision and zero latency.',
};

export default function AboutPage() {
  return <AboutUsView />;
}

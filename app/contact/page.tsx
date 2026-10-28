import type { Metadata } from 'next';
import { ContactView } from '@/components/sections/ContactView';

export const metadata: Metadata = {
  title: 'Contact Us — ScreenShift Chrome Extension',
  description:
    'Get in touch with the ScreenShift developer team. Submit device requests, report issues, or inquire about team and enterprise licensing.',
};

export default function ContactPage() {
  return <ContactView />;
}

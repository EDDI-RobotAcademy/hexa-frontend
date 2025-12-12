import { requireAuth } from '@/lib/auth.server';
import ConsultClient from './ConsultClient';

export default async function ConsultPage() {
  await requireAuth();
  return <ConsultClient />;
}
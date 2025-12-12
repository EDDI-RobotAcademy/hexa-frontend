import { requireAuth } from '@/lib/auth.server';
import ConvertClient from './ConvertClient';

export default async function ConvertPage() {
  await requireAuth();
  return <ConvertClient />;
}
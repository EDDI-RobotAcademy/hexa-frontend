import { requireAuth } from '@/lib/auth.server';
import MypageClient from './MypageClient';

export default async function MypagePage() {
  await requireAuth();
  return <MypageClient />;
}

import { redis } from '../redis/client';

interface AccessInviteLinkParams {
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId
}:AccessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}

// chave / valor

// lists (comandos que iniciam em l) []
// hashes (comandos que inciam em h) {}
// sorted sets  (comandos que inciam em z) [ likes: number ] (ordenados por uma coluna)
// json
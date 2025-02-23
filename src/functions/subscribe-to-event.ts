import { eq } from 'drizzle-orm';
import { db } from '../drizzle/client';
import { subscriptions } from '../drizzle/schema/subscriptions';

interface SubscribeToEventParams {
  name: string;
  email: string;
}

export async function subscribeToEvent({
  name,
  email,
}: SubscribeToEventParams) {
  const subscbribers = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if(subscbribers.length > 0) {
    return {
      subscriberId: subscbribers[0].id
    }
  }

  const result = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning();

  const subscriber = result[0];

  return {
    subscriberId: subscriber.id,
  };
}

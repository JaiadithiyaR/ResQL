import { db } from './server/db';
import { users } from '@shared/schema';

async function seedMissingUser() {
  try {
    // Check if user already exists
    const existing = await db.select().from(users).where((t) => t.email === 'user@resqlink.ai');
    if (existing.length > 0) {
      console.log('User account already exists');
      process.exit(0);
    }

    // Create the missing user account
    const result = await db.insert(users).values({
      email: "user@resqlink.ai",
      password: "demo123",
      name: "User",
      role: "user"
    }).returning();
    
    console.log('User account created successfully:');
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error creating user:', err);
  }
  process.exit(0);
}

seedMissingUser();

import { db } from './server/db';
import { users } from '@shared/schema';

async function createUserAccount() {
  try {
    // Insert the user account
    const result = await db.insert(users).values({
      email: "user@resqlink.ai",
      password: "demo123",
      name: "User",
      role: "user"
    }).returning();
    
    console.log('✓ User account created successfully:');
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error creating user:', err);
  }
  process.exit(0);
}

createUserAccount();

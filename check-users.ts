import { db } from './server/db';
import { users } from '@shared/schema';

async function checkUsers() {
  try {
    const allUsers = await db.select().from(users);
    console.log('Users in database:');
    console.log(JSON.stringify(allUsers, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
  process.exit(0);
}

checkUsers();

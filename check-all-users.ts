import { db } from './server/db';
import { users } from '@shared/schema';

async function checkAllUsers() {
  try {
    const allUsers = await db.select().from(users);
    console.log('All users in database:');
    allUsers.forEach((user, idx) => {
      console.log(`${idx + 1}. Email: ${user.email}, Password: "${user.password}", Role: ${user.role}`);
    });
  } catch (err) {
    console.error('Error:', err);
  }
  process.exit(0);
}

checkAllUsers();

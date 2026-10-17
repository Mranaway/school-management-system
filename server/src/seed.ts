import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main(){
  await prisma.user.deleteMany();
  await prisma.student.deleteMany();

  const pass = await bcrypt.hash('password', 10);

  await prisma.user.create({ data: { email: 'admin@example.com', passwordHash: pass, name: 'Admin', role: 'ADMIN' } });
  await prisma.user.create({ data: { email: 'teacher@example.com', passwordHash: pass, name: 'Teacher', role: 'TEACHER' } });
  await prisma.user.create({ data: { email: 'student@example.com', passwordHash: pass, name: 'Student', role: 'STUDENT' } });

  await prisma.student.createMany({ data: [
    { firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com' },
    { firstName: 'Bob', lastName: 'Smith', email: 'bob@example.com' }
  ]});

  console.log('Seed finished');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());

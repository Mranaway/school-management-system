import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (_req, res) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

router.post('/', async (req, res) => {
  const data = req.body;
  const student = await prisma.student.create({ data });
  res.json(student);
});

export default router;

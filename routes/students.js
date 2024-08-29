

const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Create a student
router.post('/', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// kljvofkjfvjojjc
// // Read all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// // Update a student
router.put('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });

        Object.assign(student, req.body);
        await student.save();
        res.json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// // Delete a student
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });

        await student.remove();
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

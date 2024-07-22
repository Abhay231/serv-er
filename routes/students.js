

// const express = require('express');
// const router = express.Router();
// const Student = require('../models/student');

// // Create a student
// router.post('/', async (req, res) => {
//     try {
//         const student = new Student(req.body);
//         await student.save();
//         res.status(201).json(student);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // // Read all students
// router.get('/', async (req, res) => {
//     try {
//         const students = await Student.find();
//         res.json(students);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // // Update a student
// router.put('/:id', async (req, res) => {
//     try {
//         const student = await Student.findById(req.params.id);
//         if (!student) return res.status(404).json({ message: 'Student not found' });

//         Object.assign(student, req.body);
//         await student.save();
//         res.json(student);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // // Delete a student


// module.exports = router;
const express = require('express');
const Student = require('../models/student');
const router = express.Router();

router.post('/', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:id', getstudents, (req, res) => {
    res.json(res.student);
});

async function getstudents(req, res, next) {
    let student;
    try {
        student = await Contact.findById(req.params.id);
        if (student == null) {
            return res.status(404).json({ message: 'Cannot find contact' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.student = student;
    next();
}
// router.delete('/:id', async (req, res) => {
//     try {
//         const student = await Student.findById(req.params.id);
//         if (!student) return res.status(404).json({ message: 'Student not found' });

//         await student.remove();
//         res.json({ message: 'Student deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
module.exports = router;

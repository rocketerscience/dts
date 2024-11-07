import express from "express";

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);

router.get('/user:id', getUser);
router.delete('/user:id', deleteUser);
router.put('/user:id', updateuser);

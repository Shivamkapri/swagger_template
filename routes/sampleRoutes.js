const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/sample:
 *   get:
 *     summary: Get list of samples
 *     description: Retrieve a list of sample items.
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/sample", (req, res) => {
    res.send("GET method - list of samples");
});

/**
 * @swagger
 * /api/sample:
 *   post:
 *     summary: Create a new sample item
 *     description: Add a new item to the list of samples.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sample Item
 *               quantity:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: Item created successfully
 */
router.post("/sample", (req, res) => {
    const { name, quantity } = req.body;
    res.status(201).send(`Created item: ${name}, Quantity: ${quantity}`);
});

/**
 * @swagger
 * /api/sample/{id}:
 *   put:
 *     summary: Update a sample item
 *     description: Update the details of an existing sample item by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the sample item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Item
 *               quantity:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       200:
 *         description: Item updated successfully
 */
router.put("/sample/:id", (req, res) => {
    const { id } = req.params;
    const { name, quantity } = req.body;
    res.send(`Updated item ${id}: ${name}, Quantity: ${quantity}`);
});

/**
 * @swagger
 * /api/sample/{id}:
 *   delete:
 *     summary: Delete a sample item
 *     description: Remove a sample item by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the sample item to delete
 *     responses:
 *       200:
 *         description: Item deleted successfully
 */
router.delete("/sample/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Deleted item with ID: ${id}`);
});

module.exports = router;

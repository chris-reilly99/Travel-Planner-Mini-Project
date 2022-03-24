// It's done when the GET route /api/travellers returns all traveller data without associated trips in Insomnia.

const router = require('express').Router();
const { Traveller, Location } = require('../../models');

// GET all travellers
router.get('/', async (req, res) =>
{
    try {
        travellerData = await Traveller.findAll({
            include: [{ model: Location }],
        });
        res.status(200).json
        (travellerData);
    } catch (err) {
        res.status(500).json(err)
    }
});
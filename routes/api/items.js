const express = require('express');
const router = express.Router();

const show = req => {
	const newItem = new Item({
		name: req.body.name
	});
	//save to DB
	newItem.save().then(item => res.json(item));
};

//Item Model
const Item = require('../../models/Item');

//@route         GET api/items
//@description   Get All sItsems
//@access        Public
router.get('/', (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then(items => res.json(items));
});

//@route         GET api/items
//@description   Create a Post
//@access        Public
router.post('/', (req, huj) => {
	show(req);
	huj.send();
});

//@route         DELETE api/items/:id
//@description   Create a Item
//@access        Public
router.delete('/:id', (req, res) => {
	Item.findById(req.params.id)
		.then(item => {
			item.remove().then(() => {
				res.json({ success: true });
			});
		})
		.catch(err => {
			res.status(404).json({ success: false });
		});
});

module.exports = router;

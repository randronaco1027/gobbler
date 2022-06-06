const {User} = require ("../../models");
const router = require ('express').Router();

router.get('/', (req, res) => {
    // find all User and posts
    User.findAll({
      include: Post
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

router.get('/:id', (req, res) => {
    // find a single user by its `id` and posts
    User.findOne({
      where: {
        id: req.params.id
      },
      include: Post
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
    // create a new user
    User.create({
        username: req.body.username,
        password: req.body.password
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id', (req, res) => {
    // update a user's name by their `id` value
    User.update(
      {
        username: req.body.username,
        password: req.body.password
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.delete('/:id', (req, res) => {
    // delete on user by its `id` value
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
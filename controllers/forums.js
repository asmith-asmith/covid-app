const Forum = require('../models/forum');

module.exports = {
    index,
    create,
    show,
    // update,
    delete: deleteOne,
    // indexAll
};

async function index(req, res) {
    try{
        const forums = await Forum.find({});//.populate('user')
        res.status(200).json(forums);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function create(req, res) {
    try{
        const forum = await Forum.create(req.body);
        console.log('new forum:', forum)
        res.status(201).json(forum);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function show(req, res) {
    try{
        const forum = await Forum.findById(req.params.id);
        res.status(200).json(forum);
    }
    catch(err){
        res.status(500).json(err);
    }
}

async function deleteOne(req, res) {
    try{
        const deletedForum = await Forum.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedForum);
    }
    catch(err){
        res.status(500).json(err);
    }
}

// update
// async function update(req, res) {
//     try{
//         const updatedForum = await Forum.findByIdAndUpdate(req.params.id, req.body, {new: true});
//         res.status(200).json(updatedForum);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// }


// indexAll
// async function indexAll(req, res) {
//     try{
//         const forumsByUser = await Forum.find({});
//         res.status(200).json(forumsByUser);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// }
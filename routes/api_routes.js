const router = require('express').Router()
const { v4: generateID } = require('uuid')
const fs = require('fs/promises')

async function getNotes() {
    const read = await fs.readFile('./db/db.json', 'utf8')
    return JSON.parse(read)
}

//GET route for notes
router.get('/notes', async (req, res) => {
    const notes = await getNotes()
    res.json(notes)
})

//POST route for notes
router.post('/notes', async (req, res) => {
    const notes = await getNotes()
    const id = generateID()
    const noteObj = { 
        title: req.body.title,
        text: req.body.text,
        id: id //need to add id to reference for active note and delete
    }
    notes.push(noteObj)

    await fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2)) //write the new note to the json file
    res.json(notes)
})

router.delete('/notes/:id', async (req, res) => {
    const notes = await getNotes()
    const delID = req.params.id

    const filteredNotes = notes.filter((note) => note.id !== delID)

    //Checks if anything was removed
    if(notes.length > filteredNotes.length){
        await fs.writeFile('./db/db.json', JSON.stringify(filteredNotes, null, 2))
        res.json(filteredNotes)
        return
    }
    res.json(notes)
})

module.exports = router
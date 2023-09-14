let { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ sucess: true, data: people })
}

const postPeople = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ sucess: false, msg: 'please provide name value' })
    }
    res.status(201).json({ sucesss: true, person: name })
}

const putPeople = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    if (Number(id) <= 0 || id > people.length) {
        res.status(400).send('Id invalida')
        return
    }
    people[id - 1].name = name
    res.status(400).json({ sucess: true, msg: "Sucess" })
    console.log(people)
}

const deletePeople = (req, res) => {
    const { id } = req.params
    console.log(id)
    const prove = people.find((person) => person.id === Number(id))
    if (!prove) {
        return res.status(404).send('pessoa noa encontrada')
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
    console.log(newPeople)
    people = [...newPeople]
    res.status(201).send('perfect')
}

const postPeoplePostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ sucess: false, msg: 'please provide name value' })
    }
    res.status(201).json({ sucesss: true, data: [...people, { name: name, id: people.length + 1 }] })

}

module.exports = {
    getPeople,
    postPeople,
    postPeoplePostman,
    deletePeople,
    putPeople,
}
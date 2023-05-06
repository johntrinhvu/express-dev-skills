const skills = [
    {id: 125223, skill: 'Python', mastered: true},
    {id: 127904, skill: 'Java', mastered: true},
    {id: 139608, skill: 'Javascript', mastered: true},
    {id: 145231, skill: 'HTML', mastered: true},
    {id: 152314, skill: 'CSS', mastered: true}

];
	
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update

};

function getAll() {
    return skills;

}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
    
}

function create(skill) {
    skill.id = Date.now() % 1000000;

    skill.mastered = false;
    skills.push(skill);

}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);

}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);

}
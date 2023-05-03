const skills = [
    {id: 125223, skill: 'Python', done: true},
    {id: 127904, skill: 'Java', done: true},
    {id: 139608, skill: 'Javascript', done: true},
    {id: 145231, skill: 'HTML', done: true},
    {id: 152314, skill: 'CSS', done: true}

];
	
module.exports = {
    getAll,
    getOne

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
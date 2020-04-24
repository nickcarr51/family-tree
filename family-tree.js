let logCalls = 0;

class FamilyTree {
  constructor (value) {
    if (typeof value !== 'string') throw console.error();
    this.value = value;
    this.children = [];
  }

  insert(child) {
    child = new FamilyTree(child);
    this.children.push(child);
  }

  familySize() {
    return this.children.length + 1;
  }

  findMember(member) {
    let memberNode;
    this.children.forEach(function(child) {
      if (child.value = member) {
        memberNode = child;
      }
    })
    return memberNode;
  }

  log() {
    logCalls++
    let tree = `-- ${this.value}\n`;
      this.children.map(function(child) {
        for (let i = 0; i < logCalls; i++) {
          tree += `--`
        } 
        if (child.children.length > 0) {
          tree += `${child.log()}`
          logCalls--
        } else {
          tree += `-- ${child.value}\n`            
        }
      })          
    return tree;
  }

}


module.exports = FamilyTree;

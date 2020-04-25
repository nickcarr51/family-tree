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
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === member) {
        return this.children[i];
      }        
    }
  }

  log() {
    logCalls++
    let tree = `-- ${this.value}\n`;
    if (this.children.length > 0) {
      this.children.forEach(function(child) {
        if (child.children.length > 0) {
          for (let i = 0; i < logCalls; i++) {
            tree += `--`;
          }                   
          tree += `${child.log()}`
        } else {
          for (let i = 0; i < logCalls; i++) {
            tree += `--`;
          }
            tree += `-- ${child.value}\n`;
          }
      })
    }
    logCalls--;
    return tree;
  }

  //   log() {

  //   let logCalls = 0;
    
  //   return (logCalls) => {
  //     logCalls++
  //     let tree = `-- ${this.value}\n`;
  //     if (this.children.length > 0) {
  //       this.children.forEach(function(child) {
  //         if (child.children.length > 0) {
  //           for (let i = 0; i < logCalls; i++) {
  //             tree += `--`;
  //           }                   
  //           tree += `${child.log()}`
  //         } else {
  //           for (let i = 0; i < logCalls; i++) {
  //             tree += `--`;
  //           }
  //             tree += `-- ${child.value}\n`;
  //           }
  //       })
  //     }
  //     logCalls--;
  //     return tree;
  //   }

  // }
}

// class FamilyTree {
//   constructor (value) {
//     if (typeof value !== 'string') throw console.error();
//     this.value = value;
//     this.children = [];
//     this.logCalls = 0;
//   }

//   insert(child) {
//     child = new FamilyTree(child);
//     this.children.push(child);
//   }

//   familySize() {
//     return this.children.length + 1;
//   }

//   findMember(member) {
//     for (let i = 0; i < this.children.length; i++) {
//       if (this.children[i].value === member) {
//         return this.children[i];
//       }        
//     }
//   }

//   log() {
//     this.logCalls++;
//     let tree = `-- ${this.value}\n`;
//     if (this.children.length > 0) {
//       this.children.forEach(function(child) {
//         if (child.children.length > 0) {
//           for (let i = 0; i < this.logCalls; i++) {
//             tree += `--`;
//           }                   
//           tree += `${child.log()}`
//         } else {
//           for (let i = 0; i < this.logCalls; i++) {
//             tree += `--`;
//           }
//             tree += `-- ${child.value}\n`;
//           }
//       })
//     }
//     this.logCalls--;
//     return tree;
//   }
// }



module.exports = FamilyTree;

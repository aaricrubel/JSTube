// admin - all access
// subadmin - partial access
// testprep - access to tests
// user - consume content

function getUserRole(name, role) {
    
    switch (role) {
        case "admin":
            return `${name} All access`;
            break;
        case "subadmin":
            return `${name} Partial access`;
            break;
        case "testprep":
            return `${name} Allow to modify tests`;
            break;
        case "user":
            return `${name} Consume Content`;
            break;
        default:
            return `${name} is a Trial User`;
            break;
    }
}

console.log(getUserRole("Abhinav", "admin")); 

// Also possible - 

var getRole = getUserRole("Kabir", "subadmin");
console.log(getRole);

//Also possible, Great stuff

var getUserrRole = function (name, role) {
    
    switch (role) {
        case "admin":
            return `${name} All access`;
            break;
        case "subadmin":
            return `${name} Partial access`;
            break;
        case "testprep":
            return `${name} Allow to modify tests`;
            break;
        case "user":
            return `${name} Consume Content`;
            break;
        default:
            return `${name} is a Trial User`;
            break;
    }
}

console.log(getUserrRole("Agrim", "user"));
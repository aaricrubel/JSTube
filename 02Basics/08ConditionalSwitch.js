var user = "abc";

switch (user) {
    case "admin":
        console.log("Gets full access");
        break;
    case "subadmin":
        console.log("Gets partial access");
        break;
    case "tester":
        console.log("Gets access to tests");
        break;
    case "student":
        console.log("Gets access to courses");
        break;
    default:
        console.log("Trial User");
        console.log("30 Days left");
        break;
}
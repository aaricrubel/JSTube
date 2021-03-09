/* * The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
The time and space complexity of the sort cannot be guaranteed as it depends on the implementation. */

// Sorting is done on the basis of UTF-16 table and which one comes on it first, and not according to normal logic.
// UTF-16 allows us to use emojis in our code.

[6,-2,2,-7].sort();
// This outputs --> -2,-7,2,6 as sorted. whereas it should be -7,-2,2,6

function mySort(a,b) {
    if(a>b) {
        return 1
    } else if (b>a) {
        return -1
    } else {
        return 0
    }
}

// and now we can pass this method into sort and then it will get a sense of direction on how to do the sorting.
// Therefore -->

[6,-2,2,-7].sort(mySort);
// Now, this will output the correct result i.e. -7,-2,2,6

//Now, for example, you need a Batman Game Sorter by release date
// Sort method is so customusable that it can also do this.
//Implementation -->

function batmanGameOrder(a,b) {
    var batman = ["Arkham Origins",
    "Arkham Origins Blackgate",
    "Assault on Arkham",
    "Arkham Asylum",
    "Arkham City",
    "Arkham Knight"
];

    return batman.indexOf(a) - batman.indexOf(b)
}

//Now -->

var games = ["Arkham Knight",
    "Arkham Asylum",
    "Arkham Origins",
    "Arkham Origins Blackgate"
];

games.sort(batmanGameOrder); // This function will sort it in the order of batmanGameOrder and return us the sorted array.
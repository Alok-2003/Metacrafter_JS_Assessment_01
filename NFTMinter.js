/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(title, author, year, genre, pages, ISBN) {
    let NFT = {
        title: title,
        author: author,
        year: year,
        genre: genre,
        pages: pages,
        ISBN: ISBN
    };
    NFTContainer.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTContainer.length; i++) {
        console.log("\n\n_____________________ BOOK COLLECTION _________________________\n\n" );
        console.log("Title: " + NFTContainer[i].title);
        console.log("Author: " + NFTContainer[i].author);
        console.log("Year: " + NFTContainer[i].year);
        console.log("Genre: " + NFTContainer[i].genre);
        console.log("Pages: " + NFTContainer[i].pages);
        console.log("ISBN: " + NFTContainer[i].ISBN);
        console.log("\n\n_____________________* * * * *_________________________\n" );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted so Far: " + NFTContainer.length);
}

// call your functions below this line
mintNFT("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction", 281, "978-0-06-112008-4");
mintNFT("1984", "George Orwell", 1949, "Dystopian", 328, "978-0-452-28423-4");
mintNFT("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Tragedy", 180, "978-0-7432-7356-5");
mintNFT("The Catcher in the Rye", "J.D. Salinger", 1951, "Fiction", 214, "978-0-316-76948-0");
listNFTs();
getTotalSupply();

console.log("Hello");
const book = {
 title: "The final book of the hinger games", author:"Suzan Kolins",
 readingStatus: true,
 getReadingStatus: function(){
  if(this.readingStatus){
   return `Vekje prochitan ' ` + this.title + "-"   + this.author + '.';
  }else{
   return `Seushte treba da ja prochitate `+ this.title + "-"   + this.author + '.';
  }
 }
};

console.log(book.getReadingStatus());

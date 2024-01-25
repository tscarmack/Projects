//Create a constructor with 4 properties and 3 methods
function MakeBand(leadSinger, drummer, guitarist, drumSolo, guitarSolo){
    this.singer = leadSinger
    this.drummer = drummer
    this.guitarist = guitarist
    this.drumSolo = function(){
        alert(`${this.drummer} is hitting a nasty drum solo. *drum solo*`)
    }
    this.guitarSolo = function(){
        alert(`Woah! ${this.guitarist} is totally shredding rn.`)
    }
}
function songs(arr) {
    let numberOfSongs = Number(arr.shift());
    let playList = arr.pop();
    class Songs {
        constructor(typeList, songName, timeLength) {
            this.type = typeList;
            this.name = songName;
            this.time = Number(timeLength);
        }
        play() {
            if (playList === 'all') {
                console.log(this.name);
            } else if (playList === this.type) {
                console.log(this.name);
            }
        }
    }
    for (let index = 0; index < numberOfSongs; index++) {
        let [typeList, songName, timeLength] = arr[index].split('_');

        let song = new Songs(typeList, songName, timeLength);
        song.play();
    }
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'all']

)
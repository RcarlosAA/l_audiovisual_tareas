/*class EmailNotifier {
    sendEmail(receiver: string, subject: string, content: string) {
        console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
    }
}

class MusicStore {
    notifier: EmailNotifier;

    constructor() {
        this.notifier = new EmailNotifier();
    }

    newAlbumRelease(email:0 string, artist: string, album: string) {
        this.notifier.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}
*/



class EmailNotifier {
    sendEmail(receiver: string, subject: string, content: string) {
        console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
    }
}

class MusicStore {
    notifier: EmailNotifier;

    constructor(notifier: EmailNotifier) {
        this.notifier = notifier;
    }

    newAlbumRelease(email: string, artist: string, album: string) {
        this.notifier.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}

// Uso:
const emailNotifier = new EmailNotifier();
const musicStore = new MusicStore(emailNotifier);

// Luego, puedes llamar a newAlbumRelease en musicStore
musicStore.newAlbumRelease("example@email.com", "Artist Name", "Album Title");


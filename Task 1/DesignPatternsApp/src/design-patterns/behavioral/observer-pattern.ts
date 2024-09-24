import { Logger } from '../../services/logging-service';

class PostService {
  private observers: User[] = [];

  addObserver(user: User) {
    this.observers.push(user);
    Logger.log(`${user.name} has been subscribed to post notifications`);
  }

  removeObserver(user: User) {
    this.observers = this.observers.filter(observer => observer !== user);
    Logger.log(`${user.name} has been unsubscribed from post notifications`);
  }

  notifyObservers(post: string) {
    Logger.log(`Notifying observers of new post: ${post}`);
    for (let observer of this.observers) {
      observer.notify(post);
    }
  }

  createPost(post: string) {
    Logger.log(`Post created: ${post}`);
    this.notifyObservers(post);
  }
}

class User {
  constructor(public name: string) {}

  notify(post: string) {
    Logger.log(`${this.name} received notification: New post - ${post}`);
  }
}

// Sample usage
const user1 = new User("Tushar");
const user2 = new User("Alice");

const postService = new PostService();
postService.addObserver(user1);
postService.addObserver(user2);

postService.createPost("New Article on TypeScript Design Patterns!");

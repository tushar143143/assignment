
export interface Observer {
    update(): void;
  }
  
  export interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
  }
  
  export class DeviceObserver implements Subject {
    private observers: Observer[] = [];
  
    attach(observer: Observer): void {
      this.observers.push(observer);
    }
  
    detach(observer: Observer): void {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify(): void {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  